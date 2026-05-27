--
-- PostgreSQL database dump
--

\restrict 88u3rwk67jfJdoYaVSX9VZk9H7R25HL7QWy9n1mCOBfIoENjUzggcvX4JL4rAAT

-- Dumped from database version 13.22
-- Dumped by pg_dump version 13.22

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" (
    id integer NOT NULL,
    tipo public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" OWNER TO root;

--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq" OWNER TO root;

--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq" OWNED BY public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21".id;


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" (
    id integer NOT NULL,
    tipo public."ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" OWNER TO root;

--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq" OWNER TO root;

--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq" OWNED BY public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23".id;


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual21" (
    id integer NOT NULL,
    tipo public."ApuracaoLimiteMinimoConstitucionalEstadualTipos21" NOT NULL,
    "valorExigido" double precision NOT NULL,
    "valorAplicado" double precision NOT NULL,
    "percentualAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual21" OWNER TO root;

--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq" OWNER TO root;

--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq" OWNED BY public."ApuracaoLimiteMinimoConstitucionalEstadual21".id;


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual23" (
    id integer NOT NULL,
    tipo public."ApuracaoLimiteMinimoConstitucionalEstadualTipos23" NOT NULL,
    "valorExigido" double precision NOT NULL,
    "valorAplicado" double precision NOT NULL,
    "percentualAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual23" OWNER TO root;

--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq" OWNER TO root;

--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq" OWNED BY public."ApuracaoLimiteMinimoConstitucionalEstadual23".id;


--
-- Name: CompensacaoRestosAPagarEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."CompensacaoRestosAPagarEstado06" (
    id integer NOT NULL,
    tipo public."CompensacaoRestosAPagarEstadoTipo06" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."CompensacaoRestosAPagarEstado06" OWNER TO root;

--
-- Name: CompensacaoRestosAPagarEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."CompensacaoRestosAPagarEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CompensacaoRestosAPagarEstado06_id_seq" OWNER TO root;

--
-- Name: CompensacaoRestosAPagarEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."CompensacaoRestosAPagarEstado06_id_seq" OWNED BY public."CompensacaoRestosAPagarEstado06".id;


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" (
    id integer NOT NULL,
    fundeb double precision NOT NULL,
    "salarioEducacao" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL,
    tipo public."ControleDisponibilidadeFinanceiraEstadualEstadualTipos21" NOT NULL
);


ALTER TABLE public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" OWNER TO root;

--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq" OWNER TO root;

--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq" OWNED BY public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21".id;


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" (
    id integer NOT NULL,
    fundeb double precision NOT NULL,
    "salarioEducacao" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL,
    tipo public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23" NOT NULL
);


ALTER TABLE public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" OWNER TO root;

--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq" OWNER TO root;

--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq" OWNED BY public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23".id;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleRecursosNoExercicioSubsequenteEstado1516" (
    id integer NOT NULL,
    tipo public."ControleRecursosNoExercicioSubsequenteEstadoTipo1516" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstado1516" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstado1516_id_seq" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstado1516_id_seq" OWNED BY public."ControleRecursosNoExercicioSubsequenteEstado1516".id;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1718" (
    id integer NOT NULL,
    tipo public."ControleRecursosNoExercicioSubsequenteEstadualTipo1718" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1718" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq" OWNED BY public."ControleRecursosNoExercicioSubsequenteEstadual1718".id;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1920" (
    id integer NOT NULL,
    tipo public."ControleRecursosNoExercicioSubsequenteEstadualTipo1920" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1920" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq" OWNER TO root;

--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq" OWNED BY public."ControleRecursosNoExercicioSubsequenteEstadual1920".id;


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleRestosAPagarVinculadosEducacaoEstado06" (
    id integer NOT NULL,
    tipo public."ControleRestosAPagarVinculadosEducacaoEstadoTipo06" NOT NULL,
    "aplicacaoMinimaAnoAnterior" double precision NOT NULL,
    "aplicacaoApuradaAnoAnterior" double precision NOT NULL,
    "restosAPagarAnoAnterior" double precision NOT NULL,
    "restosAPagarCanceladaAnoAtul" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleRestosAPagarVinculadosEducacaoEstado06" OWNER TO root;

--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleRestosAPagarVinculadosEducacaoEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleRestosAPagarVinculadosEducacaoEstado06_id_seq" OWNER TO root;

--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleRestosAPagarVinculadosEducacaoEstado06_id_seq" OWNED BY public."ControleRestosAPagarVinculadosEducacaoEstado06".id;


--
-- Name: ControleUtilizacaoRecursosEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleUtilizacaoRecursosEstado0912" (
    id integer NOT NULL,
    tipo public."ControleUtilizacaoRecursosEstadoTipo0912" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleUtilizacaoRecursosEstado0912" OWNER TO root;

--
-- Name: ControleUtilizacaoRecursosEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleUtilizacaoRecursosEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleUtilizacaoRecursosEstado0912_id_seq" OWNER TO root;

--
-- Name: ControleUtilizacaoRecursosEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleUtilizacaoRecursosEstado0912_id_seq" OWNED BY public."ControleUtilizacaoRecursosEstado0912".id;


--
-- Name: ControleUtilizacaoRecursosEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ControleUtilizacaoRecursosEstado1314" (
    id integer NOT NULL,
    tipo public."ControleUtilizacaoRecursosEstadoTipo1314" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ControleUtilizacaoRecursosEstado1314" OWNER TO root;

--
-- Name: ControleUtilizacaoRecursosEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ControleUtilizacaoRecursosEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ControleUtilizacaoRecursosEstado1314_id_seq" OWNER TO root;

--
-- Name: ControleUtilizacaoRecursosEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ControleUtilizacaoRecursosEstado1314_id_seq" OWNED BY public."ControleUtilizacaoRecursosEstado1314".id;


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708" (
    id integer NOT NULL,
    tipo public."DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708" OWNER TO root;

--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq" OWNER TO root;

--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq" OWNED BY public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708".id;


--
-- Name: DeducoesDaDespesaEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesDaDespesaEstado06" (
    id integer NOT NULL,
    tipo public."DeducoesDaDespesaEstadoTipo06" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesDaDespesaEstado06" OWNER TO root;

--
-- Name: DeducoesDaDespesaEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesDaDespesaEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesDaDespesaEstado06_id_seq" OWNER TO root;

--
-- Name: DeducoesDaDespesaEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesDaDespesaEstado06_id_seq" OWNED BY public."DeducoesDaDespesaEstado06".id;


--
-- Name: DeducoesFinsLimiteFundebEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesFinsLimiteFundebEstado1314" (
    id integer NOT NULL,
    tipo public."DeducoesFinsLimiteFundebEstadoTipo1314" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesFinsLimiteFundebEstado1314" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesFinsLimiteFundebEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesFinsLimiteFundebEstado1314_id_seq" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesFinsLimiteFundebEstado1314_id_seq" OWNED BY public."DeducoesFinsLimiteFundebEstado1314".id;


--
-- Name: DeducoesFinsLimiteFundebEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesFinsLimiteFundebEstado1516" (
    id integer NOT NULL,
    tipo public."DeducoesFinsLimiteFundebEstadoTipo1516" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesFinsLimiteFundebEstado1516" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesFinsLimiteFundebEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesFinsLimiteFundebEstado1516_id_seq" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesFinsLimiteFundebEstado1516_id_seq" OWNED BY public."DeducoesFinsLimiteFundebEstado1516".id;


--
-- Name: DeducoesFinsLimiteFundebEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesFinsLimiteFundebEstadual1718" (
    id integer NOT NULL,
    tipo public."DeducoesFinsLimiteFundebEstadualTipo1718" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesFinsLimiteFundebEstadual1718" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesFinsLimiteFundebEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesFinsLimiteFundebEstadual1718_id_seq" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesFinsLimiteFundebEstadual1718_id_seq" OWNED BY public."DeducoesFinsLimiteFundebEstadual1718".id;


--
-- Name: DeducoesFinsLimiteFundebEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesFinsLimiteFundebEstadual1920" (
    id integer NOT NULL,
    tipo public."DeducoesFinsLimiteFundebEstadualTipo1920" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesFinsLimiteFundebEstadual1920" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesFinsLimiteFundebEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesFinsLimiteFundebEstadual1920_id_seq" OWNER TO root;

--
-- Name: DeducoesFinsLimiteFundebEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesFinsLimiteFundebEstadual1920_id_seq" OWNED BY public."DeducoesFinsLimiteFundebEstadual1920".id;


--
-- Name: DeducoesFundebMagisterioEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesFundebMagisterioEstado0912" (
    id integer NOT NULL,
    tipo public."DeducoesFundebMagisterioEstadoTipo0912" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesFundebMagisterioEstado0912" OWNER TO root;

--
-- Name: DeducoesFundebMagisterioEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesFundebMagisterioEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesFundebMagisterioEstado0912_id_seq" OWNER TO root;

--
-- Name: DeducoesFundebMagisterioEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesFundebMagisterioEstado0912_id_seq" OWNED BY public."DeducoesFundebMagisterioEstado0912".id;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado0912" (
    id integer NOT NULL,
    tipo public."DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado0912" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq" OWNED BY public."DeducoesParaFinsDeLimitesConstitucionalEstado0912".id;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1314" (
    id integer NOT NULL,
    tipo public."DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1314" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1314" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq" OWNED BY public."DeducoesParaFinsDeLimitesConstitucionalEstado1314".id;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1516" (
    id integer NOT NULL,
    tipo public."DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1516" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq" OWNED BY public."DeducoesParaFinsDeLimitesConstitucionalEstado1516".id;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718" (
    id integer NOT NULL,
    tipo public."DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1718" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq" OWNED BY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718".id;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920" (
    id integer NOT NULL,
    tipo public."DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq" OWNER TO root;

--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq" OWNED BY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920".id;


--
-- Name: DespesaEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstado06" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadoTipos06" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasLiquidadasNoAno" double precision NOT NULL,
    "despesasLiquidadasPercentual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstado06" OWNER TO root;

--
-- Name: DespesaEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstado06_id_seq" OWNER TO root;

--
-- Name: DespesaEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstado06_id_seq" OWNED BY public."DespesaEstado06".id;


--
-- Name: DespesaEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstado0708" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadoTipos0708" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasNoAno" double precision NOT NULL,
    "despesasEmpenhadasPercentual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstado0708" OWNER TO root;

--
-- Name: DespesaEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstado0708_id_seq" OWNER TO root;

--
-- Name: DespesaEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstado0708_id_seq" OWNED BY public."DespesaEstado0708".id;


--
-- Name: DespesaEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstado0912" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadoTipos0912" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasLiquidadasBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstado0912" OWNER TO root;

--
-- Name: DespesaEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstado0912_id_seq" OWNER TO root;

--
-- Name: DespesaEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstado0912_id_seq" OWNED BY public."DespesaEstado0912".id;


--
-- Name: DespesaEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstado1314" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadoTipos1314" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasLiquidadasBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstado1314" OWNER TO root;

--
-- Name: DespesaEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstado1314_id_seq" OWNER TO root;

--
-- Name: DespesaEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstado1314_id_seq" OWNED BY public."DespesaEstado1314".id;


--
-- Name: DespesaEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstado1516" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadoTipos1516" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasEmpenhadasPercentual" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasPercentual" double precision NOT NULL,
    "inscritasRestosPagar" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstado1516" OWNER TO root;

--
-- Name: DespesaEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstado1516_id_seq" OWNER TO root;

--
-- Name: DespesaEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstado1516_id_seq" OWNED BY public."DespesaEstado1516".id;


--
-- Name: DespesaEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstadual1718" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadualTipos1718" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasEmpenhadasPercentual" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasPercentual" double precision NOT NULL,
    "inscritasRestosPagar" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstadual1718" OWNER TO root;

--
-- Name: DespesaEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstadual1718_id_seq" OWNER TO root;

--
-- Name: DespesaEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstadual1718_id_seq" OWNED BY public."DespesaEstadual1718".id;


--
-- Name: DespesaEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstadual1920" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadualTipos1920" NOT NULL,
    "dotacaoInicial" double precision NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasEmpenhadasPercentual" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasPercentual" double precision NOT NULL,
    "inscritasRestosPagar" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstadual1920" OWNER TO root;

--
-- Name: DespesaEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstadual1920_id_seq" OWNER TO root;

--
-- Name: DespesaEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstadual1920_id_seq" OWNED BY public."DespesaEstadual1920".id;


--
-- Name: DespesaEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstadual21" (
    id integer NOT NULL,
    tipo public."ItemDespesasEstadualTipos21" NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasPagasAteBimestre" double precision NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstadual21" OWNER TO root;

--
-- Name: DespesaEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstadual21_id_seq" OWNER TO root;

--
-- Name: DespesaEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstadual21_id_seq" OWNED BY public."DespesaEstadual21".id;


--
-- Name: DespesaEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesaEstadual23" (
    id integer NOT NULL,
    tipo public."ItemDespesaEstadualTipos23" NOT NULL,
    "dotacaoAtualizada" double precision NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasPagasAteBimestre" double precision NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesaEstadual23" OWNER TO root;

--
-- Name: DespesaEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesaEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesaEstadual23_id_seq" OWNER TO root;

--
-- Name: DespesaEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesaEstadual23_id_seq" OWNED BY public."DespesaEstadual23".id;


--
-- Name: DespesasCusteadasFundebExercicioEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesasCusteadasFundebExercicioEstadual21" (
    id integer NOT NULL,
    tipo public."DespesasCusteadasFundebExercicioEstadualTipos21" NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasPagasAteBimestre" double precision NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" double precision NOT NULL,
    "inscritosEmRestosAPagarNaoProcessadosSemCaixa" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesasCusteadasFundebExercicioEstadual21" OWNER TO root;

--
-- Name: DespesasCusteadasFundebExercicioEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesasCusteadasFundebExercicioEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesasCusteadasFundebExercicioEstadual21_id_seq" OWNER TO root;

--
-- Name: DespesasCusteadasFundebExercicioEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesasCusteadasFundebExercicioEstadual21_id_seq" OWNED BY public."DespesasCusteadasFundebExercicioEstadual21".id;


--
-- Name: DespesasCusteadasFundebExercicioEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."DespesasCusteadasFundebExercicioEstadual23" (
    id integer NOT NULL,
    tipo public."DespesasCusteadasFundebExercicioEstadualTipos23" NOT NULL,
    "despesasEmpenhadasAteBimestre" double precision NOT NULL,
    "despesasLiquidadasAteBimestre" double precision NOT NULL,
    "despesasPagasAteBimestre" double precision NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" double precision NOT NULL,
    "inscritasEmRestosAPagarSemCaixa" double precision NOT NULL,
    "despesasSuperiorAoTotalDasReceitas" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."DespesasCusteadasFundebExercicioEstadual23" OWNER TO root;

--
-- Name: DespesasCusteadasFundebExercicioEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."DespesasCusteadasFundebExercicioEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DespesasCusteadasFundebExercicioEstadual23_id_seq" OWNER TO root;

--
-- Name: DespesasCusteadasFundebExercicioEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."DespesasCusteadasFundebExercicioEstadual23_id_seq" OWNED BY public."DespesasCusteadasFundebExercicioEstadual23".id;


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."EmendaConstitucionalExclusivoSiopeEstadual23" (
    id integer NOT NULL,
    tipo public."EmendaConstitucionalExclusivoSiopeEstadualTipos23" NOT NULL,
    "valorExigido" double precision NOT NULL,
    "valorAplicado" double precision NOT NULL,
    "diferencaCompensacao" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."EmendaConstitucionalExclusivoSiopeEstadual23" OWNER TO root;

--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."EmendaConstitucionalExclusivoSiopeEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EmendaConstitucionalExclusivoSiopeEstadual23_id_seq" OWNER TO root;

--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."EmendaConstitucionalExclusivoSiopeEstadual23_id_seq" OWNED BY public."EmendaConstitucionalExclusivoSiopeEstadual23".id;


--
-- Name: FluxoFinanceiroDeRecursosEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroDeRecursosEstado0912" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroDeRecursosEstadoTipos0912" NOT NULL,
    "valorFundeb" double precision NOT NULL,
    "valorFundef" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroDeRecursosEstado0912" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroDeRecursosEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroDeRecursosEstado0912_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroDeRecursosEstado0912_id_seq" OWNED BY public."FluxoFinanceiroDeRecursosEstado0912".id;


--
-- Name: FluxoFinanceiroDeRecursosEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroDeRecursosEstado1314" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroDeRecursosEstadoTipos1314" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroDeRecursosEstado1314" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroDeRecursosEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroDeRecursosEstado1314_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroDeRecursosEstado1314_id_seq" OWNED BY public."FluxoFinanceiroDeRecursosEstado1314".id;


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroDeRecursosFundebEstado1516" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroDeRecursosFundebEstadoTipo1516" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroDeRecursosFundebEstado1516" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroDeRecursosFundebEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroDeRecursosFundebEstado1516_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroDeRecursosFundebEstado1516_id_seq" OWNED BY public."FluxoFinanceiroDeRecursosFundebEstado1516".id;


--
-- Name: FluxoFinanceiroRecursosEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroRecursosEstadual1718" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroRecursosEstadualTipos1718" NOT NULL,
    fundeb double precision NOT NULL,
    "salarioEducacao" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroRecursosEstadual1718" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroRecursosEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroRecursosEstadual1718_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroRecursosEstadual1718_id_seq" OWNED BY public."FluxoFinanceiroRecursosEstadual1718".id;


--
-- Name: FluxoFinanceiroRecursosEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroRecursosEstadual1920" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroRecursosEstadualTipos1920" NOT NULL,
    fundeb double precision NOT NULL,
    "salarioEducacao" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroRecursosEstadual1920" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroRecursosEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroRecursosEstadual1920_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroRecursosEstadual1920_id_seq" OWNED BY public."FluxoFinanceiroRecursosEstadual1920".id;


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."FluxoFinanceiroRecursosFundebEstado0708" (
    id integer NOT NULL,
    tipo public."FluxoFinanceiroRecursosFundebEstadoTipo0708" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."FluxoFinanceiroRecursosFundebEstado0708" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosFundebEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."FluxoFinanceiroRecursosFundebEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FluxoFinanceiroRecursosFundebEstado0708_id_seq" OWNER TO root;

--
-- Name: FluxoFinanceiroRecursosFundebEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."FluxoFinanceiroRecursosFundebEstado0708_id_seq" OWNED BY public."FluxoFinanceiroRecursosFundebEstado0708".id;


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicador21Art25AplicacaoSuperavitEstadual" (
    id integer NOT NULL,
    tipo public."IndicadorTipos21Art25AplicacaoSuperavitEstadual" NOT NULL,
    "valorSuperavitPermitidoExercicioAnterior" double precision NOT NULL,
    "valorNaoAplicadoExercicioAnterior" double precision NOT NULL,
    "valorSuperavitAplicadoAtePrimeiroQuadrim" double precision NOT NULL,
    "valorAplicadoAtePrimQuarLimiteConst" double precision NOT NULL,
    "valorAplicadoAposPrimeiroQuadrim" double precision NOT NULL,
    "valorNaoAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicador21Art25AplicacaoSuperavitEstadual" OWNER TO root;

--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicador21Art25AplicacaoSuperavitEstadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicador21Art25AplicacaoSuperavitEstadual_id_seq" OWNER TO root;

--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicador21Art25AplicacaoSuperavitEstadual_id_seq" OWNED BY public."Indicador21Art25AplicacaoSuperavitEstadual".id;


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicador21Art25MaximoDeSuperavitEstadual" (
    id integer NOT NULL,
    tipo public."IndicadorTipos21Art25MaximoDeSuperavitEstadual" NOT NULL,
    "valorPermitido" double precision NOT NULL,
    "valorNaoAplicado" double precision NOT NULL,
    "valorNaoAplicadoAposDeducoes" double precision NOT NULL,
    "percentualNaoAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicador21Art25MaximoDeSuperavitEstadual" OWNER TO root;

--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicador21Art25MaximoDeSuperavitEstadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicador21Art25MaximoDeSuperavitEstadual_id_seq" OWNER TO root;

--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicador21Art25MaximoDeSuperavitEstadual_id_seq" OWNED BY public."Indicador21Art25MaximoDeSuperavitEstadual".id;


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicador23Art25AplicacaoSuperavitEstadual" (
    id integer NOT NULL,
    tipo public."IndicadorArt25AplicacaoSuperavitEstadualTipos23" NOT NULL,
    "valorSuperavitExercicioAnterior" double precision NOT NULL,
    "valorNaoAplicadoExercicioAnterior" double precision NOT NULL,
    "valorSuperavitAplicadoAtePrimeiroQuadrimestre" double precision NOT NULL,
    "valorAplicadoAtePrimeiroQuadrimestre" double precision NOT NULL,
    "valorTotalSuperavitNaoAplicadoAteFinalExercicio" double precision NOT NULL,
    "valorAplicadoAtePrimeiroQuadrimestreLimiteConstitucional" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicador23Art25AplicacaoSuperavitEstadual" OWNER TO root;

--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicador23Art25AplicacaoSuperavitEstadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicador23Art25AplicacaoSuperavitEstadual_id_seq" OWNER TO root;

--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicador23Art25AplicacaoSuperavitEstadual_id_seq" OWNED BY public."Indicador23Art25AplicacaoSuperavitEstadual".id;


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" (
    id integer NOT NULL,
    tipo public."IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23" NOT NULL,
    "valorMaximoPermitido" double precision NOT NULL,
    "valorNaoAplicado" double precision NOT NULL,
    "valorNaoAplicadoAposAjuste" double precision NOT NULL,
    "valorNaoAplicadoExcedenteMaximoPermitido" double precision NOT NULL,
    "percentualNaoAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" OWNER TO root;

--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq" OWNER TO root;

--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq" OWNED BY public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual".id;


--
-- Name: Indicadores21Art212Estadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicadores21Art212Estadual" (
    id integer NOT NULL,
    tipo public."IndicadoresTipos21Art212Estadual" NOT NULL,
    "valorExigido" double precision NOT NULL,
    "valorAplicado" double precision NOT NULL,
    "valorConsideradoAposDeducoes" double precision NOT NULL,
    "percentualAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicadores21Art212Estadual" OWNER TO root;

--
-- Name: Indicadores21Art212Estadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicadores21Art212Estadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicadores21Art212Estadual_id_seq" OWNER TO root;

--
-- Name: Indicadores21Art212Estadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicadores21Art212Estadual_id_seq" OWNED BY public."Indicadores21Art212Estadual".id;


--
-- Name: Indicadores23Art212Estadual; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Indicadores23Art212Estadual" (
    id integer NOT NULL,
    tipo public."IndicadoresArt212EstadualTipos23" NOT NULL,
    "valorExigido" double precision NOT NULL,
    "valorAplicado" double precision NOT NULL,
    "valorConsideradoAposDeducoes" double precision NOT NULL,
    "percentualAplicado" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Indicadores23Art212Estadual" OWNER TO root;

--
-- Name: Indicadores23Art212Estadual_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Indicadores23Art212Estadual_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Indicadores23Art212Estadual_id_seq" OWNER TO root;

--
-- Name: Indicadores23Art212Estadual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Indicadores23Art212Estadual_id_seq" OWNED BY public."Indicadores23Art212Estadual".id;


--
-- Name: IndicadoresFundebEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."IndicadoresFundebEstado1314" (
    id integer NOT NULL,
    tipo public."IndicadoresFundebEstadoTipo1314" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."IndicadoresFundebEstado1314" OWNER TO root;

--
-- Name: IndicadoresFundebEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."IndicadoresFundebEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IndicadoresFundebEstado1314_id_seq" OWNER TO root;

--
-- Name: IndicadoresFundebEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."IndicadoresFundebEstado1314_id_seq" OWNED BY public."IndicadoresFundebEstado1314".id;


--
-- Name: IndicadoresFundebEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."IndicadoresFundebEstado1516" (
    id integer NOT NULL,
    tipo public."IndicadoresFundebEstadoTipo1516" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."IndicadoresFundebEstado1516" OWNER TO root;

--
-- Name: IndicadoresFundebEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."IndicadoresFundebEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IndicadoresFundebEstado1516_id_seq" OWNER TO root;

--
-- Name: IndicadoresFundebEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."IndicadoresFundebEstado1516_id_seq" OWNED BY public."IndicadoresFundebEstado1516".id;


--
-- Name: IndicadoresFundebEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."IndicadoresFundebEstadual1718" (
    id integer NOT NULL,
    tipo public."IndicadoresFundebEstadualTipo1718" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."IndicadoresFundebEstadual1718" OWNER TO root;

--
-- Name: IndicadoresFundebEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."IndicadoresFundebEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IndicadoresFundebEstadual1718_id_seq" OWNER TO root;

--
-- Name: IndicadoresFundebEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."IndicadoresFundebEstadual1718_id_seq" OWNED BY public."IndicadoresFundebEstadual1718".id;


--
-- Name: IndicadoresFundebEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."IndicadoresFundebEstadual1920" (
    id integer NOT NULL,
    tipo public."IndicadoresFundebEstadualTipo1920" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."IndicadoresFundebEstadual1920" OWNER TO root;

--
-- Name: IndicadoresFundebEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."IndicadoresFundebEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IndicadoresFundebEstadual1920_id_seq" OWNER TO root;

--
-- Name: IndicadoresFundebEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."IndicadoresFundebEstadual1920_id_seq" OWNED BY public."IndicadoresFundebEstadual1920".id;


--
-- Name: InformacoesControleFinanceiroEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."InformacoesControleFinanceiroEstado0708" (
    id integer NOT NULL,
    tipo public."InformacoesControleFinanceiroEstadoTipo0708" NOT NULL,
    "saldoAteBimeste" double precision NOT NULL,
    cancelado double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."InformacoesControleFinanceiroEstado0708" OWNER TO root;

--
-- Name: InformacoesControleFinanceiroEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."InformacoesControleFinanceiroEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."InformacoesControleFinanceiroEstado0708_id_seq" OWNER TO root;

--
-- Name: InformacoesControleFinanceiroEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."InformacoesControleFinanceiroEstado0708_id_seq" OWNED BY public."InformacoesControleFinanceiroEstado0708".id;


--
-- Name: Minimo60PorCentoFundebEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Minimo60PorCentoFundebEstado0708" (
    id integer NOT NULL,
    tipo public."Minimo60PorCentoFundebEstadoTipo0708" NOT NULL,
    "despesasRealizadasPercentual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."Minimo60PorCentoFundebEstado0708" OWNER TO root;

--
-- Name: Minimo60PorCentoFundebEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Minimo60PorCentoFundebEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Minimo60PorCentoFundebEstado0708_id_seq" OWNER TO root;

--
-- Name: Minimo60PorCentoFundebEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Minimo60PorCentoFundebEstado0708_id_seq" OWNED BY public."Minimo60PorCentoFundebEstado0708".id;


--
-- Name: PerdaGanhoTransferenciasFundebEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."PerdaGanhoTransferenciasFundebEstado06" (
    id integer NOT NULL,
    tipo public."PerdaGanhoTransferenciasFundebEstadoTipo06" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."PerdaGanhoTransferenciasFundebEstado06" OWNER TO root;

--
-- Name: PerdaGanhoTransferenciasFundebEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."PerdaGanhoTransferenciasFundebEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PerdaGanhoTransferenciasFundebEstado06_id_seq" OWNER TO root;

--
-- Name: PerdaGanhoTransferenciasFundebEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."PerdaGanhoTransferenciasFundebEstado06_id_seq" OWNED BY public."PerdaGanhoTransferenciasFundebEstado06".id;


--
-- Name: ReceitaEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstado06" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadoTipos06" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadasNoAno" double precision NOT NULL,
    "receitasRealizadasPercentual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstado06" OWNER TO root;

--
-- Name: ReceitaEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstado06_id_seq" OWNER TO root;

--
-- Name: ReceitaEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstado06_id_seq" OWNED BY public."ReceitaEstado06".id;


--
-- Name: ReceitaEstado0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstado0708" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadoTipos0708" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadasNoAno" double precision NOT NULL,
    "receitasRealizadasPercentual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstado0708" OWNER TO root;

--
-- Name: ReceitaEstado0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstado0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstado0708_id_seq" OWNER TO root;

--
-- Name: ReceitaEstado0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstado0708_id_seq" OWNED BY public."ReceitaEstado0708".id;


--
-- Name: ReceitaEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstado0912" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadoTipos0912" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaBimestre" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstado0912" OWNER TO root;

--
-- Name: ReceitaEstado0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstado0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstado0912_id_seq" OWNER TO root;

--
-- Name: ReceitaEstado0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstado0912_id_seq" OWNED BY public."ReceitaEstado0912".id;


--
-- Name: ReceitaEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstado1314" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadoTipos1314" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaBimestre" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstado1314" OWNER TO root;

--
-- Name: ReceitaEstado1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstado1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstado1314_id_seq" OWNER TO root;

--
-- Name: ReceitaEstado1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstado1314_id_seq" OWNED BY public."ReceitaEstado1314".id;


--
-- Name: ReceitaEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstado1516" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadoTipos1516" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstado1516" OWNER TO root;

--
-- Name: ReceitaEstado1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstado1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstado1516_id_seq" OWNER TO root;

--
-- Name: ReceitaEstado1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstado1516_id_seq" OWNED BY public."ReceitaEstado1516".id;


--
-- Name: ReceitaEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstadual1718" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadualTipos1718" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstadual1718" OWNER TO root;

--
-- Name: ReceitaEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstadual1718_id_seq" OWNER TO root;

--
-- Name: ReceitaEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstadual1718_id_seq" OWNED BY public."ReceitaEstadual1718".id;


--
-- Name: ReceitaEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstadual1920" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadualTipos1920" NOT NULL,
    "previsaoInicial" double precision NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    percentual double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstadual1920" OWNER TO root;

--
-- Name: ReceitaEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstadual1920_id_seq" OWNER TO root;

--
-- Name: ReceitaEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstadual1920_id_seq" OWNED BY public."ReceitaEstadual1920".id;


--
-- Name: ReceitaEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstadual21" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadualTipos21" NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadaAteBimestre" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstadual21" OWNER TO root;

--
-- Name: ReceitaEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstadual21_id_seq" OWNER TO root;

--
-- Name: ReceitaEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstadual21_id_seq" OWNED BY public."ReceitaEstadual21".id;


--
-- Name: ReceitaEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."ReceitaEstadual23" (
    id integer NOT NULL,
    tipo public."ItemReceitaEstadualTipos23" NOT NULL,
    "previsaoAtualizada" double precision NOT NULL,
    "receitasRealizadasAteBimestre" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."ReceitaEstadual23" OWNER TO root;

--
-- Name: ReceitaEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."ReceitaEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ReceitaEstadual23_id_seq" OWNER TO root;

--
-- Name: ReceitaEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."ReceitaEstadual23_id_seq" OWNED BY public."ReceitaEstadual23".id;


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RecursosRecebidosNaoUtilizadosEstadual21" (
    id integer NOT NULL,
    tipo public."RecursosRecebidosNaoUtilizadosEstadualTipos21" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RecursosRecebidosNaoUtilizadosEstadual21" OWNER TO root;

--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RecursosRecebidosNaoUtilizadosEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RecursosRecebidosNaoUtilizadosEstadual21_id_seq" OWNER TO root;

--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RecursosRecebidosNaoUtilizadosEstadual21_id_seq" OWNED BY public."RecursosRecebidosNaoUtilizadosEstadual21".id;


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RecursosRecebidosNaoUtilizadosEstadual23" (
    id integer NOT NULL,
    tipo public."RecursosRecebidosNaoUtilizadosEstadualTipos23" NOT NULL,
    valor double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RecursosRecebidosNaoUtilizadosEstadual23" OWNER TO root;

--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RecursosRecebidosNaoUtilizadosEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RecursosRecebidosNaoUtilizadosEstadual23_id_seq" OWNER TO root;

--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RecursosRecebidosNaoUtilizadosEstadual23_id_seq" OWNED BY public."RecursosRecebidosNaoUtilizadosEstadual23".id;


--
-- Name: RelatorioEstadual06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual06" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual06" OWNER TO root;

--
-- Name: RelatorioEstadual06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual06_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual06_id_seq" OWNED BY public."RelatorioEstadual06".id;


--
-- Name: RelatorioEstadual0708; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual0708" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual0708" OWNER TO root;

--
-- Name: RelatorioEstadual0708_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual0708_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual0708_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual0708_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual0708_id_seq" OWNED BY public."RelatorioEstadual0708".id;


--
-- Name: RelatorioEstadual0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual0912" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual0912" OWNER TO root;

--
-- Name: RelatorioEstadual0912_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual0912_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual0912_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual0912_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual0912_id_seq" OWNED BY public."RelatorioEstadual0912".id;


--
-- Name: RelatorioEstadual1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual1314" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual1314" OWNER TO root;

--
-- Name: RelatorioEstadual1314_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual1314_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual1314_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual1314_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual1314_id_seq" OWNED BY public."RelatorioEstadual1314".id;


--
-- Name: RelatorioEstadual1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual1516" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual1516" OWNER TO root;

--
-- Name: RelatorioEstadual1516_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual1516_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual1516_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual1516_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual1516_id_seq" OWNED BY public."RelatorioEstadual1516".id;


--
-- Name: RelatorioEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual1718" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual1718" OWNER TO root;

--
-- Name: RelatorioEstadual1718_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual1718_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual1718_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual1718_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual1718_id_seq" OWNED BY public."RelatorioEstadual1718".id;


--
-- Name: RelatorioEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual1920" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual1920" OWNER TO root;

--
-- Name: RelatorioEstadual1920_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual1920_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual1920_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual1920_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual1920_id_seq" OWNED BY public."RelatorioEstadual1920".id;


--
-- Name: RelatorioEstadual21; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual21" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoEstado" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual21" OWNER TO root;

--
-- Name: RelatorioEstadual21_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual21_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual21_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual21_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual21_id_seq" OWNED BY public."RelatorioEstadual21".id;


--
-- Name: RelatorioEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RelatorioEstadual23" (
    id integer NOT NULL,
    ano text NOT NULL,
    "codigoMunicipio" text NOT NULL
);


ALTER TABLE public."RelatorioEstadual23" OWNER TO root;

--
-- Name: RelatorioEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RelatorioEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RelatorioEstadual23_id_seq" OWNER TO root;

--
-- Name: RelatorioEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RelatorioEstadual23_id_seq" OWNED BY public."RelatorioEstadual23".id;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912" (
    id integer NOT NULL,
    tipo public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo0912" NOT NULL,
    "saldoAteBimestre" double precision NOT NULL,
    "canceladoNoAnoAtual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq" OWNED BY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912".id;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314" (
    id integer NOT NULL,
    tipo public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1314" NOT NULL,
    "saldoAteBimestre" double precision NOT NULL,
    "canceladoNoAnoAtual" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq" OWNED BY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314".id;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516" (
    id integer NOT NULL,
    tipo public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516" NOT NULL,
    "saldoAteBimestre" double precision NOT NULL,
    "canceladoNoAno" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq" OWNED BY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516".id;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718" (
    id integer NOT NULL,
    tipo public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1718" NOT NULL,
    "saldoAteBimestre" double precision NOT NULL,
    "canceladoNoAno" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920" (
    id integer NOT NULL,
    tipo public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920" NOT NULL,
    "saldoAteBimestre" double precision NOT NULL,
    "canceladoNoAno" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq" OWNED BY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718".id;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1" OWNER TO root;

--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1" OWNED BY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920".id;


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."RestosAPagarParaCumprimentoDoLimiteEstadual23" (
    id integer NOT NULL,
    tipo public."RestosAPagarParaCumprimentoDoLimiteEstadualTipos23" NOT NULL,
    "saldoInicial" double precision NOT NULL,
    "rpLiquidados" double precision NOT NULL,
    "rpPagos" double precision NOT NULL,
    "rpCancelados" double precision NOT NULL,
    "saldoFinal" double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."RestosAPagarParaCumprimentoDoLimiteEstadual23" OWNER TO root;

--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq" OWNER TO root;

--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq" OWNED BY public."RestosAPagarParaCumprimentoDoLimiteEstadual23".id;


--
-- Name: SaldoFinanceiroFundefEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."SaldoFinanceiroFundefEstado06" (
    id integer NOT NULL,
    tipo public."SaldoFinanceiroFundefEstadoTipo06" NOT NULL,
    "anoAnterior" double precision NOT NULL,
    "anoAtual" integer NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."SaldoFinanceiroFundefEstado06" OWNER TO root;

--
-- Name: SaldoFinanceiroFundefEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."SaldoFinanceiroFundefEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SaldoFinanceiroFundefEstado06_id_seq" OWNER TO root;

--
-- Name: SaldoFinanceiroFundefEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."SaldoFinanceiroFundefEstado06_id_seq" OWNED BY public."SaldoFinanceiroFundefEstado06".id;


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."TabelaCumprimentoLimitesConstitucionaisEstado06" (
    id integer NOT NULL,
    tipo public."TabelaCumprimentoLimitesConstitucionaisEstadoTipo06" NOT NULL,
    porcentagem double precision NOT NULL,
    "relatorioEstadualId" integer NOT NULL
);


ALTER TABLE public."TabelaCumprimentoLimitesConstitucionaisEstado06" OWNER TO root;

--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq" OWNER TO root;

--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq" OWNED BY public."TabelaCumprimentoLimitesConstitucionaisEstado06".id;


--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq"'::regclass);


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq"'::regclass);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq"'::regclass);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq"'::regclass);


--
-- Name: CompensacaoRestosAPagarEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."CompensacaoRestosAPagarEstado06" ALTER COLUMN id SET DEFAULT nextval('public."CompensacaoRestosAPagarEstado06_id_seq"'::regclass);


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq"'::regclass);


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq"'::regclass);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."ControleRecursosNoExercicioSubsequenteEstado1516_id_seq"'::regclass);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq"'::regclass);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq"'::regclass);


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRestosAPagarVinculadosEducacaoEstado06" ALTER COLUMN id SET DEFAULT nextval('public."ControleRestosAPagarVinculadosEducacaoEstado06_id_seq"'::regclass);


--
-- Name: ControleUtilizacaoRecursosEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."ControleUtilizacaoRecursosEstado0912_id_seq"'::regclass);


--
-- Name: ControleUtilizacaoRecursosEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."ControleUtilizacaoRecursosEstado1314_id_seq"'::regclass);


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq"'::regclass);


--
-- Name: DeducoesDaDespesaEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesDaDespesaEstado06" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesDaDespesaEstado06_id_seq"'::regclass);


--
-- Name: DeducoesFinsLimiteFundebEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesFinsLimiteFundebEstado1314_id_seq"'::regclass);


--
-- Name: DeducoesFinsLimiteFundebEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesFinsLimiteFundebEstado1516_id_seq"'::regclass);


--
-- Name: DeducoesFinsLimiteFundebEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesFinsLimiteFundebEstadual1718_id_seq"'::regclass);


--
-- Name: DeducoesFinsLimiteFundebEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesFinsLimiteFundebEstadual1920_id_seq"'::regclass);


--
-- Name: DeducoesFundebMagisterioEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFundebMagisterioEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesFundebMagisterioEstado0912_id_seq"'::regclass);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq"'::regclass);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq"'::regclass);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq"'::regclass);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq"'::regclass);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq"'::regclass);


--
-- Name: DespesaEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado06" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstado06_id_seq"'::regclass);


--
-- Name: DespesaEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstado0708_id_seq"'::regclass);


--
-- Name: DespesaEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstado0912_id_seq"'::regclass);


--
-- Name: DespesaEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstado1314_id_seq"'::regclass);


--
-- Name: DespesaEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstado1516_id_seq"'::regclass);


--
-- Name: DespesaEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstadual1718_id_seq"'::regclass);


--
-- Name: DespesaEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstadual1920_id_seq"'::regclass);


--
-- Name: DespesaEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstadual21_id_seq"'::regclass);


--
-- Name: DespesaEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."DespesaEstadual23_id_seq"'::regclass);


--
-- Name: DespesasCusteadasFundebExercicioEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."DespesasCusteadasFundebExercicioEstadual21_id_seq"'::regclass);


--
-- Name: DespesasCusteadasFundebExercicioEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."DespesasCusteadasFundebExercicioEstadual23_id_seq"'::regclass);


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."EmendaConstitucionalExclusivoSiopeEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."EmendaConstitucionalExclusivoSiopeEstadual23_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroDeRecursosEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroDeRecursosEstado0912_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroDeRecursosEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroDeRecursosEstado1314_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosFundebEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroDeRecursosFundebEstado1516_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroRecursosEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroRecursosEstadual1718_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroRecursosEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroRecursosEstadual1920_id_seq"'::regclass);


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosFundebEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."FluxoFinanceiroRecursosFundebEstado0708_id_seq"'::regclass);


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25AplicacaoSuperavitEstadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicador21Art25AplicacaoSuperavitEstadual_id_seq"'::regclass);


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25MaximoDeSuperavitEstadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicador21Art25MaximoDeSuperavitEstadual_id_seq"'::regclass);


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25AplicacaoSuperavitEstadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicador23Art25AplicacaoSuperavitEstadual_id_seq"'::regclass);


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq"'::regclass);


--
-- Name: Indicadores21Art212Estadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores21Art212Estadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicadores21Art212Estadual_id_seq"'::regclass);


--
-- Name: Indicadores23Art212Estadual id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores23Art212Estadual" ALTER COLUMN id SET DEFAULT nextval('public."Indicadores23Art212Estadual_id_seq"'::regclass);


--
-- Name: IndicadoresFundebEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."IndicadoresFundebEstado1314_id_seq"'::regclass);


--
-- Name: IndicadoresFundebEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."IndicadoresFundebEstado1516_id_seq"'::regclass);


--
-- Name: IndicadoresFundebEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."IndicadoresFundebEstadual1718_id_seq"'::regclass);


--
-- Name: IndicadoresFundebEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."IndicadoresFundebEstadual1920_id_seq"'::regclass);


--
-- Name: InformacoesControleFinanceiroEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."InformacoesControleFinanceiroEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."InformacoesControleFinanceiroEstado0708_id_seq"'::regclass);


--
-- Name: Minimo60PorCentoFundebEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Minimo60PorCentoFundebEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."Minimo60PorCentoFundebEstado0708_id_seq"'::regclass);


--
-- Name: PerdaGanhoTransferenciasFundebEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."PerdaGanhoTransferenciasFundebEstado06" ALTER COLUMN id SET DEFAULT nextval('public."PerdaGanhoTransferenciasFundebEstado06_id_seq"'::regclass);


--
-- Name: ReceitaEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado06" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstado06_id_seq"'::regclass);


--
-- Name: ReceitaEstado0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0708" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstado0708_id_seq"'::regclass);


--
-- Name: ReceitaEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstado0912_id_seq"'::regclass);


--
-- Name: ReceitaEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstado1314_id_seq"'::regclass);


--
-- Name: ReceitaEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstado1516_id_seq"'::regclass);


--
-- Name: ReceitaEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstadual1718_id_seq"'::regclass);


--
-- Name: ReceitaEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstadual1920_id_seq"'::regclass);


--
-- Name: ReceitaEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstadual21_id_seq"'::regclass);


--
-- Name: ReceitaEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."ReceitaEstadual23_id_seq"'::regclass);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."RecursosRecebidosNaoUtilizadosEstadual21_id_seq"'::regclass);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."RecursosRecebidosNaoUtilizadosEstadual23_id_seq"'::regclass);


--
-- Name: RelatorioEstadual06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual06" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual06_id_seq"'::regclass);


--
-- Name: RelatorioEstadual0708 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual0708" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual0708_id_seq"'::regclass);


--
-- Name: RelatorioEstadual0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual0912" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual0912_id_seq"'::regclass);


--
-- Name: RelatorioEstadual1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1314" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual1314_id_seq"'::regclass);


--
-- Name: RelatorioEstadual1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1516" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual1516_id_seq"'::regclass);


--
-- Name: RelatorioEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual1718_id_seq"'::regclass);


--
-- Name: RelatorioEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual1920_id_seq"'::regclass);


--
-- Name: RelatorioEstadual21 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual21" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual21_id_seq"'::regclass);


--
-- Name: RelatorioEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."RelatorioEstadual23_id_seq"'::regclass);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq"'::regclass);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq"'::regclass);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq"'::regclass);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq"'::regclass);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1"'::regclass);


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarParaCumprimentoDoLimiteEstadual23" ALTER COLUMN id SET DEFAULT nextval('public."RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq"'::regclass);


--
-- Name: SaldoFinanceiroFundefEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."SaldoFinanceiroFundefEstado06" ALTER COLUMN id SET DEFAULT nextval('public."SaldoFinanceiroFundefEstado06_id_seq"'::regclass);


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06 id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."TabelaCumprimentoLimitesConstitucionaisEstado06" ALTER COLUMN id SET DEFAULT nextval('public."TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq"'::regclass);


--
-- Data for Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ApuracaoLimiteMinimoConstitucionalEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ApuracaoLimiteMinimoConstitucionalEstadual21" (id, tipo, "valorExigido", "valorAplicado", "percentualAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ApuracaoLimiteMinimoConstitucionalEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ApuracaoLimiteMinimoConstitucionalEstadual23" (id, tipo, "valorExigido", "valorAplicado", "percentualAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: CompensacaoRestosAPagarEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."CompensacaoRestosAPagarEstado06" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" (id, fundeb, "salarioEducacao", "relatorioEstadualId", tipo) FROM stdin;
\.


--
-- Data for Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" (id, fundeb, "salarioEducacao", "relatorioEstadualId", tipo) FROM stdin;
\.


--
-- Data for Name: ControleRecursosNoExercicioSubsequenteEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleRecursosNoExercicioSubsequenteEstado1516" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleRecursosNoExercicioSubsequenteEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleRecursosNoExercicioSubsequenteEstadual1718" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleRecursosNoExercicioSubsequenteEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleRecursosNoExercicioSubsequenteEstadual1920" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleRestosAPagarVinculadosEducacaoEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleRestosAPagarVinculadosEducacaoEstado06" (id, tipo, "aplicacaoMinimaAnoAnterior", "aplicacaoApuradaAnoAnterior", "restosAPagarAnoAnterior", "restosAPagarCanceladaAnoAtul", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleUtilizacaoRecursosEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleUtilizacaoRecursosEstado0912" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ControleUtilizacaoRecursosEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ControleUtilizacaoRecursosEstado1314" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesDaDespesaEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesDaDespesaEstado06" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesFinsLimiteFundebEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesFinsLimiteFundebEstado1314" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesFinsLimiteFundebEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesFinsLimiteFundebEstado1516" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesFinsLimiteFundebEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesFinsLimiteFundebEstadual1718" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesFinsLimiteFundebEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesFinsLimiteFundebEstadual1920" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesFundebMagisterioEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesFundebMagisterioEstado0912" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesParaFinsDeLimitesConstitucionalEstado0912" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesParaFinsDeLimitesConstitucionalEstado1314" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesParaFinsDeLimitesConstitucionalEstado1516" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstado06" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasLiquidadasNoAno", "despesasLiquidadasPercentual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstado0708" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasEmpenhadasNoAno", "despesasEmpenhadasPercentual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstado0912" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasLiquidadasBimestre", "despesasLiquidadasAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstado1314" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasLiquidadasBimestre", "despesasLiquidadasAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstado1516" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasEmpenhadasAteBimestre", "despesasEmpenhadasPercentual", "despesasLiquidadasAteBimestre", "despesasLiquidadasPercentual", "inscritasRestosPagar", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstadual1718" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasEmpenhadasAteBimestre", "despesasEmpenhadasPercentual", "despesasLiquidadasAteBimestre", "despesasLiquidadasPercentual", "inscritasRestosPagar", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstadual1920" (id, tipo, "dotacaoInicial", "dotacaoAtualizada", "despesasEmpenhadasAteBimestre", "despesasEmpenhadasPercentual", "despesasLiquidadasAteBimestre", "despesasLiquidadasPercentual", "inscritasRestosPagar", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstadual21" (id, tipo, "dotacaoAtualizada", "despesasEmpenhadasAteBimestre", "despesasLiquidadasAteBimestre", "despesasPagasAteBimestre", "inscritosEmRestosAPagarNaoProcessados", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesaEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesaEstadual23" (id, tipo, "dotacaoAtualizada", "despesasEmpenhadasAteBimestre", "despesasLiquidadasAteBimestre", "despesasPagasAteBimestre", "inscritosEmRestosAPagarNaoProcessados", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesasCusteadasFundebExercicioEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesasCusteadasFundebExercicioEstadual21" (id, tipo, "despesasEmpenhadasAteBimestre", "despesasLiquidadasAteBimestre", "despesasPagasAteBimestre", "inscritosEmRestosAPagarNaoProcessados", "inscritosEmRestosAPagarNaoProcessadosSemCaixa", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: DespesasCusteadasFundebExercicioEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."DespesasCusteadasFundebExercicioEstadual23" (id, tipo, "despesasEmpenhadasAteBimestre", "despesasLiquidadasAteBimestre", "despesasPagasAteBimestre", "inscritosEmRestosAPagarNaoProcessados", "inscritasEmRestosAPagarSemCaixa", "despesasSuperiorAoTotalDasReceitas", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: EmendaConstitucionalExclusivoSiopeEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."EmendaConstitucionalExclusivoSiopeEstadual23" (id, tipo, "valorExigido", "valorAplicado", "diferencaCompensacao", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroDeRecursosEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroDeRecursosEstado0912" (id, tipo, "valorFundeb", "valorFundef", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroDeRecursosEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroDeRecursosEstado1314" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroDeRecursosFundebEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroDeRecursosFundebEstado1516" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroRecursosEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroRecursosEstadual1718" (id, tipo, fundeb, "salarioEducacao", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroRecursosEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroRecursosEstadual1920" (id, tipo, fundeb, "salarioEducacao", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: FluxoFinanceiroRecursosFundebEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."FluxoFinanceiroRecursosFundebEstado0708" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicador21Art25AplicacaoSuperavitEstadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicador21Art25AplicacaoSuperavitEstadual" (id, tipo, "valorSuperavitPermitidoExercicioAnterior", "valorNaoAplicadoExercicioAnterior", "valorSuperavitAplicadoAtePrimeiroQuadrim", "valorAplicadoAtePrimQuarLimiteConst", "valorAplicadoAposPrimeiroQuadrim", "valorNaoAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicador21Art25MaximoDeSuperavitEstadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicador21Art25MaximoDeSuperavitEstadual" (id, tipo, "valorPermitido", "valorNaoAplicado", "valorNaoAplicadoAposDeducoes", "percentualNaoAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicador23Art25AplicacaoSuperavitEstadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicador23Art25AplicacaoSuperavitEstadual" (id, tipo, "valorSuperavitExercicioAnterior", "valorNaoAplicadoExercicioAnterior", "valorSuperavitAplicadoAtePrimeiroQuadrimestre", "valorAplicadoAtePrimeiroQuadrimestre", "valorTotalSuperavitNaoAplicadoAteFinalExercicio", "valorAplicadoAtePrimeiroQuadrimestreLimiteConstitucional", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" (id, tipo, "valorMaximoPermitido", "valorNaoAplicado", "valorNaoAplicadoAposAjuste", "valorNaoAplicadoExcedenteMaximoPermitido", "percentualNaoAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicadores21Art212Estadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicadores21Art212Estadual" (id, tipo, "valorExigido", "valorAplicado", "valorConsideradoAposDeducoes", "percentualAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Indicadores23Art212Estadual; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Indicadores23Art212Estadual" (id, tipo, "valorExigido", "valorAplicado", "valorConsideradoAposDeducoes", "percentualAplicado", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: IndicadoresFundebEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."IndicadoresFundebEstado1314" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: IndicadoresFundebEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."IndicadoresFundebEstado1516" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: IndicadoresFundebEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."IndicadoresFundebEstadual1718" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: IndicadoresFundebEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."IndicadoresFundebEstadual1920" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: InformacoesControleFinanceiroEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."InformacoesControleFinanceiroEstado0708" (id, tipo, "saldoAteBimeste", cancelado, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: Minimo60PorCentoFundebEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Minimo60PorCentoFundebEstado0708" (id, tipo, "despesasRealizadasPercentual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: PerdaGanhoTransferenciasFundebEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."PerdaGanhoTransferenciasFundebEstado06" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstado06" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadasNoAno", "receitasRealizadasPercentual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstado0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstado0708" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadasNoAno", "receitasRealizadasPercentual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstado0912" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadaBimestre", "receitasRealizadaAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstado1314" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadaBimestre", "receitasRealizadaAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstado1516" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadaAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstadual1718" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadaAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstadual1920" (id, tipo, "previsaoInicial", "previsaoAtualizada", "receitasRealizadaAteBimestre", percentual, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstadual21" (id, tipo, "previsaoAtualizada", "receitasRealizadaAteBimestre", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: ReceitaEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."ReceitaEstadual23" (id, tipo, "previsaoAtualizada", "receitasRealizadasAteBimestre", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RecursosRecebidosNaoUtilizadosEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RecursosRecebidosNaoUtilizadosEstadual21" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RecursosRecebidosNaoUtilizadosEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RecursosRecebidosNaoUtilizadosEstadual23" (id, tipo, valor, "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual06" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual0708; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual0708" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual0912" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual1314" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual1516" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual1718" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual1920" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual21; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual21" (id, ano, "codigoEstado") FROM stdin;
\.


--
-- Data for Name: RelatorioEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RelatorioEstadual23" (id, ano, "codigoMunicipio") FROM stdin;
\.


--
-- Data for Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912" (id, tipo, "saldoAteBimestre", "canceladoNoAnoAtual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314" (id, tipo, "saldoAteBimestre", "canceladoNoAnoAtual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516" (id, tipo, "saldoAteBimestre", "canceladoNoAno", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718" (id, tipo, "saldoAteBimestre", "canceladoNoAno", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920" (id, tipo, "saldoAteBimestre", "canceladoNoAno", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: RestosAPagarParaCumprimentoDoLimiteEstadual23; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."RestosAPagarParaCumprimentoDoLimiteEstadual23" (id, tipo, "saldoInicial", "rpLiquidados", "rpPagos", "rpCancelados", "saldoFinal", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: SaldoFinanceiroFundefEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."SaldoFinanceiroFundefEstado06" (id, tipo, "anoAnterior", "anoAtual", "relatorioEstadualId") FROM stdin;
\.


--
-- Data for Name: TabelaCumprimentoLimitesConstitucionaisEstado06; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."TabelaCumprimentoLimitesConstitucionaisEstado06" (id, tipo, porcentagem, "relatorioEstadualId") FROM stdin;
\.


--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2_id_seq"', 1, false);


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_id_seq"', 1, false);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ApuracaoLimiteMinimoConstitucionalEstadual21_id_seq"', 1, false);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ApuracaoLimiteMinimoConstitucionalEstadual23_id_seq"', 1, false);


--
-- Name: CompensacaoRestosAPagarEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."CompensacaoRestosAPagarEstado06_id_seq"', 1, false);


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEsta_id_seq"', 1, false);


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEst_id_seq"', 1, false);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleRecursosNoExercicioSubsequenteEstado1516_id_seq"', 1, false);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleRecursosNoExercicioSubsequenteEstadual1718_id_seq"', 1, false);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleRecursosNoExercicioSubsequenteEstadual1920_id_seq"', 1, false);


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleRestosAPagarVinculadosEducacaoEstado06_id_seq"', 1, false);


--
-- Name: ControleUtilizacaoRecursosEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleUtilizacaoRecursosEstado0912_id_seq"', 1, false);


--
-- Name: ControleUtilizacaoRecursosEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ControleUtilizacaoRecursosEstado1314_id_seq"', 1, false);


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_id_seq"', 1, false);


--
-- Name: DeducoesDaDespesaEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesDaDespesaEstado06_id_seq"', 1, false);


--
-- Name: DeducoesFinsLimiteFundebEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesFinsLimiteFundebEstado1314_id_seq"', 1, false);


--
-- Name: DeducoesFinsLimiteFundebEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesFinsLimiteFundebEstado1516_id_seq"', 1, false);


--
-- Name: DeducoesFinsLimiteFundebEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesFinsLimiteFundebEstadual1718_id_seq"', 1, false);


--
-- Name: DeducoesFinsLimiteFundebEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesFinsLimiteFundebEstadual1920_id_seq"', 1, false);


--
-- Name: DeducoesFundebMagisterioEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesFundebMagisterioEstado0912_id_seq"', 1, false);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesParaFinsDeLimitesConstitucionalEstado0912_id_seq"', 1, false);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesParaFinsDeLimitesConstitucionalEstado1314_id_seq"', 1, false);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesParaFinsDeLimitesConstitucionalEstado1516_id_seq"', 1, false);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718_id_seq"', 1, false);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920_id_seq"', 1, false);


--
-- Name: DespesaEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstado06_id_seq"', 1, false);


--
-- Name: DespesaEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstado0708_id_seq"', 1, false);


--
-- Name: DespesaEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstado0912_id_seq"', 1, false);


--
-- Name: DespesaEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstado1314_id_seq"', 1, false);


--
-- Name: DespesaEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstado1516_id_seq"', 1, false);


--
-- Name: DespesaEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstadual1718_id_seq"', 1, false);


--
-- Name: DespesaEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstadual1920_id_seq"', 1, false);


--
-- Name: DespesaEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstadual21_id_seq"', 1, false);


--
-- Name: DespesaEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesaEstadual23_id_seq"', 1, false);


--
-- Name: DespesasCusteadasFundebExercicioEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesasCusteadasFundebExercicioEstadual21_id_seq"', 1, false);


--
-- Name: DespesasCusteadasFundebExercicioEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."DespesasCusteadasFundebExercicioEstadual23_id_seq"', 1, false);


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."EmendaConstitucionalExclusivoSiopeEstadual23_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroDeRecursosEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroDeRecursosEstado0912_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroDeRecursosEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroDeRecursosEstado1314_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroDeRecursosFundebEstado1516_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroRecursosEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroRecursosEstadual1718_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroRecursosEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroRecursosEstadual1920_id_seq"', 1, false);


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."FluxoFinanceiroRecursosFundebEstado0708_id_seq"', 1, false);


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicador21Art25AplicacaoSuperavitEstadual_id_seq"', 1, false);


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicador21Art25MaximoDeSuperavitEstadual_id_seq"', 1, false);


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicador23Art25AplicacaoSuperavitEstadual_id_seq"', 1, false);


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_id_seq"', 1, false);


--
-- Name: Indicadores21Art212Estadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicadores21Art212Estadual_id_seq"', 1, false);


--
-- Name: Indicadores23Art212Estadual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Indicadores23Art212Estadual_id_seq"', 1, false);


--
-- Name: IndicadoresFundebEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."IndicadoresFundebEstado1314_id_seq"', 1, false);


--
-- Name: IndicadoresFundebEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."IndicadoresFundebEstado1516_id_seq"', 1, false);


--
-- Name: IndicadoresFundebEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."IndicadoresFundebEstadual1718_id_seq"', 1, false);


--
-- Name: IndicadoresFundebEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."IndicadoresFundebEstadual1920_id_seq"', 1, false);


--
-- Name: InformacoesControleFinanceiroEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."InformacoesControleFinanceiroEstado0708_id_seq"', 1, false);


--
-- Name: Minimo60PorCentoFundebEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."Minimo60PorCentoFundebEstado0708_id_seq"', 1, false);


--
-- Name: PerdaGanhoTransferenciasFundebEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."PerdaGanhoTransferenciasFundebEstado06_id_seq"', 1, false);


--
-- Name: ReceitaEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstado06_id_seq"', 1, false);


--
-- Name: ReceitaEstado0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstado0708_id_seq"', 1, false);


--
-- Name: ReceitaEstado0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstado0912_id_seq"', 1, false);


--
-- Name: ReceitaEstado1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstado1314_id_seq"', 1, false);


--
-- Name: ReceitaEstado1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstado1516_id_seq"', 1, false);


--
-- Name: ReceitaEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstadual1718_id_seq"', 1, false);


--
-- Name: ReceitaEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstadual1920_id_seq"', 1, false);


--
-- Name: ReceitaEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstadual21_id_seq"', 1, false);


--
-- Name: ReceitaEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."ReceitaEstadual23_id_seq"', 1, false);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RecursosRecebidosNaoUtilizadosEstadual21_id_seq"', 1, false);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RecursosRecebidosNaoUtilizadosEstadual23_id_seq"', 1, false);


--
-- Name: RelatorioEstadual06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual06_id_seq"', 1, false);


--
-- Name: RelatorioEstadual0708_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual0708_id_seq"', 1, false);


--
-- Name: RelatorioEstadual0912_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual0912_id_seq"', 1, false);


--
-- Name: RelatorioEstadual1314_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual1314_id_seq"', 1, false);


--
-- Name: RelatorioEstadual1516_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual1516_id_seq"', 1, false);


--
-- Name: RelatorioEstadual1718_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual1718_id_seq"', 1, false);


--
-- Name: RelatorioEstadual1920_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual1920_id_seq"', 1, false);


--
-- Name: RelatorioEstadual21_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual21_id_seq"', 1, false);


--
-- Name: RelatorioEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RelatorioEstadual23_id_seq"', 1, false);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado091_id_seq"', 1, false);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado131_id_seq"', 1, false);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado151_id_seq"', 1, false);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1_id_seq"', 1, false);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual_id_seq1"', 1, false);


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."RestosAPagarParaCumprimentoDoLimiteEstadual23_id_seq"', 1, false);


--
-- Name: SaldoFinanceiroFundefEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."SaldoFinanceiroFundefEstado06_id_seq"', 1, false);


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."TabelaCumprimentoLimitesConstitucionaisEstado06_id_seq"', 1, false);


--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21 AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21"
    ADD CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23 ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23"
    ADD CONSTRAINT "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21 ApuracaoLimiteMinimoConstitucionalEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual21"
    ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23 ApuracaoLimiteMinimoConstitucionalEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual23"
    ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: CompensacaoRestosAPagarEstado06 CompensacaoRestosAPagarEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."CompensacaoRestosAPagarEstado06"
    ADD CONSTRAINT "CompensacaoRestosAPagarEstado06_pkey" PRIMARY KEY (id);


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21 ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21"
    ADD CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_pkey" PRIMARY KEY (id);


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23 ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23"
    ADD CONSTRAINT "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_pkey" PRIMARY KEY (id);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516 ControleRecursosNoExercicioSubsequenteEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstado1516"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718 ControleRecursosNoExercicioSubsequenteEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1718"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920 ControleRecursosNoExercicioSubsequenteEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1920"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06 ControleRestosAPagarVinculadosEducacaoEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRestosAPagarVinculadosEducacaoEstado06"
    ADD CONSTRAINT "ControleRestosAPagarVinculadosEducacaoEstado06_pkey" PRIMARY KEY (id);


--
-- Name: ControleUtilizacaoRecursosEstado0912 ControleUtilizacaoRecursosEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado0912"
    ADD CONSTRAINT "ControleUtilizacaoRecursosEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: ControleUtilizacaoRecursosEstado1314 ControleUtilizacaoRecursosEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado1314"
    ADD CONSTRAINT "ControleUtilizacaoRecursosEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708 DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708"
    ADD CONSTRAINT "DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesDaDespesaEstado06 DeducoesDaDespesaEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesDaDespesaEstado06"
    ADD CONSTRAINT "DeducoesDaDespesaEstado06_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesFinsLimiteFundebEstado1314 DeducoesFinsLimiteFundebEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1314"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesFinsLimiteFundebEstado1516 DeducoesFinsLimiteFundebEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1516"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesFinsLimiteFundebEstadual1718 DeducoesFinsLimiteFundebEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1718"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesFinsLimiteFundebEstadual1920 DeducoesFinsLimiteFundebEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1920"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesFundebMagisterioEstado0912 DeducoesFundebMagisterioEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFundebMagisterioEstado0912"
    ADD CONSTRAINT "DeducoesFundebMagisterioEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912 DeducoesParaFinsDeLimitesConstitucionalEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado0912"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314 DeducoesParaFinsDeLimitesConstitucionalEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1314"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516 DeducoesParaFinsDeLimitesConstitucionalEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1516"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718 DeducoesParaFinsDeLimitesConstitucionalEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920 DeducoesParaFinsDeLimitesConstitucionalEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstado06 DespesaEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado06"
    ADD CONSTRAINT "DespesaEstado06_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstado0708 DespesaEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0708"
    ADD CONSTRAINT "DespesaEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstado0912 DespesaEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0912"
    ADD CONSTRAINT "DespesaEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstado1314 DespesaEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1314"
    ADD CONSTRAINT "DespesaEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstado1516 DespesaEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1516"
    ADD CONSTRAINT "DespesaEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstadual1718 DespesaEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1718"
    ADD CONSTRAINT "DespesaEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstadual1920 DespesaEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1920"
    ADD CONSTRAINT "DespesaEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstadual21 DespesaEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual21"
    ADD CONSTRAINT "DespesaEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: DespesaEstadual23 DespesaEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual23"
    ADD CONSTRAINT "DespesaEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: DespesasCusteadasFundebExercicioEstadual21 DespesasCusteadasFundebExercicioEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual21"
    ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: DespesasCusteadasFundebExercicioEstadual23 DespesasCusteadasFundebExercicioEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual23"
    ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23 EmendaConstitucionalExclusivoSiopeEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."EmendaConstitucionalExclusivoSiopeEstadual23"
    ADD CONSTRAINT "EmendaConstitucionalExclusivoSiopeEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroDeRecursosEstado0912 FluxoFinanceiroDeRecursosEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado0912"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroDeRecursosEstado1314 FluxoFinanceiroDeRecursosEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado1314"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516 FluxoFinanceiroDeRecursosFundebEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosFundebEstado1516"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosFundebEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroRecursosEstadual1718 FluxoFinanceiroRecursosEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1718"
    ADD CONSTRAINT "FluxoFinanceiroRecursosEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroRecursosEstadual1920 FluxoFinanceiroRecursosEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1920"
    ADD CONSTRAINT "FluxoFinanceiroRecursosEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708 FluxoFinanceiroRecursosFundebEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosFundebEstado0708"
    ADD CONSTRAINT "FluxoFinanceiroRecursosFundebEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual Indicador21Art25AplicacaoSuperavitEstadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25AplicacaoSuperavitEstadual"
    ADD CONSTRAINT "Indicador21Art25AplicacaoSuperavitEstadual_pkey" PRIMARY KEY (id);


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual Indicador21Art25MaximoDeSuperavitEstadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25MaximoDeSuperavitEstadual"
    ADD CONSTRAINT "Indicador21Art25MaximoDeSuperavitEstadual_pkey" PRIMARY KEY (id);


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual Indicador23Art25AplicacaoSuperavitEstadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25AplicacaoSuperavitEstadual"
    ADD CONSTRAINT "Indicador23Art25AplicacaoSuperavitEstadual_pkey" PRIMARY KEY (id);


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual"
    ADD CONSTRAINT "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_pkey" PRIMARY KEY (id);


--
-- Name: Indicadores21Art212Estadual Indicadores21Art212Estadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores21Art212Estadual"
    ADD CONSTRAINT "Indicadores21Art212Estadual_pkey" PRIMARY KEY (id);


--
-- Name: Indicadores23Art212Estadual Indicadores23Art212Estadual_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores23Art212Estadual"
    ADD CONSTRAINT "Indicadores23Art212Estadual_pkey" PRIMARY KEY (id);


--
-- Name: IndicadoresFundebEstado1314 IndicadoresFundebEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1314"
    ADD CONSTRAINT "IndicadoresFundebEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: IndicadoresFundebEstado1516 IndicadoresFundebEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1516"
    ADD CONSTRAINT "IndicadoresFundebEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: IndicadoresFundebEstadual1718 IndicadoresFundebEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1718"
    ADD CONSTRAINT "IndicadoresFundebEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: IndicadoresFundebEstadual1920 IndicadoresFundebEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1920"
    ADD CONSTRAINT "IndicadoresFundebEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: InformacoesControleFinanceiroEstado0708 InformacoesControleFinanceiroEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."InformacoesControleFinanceiroEstado0708"
    ADD CONSTRAINT "InformacoesControleFinanceiroEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: Minimo60PorCentoFundebEstado0708 Minimo60PorCentoFundebEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Minimo60PorCentoFundebEstado0708"
    ADD CONSTRAINT "Minimo60PorCentoFundebEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: PerdaGanhoTransferenciasFundebEstado06 PerdaGanhoTransferenciasFundebEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."PerdaGanhoTransferenciasFundebEstado06"
    ADD CONSTRAINT "PerdaGanhoTransferenciasFundebEstado06_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstado06 ReceitaEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado06"
    ADD CONSTRAINT "ReceitaEstado06_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstado0708 ReceitaEstado0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0708"
    ADD CONSTRAINT "ReceitaEstado0708_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstado0912 ReceitaEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0912"
    ADD CONSTRAINT "ReceitaEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstado1314 ReceitaEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1314"
    ADD CONSTRAINT "ReceitaEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstado1516 ReceitaEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1516"
    ADD CONSTRAINT "ReceitaEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstadual1718 ReceitaEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1718"
    ADD CONSTRAINT "ReceitaEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstadual1920 ReceitaEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1920"
    ADD CONSTRAINT "ReceitaEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstadual21 ReceitaEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual21"
    ADD CONSTRAINT "ReceitaEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: ReceitaEstadual23 ReceitaEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual23"
    ADD CONSTRAINT "ReceitaEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21 RecursosRecebidosNaoUtilizadosEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual21"
    ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23 RecursosRecebidosNaoUtilizadosEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual23"
    ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual06 RelatorioEstadual06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual06"
    ADD CONSTRAINT "RelatorioEstadual06_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual0708 RelatorioEstadual0708_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual0708"
    ADD CONSTRAINT "RelatorioEstadual0708_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual0912 RelatorioEstadual0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual0912"
    ADD CONSTRAINT "RelatorioEstadual0912_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual1314 RelatorioEstadual1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1314"
    ADD CONSTRAINT "RelatorioEstadual1314_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual1516 RelatorioEstadual1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1516"
    ADD CONSTRAINT "RelatorioEstadual1516_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual1718 RelatorioEstadual1718_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1718"
    ADD CONSTRAINT "RelatorioEstadual1718_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual1920 RelatorioEstadual1920_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual1920"
    ADD CONSTRAINT "RelatorioEstadual1920_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual21 RelatorioEstadual21_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual21"
    ADD CONSTRAINT "RelatorioEstadual21_pkey" PRIMARY KEY (id);


--
-- Name: RelatorioEstadual23 RelatorioEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RelatorioEstadual23"
    ADD CONSTRAINT "RelatorioEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912 RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314 RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516 RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718 RestosAPagarInscritosDisponibilidadesFinanceiraEstadual171_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual171_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920 RestosAPagarInscritosDisponibilidadesFinanceiraEstadual192_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual192_pkey" PRIMARY KEY (id);


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23 RestosAPagarParaCumprimentoDoLimiteEstadual23_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarParaCumprimentoDoLimiteEstadual23"
    ADD CONSTRAINT "RestosAPagarParaCumprimentoDoLimiteEstadual23_pkey" PRIMARY KEY (id);


--
-- Name: SaldoFinanceiroFundefEstado06 SaldoFinanceiroFundefEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."SaldoFinanceiroFundefEstado06"
    ADD CONSTRAINT "SaldoFinanceiroFundefEstado06_pkey" PRIMARY KEY (id);


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06 TabelaCumprimentoLimitesConstitucionaisEstado06_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."TabelaCumprimentoLimitesConstitucionaisEstado06"
    ADD CONSTRAINT "TabelaCumprimentoLimitesConstitucionaisEstado06_pkey" PRIMARY KEY (id);


--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_r_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_r_key" ON public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relato_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relato_key" ON public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEstad_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEstad_key" ON public."ApuracaoLimiteMinimoConstitucionalEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEstad_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEstad_key" ON public."ApuracaoLimiteMinimoConstitucionalEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: CompensacaoRestosAPagarEstado06_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "CompensacaoRestosAPagarEstado06_relatorioEstadualId_tipo_key" ON public."CompensacaoRestosAPagarEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadua_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadua_key" ON public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadu_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadu_key" ON public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516_relatorioE_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequenteEstado1516_relatorioE_key" ON public."ControleRecursosNoExercicioSubsequenteEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718_relatori_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequenteEstadual1718_relatori_key" ON public."ControleRecursosNoExercicioSubsequenteEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920_relatori_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequenteEstadual1920_relatori_key" ON public."ControleRecursosNoExercicioSubsequenteEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06_relatorioEst_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleRestosAPagarVinculadosEducacaoEstado06_relatorioEst_key" ON public."ControleRestosAPagarVinculadosEducacaoEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleUtilizacaoRecursosEstado0912_relatorioEstadualId_ti_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleUtilizacaoRecursosEstado0912_relatorioEstadualId_ti_key" ON public."ControleUtilizacaoRecursosEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ControleUtilizacaoRecursosEstado1314_relatorioEstadualId_ti_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ControleUtilizacaoRecursosEstado1314_relatorioEstadualId_ti_key" ON public."ControleUtilizacaoRecursosEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_relat_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_relat_key" ON public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesDaDespesaEstado06_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesDaDespesaEstado06_relatorioEstadualId_tipo_key" ON public."DeducoesDaDespesaEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesFinsLimiteFundebEstado1314_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesFinsLimiteFundebEstado1314_relatorioEstadualId_tipo_key" ON public."DeducoesFinsLimiteFundebEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesFinsLimiteFundebEstado1516_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesFinsLimiteFundebEstado1516_relatorioEstadualId_tipo_key" ON public."DeducoesFinsLimiteFundebEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesFinsLimiteFundebEstadual1718_relatorioEstadualId_ti_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesFinsLimiteFundebEstadual1718_relatorioEstadualId_ti_key" ON public."DeducoesFinsLimiteFundebEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesFinsLimiteFundebEstadual1920_relatorioEstadualId_ti_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesFinsLimiteFundebEstadual1920_relatorioEstadualId_ti_key" ON public."DeducoesFinsLimiteFundebEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesFundebMagisterioEstado0912_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesFundebMagisterioEstado0912_relatorioEstadualId_tipo_key" ON public."DeducoesFundebMagisterioEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912_relatorio_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucionalEstado0912_relatorio_key" ON public."DeducoesParaFinsDeLimitesConstitucionalEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314_relatorio_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucionalEstado1314_relatorio_key" ON public."DeducoesParaFinsDeLimitesConstitucionalEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516_relatorio_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucionalEstado1516_relatorio_key" ON public."DeducoesParaFinsDeLimitesConstitucionalEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718_relator_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucionalEstadual1718_relator_key" ON public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920_relator_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucionalEstadual1920_relator_key" ON public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstado06_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstado06_relatorioEstadualId_tipo_key" ON public."DespesaEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstado0708_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstado0708_relatorioEstadualId_tipo_key" ON public."DespesaEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstado0912_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstado0912_relatorioEstadualId_tipo_key" ON public."DespesaEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstado1314_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstado1314_relatorioEstadualId_tipo_key" ON public."DespesaEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstado1516_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstado1516_relatorioEstadualId_tipo_key" ON public."DespesaEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstadual1718_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstadual1718_relatorioEstadualId_tipo_key" ON public."DespesaEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstadual1920_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstadual1920_relatorioEstadualId_tipo_key" ON public."DespesaEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstadual21_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstadual21_relatorioEstadualId_tipo_key" ON public."DespesaEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesaEstadual23_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesaEstadual23_relatorioEstadualId_tipo_key" ON public."DespesaEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesasCusteadasFundebExercicioEstadual21_relatorioEstadua_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicioEstadual21_relatorioEstadua_key" ON public."DespesasCusteadasFundebExercicioEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: DespesasCusteadasFundebExercicioEstadual23_relatorioEstadua_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicioEstadual23_relatorioEstadua_key" ON public."DespesasCusteadasFundebExercicioEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEstad_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEstad_key" ON public."EmendaConstitucionalExclusivoSiopeEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroDeRecursosEstado0912_relatorioEstadualId_tip_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursosEstado0912_relatorioEstadualId_tip_key" ON public."FluxoFinanceiroDeRecursosEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroDeRecursosEstado1314_relatorioEstadualId_tip_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursosEstado1314_relatorioEstadualId_tip_key" ON public."FluxoFinanceiroDeRecursosEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516_relatorioEstadual_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursosFundebEstado1516_relatorioEstadual_key" ON public."FluxoFinanceiroDeRecursosFundebEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_tip_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_tip_key" ON public."FluxoFinanceiroRecursosEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroRecursosEstadual1920_relatorioEstadualId_tip_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroRecursosEstadual1920_relatorioEstadualId_tip_key" ON public."FluxoFinanceiroRecursosEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708_relatorioEstadualId_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "FluxoFinanceiroRecursosFundebEstado0708_relatorioEstadualId_key" ON public."FluxoFinanceiroRecursosFundebEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadua_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadua_key" ON public."Indicador21Art25AplicacaoSuperavitEstadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadual_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadual_key" ON public."Indicador21Art25MaximoDeSuperavitEstadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadua_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadua_key" ON public."Indicador23Art25AplicacaoSuperavitEstadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relator_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relator_key" ON public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicadores21Art212Estadual_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicadores21Art212Estadual_relatorioEstadualId_tipo_key" ON public."Indicadores21Art212Estadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Indicadores23Art212Estadual_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Indicadores23Art212Estadual_relatorioEstadualId_tipo_key" ON public."Indicadores23Art212Estadual" USING btree ("relatorioEstadualId", tipo);


--
-- Name: IndicadoresFundebEstado1314_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "IndicadoresFundebEstado1314_relatorioEstadualId_tipo_key" ON public."IndicadoresFundebEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: IndicadoresFundebEstado1516_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "IndicadoresFundebEstado1516_relatorioEstadualId_tipo_key" ON public."IndicadoresFundebEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: IndicadoresFundebEstadual1718_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "IndicadoresFundebEstadual1718_relatorioEstadualId_tipo_key" ON public."IndicadoresFundebEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: IndicadoresFundebEstadual1920_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "IndicadoresFundebEstadual1920_relatorioEstadualId_tipo_key" ON public."IndicadoresFundebEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: InformacoesControleFinanceiroEstado0708_relatorioEstadualId_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "InformacoesControleFinanceiroEstado0708_relatorioEstadualId_key" ON public."InformacoesControleFinanceiroEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: Minimo60PorCentoFundebEstado0708_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "Minimo60PorCentoFundebEstado0708_relatorioEstadualId_tipo_key" ON public."Minimo60PorCentoFundebEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: PerdaGanhoTransferenciasFundebEstado06_relatorioEstadualId__key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "PerdaGanhoTransferenciasFundebEstado06_relatorioEstadualId__key" ON public."PerdaGanhoTransferenciasFundebEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstado06_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstado06_relatorioEstadualId_tipo_key" ON public."ReceitaEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstado0708_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstado0708_relatorioEstadualId_tipo_key" ON public."ReceitaEstado0708" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstado0912_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstado0912_relatorioEstadualId_tipo_key" ON public."ReceitaEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstado1314_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstado1314_relatorioEstadualId_tipo_key" ON public."ReceitaEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstado1516_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstado1516_relatorioEstadualId_tipo_key" ON public."ReceitaEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstadual1718_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstadual1718_relatorioEstadualId_tipo_key" ON public."ReceitaEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstadual1920_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstadual1920_relatorioEstadualId_tipo_key" ON public."ReceitaEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstadual21_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstadual21_relatorioEstadualId_tipo_key" ON public."ReceitaEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: ReceitaEstadual23_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "ReceitaEstadual23_relatorioEstadualId_tipo_key" ON public."ReceitaEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadualI_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadualI_key" ON public."RecursosRecebidosNaoUtilizadosEstadual21" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadualI_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadualI_key" ON public."RecursosRecebidosNaoUtilizadosEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912_r_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912_r_key" ON public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314_r_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314_r_key" ON public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516_r_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516_r_key" ON public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718_key" ON public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920_key" ON public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920" USING btree ("relatorioEstadualId", tipo);


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEsta_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEsta_key" ON public."RestosAPagarParaCumprimentoDoLimiteEstadual23" USING btree ("relatorioEstadualId", tipo);


--
-- Name: SaldoFinanceiroFundefEstado06_relatorioEstadualId_tipo_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "SaldoFinanceiroFundefEstado06_relatorioEstadualId_tipo_key" ON public."SaldoFinanceiroFundefEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06_relatorioEs_key; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX "TabelaCumprimentoLimitesConstitucionaisEstado06_relatorioEs_key" ON public."TabelaCumprimentoLimitesConstitucionaisEstado06" USING btree ("relatorioEstadualId", tipo);


--
-- Name: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21 AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21__fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21"
    ADD CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21__fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ApuracaoDespesasLimiteMinimoConstitucionalEstadual23 ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relat_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoDespesasLimiteMinimoConstitucionalEstadual23"
    ADD CONSTRAINT "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relat_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual21 ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEsta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual21"
    ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ApuracaoLimiteMinimoConstitucionalEstadual23 ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEsta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ApuracaoLimiteMinimoConstitucionalEstadual23"
    ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: CompensacaoRestosAPagarEstado06 CompensacaoRestosAPagarEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."CompensacaoRestosAPagarEstado06"
    ADD CONSTRAINT "CompensacaoRestosAPagarEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21 ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21"
    ADD CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23 ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23"
    ADD CONSTRAINT "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstado1516 ControleRecursosNoExercicioSubsequenteEstado1516_relatorio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstado1516"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstado1516_relatorio_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1718 ControleRecursosNoExercicioSubsequenteEstadual1718_relator_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1718"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1718_relator_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleRecursosNoExercicioSubsequenteEstadual1920 ControleRecursosNoExercicioSubsequenteEstadual1920_relator_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRecursosNoExercicioSubsequenteEstadual1920"
    ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1920_relator_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleRestosAPagarVinculadosEducacaoEstado06 ControleRestosAPagarVinculadosEducacaoEstado06_relatorioEs_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleRestosAPagarVinculadosEducacaoEstado06"
    ADD CONSTRAINT "ControleRestosAPagarVinculadosEducacaoEstado06_relatorioEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleUtilizacaoRecursosEstado0912 ControleUtilizacaoRecursosEstado0912_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado0912"
    ADD CONSTRAINT "ControleUtilizacaoRecursosEstado0912_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ControleUtilizacaoRecursosEstado1314 ControleUtilizacaoRecursosEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ControleUtilizacaoRecursosEstado1314"
    ADD CONSTRAINT "ControleUtilizacaoRecursosEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708 DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_rela_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708"
    ADD CONSTRAINT "DeducoesAdicoesParaFinsLimiteConstitucionalEstado0708_rela_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesDaDespesaEstado06 DeducoesDaDespesaEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesDaDespesaEstado06"
    ADD CONSTRAINT "DeducoesDaDespesaEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesFinsLimiteFundebEstado1314 DeducoesFinsLimiteFundebEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1314"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesFinsLimiteFundebEstado1516 DeducoesFinsLimiteFundebEstado1516_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstado1516"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstado1516_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesFinsLimiteFundebEstadual1718 DeducoesFinsLimiteFundebEstadual1718_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1718"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesFinsLimiteFundebEstadual1920 DeducoesFinsLimiteFundebEstadual1920_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFinsLimiteFundebEstadual1920"
    ADD CONSTRAINT "DeducoesFinsLimiteFundebEstadual1920_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesFundebMagisterioEstado0912 DeducoesFundebMagisterioEstado0912_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesFundebMagisterioEstado0912"
    ADD CONSTRAINT "DeducoesFundebMagisterioEstado0912_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado0912 DeducoesParaFinsDeLimitesConstitucionalEstado0912_relatori_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado0912"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado0912_relatori_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1314 DeducoesParaFinsDeLimitesConstitucionalEstado1314_relatori_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1314"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado1314_relatori_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstado1516 DeducoesParaFinsDeLimitesConstitucionalEstado1516_relatori_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstado1516"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstado1516_relatori_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1718 DeducoesParaFinsDeLimitesConstitucionalEstadual1718_relato_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1718"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstadual1718_relato_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DeducoesParaFinsDeLimitesConstitucionalEstadual1920 DeducoesParaFinsDeLimitesConstitucionalEstadual1920_relato_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DeducoesParaFinsDeLimitesConstitucionalEstadual1920"
    ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucionalEstadual1920_relato_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstado06 DespesaEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado06"
    ADD CONSTRAINT "DespesaEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstado0708 DespesaEstado0708_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0708"
    ADD CONSTRAINT "DespesaEstado0708_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstado0912 DespesaEstado0912_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado0912"
    ADD CONSTRAINT "DespesaEstado0912_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstado1314 DespesaEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1314"
    ADD CONSTRAINT "DespesaEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstado1516 DespesaEstado1516_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstado1516"
    ADD CONSTRAINT "DespesaEstado1516_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstadual1718 DespesaEstadual1718_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1718"
    ADD CONSTRAINT "DespesaEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstadual1920 DespesaEstadual1920_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual1920"
    ADD CONSTRAINT "DespesaEstadual1920_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstadual21 DespesaEstadual21_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual21"
    ADD CONSTRAINT "DespesaEstadual21_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesaEstadual23 DespesaEstadual23_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesaEstadual23"
    ADD CONSTRAINT "DespesaEstadual23_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesasCusteadasFundebExercicioEstadual21 DespesasCusteadasFundebExercicioEstadual21_relatorioEstadu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual21"
    ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DespesasCusteadasFundebExercicioEstadual23 DespesasCusteadasFundebExercicioEstadual23_relatorioEstadu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."DespesasCusteadasFundebExercicioEstadual23"
    ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual23_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmendaConstitucionalExclusivoSiopeEstadual23 EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEsta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."EmendaConstitucionalExclusivoSiopeEstadual23"
    ADD CONSTRAINT "EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroDeRecursosEstado0912 FluxoFinanceiroDeRecursosEstado0912_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado0912"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosEstado0912_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroDeRecursosEstado1314 FluxoFinanceiroDeRecursosEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosEstado1314"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroDeRecursosFundebEstado1516 FluxoFinanceiroDeRecursosFundebEstado1516_relatorioEstadua_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroDeRecursosFundebEstado1516"
    ADD CONSTRAINT "FluxoFinanceiroDeRecursosFundebEstado1516_relatorioEstadua_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroRecursosEstadual1718 FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1718"
    ADD CONSTRAINT "FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroRecursosEstadual1920 FluxoFinanceiroRecursosEstadual1920_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosEstadual1920"
    ADD CONSTRAINT "FluxoFinanceiroRecursosEstadual1920_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FluxoFinanceiroRecursosFundebEstado0708 FluxoFinanceiroRecursosFundebEstado0708_relatorioEstadualI_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."FluxoFinanceiroRecursosFundebEstado0708"
    ADD CONSTRAINT "FluxoFinanceiroRecursosFundebEstado0708_relatorioEstadualI_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicador21Art25AplicacaoSuperavitEstadual Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25AplicacaoSuperavitEstadual"
    ADD CONSTRAINT "Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicador21Art25MaximoDeSuperavitEstadual Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadua_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador21Art25MaximoDeSuperavitEstadual"
    ADD CONSTRAINT "Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadua_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicador23Art25AplicacaoSuperavitEstadual Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25AplicacaoSuperavitEstadual"
    ADD CONSTRAINT "Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicador23Art25Maximo10PorCentoDeSuperavitEstadual Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relato_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicador23Art25Maximo10PorCentoDeSuperavitEstadual"
    ADD CONSTRAINT "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relato_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicadores21Art212Estadual Indicadores21Art212Estadual_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores21Art212Estadual"
    ADD CONSTRAINT "Indicadores21Art212Estadual_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Indicadores23Art212Estadual Indicadores23Art212Estadual_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Indicadores23Art212Estadual"
    ADD CONSTRAINT "Indicadores23Art212Estadual_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: IndicadoresFundebEstado1314 IndicadoresFundebEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1314"
    ADD CONSTRAINT "IndicadoresFundebEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: IndicadoresFundebEstado1516 IndicadoresFundebEstado1516_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstado1516"
    ADD CONSTRAINT "IndicadoresFundebEstado1516_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: IndicadoresFundebEstadual1718 IndicadoresFundebEstadual1718_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1718"
    ADD CONSTRAINT "IndicadoresFundebEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: IndicadoresFundebEstadual1920 IndicadoresFundebEstadual1920_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."IndicadoresFundebEstadual1920"
    ADD CONSTRAINT "IndicadoresFundebEstadual1920_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: InformacoesControleFinanceiroEstado0708 InformacoesControleFinanceiroEstado0708_relatorioEstadualI_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."InformacoesControleFinanceiroEstado0708"
    ADD CONSTRAINT "InformacoesControleFinanceiroEstado0708_relatorioEstadualI_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Minimo60PorCentoFundebEstado0708 Minimo60PorCentoFundebEstado0708_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Minimo60PorCentoFundebEstado0708"
    ADD CONSTRAINT "Minimo60PorCentoFundebEstado0708_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PerdaGanhoTransferenciasFundebEstado06 PerdaGanhoTransferenciasFundebEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."PerdaGanhoTransferenciasFundebEstado06"
    ADD CONSTRAINT "PerdaGanhoTransferenciasFundebEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstado06 ReceitaEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado06"
    ADD CONSTRAINT "ReceitaEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstado0708 ReceitaEstado0708_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0708"
    ADD CONSTRAINT "ReceitaEstado0708_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0708"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstado0912 ReceitaEstado0912_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado0912"
    ADD CONSTRAINT "ReceitaEstado0912_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstado1314 ReceitaEstado1314_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1314"
    ADD CONSTRAINT "ReceitaEstado1314_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstado1516 ReceitaEstado1516_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstado1516"
    ADD CONSTRAINT "ReceitaEstado1516_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstadual1718 ReceitaEstadual1718_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1718"
    ADD CONSTRAINT "ReceitaEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstadual1920 ReceitaEstadual1920_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual1920"
    ADD CONSTRAINT "ReceitaEstadual1920_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstadual21 ReceitaEstadual21_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual21"
    ADD CONSTRAINT "ReceitaEstadual21_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ReceitaEstadual23 ReceitaEstadual23_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."ReceitaEstadual23"
    ADD CONSTRAINT "ReceitaEstadual23_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual21 RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadual_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual21"
    ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadual_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual21"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RecursosRecebidosNaoUtilizadosEstadual23 RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadual_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RecursosRecebidosNaoUtilizadosEstadual23"
    ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadual_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912 RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912__fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado0912__fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual0912"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314 RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314__fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1314__fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1314"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516 RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516__fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstado1516__fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1516"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718 RestosAPagarInscritosDisponibilidadesFinanceiraEstadual171_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1718"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual171_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1718"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920 RestosAPagarInscritosDisponibilidadesFinanceiraEstadual192_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920"
    ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceiraEstadual192_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual1920"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RestosAPagarParaCumprimentoDoLimiteEstadual23 RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEst_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."RestosAPagarParaCumprimentoDoLimiteEstadual23"
    ADD CONSTRAINT "RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEst_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual23"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SaldoFinanceiroFundefEstado06 SaldoFinanceiroFundefEstado06_relatorioEstadualId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."SaldoFinanceiroFundefEstado06"
    ADD CONSTRAINT "SaldoFinanceiroFundefEstado06_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TabelaCumprimentoLimitesConstitucionaisEstado06 TabelaCumprimentoLimitesConstitucionaisEstado06_relatorioE_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."TabelaCumprimentoLimitesConstitucionaisEstado06"
    ADD CONSTRAINT "TabelaCumprimentoLimitesConstitucionaisEstado06_relatorioE_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES public."RelatorioEstadual06"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict 88u3rwk67jfJdoYaVSX9VZk9H7R25HL7QWy9n1mCOBfIoENjUzggcvX4JL4rAAT

