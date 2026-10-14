-- Camada canônica: unifica dados clássicos (2007-2020) e modernos (2021+)
-- que representam o mesmo indicador. Idempotente: pode rodar mais de uma vez.
SET search_path TO educacao_v2;

-- 1) dimensões canônicas
UPDATE "Dimensao" SET nome_canonico = CASE nome
  WHEN 'gender_entity'           THEN 'gender'
  WHEN 'location_entity'         THEN 'location'
  WHEN 'contract_type_entity'    THEN 'contract_type'
  WHEN 'education_level_mod_agg' THEN 'education_level_mod'
  WHEN 'integral_time_agg'       THEN 'integral_time'
  WHEN 'period_agg'              THEN 'period'
  ELSE nome END;

-- 2) valores canônicos: casa pelo nome dentro da dimensão canônica
UPDATE "ValorDimensao" v
SET valor_canonico_id = cv.id
FROM "Dimensao" d
JOIN "Dimensao" dc ON dc.nome = d.nome_canonico AND dc.id <> d.id
JOIN "ValorDimensao" cv ON cv.dimensao_id = dc.id
WHERE d.id = v.dimensao_id AND cv.nome = v.nome;

SELECT COUNT(*) AS valores_casados FROM "ValorDimensao" WHERE valor_canonico_id IS NOT NULL;

-- 3) mapa dims -> slug canônico (1 fato representativo por slug)
DROP TABLE IF EXISTS map_dims;
CREATE TEMP TABLE map_dims AS
WITH rep AS (SELECT dims, MIN(id) AS fato_id FROM "FatoEducacao" GROUP BY dims)
SELECT r.dims,
  CASE WHEN f.valor_dim2_id = 0 THEN COALESCE(d1.nome_canonico, d1.nome)
       ELSE LEAST(COALESCE(d1.nome_canonico, d1.nome), COALESCE(d2.nome_canonico, d2.nome))
            || '_' ||
            GREATEST(COALESCE(d1.nome_canonico, d1.nome), COALESCE(d2.nome_canonico, d2.nome))
  END AS canonico
FROM rep r
JOIN "FatoEducacao" f   ON f.id  = r.fato_id
JOIN "ValorDimensao" v1 ON v1.id = f.valor_dim1_id
JOIN "Dimensao" d1      ON d1.id = v1.dimensao_id
JOIN "ValorDimensao" v2 ON v2.id = f.valor_dim2_id
JOIN "Dimensao" d2      ON d2.id = v2.dimensao_id;

SELECT COUNT(*) AS slugs_mapeados FROM map_dims;

-- 4) backfill do fato: indicador + dims_canonico (uma passada)
-- indicador = referencia sem a era ("matriculas/classico" -> "matriculas")
UPDATE "FatoEducacao" f
SET indicador = split_part(f.referencia, '/', 1),
    dims_canonico = m.canonico
FROM map_dims m WHERE f.dims = m.dims;
