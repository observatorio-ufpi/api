/**
 * Teste de carga das consultas /v2/educacao/fatos.
 *
 *   node scripts/load-educacao-v2.mjs
 *   node scripts/load-educacao-v2.mjs --base=https://opepi.pi.gov.br/api --rounds=3
 */
const BASE = process.env.BASE_URL || arg('base') || 'http://localhost:3003';
const ROUNDS = parseInt(arg('rounds') || '5', 10);
const PREFIX = BASE.includes('/api') ? '' : '';

const casos = [
  {
    nome: 'Total Piauí 1 ano',
    q: { indicador: 'matriculas', recorte: 'total', anoInicio: 2024, anoFim: 2024, agregar: 'true' },
  },
  {
    nome: 'Total Piauí 18 anos',
    q: { indicador: 'matriculas', recorte: 'total', anoInicio: 2007, anoFim: 2024, agregar: 'true' },
  },
  {
    nome: 'gender Teresina 18 anos',
    q: {
      indicador: 'matriculas',
      recorte: 'gender',
      anoInicio: 2007,
      anoFim: 2024,
      localidades: '2211001',
    },
  },
  {
    nome: 'gender Piauí 18 anos',
    q: { indicador: 'matriculas', recorte: 'gender', anoInicio: 2007, anoFim: 2024, agregar: 'true' },
  },
  {
    nome: 'ethnic_group_gender Teresina 1 ano',
    q: {
      indicador: 'matriculas',
      recorte: 'ethnic_group_gender',
      anoInicio: 2015,
      anoFim: 2015,
      localidades: '2211001',
    },
  },
  {
    nome: 'ethnic_group_gender Piauí 18 anos',
    q: {
      indicador: 'matriculas',
      recorte: 'ethnic_group_gender',
      anoInicio: 2007,
      anoFim: 2020,
      agregar: 'true',
    },
  },
  {
    nome: 'school Teresina 1 ano',
    q: {
      indicador: 'matriculas',
      recorte: 'school',
      anoInicio: 2024,
      anoFim: 2024,
      localidades: '2211001',
    },
  },
  {
    nome: 'school Piauí 1 ano (top-N)',
    q: { indicador: 'matriculas', recorte: 'school', anoInicio: 2024, anoFim: 2024, agregar: 'true' },
  },
];

function arg(nome) {
  const p = process.argv.find((a) => a.startsWith(`--${nome}=`));
  return p ? p.slice(nome.length + 3) : undefined;
}

function qs(obj) {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(obj)) if (v != null) u.set(k, String(v));
  return u.toString();
}

function percentile(vals, p) {
  const s = [...vals].sort((a, b) => a - b);
  const i = Math.min(s.length - 1, Math.ceil((p / 100) * s.length) - 1);
  return s[i];
}

async function medir(caso) {
  const url = `${BASE}${PREFIX}/v2/educacao/fatos?${qs(caso.q)}`;
  const tempos = [];
  let bytes = 0;
  let linhas = 0;
  let erro = null;

  for (let i = 0; i < ROUNDS; i++) {
    const t0 = performance.now();
    try {
      const res = await fetch(url);
      const text = await res.text();
      const ms = performance.now() - t0;
      tempos.push(ms);
      bytes = text.length;
      if (!res.ok) {
        erro = `HTTP ${res.status}`;
        continue;
      }
      const json = JSON.parse(text);
      linhas = json.dados?.length ?? json.segmentos?.reduce((n, s) => n + s.dados.length, 0) ?? 0;
    } catch (e) {
      tempos.push(performance.now() - t0);
      erro = e.message;
    }
  }

  return {
    nome: caso.nome,
    p50: Math.round(percentile(tempos, 50)),
    p95: Math.round(percentile(tempos, 95)),
    kb: Math.round(bytes / 1024),
    linhas,
    erro,
  };
}

async function main() {
  console.log(`base=${BASE}  rounds=${ROUNDS}\n`);
  const resultados = [];
  for (const caso of casos) {
    process.stdout.write(`… ${caso.nome}\r`);
    const r = await medir(caso);
    resultados.push(r);
    const extra = r.erro ? `  ERRO: ${r.erro}` : '';
    console.log(
      `${r.nome.padEnd(42)} p50=${String(r.p50).padStart(5)}ms  p95=${String(r.p95).padStart(5)}ms  ${String(r.kb).padStart(5)}KB  ${String(r.linhas).padStart(5)} linhas${extra}`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
