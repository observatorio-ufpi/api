
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Localidade
 * 
 */
export type Localidade = $Result.DefaultSelection<Prisma.$LocalidadePayload>
/**
 * Model DependenciaAdministrativaBasica
 * 
 */
export type DependenciaAdministrativaBasica = $Result.DefaultSelection<Prisma.$DependenciaAdministrativaBasicaPayload>
/**
 * Model EtapaEnsinoBasica
 * 
 */
export type EtapaEnsinoBasica = $Result.DefaultSelection<Prisma.$EtapaEnsinoBasicaPayload>
/**
 * Model EtapaEnsinoBasicaSchool
 * 
 */
export type EtapaEnsinoBasicaSchool = $Result.DefaultSelection<Prisma.$EtapaEnsinoBasicaSchoolPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>
/**
 * Model VinculoFuncional
 * 
 */
export type VinculoFuncional = $Result.DefaultSelection<Prisma.$VinculoFuncionalPayload>
/**
 * Model FormacaoDocente
 * 
 */
export type FormacaoDocente = $Result.DefaultSelection<Prisma.$FormacaoDocentePayload>
/**
 * Model FaixaEtaria
 * 
 */
export type FaixaEtaria = $Result.DefaultSelection<Prisma.$FaixaEtariaPayload>
/**
 * Model DadoEducacaoBasica
 * 
 */
export type DadoEducacaoBasica = $Result.DefaultSelection<Prisma.$DadoEducacaoBasicaPayload>
/**
 * Model ImportacaoAPI
 * 
 */
export type ImportacaoAPI = $Result.DefaultSelection<Prisma.$ImportacaoAPIPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Localidades
 * const localidades = await prisma.localidade.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Localidades
   * const localidades = await prisma.localidade.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.localidade`: Exposes CRUD operations for the **Localidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localidades
    * const localidades = await prisma.localidade.findMany()
    * ```
    */
  get localidade(): Prisma.LocalidadeDelegate<ExtArgs>;

  /**
   * `prisma.dependenciaAdministrativaBasica`: Exposes CRUD operations for the **DependenciaAdministrativaBasica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DependenciaAdministrativaBasicas
    * const dependenciaAdministrativaBasicas = await prisma.dependenciaAdministrativaBasica.findMany()
    * ```
    */
  get dependenciaAdministrativaBasica(): Prisma.DependenciaAdministrativaBasicaDelegate<ExtArgs>;

  /**
   * `prisma.etapaEnsinoBasica`: Exposes CRUD operations for the **EtapaEnsinoBasica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EtapaEnsinoBasicas
    * const etapaEnsinoBasicas = await prisma.etapaEnsinoBasica.findMany()
    * ```
    */
  get etapaEnsinoBasica(): Prisma.EtapaEnsinoBasicaDelegate<ExtArgs>;

  /**
   * `prisma.etapaEnsinoBasicaSchool`: Exposes CRUD operations for the **EtapaEnsinoBasicaSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EtapaEnsinoBasicaSchools
    * const etapaEnsinoBasicaSchools = await prisma.etapaEnsinoBasicaSchool.findMany()
    * ```
    */
  get etapaEnsinoBasicaSchool(): Prisma.EtapaEnsinoBasicaSchoolDelegate<ExtArgs>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs>;

  /**
   * `prisma.vinculoFuncional`: Exposes CRUD operations for the **VinculoFuncional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VinculoFuncionals
    * const vinculoFuncionals = await prisma.vinculoFuncional.findMany()
    * ```
    */
  get vinculoFuncional(): Prisma.VinculoFuncionalDelegate<ExtArgs>;

  /**
   * `prisma.formacaoDocente`: Exposes CRUD operations for the **FormacaoDocente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormacaoDocentes
    * const formacaoDocentes = await prisma.formacaoDocente.findMany()
    * ```
    */
  get formacaoDocente(): Prisma.FormacaoDocenteDelegate<ExtArgs>;

  /**
   * `prisma.faixaEtaria`: Exposes CRUD operations for the **FaixaEtaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FaixaEtarias
    * const faixaEtarias = await prisma.faixaEtaria.findMany()
    * ```
    */
  get faixaEtaria(): Prisma.FaixaEtariaDelegate<ExtArgs>;

  /**
   * `prisma.dadoEducacaoBasica`: Exposes CRUD operations for the **DadoEducacaoBasica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DadoEducacaoBasicas
    * const dadoEducacaoBasicas = await prisma.dadoEducacaoBasica.findMany()
    * ```
    */
  get dadoEducacaoBasica(): Prisma.DadoEducacaoBasicaDelegate<ExtArgs>;

  /**
   * `prisma.importacaoAPI`: Exposes CRUD operations for the **ImportacaoAPI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportacaoAPIS
    * const importacaoAPIS = await prisma.importacaoAPI.findMany()
    * ```
    */
  get importacaoAPI(): Prisma.ImportacaoAPIDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Localidade: 'Localidade',
    DependenciaAdministrativaBasica: 'DependenciaAdministrativaBasica',
    EtapaEnsinoBasica: 'EtapaEnsinoBasica',
    EtapaEnsinoBasicaSchool: 'EtapaEnsinoBasicaSchool',
    Localizacao: 'Localizacao',
    VinculoFuncional: 'VinculoFuncional',
    FormacaoDocente: 'FormacaoDocente',
    FaixaEtaria: 'FaixaEtaria',
    DadoEducacaoBasica: 'DadoEducacaoBasica',
    ImportacaoAPI: 'ImportacaoAPI'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'localidade' | 'dependenciaAdministrativaBasica' | 'etapaEnsinoBasica' | 'etapaEnsinoBasicaSchool' | 'localizacao' | 'vinculoFuncional' | 'formacaoDocente' | 'faixaEtaria' | 'dadoEducacaoBasica' | 'importacaoAPI'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Localidade: {
        payload: Prisma.$LocalidadePayload<ExtArgs>
        fields: Prisma.LocalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalidadeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalidadeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          findFirst: {
            args: Prisma.LocalidadeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalidadeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          findMany: {
            args: Prisma.LocalidadeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>[]
          }
          create: {
            args: Prisma.LocalidadeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          createMany: {
            args: Prisma.LocalidadeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocalidadeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          update: {
            args: Prisma.LocalidadeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          deleteMany: {
            args: Prisma.LocalidadeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocalidadeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocalidadeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalidadePayload>
          }
          aggregate: {
            args: Prisma.LocalidadeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocalidade>
          }
          groupBy: {
            args: Prisma.LocalidadeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalidadeCountArgs<ExtArgs>,
            result: $Utils.Optional<LocalidadeCountAggregateOutputType> | number
          }
        }
      }
      DependenciaAdministrativaBasica: {
        payload: Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>
        fields: Prisma.DependenciaAdministrativaBasicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DependenciaAdministrativaBasicaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DependenciaAdministrativaBasicaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          findFirst: {
            args: Prisma.DependenciaAdministrativaBasicaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DependenciaAdministrativaBasicaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          findMany: {
            args: Prisma.DependenciaAdministrativaBasicaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>[]
          }
          create: {
            args: Prisma.DependenciaAdministrativaBasicaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          createMany: {
            args: Prisma.DependenciaAdministrativaBasicaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DependenciaAdministrativaBasicaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          update: {
            args: Prisma.DependenciaAdministrativaBasicaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          deleteMany: {
            args: Prisma.DependenciaAdministrativaBasicaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DependenciaAdministrativaBasicaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DependenciaAdministrativaBasicaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DependenciaAdministrativaBasicaPayload>
          }
          aggregate: {
            args: Prisma.DependenciaAdministrativaBasicaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDependenciaAdministrativaBasica>
          }
          groupBy: {
            args: Prisma.DependenciaAdministrativaBasicaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DependenciaAdministrativaBasicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DependenciaAdministrativaBasicaCountArgs<ExtArgs>,
            result: $Utils.Optional<DependenciaAdministrativaBasicaCountAggregateOutputType> | number
          }
        }
      }
      EtapaEnsinoBasica: {
        payload: Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>
        fields: Prisma.EtapaEnsinoBasicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtapaEnsinoBasicaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtapaEnsinoBasicaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          findFirst: {
            args: Prisma.EtapaEnsinoBasicaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtapaEnsinoBasicaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          findMany: {
            args: Prisma.EtapaEnsinoBasicaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>[]
          }
          create: {
            args: Prisma.EtapaEnsinoBasicaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          createMany: {
            args: Prisma.EtapaEnsinoBasicaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EtapaEnsinoBasicaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          update: {
            args: Prisma.EtapaEnsinoBasicaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          deleteMany: {
            args: Prisma.EtapaEnsinoBasicaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EtapaEnsinoBasicaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EtapaEnsinoBasicaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaPayload>
          }
          aggregate: {
            args: Prisma.EtapaEnsinoBasicaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEtapaEnsinoBasica>
          }
          groupBy: {
            args: Prisma.EtapaEnsinoBasicaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EtapaEnsinoBasicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtapaEnsinoBasicaCountArgs<ExtArgs>,
            result: $Utils.Optional<EtapaEnsinoBasicaCountAggregateOutputType> | number
          }
        }
      }
      EtapaEnsinoBasicaSchool: {
        payload: Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>
        fields: Prisma.EtapaEnsinoBasicaSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtapaEnsinoBasicaSchoolFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtapaEnsinoBasicaSchoolFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          findFirst: {
            args: Prisma.EtapaEnsinoBasicaSchoolFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtapaEnsinoBasicaSchoolFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          findMany: {
            args: Prisma.EtapaEnsinoBasicaSchoolFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>[]
          }
          create: {
            args: Prisma.EtapaEnsinoBasicaSchoolCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          createMany: {
            args: Prisma.EtapaEnsinoBasicaSchoolCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EtapaEnsinoBasicaSchoolDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          update: {
            args: Prisma.EtapaEnsinoBasicaSchoolUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          deleteMany: {
            args: Prisma.EtapaEnsinoBasicaSchoolDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EtapaEnsinoBasicaSchoolUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EtapaEnsinoBasicaSchoolUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EtapaEnsinoBasicaSchoolPayload>
          }
          aggregate: {
            args: Prisma.EtapaEnsinoBasicaSchoolAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEtapaEnsinoBasicaSchool>
          }
          groupBy: {
            args: Prisma.EtapaEnsinoBasicaSchoolGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EtapaEnsinoBasicaSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtapaEnsinoBasicaSchoolCountArgs<ExtArgs>,
            result: $Utils.Optional<EtapaEnsinoBasicaSchoolCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      VinculoFuncional: {
        payload: Prisma.$VinculoFuncionalPayload<ExtArgs>
        fields: Prisma.VinculoFuncionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VinculoFuncionalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VinculoFuncionalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          findFirst: {
            args: Prisma.VinculoFuncionalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VinculoFuncionalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          findMany: {
            args: Prisma.VinculoFuncionalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>[]
          }
          create: {
            args: Prisma.VinculoFuncionalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          createMany: {
            args: Prisma.VinculoFuncionalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VinculoFuncionalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          update: {
            args: Prisma.VinculoFuncionalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          deleteMany: {
            args: Prisma.VinculoFuncionalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VinculoFuncionalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VinculoFuncionalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VinculoFuncionalPayload>
          }
          aggregate: {
            args: Prisma.VinculoFuncionalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVinculoFuncional>
          }
          groupBy: {
            args: Prisma.VinculoFuncionalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VinculoFuncionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.VinculoFuncionalCountArgs<ExtArgs>,
            result: $Utils.Optional<VinculoFuncionalCountAggregateOutputType> | number
          }
        }
      }
      FormacaoDocente: {
        payload: Prisma.$FormacaoDocentePayload<ExtArgs>
        fields: Prisma.FormacaoDocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormacaoDocenteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormacaoDocenteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          findFirst: {
            args: Prisma.FormacaoDocenteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormacaoDocenteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          findMany: {
            args: Prisma.FormacaoDocenteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>[]
          }
          create: {
            args: Prisma.FormacaoDocenteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          createMany: {
            args: Prisma.FormacaoDocenteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FormacaoDocenteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          update: {
            args: Prisma.FormacaoDocenteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          deleteMany: {
            args: Prisma.FormacaoDocenteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FormacaoDocenteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FormacaoDocenteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormacaoDocentePayload>
          }
          aggregate: {
            args: Prisma.FormacaoDocenteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFormacaoDocente>
          }
          groupBy: {
            args: Prisma.FormacaoDocenteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormacaoDocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormacaoDocenteCountArgs<ExtArgs>,
            result: $Utils.Optional<FormacaoDocenteCountAggregateOutputType> | number
          }
        }
      }
      FaixaEtaria: {
        payload: Prisma.$FaixaEtariaPayload<ExtArgs>
        fields: Prisma.FaixaEtariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaixaEtariaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaixaEtariaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          findFirst: {
            args: Prisma.FaixaEtariaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaixaEtariaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          findMany: {
            args: Prisma.FaixaEtariaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>[]
          }
          create: {
            args: Prisma.FaixaEtariaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          createMany: {
            args: Prisma.FaixaEtariaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FaixaEtariaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          update: {
            args: Prisma.FaixaEtariaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          deleteMany: {
            args: Prisma.FaixaEtariaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FaixaEtariaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FaixaEtariaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaixaEtariaPayload>
          }
          aggregate: {
            args: Prisma.FaixaEtariaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFaixaEtaria>
          }
          groupBy: {
            args: Prisma.FaixaEtariaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FaixaEtariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaixaEtariaCountArgs<ExtArgs>,
            result: $Utils.Optional<FaixaEtariaCountAggregateOutputType> | number
          }
        }
      }
      DadoEducacaoBasica: {
        payload: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>
        fields: Prisma.DadoEducacaoBasicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DadoEducacaoBasicaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DadoEducacaoBasicaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          findFirst: {
            args: Prisma.DadoEducacaoBasicaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DadoEducacaoBasicaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          findMany: {
            args: Prisma.DadoEducacaoBasicaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>[]
          }
          create: {
            args: Prisma.DadoEducacaoBasicaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          createMany: {
            args: Prisma.DadoEducacaoBasicaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DadoEducacaoBasicaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          update: {
            args: Prisma.DadoEducacaoBasicaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          deleteMany: {
            args: Prisma.DadoEducacaoBasicaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DadoEducacaoBasicaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DadoEducacaoBasicaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DadoEducacaoBasicaPayload>
          }
          aggregate: {
            args: Prisma.DadoEducacaoBasicaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDadoEducacaoBasica>
          }
          groupBy: {
            args: Prisma.DadoEducacaoBasicaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DadoEducacaoBasicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DadoEducacaoBasicaCountArgs<ExtArgs>,
            result: $Utils.Optional<DadoEducacaoBasicaCountAggregateOutputType> | number
          }
        }
      }
      ImportacaoAPI: {
        payload: Prisma.$ImportacaoAPIPayload<ExtArgs>
        fields: Prisma.ImportacaoAPIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportacaoAPIFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportacaoAPIFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          findFirst: {
            args: Prisma.ImportacaoAPIFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportacaoAPIFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          findMany: {
            args: Prisma.ImportacaoAPIFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>[]
          }
          create: {
            args: Prisma.ImportacaoAPICreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          createMany: {
            args: Prisma.ImportacaoAPICreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImportacaoAPIDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          update: {
            args: Prisma.ImportacaoAPIUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          deleteMany: {
            args: Prisma.ImportacaoAPIDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImportacaoAPIUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImportacaoAPIUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportacaoAPIPayload>
          }
          aggregate: {
            args: Prisma.ImportacaoAPIAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImportacaoAPI>
          }
          groupBy: {
            args: Prisma.ImportacaoAPIGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImportacaoAPIGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportacaoAPICountArgs<ExtArgs>,
            result: $Utils.Optional<ImportacaoAPICountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LocalidadeCountOutputType
   */

  export type LocalidadeCountOutputType = {
    dados_basica: number
  }

  export type LocalidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados_basica?: boolean | LocalidadeCountOutputTypeCountDados_basicaArgs
  }

  // Custom InputTypes

  /**
   * LocalidadeCountOutputType without action
   */
  export type LocalidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalidadeCountOutputType
     */
    select?: LocalidadeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LocalidadeCountOutputType without action
   */
  export type LocalidadeCountOutputTypeCountDados_basicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type DependenciaAdministrativaBasicaCountOutputType
   */

  export type DependenciaAdministrativaBasicaCountOutputType = {
    dados: number
  }

  export type DependenciaAdministrativaBasicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | DependenciaAdministrativaBasicaCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * DependenciaAdministrativaBasicaCountOutputType without action
   */
  export type DependenciaAdministrativaBasicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasicaCountOutputType
     */
    select?: DependenciaAdministrativaBasicaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DependenciaAdministrativaBasicaCountOutputType without action
   */
  export type DependenciaAdministrativaBasicaCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type EtapaEnsinoBasicaCountOutputType
   */

  export type EtapaEnsinoBasicaCountOutputType = {
    dados: number
  }

  export type EtapaEnsinoBasicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | EtapaEnsinoBasicaCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * EtapaEnsinoBasicaCountOutputType without action
   */
  export type EtapaEnsinoBasicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaCountOutputType
     */
    select?: EtapaEnsinoBasicaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EtapaEnsinoBasicaCountOutputType without action
   */
  export type EtapaEnsinoBasicaCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type EtapaEnsinoBasicaSchoolCountOutputType
   */

  export type EtapaEnsinoBasicaSchoolCountOutputType = {
    dados: number
  }

  export type EtapaEnsinoBasicaSchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | EtapaEnsinoBasicaSchoolCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * EtapaEnsinoBasicaSchoolCountOutputType without action
   */
  export type EtapaEnsinoBasicaSchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchoolCountOutputType
     */
    select?: EtapaEnsinoBasicaSchoolCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EtapaEnsinoBasicaSchoolCountOutputType without action
   */
  export type EtapaEnsinoBasicaSchoolCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type LocalizacaoCountOutputType
   */

  export type LocalizacaoCountOutputType = {
    dados_basica: number
  }

  export type LocalizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados_basica?: boolean | LocalizacaoCountOutputTypeCountDados_basicaArgs
  }

  // Custom InputTypes

  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacaoCountOutputType
     */
    select?: LocalizacaoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeCountDados_basicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type VinculoFuncionalCountOutputType
   */

  export type VinculoFuncionalCountOutputType = {
    dados: number
  }

  export type VinculoFuncionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | VinculoFuncionalCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * VinculoFuncionalCountOutputType without action
   */
  export type VinculoFuncionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncionalCountOutputType
     */
    select?: VinculoFuncionalCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VinculoFuncionalCountOutputType without action
   */
  export type VinculoFuncionalCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type FormacaoDocenteCountOutputType
   */

  export type FormacaoDocenteCountOutputType = {
    dados: number
  }

  export type FormacaoDocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | FormacaoDocenteCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * FormacaoDocenteCountOutputType without action
   */
  export type FormacaoDocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocenteCountOutputType
     */
    select?: FormacaoDocenteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FormacaoDocenteCountOutputType without action
   */
  export type FormacaoDocenteCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Count Type FaixaEtariaCountOutputType
   */

  export type FaixaEtariaCountOutputType = {
    dados: number
  }

  export type FaixaEtariaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | FaixaEtariaCountOutputTypeCountDadosArgs
  }

  // Custom InputTypes

  /**
   * FaixaEtariaCountOutputType without action
   */
  export type FaixaEtariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtariaCountOutputType
     */
    select?: FaixaEtariaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FaixaEtariaCountOutputType without action
   */
  export type FaixaEtariaCountOutputTypeCountDadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Localidade
   */

  export type AggregateLocalidade = {
    _count: LocalidadeCountAggregateOutputType | null
    _avg: LocalidadeAvgAggregateOutputType | null
    _sum: LocalidadeSumAggregateOutputType | null
    _min: LocalidadeMinAggregateOutputType | null
    _max: LocalidadeMaxAggregateOutputType | null
  }

  export type LocalidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalidadeSumAggregateOutputType = {
    id: number | null
  }

  export type LocalidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    uf: string | null
    codigo_ibge: string | null
  }

  export type LocalidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    uf: string | null
    codigo_ibge: string | null
  }

  export type LocalidadeCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    uf: number
    codigo_ibge: number
    _all: number
  }


  export type LocalidadeAvgAggregateInputType = {
    id?: true
  }

  export type LocalidadeSumAggregateInputType = {
    id?: true
  }

  export type LocalidadeMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    uf?: true
    codigo_ibge?: true
  }

  export type LocalidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    uf?: true
    codigo_ibge?: true
  }

  export type LocalidadeCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    uf?: true
    codigo_ibge?: true
    _all?: true
  }

  export type LocalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidade to aggregate.
     */
    where?: LocalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadeOrderByWithRelationInput | LocalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localidades
    **/
    _count?: true | LocalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalidadeMaxAggregateInputType
  }

  export type GetLocalidadeAggregateType<T extends LocalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalidade[P]>
      : GetScalarType<T[P], AggregateLocalidade[P]>
  }




  export type LocalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadeWhereInput
    orderBy?: LocalidadeOrderByWithAggregationInput | LocalidadeOrderByWithAggregationInput[]
    by: LocalidadeScalarFieldEnum[] | LocalidadeScalarFieldEnum
    having?: LocalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalidadeCountAggregateInputType | true
    _avg?: LocalidadeAvgAggregateInputType
    _sum?: LocalidadeSumAggregateInputType
    _min?: LocalidadeMinAggregateInputType
    _max?: LocalidadeMaxAggregateInputType
  }

  export type LocalidadeGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    uf: string | null
    codigo_ibge: string | null
    _count: LocalidadeCountAggregateOutputType | null
    _avg: LocalidadeAvgAggregateOutputType | null
    _sum: LocalidadeSumAggregateOutputType | null
    _min: LocalidadeMinAggregateOutputType | null
    _max: LocalidadeMaxAggregateOutputType | null
  }

  type GetLocalidadeGroupByPayload<T extends LocalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], LocalidadeGroupByOutputType[P]>
        }
      >
    >


  export type LocalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    uf?: boolean
    codigo_ibge?: boolean
    dados_basica?: boolean | Localidade$dados_basicaArgs<ExtArgs>
    _count?: boolean | LocalidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidade"]>

  export type LocalidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    uf?: boolean
    codigo_ibge?: boolean
  }

  export type LocalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados_basica?: boolean | Localidade$dados_basicaArgs<ExtArgs>
    _count?: boolean | LocalidadeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LocalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localidade"
    objects: {
      dados_basica: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      uf: string | null
      codigo_ibge: string | null
    }, ExtArgs["result"]["localidade"]>
    composites: {}
  }


  type LocalidadeGetPayload<S extends boolean | null | undefined | LocalidadeDefaultArgs> = $Result.GetResult<Prisma.$LocalidadePayload, S>

  type LocalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocalidadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocalidadeCountAggregateInputType | true
    }

  export interface LocalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localidade'], meta: { name: 'Localidade' } }
    /**
     * Find zero or one Localidade that matches the filter.
     * @param {LocalidadeFindUniqueArgs} args - Arguments to find a Localidade
     * @example
     * // Get one Localidade
     * const localidade = await prisma.localidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocalidadeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeFindUniqueArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Localidade that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocalidadeFindUniqueOrThrowArgs} args - Arguments to find a Localidade
     * @example
     * // Get one Localidade
     * const localidade = await prisma.localidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocalidadeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Localidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeFindFirstArgs} args - Arguments to find a Localidade
     * @example
     * // Get one Localidade
     * const localidade = await prisma.localidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocalidadeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeFindFirstArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Localidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeFindFirstOrThrowArgs} args - Arguments to find a Localidade
     * @example
     * // Get one Localidade
     * const localidade = await prisma.localidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocalidadeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Localidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localidades
     * const localidades = await prisma.localidade.findMany()
     * 
     * // Get first 10 Localidades
     * const localidades = await prisma.localidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localidadeWithIdOnly = await prisma.localidade.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocalidadeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Localidade.
     * @param {LocalidadeCreateArgs} args - Arguments to create a Localidade.
     * @example
     * // Create one Localidade
     * const Localidade = await prisma.localidade.create({
     *   data: {
     *     // ... data to create a Localidade
     *   }
     * })
     * 
    **/
    create<T extends LocalidadeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeCreateArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Localidades.
     *     @param {LocalidadeCreateManyArgs} args - Arguments to create many Localidades.
     *     @example
     *     // Create many Localidades
     *     const localidade = await prisma.localidade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocalidadeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localidade.
     * @param {LocalidadeDeleteArgs} args - Arguments to delete one Localidade.
     * @example
     * // Delete one Localidade
     * const Localidade = await prisma.localidade.delete({
     *   where: {
     *     // ... filter to delete one Localidade
     *   }
     * })
     * 
    **/
    delete<T extends LocalidadeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeDeleteArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Localidade.
     * @param {LocalidadeUpdateArgs} args - Arguments to update one Localidade.
     * @example
     * // Update one Localidade
     * const localidade = await prisma.localidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocalidadeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeUpdateArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Localidades.
     * @param {LocalidadeDeleteManyArgs} args - Arguments to filter Localidades to delete.
     * @example
     * // Delete a few Localidades
     * const { count } = await prisma.localidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocalidadeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalidadeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localidades
     * const localidade = await prisma.localidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocalidadeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localidade.
     * @param {LocalidadeUpsertArgs} args - Arguments to update or create a Localidade.
     * @example
     * // Update or create a Localidade
     * const localidade = await prisma.localidade.upsert({
     *   create: {
     *     // ... data to create a Localidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localidade we want to update
     *   }
     * })
    **/
    upsert<T extends LocalidadeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocalidadeUpsertArgs<ExtArgs>>
    ): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeCountArgs} args - Arguments to filter Localidades to count.
     * @example
     * // Count the number of Localidades
     * const count = await prisma.localidade.count({
     *   where: {
     *     // ... the filter for the Localidades we want to count
     *   }
     * })
    **/
    count<T extends LocalidadeCountArgs>(
      args?: Subset<T, LocalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalidadeAggregateArgs>(args: Subset<T, LocalidadeAggregateArgs>): Prisma.PrismaPromise<GetLocalidadeAggregateType<T>>

    /**
     * Group by Localidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalidadeGroupByArgs['orderBy'] }
        : { orderBy?: LocalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localidade model
   */
  readonly fields: LocalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados_basica<T extends Localidade$dados_basicaArgs<ExtArgs> = {}>(args?: Subset<T, Localidade$dados_basicaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Localidade model
   */ 
  interface LocalidadeFieldRefs {
    readonly id: FieldRef<"Localidade", 'Int'>
    readonly nome: FieldRef<"Localidade", 'String'>
    readonly tipo: FieldRef<"Localidade", 'String'>
    readonly uf: FieldRef<"Localidade", 'String'>
    readonly codigo_ibge: FieldRef<"Localidade", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Localidade findUnique
   */
  export type LocalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Localidade to fetch.
     */
    where: LocalidadeWhereUniqueInput
  }


  /**
   * Localidade findUniqueOrThrow
   */
  export type LocalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Localidade to fetch.
     */
    where: LocalidadeWhereUniqueInput
  }


  /**
   * Localidade findFirst
   */
  export type LocalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Localidade to fetch.
     */
    where?: LocalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadeOrderByWithRelationInput | LocalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidades.
     */
    cursor?: LocalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidades.
     */
    distinct?: LocalidadeScalarFieldEnum | LocalidadeScalarFieldEnum[]
  }


  /**
   * Localidade findFirstOrThrow
   */
  export type LocalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Localidade to fetch.
     */
    where?: LocalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadeOrderByWithRelationInput | LocalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidades.
     */
    cursor?: LocalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidades.
     */
    distinct?: LocalidadeScalarFieldEnum | LocalidadeScalarFieldEnum[]
  }


  /**
   * Localidade findMany
   */
  export type LocalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where?: LocalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadeOrderByWithRelationInput | LocalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localidades.
     */
    cursor?: LocalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    distinct?: LocalidadeScalarFieldEnum | LocalidadeScalarFieldEnum[]
  }


  /**
   * Localidade create
   */
  export type LocalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Localidade.
     */
    data: XOR<LocalidadeCreateInput, LocalidadeUncheckedCreateInput>
  }


  /**
   * Localidade createMany
   */
  export type LocalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localidades.
     */
    data: LocalidadeCreateManyInput | LocalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Localidade update
   */
  export type LocalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Localidade.
     */
    data: XOR<LocalidadeUpdateInput, LocalidadeUncheckedUpdateInput>
    /**
     * Choose, which Localidade to update.
     */
    where: LocalidadeWhereUniqueInput
  }


  /**
   * Localidade updateMany
   */
  export type LocalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localidades.
     */
    data: XOR<LocalidadeUpdateManyMutationInput, LocalidadeUncheckedUpdateManyInput>
    /**
     * Filter which Localidades to update
     */
    where?: LocalidadeWhereInput
  }


  /**
   * Localidade upsert
   */
  export type LocalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Localidade to update in case it exists.
     */
    where: LocalidadeWhereUniqueInput
    /**
     * In case the Localidade found by the `where` argument doesn't exist, create a new Localidade with this data.
     */
    create: XOR<LocalidadeCreateInput, LocalidadeUncheckedCreateInput>
    /**
     * In case the Localidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalidadeUpdateInput, LocalidadeUncheckedUpdateInput>
  }


  /**
   * Localidade delete
   */
  export type LocalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    /**
     * Filter which Localidade to delete.
     */
    where: LocalidadeWhereUniqueInput
  }


  /**
   * Localidade deleteMany
   */
  export type LocalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidades to delete
     */
    where?: LocalidadeWhereInput
  }


  /**
   * Localidade.dados_basica
   */
  export type Localidade$dados_basicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * Localidade without action
   */
  export type LocalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
  }



  /**
   * Model DependenciaAdministrativaBasica
   */

  export type AggregateDependenciaAdministrativaBasica = {
    _count: DependenciaAdministrativaBasicaCountAggregateOutputType | null
    _avg: DependenciaAdministrativaBasicaAvgAggregateOutputType | null
    _sum: DependenciaAdministrativaBasicaSumAggregateOutputType | null
    _min: DependenciaAdministrativaBasicaMinAggregateOutputType | null
    _max: DependenciaAdministrativaBasicaMaxAggregateOutputType | null
  }

  export type DependenciaAdministrativaBasicaAvgAggregateOutputType = {
    id: number | null
  }

  export type DependenciaAdministrativaBasicaSumAggregateOutputType = {
    id: number | null
  }

  export type DependenciaAdministrativaBasicaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type DependenciaAdministrativaBasicaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type DependenciaAdministrativaBasicaCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    _all: number
  }


  export type DependenciaAdministrativaBasicaAvgAggregateInputType = {
    id?: true
  }

  export type DependenciaAdministrativaBasicaSumAggregateInputType = {
    id?: true
  }

  export type DependenciaAdministrativaBasicaMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type DependenciaAdministrativaBasicaMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type DependenciaAdministrativaBasicaCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    _all?: true
  }

  export type DependenciaAdministrativaBasicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DependenciaAdministrativaBasica to aggregate.
     */
    where?: DependenciaAdministrativaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DependenciaAdministrativaBasicas to fetch.
     */
    orderBy?: DependenciaAdministrativaBasicaOrderByWithRelationInput | DependenciaAdministrativaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DependenciaAdministrativaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DependenciaAdministrativaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DependenciaAdministrativaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DependenciaAdministrativaBasicas
    **/
    _count?: true | DependenciaAdministrativaBasicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DependenciaAdministrativaBasicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DependenciaAdministrativaBasicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependenciaAdministrativaBasicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependenciaAdministrativaBasicaMaxAggregateInputType
  }

  export type GetDependenciaAdministrativaBasicaAggregateType<T extends DependenciaAdministrativaBasicaAggregateArgs> = {
        [P in keyof T & keyof AggregateDependenciaAdministrativaBasica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependenciaAdministrativaBasica[P]>
      : GetScalarType<T[P], AggregateDependenciaAdministrativaBasica[P]>
  }




  export type DependenciaAdministrativaBasicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependenciaAdministrativaBasicaWhereInput
    orderBy?: DependenciaAdministrativaBasicaOrderByWithAggregationInput | DependenciaAdministrativaBasicaOrderByWithAggregationInput[]
    by: DependenciaAdministrativaBasicaScalarFieldEnum[] | DependenciaAdministrativaBasicaScalarFieldEnum
    having?: DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependenciaAdministrativaBasicaCountAggregateInputType | true
    _avg?: DependenciaAdministrativaBasicaAvgAggregateInputType
    _sum?: DependenciaAdministrativaBasicaSumAggregateInputType
    _min?: DependenciaAdministrativaBasicaMinAggregateInputType
    _max?: DependenciaAdministrativaBasicaMaxAggregateInputType
  }

  export type DependenciaAdministrativaBasicaGroupByOutputType = {
    id: number
    nome: string
    tipo: string | null
    _count: DependenciaAdministrativaBasicaCountAggregateOutputType | null
    _avg: DependenciaAdministrativaBasicaAvgAggregateOutputType | null
    _sum: DependenciaAdministrativaBasicaSumAggregateOutputType | null
    _min: DependenciaAdministrativaBasicaMinAggregateOutputType | null
    _max: DependenciaAdministrativaBasicaMaxAggregateOutputType | null
  }

  type GetDependenciaAdministrativaBasicaGroupByPayload<T extends DependenciaAdministrativaBasicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependenciaAdministrativaBasicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependenciaAdministrativaBasicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependenciaAdministrativaBasicaGroupByOutputType[P]>
            : GetScalarType<T[P], DependenciaAdministrativaBasicaGroupByOutputType[P]>
        }
      >
    >


  export type DependenciaAdministrativaBasicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    dados?: boolean | DependenciaAdministrativaBasica$dadosArgs<ExtArgs>
    _count?: boolean | DependenciaAdministrativaBasicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependenciaAdministrativaBasica"]>

  export type DependenciaAdministrativaBasicaSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }

  export type DependenciaAdministrativaBasicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | DependenciaAdministrativaBasica$dadosArgs<ExtArgs>
    _count?: boolean | DependenciaAdministrativaBasicaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DependenciaAdministrativaBasicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DependenciaAdministrativaBasica"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string | null
    }, ExtArgs["result"]["dependenciaAdministrativaBasica"]>
    composites: {}
  }


  type DependenciaAdministrativaBasicaGetPayload<S extends boolean | null | undefined | DependenciaAdministrativaBasicaDefaultArgs> = $Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload, S>

  type DependenciaAdministrativaBasicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DependenciaAdministrativaBasicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DependenciaAdministrativaBasicaCountAggregateInputType | true
    }

  export interface DependenciaAdministrativaBasicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DependenciaAdministrativaBasica'], meta: { name: 'DependenciaAdministrativaBasica' } }
    /**
     * Find zero or one DependenciaAdministrativaBasica that matches the filter.
     * @param {DependenciaAdministrativaBasicaFindUniqueArgs} args - Arguments to find a DependenciaAdministrativaBasica
     * @example
     * // Get one DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DependenciaAdministrativaBasicaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaFindUniqueArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DependenciaAdministrativaBasica that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DependenciaAdministrativaBasicaFindUniqueOrThrowArgs} args - Arguments to find a DependenciaAdministrativaBasica
     * @example
     * // Get one DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DependenciaAdministrativaBasicaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DependenciaAdministrativaBasica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaFindFirstArgs} args - Arguments to find a DependenciaAdministrativaBasica
     * @example
     * // Get one DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DependenciaAdministrativaBasicaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaFindFirstArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DependenciaAdministrativaBasica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaFindFirstOrThrowArgs} args - Arguments to find a DependenciaAdministrativaBasica
     * @example
     * // Get one DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DependenciaAdministrativaBasicaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DependenciaAdministrativaBasicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DependenciaAdministrativaBasicas
     * const dependenciaAdministrativaBasicas = await prisma.dependenciaAdministrativaBasica.findMany()
     * 
     * // Get first 10 DependenciaAdministrativaBasicas
     * const dependenciaAdministrativaBasicas = await prisma.dependenciaAdministrativaBasica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependenciaAdministrativaBasicaWithIdOnly = await prisma.dependenciaAdministrativaBasica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DependenciaAdministrativaBasicaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DependenciaAdministrativaBasica.
     * @param {DependenciaAdministrativaBasicaCreateArgs} args - Arguments to create a DependenciaAdministrativaBasica.
     * @example
     * // Create one DependenciaAdministrativaBasica
     * const DependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.create({
     *   data: {
     *     // ... data to create a DependenciaAdministrativaBasica
     *   }
     * })
     * 
    **/
    create<T extends DependenciaAdministrativaBasicaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaCreateArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DependenciaAdministrativaBasicas.
     *     @param {DependenciaAdministrativaBasicaCreateManyArgs} args - Arguments to create many DependenciaAdministrativaBasicas.
     *     @example
     *     // Create many DependenciaAdministrativaBasicas
     *     const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DependenciaAdministrativaBasicaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DependenciaAdministrativaBasica.
     * @param {DependenciaAdministrativaBasicaDeleteArgs} args - Arguments to delete one DependenciaAdministrativaBasica.
     * @example
     * // Delete one DependenciaAdministrativaBasica
     * const DependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.delete({
     *   where: {
     *     // ... filter to delete one DependenciaAdministrativaBasica
     *   }
     * })
     * 
    **/
    delete<T extends DependenciaAdministrativaBasicaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaDeleteArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DependenciaAdministrativaBasica.
     * @param {DependenciaAdministrativaBasicaUpdateArgs} args - Arguments to update one DependenciaAdministrativaBasica.
     * @example
     * // Update one DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DependenciaAdministrativaBasicaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaUpdateArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DependenciaAdministrativaBasicas.
     * @param {DependenciaAdministrativaBasicaDeleteManyArgs} args - Arguments to filter DependenciaAdministrativaBasicas to delete.
     * @example
     * // Delete a few DependenciaAdministrativaBasicas
     * const { count } = await prisma.dependenciaAdministrativaBasica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DependenciaAdministrativaBasicaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DependenciaAdministrativaBasicaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DependenciaAdministrativaBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DependenciaAdministrativaBasicas
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DependenciaAdministrativaBasicaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DependenciaAdministrativaBasica.
     * @param {DependenciaAdministrativaBasicaUpsertArgs} args - Arguments to update or create a DependenciaAdministrativaBasica.
     * @example
     * // Update or create a DependenciaAdministrativaBasica
     * const dependenciaAdministrativaBasica = await prisma.dependenciaAdministrativaBasica.upsert({
     *   create: {
     *     // ... data to create a DependenciaAdministrativaBasica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DependenciaAdministrativaBasica we want to update
     *   }
     * })
    **/
    upsert<T extends DependenciaAdministrativaBasicaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DependenciaAdministrativaBasicaUpsertArgs<ExtArgs>>
    ): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DependenciaAdministrativaBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaCountArgs} args - Arguments to filter DependenciaAdministrativaBasicas to count.
     * @example
     * // Count the number of DependenciaAdministrativaBasicas
     * const count = await prisma.dependenciaAdministrativaBasica.count({
     *   where: {
     *     // ... the filter for the DependenciaAdministrativaBasicas we want to count
     *   }
     * })
    **/
    count<T extends DependenciaAdministrativaBasicaCountArgs>(
      args?: Subset<T, DependenciaAdministrativaBasicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependenciaAdministrativaBasicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DependenciaAdministrativaBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependenciaAdministrativaBasicaAggregateArgs>(args: Subset<T, DependenciaAdministrativaBasicaAggregateArgs>): Prisma.PrismaPromise<GetDependenciaAdministrativaBasicaAggregateType<T>>

    /**
     * Group by DependenciaAdministrativaBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaAdministrativaBasicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DependenciaAdministrativaBasicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependenciaAdministrativaBasicaGroupByArgs['orderBy'] }
        : { orderBy?: DependenciaAdministrativaBasicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DependenciaAdministrativaBasicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependenciaAdministrativaBasicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DependenciaAdministrativaBasica model
   */
  readonly fields: DependenciaAdministrativaBasicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DependenciaAdministrativaBasica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DependenciaAdministrativaBasicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends DependenciaAdministrativaBasica$dadosArgs<ExtArgs> = {}>(args?: Subset<T, DependenciaAdministrativaBasica$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DependenciaAdministrativaBasica model
   */ 
  interface DependenciaAdministrativaBasicaFieldRefs {
    readonly id: FieldRef<"DependenciaAdministrativaBasica", 'Int'>
    readonly nome: FieldRef<"DependenciaAdministrativaBasica", 'String'>
    readonly tipo: FieldRef<"DependenciaAdministrativaBasica", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DependenciaAdministrativaBasica findUnique
   */
  export type DependenciaAdministrativaBasicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DependenciaAdministrativaBasica to fetch.
     */
    where: DependenciaAdministrativaBasicaWhereUniqueInput
  }


  /**
   * DependenciaAdministrativaBasica findUniqueOrThrow
   */
  export type DependenciaAdministrativaBasicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DependenciaAdministrativaBasica to fetch.
     */
    where: DependenciaAdministrativaBasicaWhereUniqueInput
  }


  /**
   * DependenciaAdministrativaBasica findFirst
   */
  export type DependenciaAdministrativaBasicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DependenciaAdministrativaBasica to fetch.
     */
    where?: DependenciaAdministrativaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DependenciaAdministrativaBasicas to fetch.
     */
    orderBy?: DependenciaAdministrativaBasicaOrderByWithRelationInput | DependenciaAdministrativaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DependenciaAdministrativaBasicas.
     */
    cursor?: DependenciaAdministrativaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DependenciaAdministrativaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DependenciaAdministrativaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DependenciaAdministrativaBasicas.
     */
    distinct?: DependenciaAdministrativaBasicaScalarFieldEnum | DependenciaAdministrativaBasicaScalarFieldEnum[]
  }


  /**
   * DependenciaAdministrativaBasica findFirstOrThrow
   */
  export type DependenciaAdministrativaBasicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DependenciaAdministrativaBasica to fetch.
     */
    where?: DependenciaAdministrativaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DependenciaAdministrativaBasicas to fetch.
     */
    orderBy?: DependenciaAdministrativaBasicaOrderByWithRelationInput | DependenciaAdministrativaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DependenciaAdministrativaBasicas.
     */
    cursor?: DependenciaAdministrativaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DependenciaAdministrativaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DependenciaAdministrativaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DependenciaAdministrativaBasicas.
     */
    distinct?: DependenciaAdministrativaBasicaScalarFieldEnum | DependenciaAdministrativaBasicaScalarFieldEnum[]
  }


  /**
   * DependenciaAdministrativaBasica findMany
   */
  export type DependenciaAdministrativaBasicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DependenciaAdministrativaBasicas to fetch.
     */
    where?: DependenciaAdministrativaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DependenciaAdministrativaBasicas to fetch.
     */
    orderBy?: DependenciaAdministrativaBasicaOrderByWithRelationInput | DependenciaAdministrativaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DependenciaAdministrativaBasicas.
     */
    cursor?: DependenciaAdministrativaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DependenciaAdministrativaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DependenciaAdministrativaBasicas.
     */
    skip?: number
    distinct?: DependenciaAdministrativaBasicaScalarFieldEnum | DependenciaAdministrativaBasicaScalarFieldEnum[]
  }


  /**
   * DependenciaAdministrativaBasica create
   */
  export type DependenciaAdministrativaBasicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * The data needed to create a DependenciaAdministrativaBasica.
     */
    data: XOR<DependenciaAdministrativaBasicaCreateInput, DependenciaAdministrativaBasicaUncheckedCreateInput>
  }


  /**
   * DependenciaAdministrativaBasica createMany
   */
  export type DependenciaAdministrativaBasicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DependenciaAdministrativaBasicas.
     */
    data: DependenciaAdministrativaBasicaCreateManyInput | DependenciaAdministrativaBasicaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DependenciaAdministrativaBasica update
   */
  export type DependenciaAdministrativaBasicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * The data needed to update a DependenciaAdministrativaBasica.
     */
    data: XOR<DependenciaAdministrativaBasicaUpdateInput, DependenciaAdministrativaBasicaUncheckedUpdateInput>
    /**
     * Choose, which DependenciaAdministrativaBasica to update.
     */
    where: DependenciaAdministrativaBasicaWhereUniqueInput
  }


  /**
   * DependenciaAdministrativaBasica updateMany
   */
  export type DependenciaAdministrativaBasicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DependenciaAdministrativaBasicas.
     */
    data: XOR<DependenciaAdministrativaBasicaUpdateManyMutationInput, DependenciaAdministrativaBasicaUncheckedUpdateManyInput>
    /**
     * Filter which DependenciaAdministrativaBasicas to update
     */
    where?: DependenciaAdministrativaBasicaWhereInput
  }


  /**
   * DependenciaAdministrativaBasica upsert
   */
  export type DependenciaAdministrativaBasicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * The filter to search for the DependenciaAdministrativaBasica to update in case it exists.
     */
    where: DependenciaAdministrativaBasicaWhereUniqueInput
    /**
     * In case the DependenciaAdministrativaBasica found by the `where` argument doesn't exist, create a new DependenciaAdministrativaBasica with this data.
     */
    create: XOR<DependenciaAdministrativaBasicaCreateInput, DependenciaAdministrativaBasicaUncheckedCreateInput>
    /**
     * In case the DependenciaAdministrativaBasica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DependenciaAdministrativaBasicaUpdateInput, DependenciaAdministrativaBasicaUncheckedUpdateInput>
  }


  /**
   * DependenciaAdministrativaBasica delete
   */
  export type DependenciaAdministrativaBasicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    /**
     * Filter which DependenciaAdministrativaBasica to delete.
     */
    where: DependenciaAdministrativaBasicaWhereUniqueInput
  }


  /**
   * DependenciaAdministrativaBasica deleteMany
   */
  export type DependenciaAdministrativaBasicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DependenciaAdministrativaBasicas to delete
     */
    where?: DependenciaAdministrativaBasicaWhereInput
  }


  /**
   * DependenciaAdministrativaBasica.dados
   */
  export type DependenciaAdministrativaBasica$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * DependenciaAdministrativaBasica without action
   */
  export type DependenciaAdministrativaBasicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
  }



  /**
   * Model EtapaEnsinoBasica
   */

  export type AggregateEtapaEnsinoBasica = {
    _count: EtapaEnsinoBasicaCountAggregateOutputType | null
    _avg: EtapaEnsinoBasicaAvgAggregateOutputType | null
    _sum: EtapaEnsinoBasicaSumAggregateOutputType | null
    _min: EtapaEnsinoBasicaMinAggregateOutputType | null
    _max: EtapaEnsinoBasicaMaxAggregateOutputType | null
  }

  export type EtapaEnsinoBasicaAvgAggregateOutputType = {
    id: number | null
  }

  export type EtapaEnsinoBasicaSumAggregateOutputType = {
    id: number | null
  }

  export type EtapaEnsinoBasicaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_curto: string | null
  }

  export type EtapaEnsinoBasicaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_curto: string | null
  }

  export type EtapaEnsinoBasicaCountAggregateOutputType = {
    id: number
    nome: number
    nome_curto: number
    _all: number
  }


  export type EtapaEnsinoBasicaAvgAggregateInputType = {
    id?: true
  }

  export type EtapaEnsinoBasicaSumAggregateInputType = {
    id?: true
  }

  export type EtapaEnsinoBasicaMinAggregateInputType = {
    id?: true
    nome?: true
    nome_curto?: true
  }

  export type EtapaEnsinoBasicaMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_curto?: true
  }

  export type EtapaEnsinoBasicaCountAggregateInputType = {
    id?: true
    nome?: true
    nome_curto?: true
    _all?: true
  }

  export type EtapaEnsinoBasicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaEnsinoBasica to aggregate.
     */
    where?: EtapaEnsinoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicas to fetch.
     */
    orderBy?: EtapaEnsinoBasicaOrderByWithRelationInput | EtapaEnsinoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtapaEnsinoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EtapaEnsinoBasicas
    **/
    _count?: true | EtapaEnsinoBasicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtapaEnsinoBasicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtapaEnsinoBasicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtapaEnsinoBasicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtapaEnsinoBasicaMaxAggregateInputType
  }

  export type GetEtapaEnsinoBasicaAggregateType<T extends EtapaEnsinoBasicaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtapaEnsinoBasica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtapaEnsinoBasica[P]>
      : GetScalarType<T[P], AggregateEtapaEnsinoBasica[P]>
  }




  export type EtapaEnsinoBasicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaEnsinoBasicaWhereInput
    orderBy?: EtapaEnsinoBasicaOrderByWithAggregationInput | EtapaEnsinoBasicaOrderByWithAggregationInput[]
    by: EtapaEnsinoBasicaScalarFieldEnum[] | EtapaEnsinoBasicaScalarFieldEnum
    having?: EtapaEnsinoBasicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtapaEnsinoBasicaCountAggregateInputType | true
    _avg?: EtapaEnsinoBasicaAvgAggregateInputType
    _sum?: EtapaEnsinoBasicaSumAggregateInputType
    _min?: EtapaEnsinoBasicaMinAggregateInputType
    _max?: EtapaEnsinoBasicaMaxAggregateInputType
  }

  export type EtapaEnsinoBasicaGroupByOutputType = {
    id: number
    nome: string
    nome_curto: string | null
    _count: EtapaEnsinoBasicaCountAggregateOutputType | null
    _avg: EtapaEnsinoBasicaAvgAggregateOutputType | null
    _sum: EtapaEnsinoBasicaSumAggregateOutputType | null
    _min: EtapaEnsinoBasicaMinAggregateOutputType | null
    _max: EtapaEnsinoBasicaMaxAggregateOutputType | null
  }

  type GetEtapaEnsinoBasicaGroupByPayload<T extends EtapaEnsinoBasicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtapaEnsinoBasicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtapaEnsinoBasicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtapaEnsinoBasicaGroupByOutputType[P]>
            : GetScalarType<T[P], EtapaEnsinoBasicaGroupByOutputType[P]>
        }
      >
    >


  export type EtapaEnsinoBasicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_curto?: boolean
    dados?: boolean | EtapaEnsinoBasica$dadosArgs<ExtArgs>
    _count?: boolean | EtapaEnsinoBasicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapaEnsinoBasica"]>

  export type EtapaEnsinoBasicaSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_curto?: boolean
  }

  export type EtapaEnsinoBasicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | EtapaEnsinoBasica$dadosArgs<ExtArgs>
    _count?: boolean | EtapaEnsinoBasicaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EtapaEnsinoBasicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EtapaEnsinoBasica"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_curto: string | null
    }, ExtArgs["result"]["etapaEnsinoBasica"]>
    composites: {}
  }


  type EtapaEnsinoBasicaGetPayload<S extends boolean | null | undefined | EtapaEnsinoBasicaDefaultArgs> = $Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload, S>

  type EtapaEnsinoBasicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EtapaEnsinoBasicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EtapaEnsinoBasicaCountAggregateInputType | true
    }

  export interface EtapaEnsinoBasicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EtapaEnsinoBasica'], meta: { name: 'EtapaEnsinoBasica' } }
    /**
     * Find zero or one EtapaEnsinoBasica that matches the filter.
     * @param {EtapaEnsinoBasicaFindUniqueArgs} args - Arguments to find a EtapaEnsinoBasica
     * @example
     * // Get one EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EtapaEnsinoBasicaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaFindUniqueArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EtapaEnsinoBasica that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EtapaEnsinoBasicaFindUniqueOrThrowArgs} args - Arguments to find a EtapaEnsinoBasica
     * @example
     * // Get one EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EtapaEnsinoBasicaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EtapaEnsinoBasica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaFindFirstArgs} args - Arguments to find a EtapaEnsinoBasica
     * @example
     * // Get one EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EtapaEnsinoBasicaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaFindFirstArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EtapaEnsinoBasica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaFindFirstOrThrowArgs} args - Arguments to find a EtapaEnsinoBasica
     * @example
     * // Get one EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EtapaEnsinoBasicaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EtapaEnsinoBasicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtapaEnsinoBasicas
     * const etapaEnsinoBasicas = await prisma.etapaEnsinoBasica.findMany()
     * 
     * // Get first 10 EtapaEnsinoBasicas
     * const etapaEnsinoBasicas = await prisma.etapaEnsinoBasica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etapaEnsinoBasicaWithIdOnly = await prisma.etapaEnsinoBasica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EtapaEnsinoBasicaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EtapaEnsinoBasica.
     * @param {EtapaEnsinoBasicaCreateArgs} args - Arguments to create a EtapaEnsinoBasica.
     * @example
     * // Create one EtapaEnsinoBasica
     * const EtapaEnsinoBasica = await prisma.etapaEnsinoBasica.create({
     *   data: {
     *     // ... data to create a EtapaEnsinoBasica
     *   }
     * })
     * 
    **/
    create<T extends EtapaEnsinoBasicaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaCreateArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EtapaEnsinoBasicas.
     *     @param {EtapaEnsinoBasicaCreateManyArgs} args - Arguments to create many EtapaEnsinoBasicas.
     *     @example
     *     // Create many EtapaEnsinoBasicas
     *     const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EtapaEnsinoBasicaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EtapaEnsinoBasica.
     * @param {EtapaEnsinoBasicaDeleteArgs} args - Arguments to delete one EtapaEnsinoBasica.
     * @example
     * // Delete one EtapaEnsinoBasica
     * const EtapaEnsinoBasica = await prisma.etapaEnsinoBasica.delete({
     *   where: {
     *     // ... filter to delete one EtapaEnsinoBasica
     *   }
     * })
     * 
    **/
    delete<T extends EtapaEnsinoBasicaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaDeleteArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EtapaEnsinoBasica.
     * @param {EtapaEnsinoBasicaUpdateArgs} args - Arguments to update one EtapaEnsinoBasica.
     * @example
     * // Update one EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EtapaEnsinoBasicaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaUpdateArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EtapaEnsinoBasicas.
     * @param {EtapaEnsinoBasicaDeleteManyArgs} args - Arguments to filter EtapaEnsinoBasicas to delete.
     * @example
     * // Delete a few EtapaEnsinoBasicas
     * const { count } = await prisma.etapaEnsinoBasica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EtapaEnsinoBasicaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtapaEnsinoBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtapaEnsinoBasicas
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EtapaEnsinoBasicaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EtapaEnsinoBasica.
     * @param {EtapaEnsinoBasicaUpsertArgs} args - Arguments to update or create a EtapaEnsinoBasica.
     * @example
     * // Update or create a EtapaEnsinoBasica
     * const etapaEnsinoBasica = await prisma.etapaEnsinoBasica.upsert({
     *   create: {
     *     // ... data to create a EtapaEnsinoBasica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtapaEnsinoBasica we want to update
     *   }
     * })
    **/
    upsert<T extends EtapaEnsinoBasicaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaUpsertArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EtapaEnsinoBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaCountArgs} args - Arguments to filter EtapaEnsinoBasicas to count.
     * @example
     * // Count the number of EtapaEnsinoBasicas
     * const count = await prisma.etapaEnsinoBasica.count({
     *   where: {
     *     // ... the filter for the EtapaEnsinoBasicas we want to count
     *   }
     * })
    **/
    count<T extends EtapaEnsinoBasicaCountArgs>(
      args?: Subset<T, EtapaEnsinoBasicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtapaEnsinoBasicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EtapaEnsinoBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtapaEnsinoBasicaAggregateArgs>(args: Subset<T, EtapaEnsinoBasicaAggregateArgs>): Prisma.PrismaPromise<GetEtapaEnsinoBasicaAggregateType<T>>

    /**
     * Group by EtapaEnsinoBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtapaEnsinoBasicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtapaEnsinoBasicaGroupByArgs['orderBy'] }
        : { orderBy?: EtapaEnsinoBasicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtapaEnsinoBasicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtapaEnsinoBasicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EtapaEnsinoBasica model
   */
  readonly fields: EtapaEnsinoBasicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EtapaEnsinoBasica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtapaEnsinoBasicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends EtapaEnsinoBasica$dadosArgs<ExtArgs> = {}>(args?: Subset<T, EtapaEnsinoBasica$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EtapaEnsinoBasica model
   */ 
  interface EtapaEnsinoBasicaFieldRefs {
    readonly id: FieldRef<"EtapaEnsinoBasica", 'Int'>
    readonly nome: FieldRef<"EtapaEnsinoBasica", 'String'>
    readonly nome_curto: FieldRef<"EtapaEnsinoBasica", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EtapaEnsinoBasica findUnique
   */
  export type EtapaEnsinoBasicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasica to fetch.
     */
    where: EtapaEnsinoBasicaWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasica findUniqueOrThrow
   */
  export type EtapaEnsinoBasicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasica to fetch.
     */
    where: EtapaEnsinoBasicaWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasica findFirst
   */
  export type EtapaEnsinoBasicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasica to fetch.
     */
    where?: EtapaEnsinoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicas to fetch.
     */
    orderBy?: EtapaEnsinoBasicaOrderByWithRelationInput | EtapaEnsinoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaEnsinoBasicas.
     */
    cursor?: EtapaEnsinoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaEnsinoBasicas.
     */
    distinct?: EtapaEnsinoBasicaScalarFieldEnum | EtapaEnsinoBasicaScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasica findFirstOrThrow
   */
  export type EtapaEnsinoBasicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasica to fetch.
     */
    where?: EtapaEnsinoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicas to fetch.
     */
    orderBy?: EtapaEnsinoBasicaOrderByWithRelationInput | EtapaEnsinoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaEnsinoBasicas.
     */
    cursor?: EtapaEnsinoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaEnsinoBasicas.
     */
    distinct?: EtapaEnsinoBasicaScalarFieldEnum | EtapaEnsinoBasicaScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasica findMany
   */
  export type EtapaEnsinoBasicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicas to fetch.
     */
    where?: EtapaEnsinoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicas to fetch.
     */
    orderBy?: EtapaEnsinoBasicaOrderByWithRelationInput | EtapaEnsinoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EtapaEnsinoBasicas.
     */
    cursor?: EtapaEnsinoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicas.
     */
    skip?: number
    distinct?: EtapaEnsinoBasicaScalarFieldEnum | EtapaEnsinoBasicaScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasica create
   */
  export type EtapaEnsinoBasicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * The data needed to create a EtapaEnsinoBasica.
     */
    data: XOR<EtapaEnsinoBasicaCreateInput, EtapaEnsinoBasicaUncheckedCreateInput>
  }


  /**
   * EtapaEnsinoBasica createMany
   */
  export type EtapaEnsinoBasicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtapaEnsinoBasicas.
     */
    data: EtapaEnsinoBasicaCreateManyInput | EtapaEnsinoBasicaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EtapaEnsinoBasica update
   */
  export type EtapaEnsinoBasicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * The data needed to update a EtapaEnsinoBasica.
     */
    data: XOR<EtapaEnsinoBasicaUpdateInput, EtapaEnsinoBasicaUncheckedUpdateInput>
    /**
     * Choose, which EtapaEnsinoBasica to update.
     */
    where: EtapaEnsinoBasicaWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasica updateMany
   */
  export type EtapaEnsinoBasicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EtapaEnsinoBasicas.
     */
    data: XOR<EtapaEnsinoBasicaUpdateManyMutationInput, EtapaEnsinoBasicaUncheckedUpdateManyInput>
    /**
     * Filter which EtapaEnsinoBasicas to update
     */
    where?: EtapaEnsinoBasicaWhereInput
  }


  /**
   * EtapaEnsinoBasica upsert
   */
  export type EtapaEnsinoBasicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * The filter to search for the EtapaEnsinoBasica to update in case it exists.
     */
    where: EtapaEnsinoBasicaWhereUniqueInput
    /**
     * In case the EtapaEnsinoBasica found by the `where` argument doesn't exist, create a new EtapaEnsinoBasica with this data.
     */
    create: XOR<EtapaEnsinoBasicaCreateInput, EtapaEnsinoBasicaUncheckedCreateInput>
    /**
     * In case the EtapaEnsinoBasica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtapaEnsinoBasicaUpdateInput, EtapaEnsinoBasicaUncheckedUpdateInput>
  }


  /**
   * EtapaEnsinoBasica delete
   */
  export type EtapaEnsinoBasicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    /**
     * Filter which EtapaEnsinoBasica to delete.
     */
    where: EtapaEnsinoBasicaWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasica deleteMany
   */
  export type EtapaEnsinoBasicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaEnsinoBasicas to delete
     */
    where?: EtapaEnsinoBasicaWhereInput
  }


  /**
   * EtapaEnsinoBasica.dados
   */
  export type EtapaEnsinoBasica$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasica without action
   */
  export type EtapaEnsinoBasicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
  }



  /**
   * Model EtapaEnsinoBasicaSchool
   */

  export type AggregateEtapaEnsinoBasicaSchool = {
    _count: EtapaEnsinoBasicaSchoolCountAggregateOutputType | null
    _avg: EtapaEnsinoBasicaSchoolAvgAggregateOutputType | null
    _sum: EtapaEnsinoBasicaSchoolSumAggregateOutputType | null
    _min: EtapaEnsinoBasicaSchoolMinAggregateOutputType | null
    _max: EtapaEnsinoBasicaSchoolMaxAggregateOutputType | null
  }

  export type EtapaEnsinoBasicaSchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type EtapaEnsinoBasicaSchoolSumAggregateOutputType = {
    id: number | null
  }

  export type EtapaEnsinoBasicaSchoolMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type EtapaEnsinoBasicaSchoolMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type EtapaEnsinoBasicaSchoolCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type EtapaEnsinoBasicaSchoolAvgAggregateInputType = {
    id?: true
  }

  export type EtapaEnsinoBasicaSchoolSumAggregateInputType = {
    id?: true
  }

  export type EtapaEnsinoBasicaSchoolMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EtapaEnsinoBasicaSchoolMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EtapaEnsinoBasicaSchoolCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type EtapaEnsinoBasicaSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaEnsinoBasicaSchool to aggregate.
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicaSchools to fetch.
     */
    orderBy?: EtapaEnsinoBasicaSchoolOrderByWithRelationInput | EtapaEnsinoBasicaSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtapaEnsinoBasicaSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicaSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicaSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EtapaEnsinoBasicaSchools
    **/
    _count?: true | EtapaEnsinoBasicaSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtapaEnsinoBasicaSchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtapaEnsinoBasicaSchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtapaEnsinoBasicaSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtapaEnsinoBasicaSchoolMaxAggregateInputType
  }

  export type GetEtapaEnsinoBasicaSchoolAggregateType<T extends EtapaEnsinoBasicaSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateEtapaEnsinoBasicaSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtapaEnsinoBasicaSchool[P]>
      : GetScalarType<T[P], AggregateEtapaEnsinoBasicaSchool[P]>
  }




  export type EtapaEnsinoBasicaSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaEnsinoBasicaSchoolWhereInput
    orderBy?: EtapaEnsinoBasicaSchoolOrderByWithAggregationInput | EtapaEnsinoBasicaSchoolOrderByWithAggregationInput[]
    by: EtapaEnsinoBasicaSchoolScalarFieldEnum[] | EtapaEnsinoBasicaSchoolScalarFieldEnum
    having?: EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtapaEnsinoBasicaSchoolCountAggregateInputType | true
    _avg?: EtapaEnsinoBasicaSchoolAvgAggregateInputType
    _sum?: EtapaEnsinoBasicaSchoolSumAggregateInputType
    _min?: EtapaEnsinoBasicaSchoolMinAggregateInputType
    _max?: EtapaEnsinoBasicaSchoolMaxAggregateInputType
  }

  export type EtapaEnsinoBasicaSchoolGroupByOutputType = {
    id: number
    nome: string
    _count: EtapaEnsinoBasicaSchoolCountAggregateOutputType | null
    _avg: EtapaEnsinoBasicaSchoolAvgAggregateOutputType | null
    _sum: EtapaEnsinoBasicaSchoolSumAggregateOutputType | null
    _min: EtapaEnsinoBasicaSchoolMinAggregateOutputType | null
    _max: EtapaEnsinoBasicaSchoolMaxAggregateOutputType | null
  }

  type GetEtapaEnsinoBasicaSchoolGroupByPayload<T extends EtapaEnsinoBasicaSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtapaEnsinoBasicaSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtapaEnsinoBasicaSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtapaEnsinoBasicaSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], EtapaEnsinoBasicaSchoolGroupByOutputType[P]>
        }
      >
    >


  export type EtapaEnsinoBasicaSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dados?: boolean | EtapaEnsinoBasicaSchool$dadosArgs<ExtArgs>
    _count?: boolean | EtapaEnsinoBasicaSchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapaEnsinoBasicaSchool"]>

  export type EtapaEnsinoBasicaSchoolSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type EtapaEnsinoBasicaSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | EtapaEnsinoBasicaSchool$dadosArgs<ExtArgs>
    _count?: boolean | EtapaEnsinoBasicaSchoolCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EtapaEnsinoBasicaSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EtapaEnsinoBasicaSchool"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["etapaEnsinoBasicaSchool"]>
    composites: {}
  }


  type EtapaEnsinoBasicaSchoolGetPayload<S extends boolean | null | undefined | EtapaEnsinoBasicaSchoolDefaultArgs> = $Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload, S>

  type EtapaEnsinoBasicaSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EtapaEnsinoBasicaSchoolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EtapaEnsinoBasicaSchoolCountAggregateInputType | true
    }

  export interface EtapaEnsinoBasicaSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EtapaEnsinoBasicaSchool'], meta: { name: 'EtapaEnsinoBasicaSchool' } }
    /**
     * Find zero or one EtapaEnsinoBasicaSchool that matches the filter.
     * @param {EtapaEnsinoBasicaSchoolFindUniqueArgs} args - Arguments to find a EtapaEnsinoBasicaSchool
     * @example
     * // Get one EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EtapaEnsinoBasicaSchoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolFindUniqueArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EtapaEnsinoBasicaSchool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EtapaEnsinoBasicaSchoolFindUniqueOrThrowArgs} args - Arguments to find a EtapaEnsinoBasicaSchool
     * @example
     * // Get one EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EtapaEnsinoBasicaSchoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EtapaEnsinoBasicaSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolFindFirstArgs} args - Arguments to find a EtapaEnsinoBasicaSchool
     * @example
     * // Get one EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EtapaEnsinoBasicaSchoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolFindFirstArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EtapaEnsinoBasicaSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolFindFirstOrThrowArgs} args - Arguments to find a EtapaEnsinoBasicaSchool
     * @example
     * // Get one EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EtapaEnsinoBasicaSchoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EtapaEnsinoBasicaSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtapaEnsinoBasicaSchools
     * const etapaEnsinoBasicaSchools = await prisma.etapaEnsinoBasicaSchool.findMany()
     * 
     * // Get first 10 EtapaEnsinoBasicaSchools
     * const etapaEnsinoBasicaSchools = await prisma.etapaEnsinoBasicaSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etapaEnsinoBasicaSchoolWithIdOnly = await prisma.etapaEnsinoBasicaSchool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EtapaEnsinoBasicaSchoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EtapaEnsinoBasicaSchool.
     * @param {EtapaEnsinoBasicaSchoolCreateArgs} args - Arguments to create a EtapaEnsinoBasicaSchool.
     * @example
     * // Create one EtapaEnsinoBasicaSchool
     * const EtapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.create({
     *   data: {
     *     // ... data to create a EtapaEnsinoBasicaSchool
     *   }
     * })
     * 
    **/
    create<T extends EtapaEnsinoBasicaSchoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolCreateArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EtapaEnsinoBasicaSchools.
     *     @param {EtapaEnsinoBasicaSchoolCreateManyArgs} args - Arguments to create many EtapaEnsinoBasicaSchools.
     *     @example
     *     // Create many EtapaEnsinoBasicaSchools
     *     const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EtapaEnsinoBasicaSchoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EtapaEnsinoBasicaSchool.
     * @param {EtapaEnsinoBasicaSchoolDeleteArgs} args - Arguments to delete one EtapaEnsinoBasicaSchool.
     * @example
     * // Delete one EtapaEnsinoBasicaSchool
     * const EtapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.delete({
     *   where: {
     *     // ... filter to delete one EtapaEnsinoBasicaSchool
     *   }
     * })
     * 
    **/
    delete<T extends EtapaEnsinoBasicaSchoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolDeleteArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EtapaEnsinoBasicaSchool.
     * @param {EtapaEnsinoBasicaSchoolUpdateArgs} args - Arguments to update one EtapaEnsinoBasicaSchool.
     * @example
     * // Update one EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EtapaEnsinoBasicaSchoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolUpdateArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EtapaEnsinoBasicaSchools.
     * @param {EtapaEnsinoBasicaSchoolDeleteManyArgs} args - Arguments to filter EtapaEnsinoBasicaSchools to delete.
     * @example
     * // Delete a few EtapaEnsinoBasicaSchools
     * const { count } = await prisma.etapaEnsinoBasicaSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EtapaEnsinoBasicaSchoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtapaEnsinoBasicaSchoolDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtapaEnsinoBasicaSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtapaEnsinoBasicaSchools
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EtapaEnsinoBasicaSchoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EtapaEnsinoBasicaSchool.
     * @param {EtapaEnsinoBasicaSchoolUpsertArgs} args - Arguments to update or create a EtapaEnsinoBasicaSchool.
     * @example
     * // Update or create a EtapaEnsinoBasicaSchool
     * const etapaEnsinoBasicaSchool = await prisma.etapaEnsinoBasicaSchool.upsert({
     *   create: {
     *     // ... data to create a EtapaEnsinoBasicaSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtapaEnsinoBasicaSchool we want to update
     *   }
     * })
    **/
    upsert<T extends EtapaEnsinoBasicaSchoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EtapaEnsinoBasicaSchoolUpsertArgs<ExtArgs>>
    ): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EtapaEnsinoBasicaSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolCountArgs} args - Arguments to filter EtapaEnsinoBasicaSchools to count.
     * @example
     * // Count the number of EtapaEnsinoBasicaSchools
     * const count = await prisma.etapaEnsinoBasicaSchool.count({
     *   where: {
     *     // ... the filter for the EtapaEnsinoBasicaSchools we want to count
     *   }
     * })
    **/
    count<T extends EtapaEnsinoBasicaSchoolCountArgs>(
      args?: Subset<T, EtapaEnsinoBasicaSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtapaEnsinoBasicaSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EtapaEnsinoBasicaSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtapaEnsinoBasicaSchoolAggregateArgs>(args: Subset<T, EtapaEnsinoBasicaSchoolAggregateArgs>): Prisma.PrismaPromise<GetEtapaEnsinoBasicaSchoolAggregateType<T>>

    /**
     * Group by EtapaEnsinoBasicaSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaEnsinoBasicaSchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtapaEnsinoBasicaSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtapaEnsinoBasicaSchoolGroupByArgs['orderBy'] }
        : { orderBy?: EtapaEnsinoBasicaSchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtapaEnsinoBasicaSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtapaEnsinoBasicaSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EtapaEnsinoBasicaSchool model
   */
  readonly fields: EtapaEnsinoBasicaSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EtapaEnsinoBasicaSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtapaEnsinoBasicaSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends EtapaEnsinoBasicaSchool$dadosArgs<ExtArgs> = {}>(args?: Subset<T, EtapaEnsinoBasicaSchool$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EtapaEnsinoBasicaSchool model
   */ 
  interface EtapaEnsinoBasicaSchoolFieldRefs {
    readonly id: FieldRef<"EtapaEnsinoBasicaSchool", 'Int'>
    readonly nome: FieldRef<"EtapaEnsinoBasicaSchool", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EtapaEnsinoBasicaSchool findUnique
   */
  export type EtapaEnsinoBasicaSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicaSchool to fetch.
     */
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasicaSchool findUniqueOrThrow
   */
  export type EtapaEnsinoBasicaSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicaSchool to fetch.
     */
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasicaSchool findFirst
   */
  export type EtapaEnsinoBasicaSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicaSchool to fetch.
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicaSchools to fetch.
     */
    orderBy?: EtapaEnsinoBasicaSchoolOrderByWithRelationInput | EtapaEnsinoBasicaSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaEnsinoBasicaSchools.
     */
    cursor?: EtapaEnsinoBasicaSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicaSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicaSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaEnsinoBasicaSchools.
     */
    distinct?: EtapaEnsinoBasicaSchoolScalarFieldEnum | EtapaEnsinoBasicaSchoolScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasicaSchool findFirstOrThrow
   */
  export type EtapaEnsinoBasicaSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicaSchool to fetch.
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicaSchools to fetch.
     */
    orderBy?: EtapaEnsinoBasicaSchoolOrderByWithRelationInput | EtapaEnsinoBasicaSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaEnsinoBasicaSchools.
     */
    cursor?: EtapaEnsinoBasicaSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicaSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicaSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaEnsinoBasicaSchools.
     */
    distinct?: EtapaEnsinoBasicaSchoolScalarFieldEnum | EtapaEnsinoBasicaSchoolScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasicaSchool findMany
   */
  export type EtapaEnsinoBasicaSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter, which EtapaEnsinoBasicaSchools to fetch.
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaEnsinoBasicaSchools to fetch.
     */
    orderBy?: EtapaEnsinoBasicaSchoolOrderByWithRelationInput | EtapaEnsinoBasicaSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EtapaEnsinoBasicaSchools.
     */
    cursor?: EtapaEnsinoBasicaSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaEnsinoBasicaSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaEnsinoBasicaSchools.
     */
    skip?: number
    distinct?: EtapaEnsinoBasicaSchoolScalarFieldEnum | EtapaEnsinoBasicaSchoolScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasicaSchool create
   */
  export type EtapaEnsinoBasicaSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a EtapaEnsinoBasicaSchool.
     */
    data: XOR<EtapaEnsinoBasicaSchoolCreateInput, EtapaEnsinoBasicaSchoolUncheckedCreateInput>
  }


  /**
   * EtapaEnsinoBasicaSchool createMany
   */
  export type EtapaEnsinoBasicaSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtapaEnsinoBasicaSchools.
     */
    data: EtapaEnsinoBasicaSchoolCreateManyInput | EtapaEnsinoBasicaSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EtapaEnsinoBasicaSchool update
   */
  export type EtapaEnsinoBasicaSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a EtapaEnsinoBasicaSchool.
     */
    data: XOR<EtapaEnsinoBasicaSchoolUpdateInput, EtapaEnsinoBasicaSchoolUncheckedUpdateInput>
    /**
     * Choose, which EtapaEnsinoBasicaSchool to update.
     */
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasicaSchool updateMany
   */
  export type EtapaEnsinoBasicaSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EtapaEnsinoBasicaSchools.
     */
    data: XOR<EtapaEnsinoBasicaSchoolUpdateManyMutationInput, EtapaEnsinoBasicaSchoolUncheckedUpdateManyInput>
    /**
     * Filter which EtapaEnsinoBasicaSchools to update
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
  }


  /**
   * EtapaEnsinoBasicaSchool upsert
   */
  export type EtapaEnsinoBasicaSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the EtapaEnsinoBasicaSchool to update in case it exists.
     */
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
    /**
     * In case the EtapaEnsinoBasicaSchool found by the `where` argument doesn't exist, create a new EtapaEnsinoBasicaSchool with this data.
     */
    create: XOR<EtapaEnsinoBasicaSchoolCreateInput, EtapaEnsinoBasicaSchoolUncheckedCreateInput>
    /**
     * In case the EtapaEnsinoBasicaSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtapaEnsinoBasicaSchoolUpdateInput, EtapaEnsinoBasicaSchoolUncheckedUpdateInput>
  }


  /**
   * EtapaEnsinoBasicaSchool delete
   */
  export type EtapaEnsinoBasicaSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    /**
     * Filter which EtapaEnsinoBasicaSchool to delete.
     */
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
  }


  /**
   * EtapaEnsinoBasicaSchool deleteMany
   */
  export type EtapaEnsinoBasicaSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaEnsinoBasicaSchools to delete
     */
    where?: EtapaEnsinoBasicaSchoolWhereInput
  }


  /**
   * EtapaEnsinoBasicaSchool.dados
   */
  export type EtapaEnsinoBasicaSchool$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * EtapaEnsinoBasicaSchool without action
   */
  export type EtapaEnsinoBasicaSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
  }



  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: number
    nome: string
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dados_basica?: boolean | Localizacao$dados_basicaArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados_basica?: boolean | Localizacao$dados_basicaArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      dados_basica: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }


  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocalizacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Localizacao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocalizacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocalizacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
    **/
    create<T extends LocalizacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Localizacaos.
     *     @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     *     @example
     *     // Create many Localizacaos
     *     const localizacao = await prisma.localizacao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocalizacaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
    **/
    delete<T extends LocalizacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocalizacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocalizacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocalizacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
    **/
    upsert<T extends LocalizacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>
    ): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados_basica<T extends Localizacao$dados_basicaArgs<ExtArgs> = {}>(args?: Subset<T, Localizacao$dados_basicaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Localizacao model
   */ 
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'Int'>
    readonly nome: FieldRef<"Localizacao", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }


  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }


  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }


  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }


  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }


  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }


  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }


  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
  }


  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }


  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }


  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
  }


  /**
   * Localizacao.dados_basica
   */
  export type Localizacao$dados_basicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }



  /**
   * Model VinculoFuncional
   */

  export type AggregateVinculoFuncional = {
    _count: VinculoFuncionalCountAggregateOutputType | null
    _avg: VinculoFuncionalAvgAggregateOutputType | null
    _sum: VinculoFuncionalSumAggregateOutputType | null
    _min: VinculoFuncionalMinAggregateOutputType | null
    _max: VinculoFuncionalMaxAggregateOutputType | null
  }

  export type VinculoFuncionalAvgAggregateOutputType = {
    id: number | null
  }

  export type VinculoFuncionalSumAggregateOutputType = {
    id: number | null
  }

  export type VinculoFuncionalMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type VinculoFuncionalMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type VinculoFuncionalCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type VinculoFuncionalAvgAggregateInputType = {
    id?: true
  }

  export type VinculoFuncionalSumAggregateInputType = {
    id?: true
  }

  export type VinculoFuncionalMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type VinculoFuncionalMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type VinculoFuncionalCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type VinculoFuncionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VinculoFuncional to aggregate.
     */
    where?: VinculoFuncionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VinculoFuncionals to fetch.
     */
    orderBy?: VinculoFuncionalOrderByWithRelationInput | VinculoFuncionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VinculoFuncionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VinculoFuncionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VinculoFuncionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VinculoFuncionals
    **/
    _count?: true | VinculoFuncionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VinculoFuncionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VinculoFuncionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VinculoFuncionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VinculoFuncionalMaxAggregateInputType
  }

  export type GetVinculoFuncionalAggregateType<T extends VinculoFuncionalAggregateArgs> = {
        [P in keyof T & keyof AggregateVinculoFuncional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVinculoFuncional[P]>
      : GetScalarType<T[P], AggregateVinculoFuncional[P]>
  }




  export type VinculoFuncionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinculoFuncionalWhereInput
    orderBy?: VinculoFuncionalOrderByWithAggregationInput | VinculoFuncionalOrderByWithAggregationInput[]
    by: VinculoFuncionalScalarFieldEnum[] | VinculoFuncionalScalarFieldEnum
    having?: VinculoFuncionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VinculoFuncionalCountAggregateInputType | true
    _avg?: VinculoFuncionalAvgAggregateInputType
    _sum?: VinculoFuncionalSumAggregateInputType
    _min?: VinculoFuncionalMinAggregateInputType
    _max?: VinculoFuncionalMaxAggregateInputType
  }

  export type VinculoFuncionalGroupByOutputType = {
    id: number
    nome: string
    _count: VinculoFuncionalCountAggregateOutputType | null
    _avg: VinculoFuncionalAvgAggregateOutputType | null
    _sum: VinculoFuncionalSumAggregateOutputType | null
    _min: VinculoFuncionalMinAggregateOutputType | null
    _max: VinculoFuncionalMaxAggregateOutputType | null
  }

  type GetVinculoFuncionalGroupByPayload<T extends VinculoFuncionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VinculoFuncionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VinculoFuncionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VinculoFuncionalGroupByOutputType[P]>
            : GetScalarType<T[P], VinculoFuncionalGroupByOutputType[P]>
        }
      >
    >


  export type VinculoFuncionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dados?: boolean | VinculoFuncional$dadosArgs<ExtArgs>
    _count?: boolean | VinculoFuncionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vinculoFuncional"]>

  export type VinculoFuncionalSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type VinculoFuncionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | VinculoFuncional$dadosArgs<ExtArgs>
    _count?: boolean | VinculoFuncionalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VinculoFuncionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VinculoFuncional"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["vinculoFuncional"]>
    composites: {}
  }


  type VinculoFuncionalGetPayload<S extends boolean | null | undefined | VinculoFuncionalDefaultArgs> = $Result.GetResult<Prisma.$VinculoFuncionalPayload, S>

  type VinculoFuncionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VinculoFuncionalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VinculoFuncionalCountAggregateInputType | true
    }

  export interface VinculoFuncionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VinculoFuncional'], meta: { name: 'VinculoFuncional' } }
    /**
     * Find zero or one VinculoFuncional that matches the filter.
     * @param {VinculoFuncionalFindUniqueArgs} args - Arguments to find a VinculoFuncional
     * @example
     * // Get one VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VinculoFuncionalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalFindUniqueArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VinculoFuncional that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VinculoFuncionalFindUniqueOrThrowArgs} args - Arguments to find a VinculoFuncional
     * @example
     * // Get one VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VinculoFuncionalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VinculoFuncional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalFindFirstArgs} args - Arguments to find a VinculoFuncional
     * @example
     * // Get one VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VinculoFuncionalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalFindFirstArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VinculoFuncional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalFindFirstOrThrowArgs} args - Arguments to find a VinculoFuncional
     * @example
     * // Get one VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VinculoFuncionalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VinculoFuncionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VinculoFuncionals
     * const vinculoFuncionals = await prisma.vinculoFuncional.findMany()
     * 
     * // Get first 10 VinculoFuncionals
     * const vinculoFuncionals = await prisma.vinculoFuncional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vinculoFuncionalWithIdOnly = await prisma.vinculoFuncional.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VinculoFuncionalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VinculoFuncional.
     * @param {VinculoFuncionalCreateArgs} args - Arguments to create a VinculoFuncional.
     * @example
     * // Create one VinculoFuncional
     * const VinculoFuncional = await prisma.vinculoFuncional.create({
     *   data: {
     *     // ... data to create a VinculoFuncional
     *   }
     * })
     * 
    **/
    create<T extends VinculoFuncionalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalCreateArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VinculoFuncionals.
     *     @param {VinculoFuncionalCreateManyArgs} args - Arguments to create many VinculoFuncionals.
     *     @example
     *     // Create many VinculoFuncionals
     *     const vinculoFuncional = await prisma.vinculoFuncional.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VinculoFuncionalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VinculoFuncional.
     * @param {VinculoFuncionalDeleteArgs} args - Arguments to delete one VinculoFuncional.
     * @example
     * // Delete one VinculoFuncional
     * const VinculoFuncional = await prisma.vinculoFuncional.delete({
     *   where: {
     *     // ... filter to delete one VinculoFuncional
     *   }
     * })
     * 
    **/
    delete<T extends VinculoFuncionalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalDeleteArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VinculoFuncional.
     * @param {VinculoFuncionalUpdateArgs} args - Arguments to update one VinculoFuncional.
     * @example
     * // Update one VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VinculoFuncionalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalUpdateArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VinculoFuncionals.
     * @param {VinculoFuncionalDeleteManyArgs} args - Arguments to filter VinculoFuncionals to delete.
     * @example
     * // Delete a few VinculoFuncionals
     * const { count } = await prisma.vinculoFuncional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VinculoFuncionalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VinculoFuncionalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VinculoFuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VinculoFuncionals
     * const vinculoFuncional = await prisma.vinculoFuncional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VinculoFuncionalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VinculoFuncional.
     * @param {VinculoFuncionalUpsertArgs} args - Arguments to update or create a VinculoFuncional.
     * @example
     * // Update or create a VinculoFuncional
     * const vinculoFuncional = await prisma.vinculoFuncional.upsert({
     *   create: {
     *     // ... data to create a VinculoFuncional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VinculoFuncional we want to update
     *   }
     * })
    **/
    upsert<T extends VinculoFuncionalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VinculoFuncionalUpsertArgs<ExtArgs>>
    ): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VinculoFuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalCountArgs} args - Arguments to filter VinculoFuncionals to count.
     * @example
     * // Count the number of VinculoFuncionals
     * const count = await prisma.vinculoFuncional.count({
     *   where: {
     *     // ... the filter for the VinculoFuncionals we want to count
     *   }
     * })
    **/
    count<T extends VinculoFuncionalCountArgs>(
      args?: Subset<T, VinculoFuncionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VinculoFuncionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VinculoFuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VinculoFuncionalAggregateArgs>(args: Subset<T, VinculoFuncionalAggregateArgs>): Prisma.PrismaPromise<GetVinculoFuncionalAggregateType<T>>

    /**
     * Group by VinculoFuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinculoFuncionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VinculoFuncionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VinculoFuncionalGroupByArgs['orderBy'] }
        : { orderBy?: VinculoFuncionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VinculoFuncionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVinculoFuncionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VinculoFuncional model
   */
  readonly fields: VinculoFuncionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VinculoFuncional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VinculoFuncionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends VinculoFuncional$dadosArgs<ExtArgs> = {}>(args?: Subset<T, VinculoFuncional$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VinculoFuncional model
   */ 
  interface VinculoFuncionalFieldRefs {
    readonly id: FieldRef<"VinculoFuncional", 'Int'>
    readonly nome: FieldRef<"VinculoFuncional", 'String'>
  }
    

  // Custom InputTypes

  /**
   * VinculoFuncional findUnique
   */
  export type VinculoFuncionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter, which VinculoFuncional to fetch.
     */
    where: VinculoFuncionalWhereUniqueInput
  }


  /**
   * VinculoFuncional findUniqueOrThrow
   */
  export type VinculoFuncionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter, which VinculoFuncional to fetch.
     */
    where: VinculoFuncionalWhereUniqueInput
  }


  /**
   * VinculoFuncional findFirst
   */
  export type VinculoFuncionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter, which VinculoFuncional to fetch.
     */
    where?: VinculoFuncionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VinculoFuncionals to fetch.
     */
    orderBy?: VinculoFuncionalOrderByWithRelationInput | VinculoFuncionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VinculoFuncionals.
     */
    cursor?: VinculoFuncionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VinculoFuncionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VinculoFuncionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VinculoFuncionals.
     */
    distinct?: VinculoFuncionalScalarFieldEnum | VinculoFuncionalScalarFieldEnum[]
  }


  /**
   * VinculoFuncional findFirstOrThrow
   */
  export type VinculoFuncionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter, which VinculoFuncional to fetch.
     */
    where?: VinculoFuncionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VinculoFuncionals to fetch.
     */
    orderBy?: VinculoFuncionalOrderByWithRelationInput | VinculoFuncionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VinculoFuncionals.
     */
    cursor?: VinculoFuncionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VinculoFuncionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VinculoFuncionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VinculoFuncionals.
     */
    distinct?: VinculoFuncionalScalarFieldEnum | VinculoFuncionalScalarFieldEnum[]
  }


  /**
   * VinculoFuncional findMany
   */
  export type VinculoFuncionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter, which VinculoFuncionals to fetch.
     */
    where?: VinculoFuncionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VinculoFuncionals to fetch.
     */
    orderBy?: VinculoFuncionalOrderByWithRelationInput | VinculoFuncionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VinculoFuncionals.
     */
    cursor?: VinculoFuncionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VinculoFuncionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VinculoFuncionals.
     */
    skip?: number
    distinct?: VinculoFuncionalScalarFieldEnum | VinculoFuncionalScalarFieldEnum[]
  }


  /**
   * VinculoFuncional create
   */
  export type VinculoFuncionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * The data needed to create a VinculoFuncional.
     */
    data: XOR<VinculoFuncionalCreateInput, VinculoFuncionalUncheckedCreateInput>
  }


  /**
   * VinculoFuncional createMany
   */
  export type VinculoFuncionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VinculoFuncionals.
     */
    data: VinculoFuncionalCreateManyInput | VinculoFuncionalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VinculoFuncional update
   */
  export type VinculoFuncionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * The data needed to update a VinculoFuncional.
     */
    data: XOR<VinculoFuncionalUpdateInput, VinculoFuncionalUncheckedUpdateInput>
    /**
     * Choose, which VinculoFuncional to update.
     */
    where: VinculoFuncionalWhereUniqueInput
  }


  /**
   * VinculoFuncional updateMany
   */
  export type VinculoFuncionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VinculoFuncionals.
     */
    data: XOR<VinculoFuncionalUpdateManyMutationInput, VinculoFuncionalUncheckedUpdateManyInput>
    /**
     * Filter which VinculoFuncionals to update
     */
    where?: VinculoFuncionalWhereInput
  }


  /**
   * VinculoFuncional upsert
   */
  export type VinculoFuncionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * The filter to search for the VinculoFuncional to update in case it exists.
     */
    where: VinculoFuncionalWhereUniqueInput
    /**
     * In case the VinculoFuncional found by the `where` argument doesn't exist, create a new VinculoFuncional with this data.
     */
    create: XOR<VinculoFuncionalCreateInput, VinculoFuncionalUncheckedCreateInput>
    /**
     * In case the VinculoFuncional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VinculoFuncionalUpdateInput, VinculoFuncionalUncheckedUpdateInput>
  }


  /**
   * VinculoFuncional delete
   */
  export type VinculoFuncionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    /**
     * Filter which VinculoFuncional to delete.
     */
    where: VinculoFuncionalWhereUniqueInput
  }


  /**
   * VinculoFuncional deleteMany
   */
  export type VinculoFuncionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VinculoFuncionals to delete
     */
    where?: VinculoFuncionalWhereInput
  }


  /**
   * VinculoFuncional.dados
   */
  export type VinculoFuncional$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * VinculoFuncional without action
   */
  export type VinculoFuncionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
  }



  /**
   * Model FormacaoDocente
   */

  export type AggregateFormacaoDocente = {
    _count: FormacaoDocenteCountAggregateOutputType | null
    _avg: FormacaoDocenteAvgAggregateOutputType | null
    _sum: FormacaoDocenteSumAggregateOutputType | null
    _min: FormacaoDocenteMinAggregateOutputType | null
    _max: FormacaoDocenteMaxAggregateOutputType | null
  }

  export type FormacaoDocenteAvgAggregateOutputType = {
    id: number | null
  }

  export type FormacaoDocenteSumAggregateOutputType = {
    id: number | null
  }

  export type FormacaoDocenteMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type FormacaoDocenteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type FormacaoDocenteCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type FormacaoDocenteAvgAggregateInputType = {
    id?: true
  }

  export type FormacaoDocenteSumAggregateInputType = {
    id?: true
  }

  export type FormacaoDocenteMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type FormacaoDocenteMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type FormacaoDocenteCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type FormacaoDocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormacaoDocente to aggregate.
     */
    where?: FormacaoDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoDocentes to fetch.
     */
    orderBy?: FormacaoDocenteOrderByWithRelationInput | FormacaoDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormacaoDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormacaoDocentes
    **/
    _count?: true | FormacaoDocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormacaoDocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormacaoDocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormacaoDocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormacaoDocenteMaxAggregateInputType
  }

  export type GetFormacaoDocenteAggregateType<T extends FormacaoDocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateFormacaoDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormacaoDocente[P]>
      : GetScalarType<T[P], AggregateFormacaoDocente[P]>
  }




  export type FormacaoDocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormacaoDocenteWhereInput
    orderBy?: FormacaoDocenteOrderByWithAggregationInput | FormacaoDocenteOrderByWithAggregationInput[]
    by: FormacaoDocenteScalarFieldEnum[] | FormacaoDocenteScalarFieldEnum
    having?: FormacaoDocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormacaoDocenteCountAggregateInputType | true
    _avg?: FormacaoDocenteAvgAggregateInputType
    _sum?: FormacaoDocenteSumAggregateInputType
    _min?: FormacaoDocenteMinAggregateInputType
    _max?: FormacaoDocenteMaxAggregateInputType
  }

  export type FormacaoDocenteGroupByOutputType = {
    id: number
    nome: string
    _count: FormacaoDocenteCountAggregateOutputType | null
    _avg: FormacaoDocenteAvgAggregateOutputType | null
    _sum: FormacaoDocenteSumAggregateOutputType | null
    _min: FormacaoDocenteMinAggregateOutputType | null
    _max: FormacaoDocenteMaxAggregateOutputType | null
  }

  type GetFormacaoDocenteGroupByPayload<T extends FormacaoDocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormacaoDocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormacaoDocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormacaoDocenteGroupByOutputType[P]>
            : GetScalarType<T[P], FormacaoDocenteGroupByOutputType[P]>
        }
      >
    >


  export type FormacaoDocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dados?: boolean | FormacaoDocente$dadosArgs<ExtArgs>
    _count?: boolean | FormacaoDocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formacaoDocente"]>

  export type FormacaoDocenteSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type FormacaoDocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | FormacaoDocente$dadosArgs<ExtArgs>
    _count?: boolean | FormacaoDocenteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FormacaoDocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormacaoDocente"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["formacaoDocente"]>
    composites: {}
  }


  type FormacaoDocenteGetPayload<S extends boolean | null | undefined | FormacaoDocenteDefaultArgs> = $Result.GetResult<Prisma.$FormacaoDocentePayload, S>

  type FormacaoDocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormacaoDocenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormacaoDocenteCountAggregateInputType | true
    }

  export interface FormacaoDocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormacaoDocente'], meta: { name: 'FormacaoDocente' } }
    /**
     * Find zero or one FormacaoDocente that matches the filter.
     * @param {FormacaoDocenteFindUniqueArgs} args - Arguments to find a FormacaoDocente
     * @example
     * // Get one FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormacaoDocenteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteFindUniqueArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FormacaoDocente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormacaoDocenteFindUniqueOrThrowArgs} args - Arguments to find a FormacaoDocente
     * @example
     * // Get one FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormacaoDocenteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FormacaoDocente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteFindFirstArgs} args - Arguments to find a FormacaoDocente
     * @example
     * // Get one FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormacaoDocenteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteFindFirstArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FormacaoDocente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteFindFirstOrThrowArgs} args - Arguments to find a FormacaoDocente
     * @example
     * // Get one FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormacaoDocenteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FormacaoDocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormacaoDocentes
     * const formacaoDocentes = await prisma.formacaoDocente.findMany()
     * 
     * // Get first 10 FormacaoDocentes
     * const formacaoDocentes = await prisma.formacaoDocente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formacaoDocenteWithIdOnly = await prisma.formacaoDocente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormacaoDocenteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FormacaoDocente.
     * @param {FormacaoDocenteCreateArgs} args - Arguments to create a FormacaoDocente.
     * @example
     * // Create one FormacaoDocente
     * const FormacaoDocente = await prisma.formacaoDocente.create({
     *   data: {
     *     // ... data to create a FormacaoDocente
     *   }
     * })
     * 
    **/
    create<T extends FormacaoDocenteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteCreateArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FormacaoDocentes.
     *     @param {FormacaoDocenteCreateManyArgs} args - Arguments to create many FormacaoDocentes.
     *     @example
     *     // Create many FormacaoDocentes
     *     const formacaoDocente = await prisma.formacaoDocente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormacaoDocenteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormacaoDocente.
     * @param {FormacaoDocenteDeleteArgs} args - Arguments to delete one FormacaoDocente.
     * @example
     * // Delete one FormacaoDocente
     * const FormacaoDocente = await prisma.formacaoDocente.delete({
     *   where: {
     *     // ... filter to delete one FormacaoDocente
     *   }
     * })
     * 
    **/
    delete<T extends FormacaoDocenteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteDeleteArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FormacaoDocente.
     * @param {FormacaoDocenteUpdateArgs} args - Arguments to update one FormacaoDocente.
     * @example
     * // Update one FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormacaoDocenteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteUpdateArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FormacaoDocentes.
     * @param {FormacaoDocenteDeleteManyArgs} args - Arguments to filter FormacaoDocentes to delete.
     * @example
     * // Delete a few FormacaoDocentes
     * const { count } = await prisma.formacaoDocente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormacaoDocenteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormacaoDocenteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormacaoDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormacaoDocentes
     * const formacaoDocente = await prisma.formacaoDocente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormacaoDocenteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormacaoDocente.
     * @param {FormacaoDocenteUpsertArgs} args - Arguments to update or create a FormacaoDocente.
     * @example
     * // Update or create a FormacaoDocente
     * const formacaoDocente = await prisma.formacaoDocente.upsert({
     *   create: {
     *     // ... data to create a FormacaoDocente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormacaoDocente we want to update
     *   }
     * })
    **/
    upsert<T extends FormacaoDocenteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FormacaoDocenteUpsertArgs<ExtArgs>>
    ): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FormacaoDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteCountArgs} args - Arguments to filter FormacaoDocentes to count.
     * @example
     * // Count the number of FormacaoDocentes
     * const count = await prisma.formacaoDocente.count({
     *   where: {
     *     // ... the filter for the FormacaoDocentes we want to count
     *   }
     * })
    **/
    count<T extends FormacaoDocenteCountArgs>(
      args?: Subset<T, FormacaoDocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormacaoDocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormacaoDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormacaoDocenteAggregateArgs>(args: Subset<T, FormacaoDocenteAggregateArgs>): Prisma.PrismaPromise<GetFormacaoDocenteAggregateType<T>>

    /**
     * Group by FormacaoDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoDocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormacaoDocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormacaoDocenteGroupByArgs['orderBy'] }
        : { orderBy?: FormacaoDocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormacaoDocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormacaoDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormacaoDocente model
   */
  readonly fields: FormacaoDocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormacaoDocente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormacaoDocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends FormacaoDocente$dadosArgs<ExtArgs> = {}>(args?: Subset<T, FormacaoDocente$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FormacaoDocente model
   */ 
  interface FormacaoDocenteFieldRefs {
    readonly id: FieldRef<"FormacaoDocente", 'Int'>
    readonly nome: FieldRef<"FormacaoDocente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FormacaoDocente findUnique
   */
  export type FormacaoDocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoDocente to fetch.
     */
    where: FormacaoDocenteWhereUniqueInput
  }


  /**
   * FormacaoDocente findUniqueOrThrow
   */
  export type FormacaoDocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoDocente to fetch.
     */
    where: FormacaoDocenteWhereUniqueInput
  }


  /**
   * FormacaoDocente findFirst
   */
  export type FormacaoDocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoDocente to fetch.
     */
    where?: FormacaoDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoDocentes to fetch.
     */
    orderBy?: FormacaoDocenteOrderByWithRelationInput | FormacaoDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormacaoDocentes.
     */
    cursor?: FormacaoDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormacaoDocentes.
     */
    distinct?: FormacaoDocenteScalarFieldEnum | FormacaoDocenteScalarFieldEnum[]
  }


  /**
   * FormacaoDocente findFirstOrThrow
   */
  export type FormacaoDocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoDocente to fetch.
     */
    where?: FormacaoDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoDocentes to fetch.
     */
    orderBy?: FormacaoDocenteOrderByWithRelationInput | FormacaoDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormacaoDocentes.
     */
    cursor?: FormacaoDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormacaoDocentes.
     */
    distinct?: FormacaoDocenteScalarFieldEnum | FormacaoDocenteScalarFieldEnum[]
  }


  /**
   * FormacaoDocente findMany
   */
  export type FormacaoDocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoDocentes to fetch.
     */
    where?: FormacaoDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoDocentes to fetch.
     */
    orderBy?: FormacaoDocenteOrderByWithRelationInput | FormacaoDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormacaoDocentes.
     */
    cursor?: FormacaoDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoDocentes.
     */
    skip?: number
    distinct?: FormacaoDocenteScalarFieldEnum | FormacaoDocenteScalarFieldEnum[]
  }


  /**
   * FormacaoDocente create
   */
  export type FormacaoDocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a FormacaoDocente.
     */
    data: XOR<FormacaoDocenteCreateInput, FormacaoDocenteUncheckedCreateInput>
  }


  /**
   * FormacaoDocente createMany
   */
  export type FormacaoDocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormacaoDocentes.
     */
    data: FormacaoDocenteCreateManyInput | FormacaoDocenteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FormacaoDocente update
   */
  export type FormacaoDocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a FormacaoDocente.
     */
    data: XOR<FormacaoDocenteUpdateInput, FormacaoDocenteUncheckedUpdateInput>
    /**
     * Choose, which FormacaoDocente to update.
     */
    where: FormacaoDocenteWhereUniqueInput
  }


  /**
   * FormacaoDocente updateMany
   */
  export type FormacaoDocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormacaoDocentes.
     */
    data: XOR<FormacaoDocenteUpdateManyMutationInput, FormacaoDocenteUncheckedUpdateManyInput>
    /**
     * Filter which FormacaoDocentes to update
     */
    where?: FormacaoDocenteWhereInput
  }


  /**
   * FormacaoDocente upsert
   */
  export type FormacaoDocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the FormacaoDocente to update in case it exists.
     */
    where: FormacaoDocenteWhereUniqueInput
    /**
     * In case the FormacaoDocente found by the `where` argument doesn't exist, create a new FormacaoDocente with this data.
     */
    create: XOR<FormacaoDocenteCreateInput, FormacaoDocenteUncheckedCreateInput>
    /**
     * In case the FormacaoDocente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormacaoDocenteUpdateInput, FormacaoDocenteUncheckedUpdateInput>
  }


  /**
   * FormacaoDocente delete
   */
  export type FormacaoDocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    /**
     * Filter which FormacaoDocente to delete.
     */
    where: FormacaoDocenteWhereUniqueInput
  }


  /**
   * FormacaoDocente deleteMany
   */
  export type FormacaoDocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormacaoDocentes to delete
     */
    where?: FormacaoDocenteWhereInput
  }


  /**
   * FormacaoDocente.dados
   */
  export type FormacaoDocente$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * FormacaoDocente without action
   */
  export type FormacaoDocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
  }



  /**
   * Model FaixaEtaria
   */

  export type AggregateFaixaEtaria = {
    _count: FaixaEtariaCountAggregateOutputType | null
    _avg: FaixaEtariaAvgAggregateOutputType | null
    _sum: FaixaEtariaSumAggregateOutputType | null
    _min: FaixaEtariaMinAggregateOutputType | null
    _max: FaixaEtariaMaxAggregateOutputType | null
  }

  export type FaixaEtariaAvgAggregateOutputType = {
    id: number | null
    idade_inicial: number | null
    idade_final: number | null
  }

  export type FaixaEtariaSumAggregateOutputType = {
    id: number | null
    idade_inicial: number | null
    idade_final: number | null
  }

  export type FaixaEtariaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade_inicial: number | null
    idade_final: number | null
  }

  export type FaixaEtariaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade_inicial: number | null
    idade_final: number | null
  }

  export type FaixaEtariaCountAggregateOutputType = {
    id: number
    nome: number
    idade_inicial: number
    idade_final: number
    _all: number
  }


  export type FaixaEtariaAvgAggregateInputType = {
    id?: true
    idade_inicial?: true
    idade_final?: true
  }

  export type FaixaEtariaSumAggregateInputType = {
    id?: true
    idade_inicial?: true
    idade_final?: true
  }

  export type FaixaEtariaMinAggregateInputType = {
    id?: true
    nome?: true
    idade_inicial?: true
    idade_final?: true
  }

  export type FaixaEtariaMaxAggregateInputType = {
    id?: true
    nome?: true
    idade_inicial?: true
    idade_final?: true
  }

  export type FaixaEtariaCountAggregateInputType = {
    id?: true
    nome?: true
    idade_inicial?: true
    idade_final?: true
    _all?: true
  }

  export type FaixaEtariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaixaEtaria to aggregate.
     */
    where?: FaixaEtariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaixaEtarias to fetch.
     */
    orderBy?: FaixaEtariaOrderByWithRelationInput | FaixaEtariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaixaEtariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaixaEtarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaixaEtarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FaixaEtarias
    **/
    _count?: true | FaixaEtariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaixaEtariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaixaEtariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaixaEtariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaixaEtariaMaxAggregateInputType
  }

  export type GetFaixaEtariaAggregateType<T extends FaixaEtariaAggregateArgs> = {
        [P in keyof T & keyof AggregateFaixaEtaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaixaEtaria[P]>
      : GetScalarType<T[P], AggregateFaixaEtaria[P]>
  }




  export type FaixaEtariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaixaEtariaWhereInput
    orderBy?: FaixaEtariaOrderByWithAggregationInput | FaixaEtariaOrderByWithAggregationInput[]
    by: FaixaEtariaScalarFieldEnum[] | FaixaEtariaScalarFieldEnum
    having?: FaixaEtariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaixaEtariaCountAggregateInputType | true
    _avg?: FaixaEtariaAvgAggregateInputType
    _sum?: FaixaEtariaSumAggregateInputType
    _min?: FaixaEtariaMinAggregateInputType
    _max?: FaixaEtariaMaxAggregateInputType
  }

  export type FaixaEtariaGroupByOutputType = {
    id: number
    nome: string
    idade_inicial: number | null
    idade_final: number | null
    _count: FaixaEtariaCountAggregateOutputType | null
    _avg: FaixaEtariaAvgAggregateOutputType | null
    _sum: FaixaEtariaSumAggregateOutputType | null
    _min: FaixaEtariaMinAggregateOutputType | null
    _max: FaixaEtariaMaxAggregateOutputType | null
  }

  type GetFaixaEtariaGroupByPayload<T extends FaixaEtariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaixaEtariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaixaEtariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaixaEtariaGroupByOutputType[P]>
            : GetScalarType<T[P], FaixaEtariaGroupByOutputType[P]>
        }
      >
    >


  export type FaixaEtariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade_inicial?: boolean
    idade_final?: boolean
    dados?: boolean | FaixaEtaria$dadosArgs<ExtArgs>
    _count?: boolean | FaixaEtariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faixaEtaria"]>

  export type FaixaEtariaSelectScalar = {
    id?: boolean
    nome?: boolean
    idade_inicial?: boolean
    idade_final?: boolean
  }

  export type FaixaEtariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dados?: boolean | FaixaEtaria$dadosArgs<ExtArgs>
    _count?: boolean | FaixaEtariaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FaixaEtariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FaixaEtaria"
    objects: {
      dados: Prisma.$DadoEducacaoBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade_inicial: number | null
      idade_final: number | null
    }, ExtArgs["result"]["faixaEtaria"]>
    composites: {}
  }


  type FaixaEtariaGetPayload<S extends boolean | null | undefined | FaixaEtariaDefaultArgs> = $Result.GetResult<Prisma.$FaixaEtariaPayload, S>

  type FaixaEtariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FaixaEtariaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FaixaEtariaCountAggregateInputType | true
    }

  export interface FaixaEtariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FaixaEtaria'], meta: { name: 'FaixaEtaria' } }
    /**
     * Find zero or one FaixaEtaria that matches the filter.
     * @param {FaixaEtariaFindUniqueArgs} args - Arguments to find a FaixaEtaria
     * @example
     * // Get one FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FaixaEtariaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaFindUniqueArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FaixaEtaria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FaixaEtariaFindUniqueOrThrowArgs} args - Arguments to find a FaixaEtaria
     * @example
     * // Get one FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FaixaEtariaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FaixaEtaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaFindFirstArgs} args - Arguments to find a FaixaEtaria
     * @example
     * // Get one FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FaixaEtariaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaFindFirstArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FaixaEtaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaFindFirstOrThrowArgs} args - Arguments to find a FaixaEtaria
     * @example
     * // Get one FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FaixaEtariaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FaixaEtarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FaixaEtarias
     * const faixaEtarias = await prisma.faixaEtaria.findMany()
     * 
     * // Get first 10 FaixaEtarias
     * const faixaEtarias = await prisma.faixaEtaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faixaEtariaWithIdOnly = await prisma.faixaEtaria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FaixaEtariaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FaixaEtaria.
     * @param {FaixaEtariaCreateArgs} args - Arguments to create a FaixaEtaria.
     * @example
     * // Create one FaixaEtaria
     * const FaixaEtaria = await prisma.faixaEtaria.create({
     *   data: {
     *     // ... data to create a FaixaEtaria
     *   }
     * })
     * 
    **/
    create<T extends FaixaEtariaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaCreateArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FaixaEtarias.
     *     @param {FaixaEtariaCreateManyArgs} args - Arguments to create many FaixaEtarias.
     *     @example
     *     // Create many FaixaEtarias
     *     const faixaEtaria = await prisma.faixaEtaria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FaixaEtariaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FaixaEtaria.
     * @param {FaixaEtariaDeleteArgs} args - Arguments to delete one FaixaEtaria.
     * @example
     * // Delete one FaixaEtaria
     * const FaixaEtaria = await prisma.faixaEtaria.delete({
     *   where: {
     *     // ... filter to delete one FaixaEtaria
     *   }
     * })
     * 
    **/
    delete<T extends FaixaEtariaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaDeleteArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FaixaEtaria.
     * @param {FaixaEtariaUpdateArgs} args - Arguments to update one FaixaEtaria.
     * @example
     * // Update one FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FaixaEtariaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaUpdateArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FaixaEtarias.
     * @param {FaixaEtariaDeleteManyArgs} args - Arguments to filter FaixaEtarias to delete.
     * @example
     * // Delete a few FaixaEtarias
     * const { count } = await prisma.faixaEtaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FaixaEtariaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaixaEtariaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FaixaEtarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FaixaEtarias
     * const faixaEtaria = await prisma.faixaEtaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FaixaEtariaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FaixaEtaria.
     * @param {FaixaEtariaUpsertArgs} args - Arguments to update or create a FaixaEtaria.
     * @example
     * // Update or create a FaixaEtaria
     * const faixaEtaria = await prisma.faixaEtaria.upsert({
     *   create: {
     *     // ... data to create a FaixaEtaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FaixaEtaria we want to update
     *   }
     * })
    **/
    upsert<T extends FaixaEtariaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FaixaEtariaUpsertArgs<ExtArgs>>
    ): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FaixaEtarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaCountArgs} args - Arguments to filter FaixaEtarias to count.
     * @example
     * // Count the number of FaixaEtarias
     * const count = await prisma.faixaEtaria.count({
     *   where: {
     *     // ... the filter for the FaixaEtarias we want to count
     *   }
     * })
    **/
    count<T extends FaixaEtariaCountArgs>(
      args?: Subset<T, FaixaEtariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaixaEtariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FaixaEtaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaixaEtariaAggregateArgs>(args: Subset<T, FaixaEtariaAggregateArgs>): Prisma.PrismaPromise<GetFaixaEtariaAggregateType<T>>

    /**
     * Group by FaixaEtaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixaEtariaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaixaEtariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaixaEtariaGroupByArgs['orderBy'] }
        : { orderBy?: FaixaEtariaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaixaEtariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaixaEtariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FaixaEtaria model
   */
  readonly fields: FaixaEtariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FaixaEtaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaixaEtariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dados<T extends FaixaEtaria$dadosArgs<ExtArgs> = {}>(args?: Subset<T, FaixaEtaria$dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FaixaEtaria model
   */ 
  interface FaixaEtariaFieldRefs {
    readonly id: FieldRef<"FaixaEtaria", 'Int'>
    readonly nome: FieldRef<"FaixaEtaria", 'String'>
    readonly idade_inicial: FieldRef<"FaixaEtaria", 'Int'>
    readonly idade_final: FieldRef<"FaixaEtaria", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FaixaEtaria findUnique
   */
  export type FaixaEtariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter, which FaixaEtaria to fetch.
     */
    where: FaixaEtariaWhereUniqueInput
  }


  /**
   * FaixaEtaria findUniqueOrThrow
   */
  export type FaixaEtariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter, which FaixaEtaria to fetch.
     */
    where: FaixaEtariaWhereUniqueInput
  }


  /**
   * FaixaEtaria findFirst
   */
  export type FaixaEtariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter, which FaixaEtaria to fetch.
     */
    where?: FaixaEtariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaixaEtarias to fetch.
     */
    orderBy?: FaixaEtariaOrderByWithRelationInput | FaixaEtariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaixaEtarias.
     */
    cursor?: FaixaEtariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaixaEtarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaixaEtarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaixaEtarias.
     */
    distinct?: FaixaEtariaScalarFieldEnum | FaixaEtariaScalarFieldEnum[]
  }


  /**
   * FaixaEtaria findFirstOrThrow
   */
  export type FaixaEtariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter, which FaixaEtaria to fetch.
     */
    where?: FaixaEtariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaixaEtarias to fetch.
     */
    orderBy?: FaixaEtariaOrderByWithRelationInput | FaixaEtariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaixaEtarias.
     */
    cursor?: FaixaEtariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaixaEtarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaixaEtarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaixaEtarias.
     */
    distinct?: FaixaEtariaScalarFieldEnum | FaixaEtariaScalarFieldEnum[]
  }


  /**
   * FaixaEtaria findMany
   */
  export type FaixaEtariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter, which FaixaEtarias to fetch.
     */
    where?: FaixaEtariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaixaEtarias to fetch.
     */
    orderBy?: FaixaEtariaOrderByWithRelationInput | FaixaEtariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FaixaEtarias.
     */
    cursor?: FaixaEtariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaixaEtarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaixaEtarias.
     */
    skip?: number
    distinct?: FaixaEtariaScalarFieldEnum | FaixaEtariaScalarFieldEnum[]
  }


  /**
   * FaixaEtaria create
   */
  export type FaixaEtariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * The data needed to create a FaixaEtaria.
     */
    data: XOR<FaixaEtariaCreateInput, FaixaEtariaUncheckedCreateInput>
  }


  /**
   * FaixaEtaria createMany
   */
  export type FaixaEtariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FaixaEtarias.
     */
    data: FaixaEtariaCreateManyInput | FaixaEtariaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FaixaEtaria update
   */
  export type FaixaEtariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * The data needed to update a FaixaEtaria.
     */
    data: XOR<FaixaEtariaUpdateInput, FaixaEtariaUncheckedUpdateInput>
    /**
     * Choose, which FaixaEtaria to update.
     */
    where: FaixaEtariaWhereUniqueInput
  }


  /**
   * FaixaEtaria updateMany
   */
  export type FaixaEtariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FaixaEtarias.
     */
    data: XOR<FaixaEtariaUpdateManyMutationInput, FaixaEtariaUncheckedUpdateManyInput>
    /**
     * Filter which FaixaEtarias to update
     */
    where?: FaixaEtariaWhereInput
  }


  /**
   * FaixaEtaria upsert
   */
  export type FaixaEtariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * The filter to search for the FaixaEtaria to update in case it exists.
     */
    where: FaixaEtariaWhereUniqueInput
    /**
     * In case the FaixaEtaria found by the `where` argument doesn't exist, create a new FaixaEtaria with this data.
     */
    create: XOR<FaixaEtariaCreateInput, FaixaEtariaUncheckedCreateInput>
    /**
     * In case the FaixaEtaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaixaEtariaUpdateInput, FaixaEtariaUncheckedUpdateInput>
  }


  /**
   * FaixaEtaria delete
   */
  export type FaixaEtariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    /**
     * Filter which FaixaEtaria to delete.
     */
    where: FaixaEtariaWhereUniqueInput
  }


  /**
   * FaixaEtaria deleteMany
   */
  export type FaixaEtariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaixaEtarias to delete
     */
    where?: FaixaEtariaWhereInput
  }


  /**
   * FaixaEtaria.dados
   */
  export type FaixaEtaria$dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * FaixaEtaria without action
   */
  export type FaixaEtariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
  }



  /**
   * Model DadoEducacaoBasica
   */

  export type AggregateDadoEducacaoBasica = {
    _count: DadoEducacaoBasicaCountAggregateOutputType | null
    _avg: DadoEducacaoBasicaAvgAggregateOutputType | null
    _sum: DadoEducacaoBasicaSumAggregateOutputType | null
    _min: DadoEducacaoBasicaMinAggregateOutputType | null
    _max: DadoEducacaoBasicaMaxAggregateOutputType | null
  }

  export type DadoEducacaoBasicaAvgAggregateOutputType = {
    id: number | null
    ano: number | null
    total: Decimal | null
    localidade_id: number | null
    dependencia_id: number | null
    etapa_id: number | null
    etapa_school_id: number | null
    localizacao_id: number | null
    vinculo_id: number | null
    formacao_id: number | null
    faixa_etaria_id: number | null
  }

  export type DadoEducacaoBasicaSumAggregateOutputType = {
    id: number | null
    ano: number | null
    total: Decimal | null
    localidade_id: number | null
    dependencia_id: number | null
    etapa_id: number | null
    etapa_school_id: number | null
    localizacao_id: number | null
    vinculo_id: number | null
    formacao_id: number | null
    faixa_etaria_id: number | null
  }

  export type DadoEducacaoBasicaMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    ano: number | null
    total: Decimal | null
    data_atualizacao: Date | null
    localidade_id: number | null
    dependencia_id: number | null
    etapa_id: number | null
    etapa_school_id: number | null
    localizacao_id: number | null
    vinculo_id: number | null
    formacao_id: number | null
    faixa_etaria_id: number | null
  }

  export type DadoEducacaoBasicaMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    ano: number | null
    total: Decimal | null
    data_atualizacao: Date | null
    localidade_id: number | null
    dependencia_id: number | null
    etapa_id: number | null
    etapa_school_id: number | null
    localizacao_id: number | null
    vinculo_id: number | null
    formacao_id: number | null
    faixa_etaria_id: number | null
  }

  export type DadoEducacaoBasicaCountAggregateOutputType = {
    id: number
    tipo: number
    ano: number
    total: number
    data_atualizacao: number
    localidade_id: number
    dependencia_id: number
    etapa_id: number
    etapa_school_id: number
    localizacao_id: number
    vinculo_id: number
    formacao_id: number
    faixa_etaria_id: number
    _all: number
  }


  export type DadoEducacaoBasicaAvgAggregateInputType = {
    id?: true
    ano?: true
    total?: true
    localidade_id?: true
    dependencia_id?: true
    etapa_id?: true
    etapa_school_id?: true
    localizacao_id?: true
    vinculo_id?: true
    formacao_id?: true
    faixa_etaria_id?: true
  }

  export type DadoEducacaoBasicaSumAggregateInputType = {
    id?: true
    ano?: true
    total?: true
    localidade_id?: true
    dependencia_id?: true
    etapa_id?: true
    etapa_school_id?: true
    localizacao_id?: true
    vinculo_id?: true
    formacao_id?: true
    faixa_etaria_id?: true
  }

  export type DadoEducacaoBasicaMinAggregateInputType = {
    id?: true
    tipo?: true
    ano?: true
    total?: true
    data_atualizacao?: true
    localidade_id?: true
    dependencia_id?: true
    etapa_id?: true
    etapa_school_id?: true
    localizacao_id?: true
    vinculo_id?: true
    formacao_id?: true
    faixa_etaria_id?: true
  }

  export type DadoEducacaoBasicaMaxAggregateInputType = {
    id?: true
    tipo?: true
    ano?: true
    total?: true
    data_atualizacao?: true
    localidade_id?: true
    dependencia_id?: true
    etapa_id?: true
    etapa_school_id?: true
    localizacao_id?: true
    vinculo_id?: true
    formacao_id?: true
    faixa_etaria_id?: true
  }

  export type DadoEducacaoBasicaCountAggregateInputType = {
    id?: true
    tipo?: true
    ano?: true
    total?: true
    data_atualizacao?: true
    localidade_id?: true
    dependencia_id?: true
    etapa_id?: true
    etapa_school_id?: true
    localizacao_id?: true
    vinculo_id?: true
    formacao_id?: true
    faixa_etaria_id?: true
    _all?: true
  }

  export type DadoEducacaoBasicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DadoEducacaoBasica to aggregate.
     */
    where?: DadoEducacaoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEducacaoBasicas to fetch.
     */
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEducacaoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEducacaoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DadoEducacaoBasicas
    **/
    _count?: true | DadoEducacaoBasicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DadoEducacaoBasicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DadoEducacaoBasicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DadoEducacaoBasicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DadoEducacaoBasicaMaxAggregateInputType
  }

  export type GetDadoEducacaoBasicaAggregateType<T extends DadoEducacaoBasicaAggregateArgs> = {
        [P in keyof T & keyof AggregateDadoEducacaoBasica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDadoEducacaoBasica[P]>
      : GetScalarType<T[P], AggregateDadoEducacaoBasica[P]>
  }




  export type DadoEducacaoBasicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEducacaoBasicaWhereInput
    orderBy?: DadoEducacaoBasicaOrderByWithAggregationInput | DadoEducacaoBasicaOrderByWithAggregationInput[]
    by: DadoEducacaoBasicaScalarFieldEnum[] | DadoEducacaoBasicaScalarFieldEnum
    having?: DadoEducacaoBasicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DadoEducacaoBasicaCountAggregateInputType | true
    _avg?: DadoEducacaoBasicaAvgAggregateInputType
    _sum?: DadoEducacaoBasicaSumAggregateInputType
    _min?: DadoEducacaoBasicaMinAggregateInputType
    _max?: DadoEducacaoBasicaMaxAggregateInputType
  }

  export type DadoEducacaoBasicaGroupByOutputType = {
    id: number
    tipo: string
    ano: number
    total: Decimal
    data_atualizacao: Date
    localidade_id: number | null
    dependencia_id: number | null
    etapa_id: number | null
    etapa_school_id: number | null
    localizacao_id: number | null
    vinculo_id: number | null
    formacao_id: number | null
    faixa_etaria_id: number | null
    _count: DadoEducacaoBasicaCountAggregateOutputType | null
    _avg: DadoEducacaoBasicaAvgAggregateOutputType | null
    _sum: DadoEducacaoBasicaSumAggregateOutputType | null
    _min: DadoEducacaoBasicaMinAggregateOutputType | null
    _max: DadoEducacaoBasicaMaxAggregateOutputType | null
  }

  type GetDadoEducacaoBasicaGroupByPayload<T extends DadoEducacaoBasicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DadoEducacaoBasicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DadoEducacaoBasicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DadoEducacaoBasicaGroupByOutputType[P]>
            : GetScalarType<T[P], DadoEducacaoBasicaGroupByOutputType[P]>
        }
      >
    >


  export type DadoEducacaoBasicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    ano?: boolean
    total?: boolean
    data_atualizacao?: boolean
    localidade_id?: boolean
    dependencia_id?: boolean
    etapa_id?: boolean
    etapa_school_id?: boolean
    localizacao_id?: boolean
    vinculo_id?: boolean
    formacao_id?: boolean
    faixa_etaria_id?: boolean
    localidade?: boolean | DadoEducacaoBasica$localidadeArgs<ExtArgs>
    dependencia?: boolean | DadoEducacaoBasica$dependenciaArgs<ExtArgs>
    etapa?: boolean | DadoEducacaoBasica$etapaArgs<ExtArgs>
    etapa_school?: boolean | DadoEducacaoBasica$etapa_schoolArgs<ExtArgs>
    localizacao?: boolean | DadoEducacaoBasica$localizacaoArgs<ExtArgs>
    vinculo?: boolean | DadoEducacaoBasica$vinculoArgs<ExtArgs>
    formacao?: boolean | DadoEducacaoBasica$formacaoArgs<ExtArgs>
    faixa_etaria?: boolean | DadoEducacaoBasica$faixa_etariaArgs<ExtArgs>
  }, ExtArgs["result"]["dadoEducacaoBasica"]>

  export type DadoEducacaoBasicaSelectScalar = {
    id?: boolean
    tipo?: boolean
    ano?: boolean
    total?: boolean
    data_atualizacao?: boolean
    localidade_id?: boolean
    dependencia_id?: boolean
    etapa_id?: boolean
    etapa_school_id?: boolean
    localizacao_id?: boolean
    vinculo_id?: boolean
    formacao_id?: boolean
    faixa_etaria_id?: boolean
  }

  export type DadoEducacaoBasicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidade?: boolean | DadoEducacaoBasica$localidadeArgs<ExtArgs>
    dependencia?: boolean | DadoEducacaoBasica$dependenciaArgs<ExtArgs>
    etapa?: boolean | DadoEducacaoBasica$etapaArgs<ExtArgs>
    etapa_school?: boolean | DadoEducacaoBasica$etapa_schoolArgs<ExtArgs>
    localizacao?: boolean | DadoEducacaoBasica$localizacaoArgs<ExtArgs>
    vinculo?: boolean | DadoEducacaoBasica$vinculoArgs<ExtArgs>
    formacao?: boolean | DadoEducacaoBasica$formacaoArgs<ExtArgs>
    faixa_etaria?: boolean | DadoEducacaoBasica$faixa_etariaArgs<ExtArgs>
  }


  export type $DadoEducacaoBasicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DadoEducacaoBasica"
    objects: {
      localidade: Prisma.$LocalidadePayload<ExtArgs> | null
      dependencia: Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs> | null
      etapa: Prisma.$EtapaEnsinoBasicaPayload<ExtArgs> | null
      etapa_school: Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs> | null
      localizacao: Prisma.$LocalizacaoPayload<ExtArgs> | null
      vinculo: Prisma.$VinculoFuncionalPayload<ExtArgs> | null
      formacao: Prisma.$FormacaoDocentePayload<ExtArgs> | null
      faixa_etaria: Prisma.$FaixaEtariaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      ano: number
      total: Prisma.Decimal
      data_atualizacao: Date
      localidade_id: number | null
      dependencia_id: number | null
      etapa_id: number | null
      etapa_school_id: number | null
      localizacao_id: number | null
      vinculo_id: number | null
      formacao_id: number | null
      faixa_etaria_id: number | null
    }, ExtArgs["result"]["dadoEducacaoBasica"]>
    composites: {}
  }


  type DadoEducacaoBasicaGetPayload<S extends boolean | null | undefined | DadoEducacaoBasicaDefaultArgs> = $Result.GetResult<Prisma.$DadoEducacaoBasicaPayload, S>

  type DadoEducacaoBasicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DadoEducacaoBasicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DadoEducacaoBasicaCountAggregateInputType | true
    }

  export interface DadoEducacaoBasicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DadoEducacaoBasica'], meta: { name: 'DadoEducacaoBasica' } }
    /**
     * Find zero or one DadoEducacaoBasica that matches the filter.
     * @param {DadoEducacaoBasicaFindUniqueArgs} args - Arguments to find a DadoEducacaoBasica
     * @example
     * // Get one DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DadoEducacaoBasicaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaFindUniqueArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DadoEducacaoBasica that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DadoEducacaoBasicaFindUniqueOrThrowArgs} args - Arguments to find a DadoEducacaoBasica
     * @example
     * // Get one DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DadoEducacaoBasicaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DadoEducacaoBasica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaFindFirstArgs} args - Arguments to find a DadoEducacaoBasica
     * @example
     * // Get one DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DadoEducacaoBasicaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaFindFirstArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DadoEducacaoBasica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaFindFirstOrThrowArgs} args - Arguments to find a DadoEducacaoBasica
     * @example
     * // Get one DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DadoEducacaoBasicaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DadoEducacaoBasicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DadoEducacaoBasicas
     * const dadoEducacaoBasicas = await prisma.dadoEducacaoBasica.findMany()
     * 
     * // Get first 10 DadoEducacaoBasicas
     * const dadoEducacaoBasicas = await prisma.dadoEducacaoBasica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dadoEducacaoBasicaWithIdOnly = await prisma.dadoEducacaoBasica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DadoEducacaoBasicaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DadoEducacaoBasica.
     * @param {DadoEducacaoBasicaCreateArgs} args - Arguments to create a DadoEducacaoBasica.
     * @example
     * // Create one DadoEducacaoBasica
     * const DadoEducacaoBasica = await prisma.dadoEducacaoBasica.create({
     *   data: {
     *     // ... data to create a DadoEducacaoBasica
     *   }
     * })
     * 
    **/
    create<T extends DadoEducacaoBasicaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaCreateArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DadoEducacaoBasicas.
     *     @param {DadoEducacaoBasicaCreateManyArgs} args - Arguments to create many DadoEducacaoBasicas.
     *     @example
     *     // Create many DadoEducacaoBasicas
     *     const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DadoEducacaoBasicaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DadoEducacaoBasica.
     * @param {DadoEducacaoBasicaDeleteArgs} args - Arguments to delete one DadoEducacaoBasica.
     * @example
     * // Delete one DadoEducacaoBasica
     * const DadoEducacaoBasica = await prisma.dadoEducacaoBasica.delete({
     *   where: {
     *     // ... filter to delete one DadoEducacaoBasica
     *   }
     * })
     * 
    **/
    delete<T extends DadoEducacaoBasicaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaDeleteArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DadoEducacaoBasica.
     * @param {DadoEducacaoBasicaUpdateArgs} args - Arguments to update one DadoEducacaoBasica.
     * @example
     * // Update one DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DadoEducacaoBasicaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaUpdateArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DadoEducacaoBasicas.
     * @param {DadoEducacaoBasicaDeleteManyArgs} args - Arguments to filter DadoEducacaoBasicas to delete.
     * @example
     * // Delete a few DadoEducacaoBasicas
     * const { count } = await prisma.dadoEducacaoBasica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DadoEducacaoBasicaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DadoEducacaoBasicaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DadoEducacaoBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DadoEducacaoBasicas
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DadoEducacaoBasicaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DadoEducacaoBasica.
     * @param {DadoEducacaoBasicaUpsertArgs} args - Arguments to update or create a DadoEducacaoBasica.
     * @example
     * // Update or create a DadoEducacaoBasica
     * const dadoEducacaoBasica = await prisma.dadoEducacaoBasica.upsert({
     *   create: {
     *     // ... data to create a DadoEducacaoBasica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DadoEducacaoBasica we want to update
     *   }
     * })
    **/
    upsert<T extends DadoEducacaoBasicaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DadoEducacaoBasicaUpsertArgs<ExtArgs>>
    ): Prisma__DadoEducacaoBasicaClient<$Result.GetResult<Prisma.$DadoEducacaoBasicaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DadoEducacaoBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaCountArgs} args - Arguments to filter DadoEducacaoBasicas to count.
     * @example
     * // Count the number of DadoEducacaoBasicas
     * const count = await prisma.dadoEducacaoBasica.count({
     *   where: {
     *     // ... the filter for the DadoEducacaoBasicas we want to count
     *   }
     * })
    **/
    count<T extends DadoEducacaoBasicaCountArgs>(
      args?: Subset<T, DadoEducacaoBasicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DadoEducacaoBasicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DadoEducacaoBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DadoEducacaoBasicaAggregateArgs>(args: Subset<T, DadoEducacaoBasicaAggregateArgs>): Prisma.PrismaPromise<GetDadoEducacaoBasicaAggregateType<T>>

    /**
     * Group by DadoEducacaoBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEducacaoBasicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DadoEducacaoBasicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DadoEducacaoBasicaGroupByArgs['orderBy'] }
        : { orderBy?: DadoEducacaoBasicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DadoEducacaoBasicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDadoEducacaoBasicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DadoEducacaoBasica model
   */
  readonly fields: DadoEducacaoBasicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DadoEducacaoBasica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DadoEducacaoBasicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    localidade<T extends DadoEducacaoBasica$localidadeArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$localidadeArgs<ExtArgs>>): Prisma__LocalidadeClient<$Result.GetResult<Prisma.$LocalidadePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    dependencia<T extends DadoEducacaoBasica$dependenciaArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$dependenciaArgs<ExtArgs>>): Prisma__DependenciaAdministrativaBasicaClient<$Result.GetResult<Prisma.$DependenciaAdministrativaBasicaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    etapa<T extends DadoEducacaoBasica$etapaArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$etapaArgs<ExtArgs>>): Prisma__EtapaEnsinoBasicaClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    etapa_school<T extends DadoEducacaoBasica$etapa_schoolArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$etapa_schoolArgs<ExtArgs>>): Prisma__EtapaEnsinoBasicaSchoolClient<$Result.GetResult<Prisma.$EtapaEnsinoBasicaSchoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    localizacao<T extends DadoEducacaoBasica$localizacaoArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$localizacaoArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    vinculo<T extends DadoEducacaoBasica$vinculoArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$vinculoArgs<ExtArgs>>): Prisma__VinculoFuncionalClient<$Result.GetResult<Prisma.$VinculoFuncionalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    formacao<T extends DadoEducacaoBasica$formacaoArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$formacaoArgs<ExtArgs>>): Prisma__FormacaoDocenteClient<$Result.GetResult<Prisma.$FormacaoDocentePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    faixa_etaria<T extends DadoEducacaoBasica$faixa_etariaArgs<ExtArgs> = {}>(args?: Subset<T, DadoEducacaoBasica$faixa_etariaArgs<ExtArgs>>): Prisma__FaixaEtariaClient<$Result.GetResult<Prisma.$FaixaEtariaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DadoEducacaoBasica model
   */ 
  interface DadoEducacaoBasicaFieldRefs {
    readonly id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly tipo: FieldRef<"DadoEducacaoBasica", 'String'>
    readonly ano: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly total: FieldRef<"DadoEducacaoBasica", 'Decimal'>
    readonly data_atualizacao: FieldRef<"DadoEducacaoBasica", 'DateTime'>
    readonly localidade_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly dependencia_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly etapa_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly etapa_school_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly localizacao_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly vinculo_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly formacao_id: FieldRef<"DadoEducacaoBasica", 'Int'>
    readonly faixa_etaria_id: FieldRef<"DadoEducacaoBasica", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DadoEducacaoBasica findUnique
   */
  export type DadoEducacaoBasicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DadoEducacaoBasica to fetch.
     */
    where: DadoEducacaoBasicaWhereUniqueInput
  }


  /**
   * DadoEducacaoBasica findUniqueOrThrow
   */
  export type DadoEducacaoBasicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DadoEducacaoBasica to fetch.
     */
    where: DadoEducacaoBasicaWhereUniqueInput
  }


  /**
   * DadoEducacaoBasica findFirst
   */
  export type DadoEducacaoBasicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DadoEducacaoBasica to fetch.
     */
    where?: DadoEducacaoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEducacaoBasicas to fetch.
     */
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DadoEducacaoBasicas.
     */
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEducacaoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEducacaoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DadoEducacaoBasicas.
     */
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * DadoEducacaoBasica findFirstOrThrow
   */
  export type DadoEducacaoBasicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DadoEducacaoBasica to fetch.
     */
    where?: DadoEducacaoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEducacaoBasicas to fetch.
     */
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DadoEducacaoBasicas.
     */
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEducacaoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEducacaoBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DadoEducacaoBasicas.
     */
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * DadoEducacaoBasica findMany
   */
  export type DadoEducacaoBasicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter, which DadoEducacaoBasicas to fetch.
     */
    where?: DadoEducacaoBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEducacaoBasicas to fetch.
     */
    orderBy?: DadoEducacaoBasicaOrderByWithRelationInput | DadoEducacaoBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DadoEducacaoBasicas.
     */
    cursor?: DadoEducacaoBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEducacaoBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEducacaoBasicas.
     */
    skip?: number
    distinct?: DadoEducacaoBasicaScalarFieldEnum | DadoEducacaoBasicaScalarFieldEnum[]
  }


  /**
   * DadoEducacaoBasica create
   */
  export type DadoEducacaoBasicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * The data needed to create a DadoEducacaoBasica.
     */
    data: XOR<DadoEducacaoBasicaCreateInput, DadoEducacaoBasicaUncheckedCreateInput>
  }


  /**
   * DadoEducacaoBasica createMany
   */
  export type DadoEducacaoBasicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DadoEducacaoBasicas.
     */
    data: DadoEducacaoBasicaCreateManyInput | DadoEducacaoBasicaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DadoEducacaoBasica update
   */
  export type DadoEducacaoBasicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * The data needed to update a DadoEducacaoBasica.
     */
    data: XOR<DadoEducacaoBasicaUpdateInput, DadoEducacaoBasicaUncheckedUpdateInput>
    /**
     * Choose, which DadoEducacaoBasica to update.
     */
    where: DadoEducacaoBasicaWhereUniqueInput
  }


  /**
   * DadoEducacaoBasica updateMany
   */
  export type DadoEducacaoBasicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DadoEducacaoBasicas.
     */
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyInput>
    /**
     * Filter which DadoEducacaoBasicas to update
     */
    where?: DadoEducacaoBasicaWhereInput
  }


  /**
   * DadoEducacaoBasica upsert
   */
  export type DadoEducacaoBasicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * The filter to search for the DadoEducacaoBasica to update in case it exists.
     */
    where: DadoEducacaoBasicaWhereUniqueInput
    /**
     * In case the DadoEducacaoBasica found by the `where` argument doesn't exist, create a new DadoEducacaoBasica with this data.
     */
    create: XOR<DadoEducacaoBasicaCreateInput, DadoEducacaoBasicaUncheckedCreateInput>
    /**
     * In case the DadoEducacaoBasica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DadoEducacaoBasicaUpdateInput, DadoEducacaoBasicaUncheckedUpdateInput>
  }


  /**
   * DadoEducacaoBasica delete
   */
  export type DadoEducacaoBasicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
    /**
     * Filter which DadoEducacaoBasica to delete.
     */
    where: DadoEducacaoBasicaWhereUniqueInput
  }


  /**
   * DadoEducacaoBasica deleteMany
   */
  export type DadoEducacaoBasicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DadoEducacaoBasicas to delete
     */
    where?: DadoEducacaoBasicaWhereInput
  }


  /**
   * DadoEducacaoBasica.localidade
   */
  export type DadoEducacaoBasica$localidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidade
     */
    select?: LocalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalidadeInclude<ExtArgs> | null
    where?: LocalidadeWhereInput
  }


  /**
   * DadoEducacaoBasica.dependencia
   */
  export type DadoEducacaoBasica$dependenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciaAdministrativaBasica
     */
    select?: DependenciaAdministrativaBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DependenciaAdministrativaBasicaInclude<ExtArgs> | null
    where?: DependenciaAdministrativaBasicaWhereInput
  }


  /**
   * DadoEducacaoBasica.etapa
   */
  export type DadoEducacaoBasica$etapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasica
     */
    select?: EtapaEnsinoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaInclude<ExtArgs> | null
    where?: EtapaEnsinoBasicaWhereInput
  }


  /**
   * DadoEducacaoBasica.etapa_school
   */
  export type DadoEducacaoBasica$etapa_schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaEnsinoBasicaSchool
     */
    select?: EtapaEnsinoBasicaSchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EtapaEnsinoBasicaSchoolInclude<ExtArgs> | null
    where?: EtapaEnsinoBasicaSchoolWhereInput
  }


  /**
   * DadoEducacaoBasica.localizacao
   */
  export type DadoEducacaoBasica$localizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
  }


  /**
   * DadoEducacaoBasica.vinculo
   */
  export type DadoEducacaoBasica$vinculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinculoFuncional
     */
    select?: VinculoFuncionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VinculoFuncionalInclude<ExtArgs> | null
    where?: VinculoFuncionalWhereInput
  }


  /**
   * DadoEducacaoBasica.formacao
   */
  export type DadoEducacaoBasica$formacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoDocente
     */
    select?: FormacaoDocenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormacaoDocenteInclude<ExtArgs> | null
    where?: FormacaoDocenteWhereInput
  }


  /**
   * DadoEducacaoBasica.faixa_etaria
   */
  export type DadoEducacaoBasica$faixa_etariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaixaEtaria
     */
    select?: FaixaEtariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaixaEtariaInclude<ExtArgs> | null
    where?: FaixaEtariaWhereInput
  }


  /**
   * DadoEducacaoBasica without action
   */
  export type DadoEducacaoBasicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEducacaoBasica
     */
    select?: DadoEducacaoBasicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DadoEducacaoBasicaInclude<ExtArgs> | null
  }



  /**
   * Model ImportacaoAPI
   */

  export type AggregateImportacaoAPI = {
    _count: ImportacaoAPICountAggregateOutputType | null
    _avg: ImportacaoAPIAvgAggregateOutputType | null
    _sum: ImportacaoAPISumAggregateOutputType | null
    _min: ImportacaoAPIMinAggregateOutputType | null
    _max: ImportacaoAPIMaxAggregateOutputType | null
  }

  export type ImportacaoAPIAvgAggregateOutputType = {
    id: number | null
    anos_importados: number | null
    total_registros: number | null
  }

  export type ImportacaoAPISumAggregateOutputType = {
    id: number | null
    anos_importados: number[]
    total_registros: number | null
  }

  export type ImportacaoAPIMinAggregateOutputType = {
    id: number | null
    data_importacao: Date | null
    tipo_dado: string | null
    total_registros: number | null
    status: string | null
    mensagem_erro: string | null
  }

  export type ImportacaoAPIMaxAggregateOutputType = {
    id: number | null
    data_importacao: Date | null
    tipo_dado: string | null
    total_registros: number | null
    status: string | null
    mensagem_erro: string | null
  }

  export type ImportacaoAPICountAggregateOutputType = {
    id: number
    data_importacao: number
    tipo_dado: number
    anos_importados: number
    filtros_aplicados: number
    total_registros: number
    status: number
    mensagem_erro: number
    _all: number
  }


  export type ImportacaoAPIAvgAggregateInputType = {
    id?: true
    anos_importados?: true
    total_registros?: true
  }

  export type ImportacaoAPISumAggregateInputType = {
    id?: true
    anos_importados?: true
    total_registros?: true
  }

  export type ImportacaoAPIMinAggregateInputType = {
    id?: true
    data_importacao?: true
    tipo_dado?: true
    total_registros?: true
    status?: true
    mensagem_erro?: true
  }

  export type ImportacaoAPIMaxAggregateInputType = {
    id?: true
    data_importacao?: true
    tipo_dado?: true
    total_registros?: true
    status?: true
    mensagem_erro?: true
  }

  export type ImportacaoAPICountAggregateInputType = {
    id?: true
    data_importacao?: true
    tipo_dado?: true
    anos_importados?: true
    filtros_aplicados?: true
    total_registros?: true
    status?: true
    mensagem_erro?: true
    _all?: true
  }

  export type ImportacaoAPIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportacaoAPI to aggregate.
     */
    where?: ImportacaoAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacaoAPIS to fetch.
     */
    orderBy?: ImportacaoAPIOrderByWithRelationInput | ImportacaoAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportacaoAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacaoAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacaoAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportacaoAPIS
    **/
    _count?: true | ImportacaoAPICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportacaoAPIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportacaoAPISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportacaoAPIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportacaoAPIMaxAggregateInputType
  }

  export type GetImportacaoAPIAggregateType<T extends ImportacaoAPIAggregateArgs> = {
        [P in keyof T & keyof AggregateImportacaoAPI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportacaoAPI[P]>
      : GetScalarType<T[P], AggregateImportacaoAPI[P]>
  }




  export type ImportacaoAPIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportacaoAPIWhereInput
    orderBy?: ImportacaoAPIOrderByWithAggregationInput | ImportacaoAPIOrderByWithAggregationInput[]
    by: ImportacaoAPIScalarFieldEnum[] | ImportacaoAPIScalarFieldEnum
    having?: ImportacaoAPIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportacaoAPICountAggregateInputType | true
    _avg?: ImportacaoAPIAvgAggregateInputType
    _sum?: ImportacaoAPISumAggregateInputType
    _min?: ImportacaoAPIMinAggregateInputType
    _max?: ImportacaoAPIMaxAggregateInputType
  }

  export type ImportacaoAPIGroupByOutputType = {
    id: number
    data_importacao: Date
    tipo_dado: string
    anos_importados: number[]
    filtros_aplicados: JsonValue | null
    total_registros: number
    status: string
    mensagem_erro: string | null
    _count: ImportacaoAPICountAggregateOutputType | null
    _avg: ImportacaoAPIAvgAggregateOutputType | null
    _sum: ImportacaoAPISumAggregateOutputType | null
    _min: ImportacaoAPIMinAggregateOutputType | null
    _max: ImportacaoAPIMaxAggregateOutputType | null
  }

  type GetImportacaoAPIGroupByPayload<T extends ImportacaoAPIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportacaoAPIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportacaoAPIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportacaoAPIGroupByOutputType[P]>
            : GetScalarType<T[P], ImportacaoAPIGroupByOutputType[P]>
        }
      >
    >


  export type ImportacaoAPISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_importacao?: boolean
    tipo_dado?: boolean
    anos_importados?: boolean
    filtros_aplicados?: boolean
    total_registros?: boolean
    status?: boolean
    mensagem_erro?: boolean
  }, ExtArgs["result"]["importacaoAPI"]>

  export type ImportacaoAPISelectScalar = {
    id?: boolean
    data_importacao?: boolean
    tipo_dado?: boolean
    anos_importados?: boolean
    filtros_aplicados?: boolean
    total_registros?: boolean
    status?: boolean
    mensagem_erro?: boolean
  }


  export type $ImportacaoAPIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportacaoAPI"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_importacao: Date
      tipo_dado: string
      anos_importados: number[]
      filtros_aplicados: Prisma.JsonValue | null
      total_registros: number
      status: string
      mensagem_erro: string | null
    }, ExtArgs["result"]["importacaoAPI"]>
    composites: {}
  }


  type ImportacaoAPIGetPayload<S extends boolean | null | undefined | ImportacaoAPIDefaultArgs> = $Result.GetResult<Prisma.$ImportacaoAPIPayload, S>

  type ImportacaoAPICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImportacaoAPIFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImportacaoAPICountAggregateInputType | true
    }

  export interface ImportacaoAPIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportacaoAPI'], meta: { name: 'ImportacaoAPI' } }
    /**
     * Find zero or one ImportacaoAPI that matches the filter.
     * @param {ImportacaoAPIFindUniqueArgs} args - Arguments to find a ImportacaoAPI
     * @example
     * // Get one ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImportacaoAPIFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPIFindUniqueArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ImportacaoAPI that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImportacaoAPIFindUniqueOrThrowArgs} args - Arguments to find a ImportacaoAPI
     * @example
     * // Get one ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImportacaoAPIFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPIFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ImportacaoAPI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIFindFirstArgs} args - Arguments to find a ImportacaoAPI
     * @example
     * // Get one ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImportacaoAPIFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPIFindFirstArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ImportacaoAPI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIFindFirstOrThrowArgs} args - Arguments to find a ImportacaoAPI
     * @example
     * // Get one ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImportacaoAPIFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPIFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ImportacaoAPIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportacaoAPIS
     * const importacaoAPIS = await prisma.importacaoAPI.findMany()
     * 
     * // Get first 10 ImportacaoAPIS
     * const importacaoAPIS = await prisma.importacaoAPI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importacaoAPIWithIdOnly = await prisma.importacaoAPI.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImportacaoAPIFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPIFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ImportacaoAPI.
     * @param {ImportacaoAPICreateArgs} args - Arguments to create a ImportacaoAPI.
     * @example
     * // Create one ImportacaoAPI
     * const ImportacaoAPI = await prisma.importacaoAPI.create({
     *   data: {
     *     // ... data to create a ImportacaoAPI
     *   }
     * })
     * 
    **/
    create<T extends ImportacaoAPICreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPICreateArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ImportacaoAPIS.
     *     @param {ImportacaoAPICreateManyArgs} args - Arguments to create many ImportacaoAPIS.
     *     @example
     *     // Create many ImportacaoAPIS
     *     const importacaoAPI = await prisma.importacaoAPI.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImportacaoAPICreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPICreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImportacaoAPI.
     * @param {ImportacaoAPIDeleteArgs} args - Arguments to delete one ImportacaoAPI.
     * @example
     * // Delete one ImportacaoAPI
     * const ImportacaoAPI = await prisma.importacaoAPI.delete({
     *   where: {
     *     // ... filter to delete one ImportacaoAPI
     *   }
     * })
     * 
    **/
    delete<T extends ImportacaoAPIDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPIDeleteArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ImportacaoAPI.
     * @param {ImportacaoAPIUpdateArgs} args - Arguments to update one ImportacaoAPI.
     * @example
     * // Update one ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImportacaoAPIUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPIUpdateArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ImportacaoAPIS.
     * @param {ImportacaoAPIDeleteManyArgs} args - Arguments to filter ImportacaoAPIS to delete.
     * @example
     * // Delete a few ImportacaoAPIS
     * const { count } = await prisma.importacaoAPI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImportacaoAPIDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportacaoAPIDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportacaoAPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportacaoAPIS
     * const importacaoAPI = await prisma.importacaoAPI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImportacaoAPIUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPIUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImportacaoAPI.
     * @param {ImportacaoAPIUpsertArgs} args - Arguments to update or create a ImportacaoAPI.
     * @example
     * // Update or create a ImportacaoAPI
     * const importacaoAPI = await prisma.importacaoAPI.upsert({
     *   create: {
     *     // ... data to create a ImportacaoAPI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportacaoAPI we want to update
     *   }
     * })
    **/
    upsert<T extends ImportacaoAPIUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImportacaoAPIUpsertArgs<ExtArgs>>
    ): Prisma__ImportacaoAPIClient<$Result.GetResult<Prisma.$ImportacaoAPIPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ImportacaoAPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPICountArgs} args - Arguments to filter ImportacaoAPIS to count.
     * @example
     * // Count the number of ImportacaoAPIS
     * const count = await prisma.importacaoAPI.count({
     *   where: {
     *     // ... the filter for the ImportacaoAPIS we want to count
     *   }
     * })
    **/
    count<T extends ImportacaoAPICountArgs>(
      args?: Subset<T, ImportacaoAPICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportacaoAPICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportacaoAPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportacaoAPIAggregateArgs>(args: Subset<T, ImportacaoAPIAggregateArgs>): Prisma.PrismaPromise<GetImportacaoAPIAggregateType<T>>

    /**
     * Group by ImportacaoAPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacaoAPIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportacaoAPIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportacaoAPIGroupByArgs['orderBy'] }
        : { orderBy?: ImportacaoAPIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportacaoAPIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportacaoAPIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportacaoAPI model
   */
  readonly fields: ImportacaoAPIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportacaoAPI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportacaoAPIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ImportacaoAPI model
   */ 
  interface ImportacaoAPIFieldRefs {
    readonly id: FieldRef<"ImportacaoAPI", 'Int'>
    readonly data_importacao: FieldRef<"ImportacaoAPI", 'DateTime'>
    readonly tipo_dado: FieldRef<"ImportacaoAPI", 'String'>
    readonly anos_importados: FieldRef<"ImportacaoAPI", 'Int[]'>
    readonly filtros_aplicados: FieldRef<"ImportacaoAPI", 'Json'>
    readonly total_registros: FieldRef<"ImportacaoAPI", 'Int'>
    readonly status: FieldRef<"ImportacaoAPI", 'String'>
    readonly mensagem_erro: FieldRef<"ImportacaoAPI", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ImportacaoAPI findUnique
   */
  export type ImportacaoAPIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter, which ImportacaoAPI to fetch.
     */
    where: ImportacaoAPIWhereUniqueInput
  }


  /**
   * ImportacaoAPI findUniqueOrThrow
   */
  export type ImportacaoAPIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter, which ImportacaoAPI to fetch.
     */
    where: ImportacaoAPIWhereUniqueInput
  }


  /**
   * ImportacaoAPI findFirst
   */
  export type ImportacaoAPIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter, which ImportacaoAPI to fetch.
     */
    where?: ImportacaoAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacaoAPIS to fetch.
     */
    orderBy?: ImportacaoAPIOrderByWithRelationInput | ImportacaoAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportacaoAPIS.
     */
    cursor?: ImportacaoAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacaoAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacaoAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportacaoAPIS.
     */
    distinct?: ImportacaoAPIScalarFieldEnum | ImportacaoAPIScalarFieldEnum[]
  }


  /**
   * ImportacaoAPI findFirstOrThrow
   */
  export type ImportacaoAPIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter, which ImportacaoAPI to fetch.
     */
    where?: ImportacaoAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacaoAPIS to fetch.
     */
    orderBy?: ImportacaoAPIOrderByWithRelationInput | ImportacaoAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportacaoAPIS.
     */
    cursor?: ImportacaoAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacaoAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacaoAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportacaoAPIS.
     */
    distinct?: ImportacaoAPIScalarFieldEnum | ImportacaoAPIScalarFieldEnum[]
  }


  /**
   * ImportacaoAPI findMany
   */
  export type ImportacaoAPIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter, which ImportacaoAPIS to fetch.
     */
    where?: ImportacaoAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacaoAPIS to fetch.
     */
    orderBy?: ImportacaoAPIOrderByWithRelationInput | ImportacaoAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportacaoAPIS.
     */
    cursor?: ImportacaoAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacaoAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacaoAPIS.
     */
    skip?: number
    distinct?: ImportacaoAPIScalarFieldEnum | ImportacaoAPIScalarFieldEnum[]
  }


  /**
   * ImportacaoAPI create
   */
  export type ImportacaoAPICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * The data needed to create a ImportacaoAPI.
     */
    data: XOR<ImportacaoAPICreateInput, ImportacaoAPIUncheckedCreateInput>
  }


  /**
   * ImportacaoAPI createMany
   */
  export type ImportacaoAPICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportacaoAPIS.
     */
    data: ImportacaoAPICreateManyInput | ImportacaoAPICreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ImportacaoAPI update
   */
  export type ImportacaoAPIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * The data needed to update a ImportacaoAPI.
     */
    data: XOR<ImportacaoAPIUpdateInput, ImportacaoAPIUncheckedUpdateInput>
    /**
     * Choose, which ImportacaoAPI to update.
     */
    where: ImportacaoAPIWhereUniqueInput
  }


  /**
   * ImportacaoAPI updateMany
   */
  export type ImportacaoAPIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportacaoAPIS.
     */
    data: XOR<ImportacaoAPIUpdateManyMutationInput, ImportacaoAPIUncheckedUpdateManyInput>
    /**
     * Filter which ImportacaoAPIS to update
     */
    where?: ImportacaoAPIWhereInput
  }


  /**
   * ImportacaoAPI upsert
   */
  export type ImportacaoAPIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * The filter to search for the ImportacaoAPI to update in case it exists.
     */
    where: ImportacaoAPIWhereUniqueInput
    /**
     * In case the ImportacaoAPI found by the `where` argument doesn't exist, create a new ImportacaoAPI with this data.
     */
    create: XOR<ImportacaoAPICreateInput, ImportacaoAPIUncheckedCreateInput>
    /**
     * In case the ImportacaoAPI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportacaoAPIUpdateInput, ImportacaoAPIUncheckedUpdateInput>
  }


  /**
   * ImportacaoAPI delete
   */
  export type ImportacaoAPIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
    /**
     * Filter which ImportacaoAPI to delete.
     */
    where: ImportacaoAPIWhereUniqueInput
  }


  /**
   * ImportacaoAPI deleteMany
   */
  export type ImportacaoAPIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportacaoAPIS to delete
     */
    where?: ImportacaoAPIWhereInput
  }


  /**
   * ImportacaoAPI without action
   */
  export type ImportacaoAPIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacaoAPI
     */
    select?: ImportacaoAPISelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LocalidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    uf: 'uf',
    codigo_ibge: 'codigo_ibge'
  };

  export type LocalidadeScalarFieldEnum = (typeof LocalidadeScalarFieldEnum)[keyof typeof LocalidadeScalarFieldEnum]


  export const DependenciaAdministrativaBasicaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo'
  };

  export type DependenciaAdministrativaBasicaScalarFieldEnum = (typeof DependenciaAdministrativaBasicaScalarFieldEnum)[keyof typeof DependenciaAdministrativaBasicaScalarFieldEnum]


  export const EtapaEnsinoBasicaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_curto: 'nome_curto'
  };

  export type EtapaEnsinoBasicaScalarFieldEnum = (typeof EtapaEnsinoBasicaScalarFieldEnum)[keyof typeof EtapaEnsinoBasicaScalarFieldEnum]


  export const EtapaEnsinoBasicaSchoolScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type EtapaEnsinoBasicaSchoolScalarFieldEnum = (typeof EtapaEnsinoBasicaSchoolScalarFieldEnum)[keyof typeof EtapaEnsinoBasicaSchoolScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const VinculoFuncionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type VinculoFuncionalScalarFieldEnum = (typeof VinculoFuncionalScalarFieldEnum)[keyof typeof VinculoFuncionalScalarFieldEnum]


  export const FormacaoDocenteScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type FormacaoDocenteScalarFieldEnum = (typeof FormacaoDocenteScalarFieldEnum)[keyof typeof FormacaoDocenteScalarFieldEnum]


  export const FaixaEtariaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade_inicial: 'idade_inicial',
    idade_final: 'idade_final'
  };

  export type FaixaEtariaScalarFieldEnum = (typeof FaixaEtariaScalarFieldEnum)[keyof typeof FaixaEtariaScalarFieldEnum]


  export const DadoEducacaoBasicaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    ano: 'ano',
    total: 'total',
    data_atualizacao: 'data_atualizacao',
    localidade_id: 'localidade_id',
    dependencia_id: 'dependencia_id',
    etapa_id: 'etapa_id',
    etapa_school_id: 'etapa_school_id',
    localizacao_id: 'localizacao_id',
    vinculo_id: 'vinculo_id',
    formacao_id: 'formacao_id',
    faixa_etaria_id: 'faixa_etaria_id'
  };

  export type DadoEducacaoBasicaScalarFieldEnum = (typeof DadoEducacaoBasicaScalarFieldEnum)[keyof typeof DadoEducacaoBasicaScalarFieldEnum]


  export const ImportacaoAPIScalarFieldEnum: {
    id: 'id',
    data_importacao: 'data_importacao',
    tipo_dado: 'tipo_dado',
    anos_importados: 'anos_importados',
    filtros_aplicados: 'filtros_aplicados',
    total_registros: 'total_registros',
    status: 'status',
    mensagem_erro: 'mensagem_erro'
  };

  export type ImportacaoAPIScalarFieldEnum = (typeof ImportacaoAPIScalarFieldEnum)[keyof typeof ImportacaoAPIScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LocalidadeWhereInput = {
    AND?: LocalidadeWhereInput | LocalidadeWhereInput[]
    OR?: LocalidadeWhereInput[]
    NOT?: LocalidadeWhereInput | LocalidadeWhereInput[]
    id?: IntFilter<"Localidade"> | number
    nome?: StringFilter<"Localidade"> | string
    tipo?: StringFilter<"Localidade"> | string
    uf?: StringNullableFilter<"Localidade"> | string | null
    codigo_ibge?: StringNullableFilter<"Localidade"> | string | null
    dados_basica?: DadoEducacaoBasicaListRelationFilter
  }

  export type LocalidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    uf?: SortOrderInput | SortOrder
    codigo_ibge?: SortOrderInput | SortOrder
    dados_basica?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type LocalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalidadeWhereInput | LocalidadeWhereInput[]
    OR?: LocalidadeWhereInput[]
    NOT?: LocalidadeWhereInput | LocalidadeWhereInput[]
    nome?: StringFilter<"Localidade"> | string
    tipo?: StringFilter<"Localidade"> | string
    uf?: StringNullableFilter<"Localidade"> | string | null
    codigo_ibge?: StringNullableFilter<"Localidade"> | string | null
    dados_basica?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type LocalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    uf?: SortOrderInput | SortOrder
    codigo_ibge?: SortOrderInput | SortOrder
    _count?: LocalidadeCountOrderByAggregateInput
    _avg?: LocalidadeAvgOrderByAggregateInput
    _max?: LocalidadeMaxOrderByAggregateInput
    _min?: LocalidadeMinOrderByAggregateInput
    _sum?: LocalidadeSumOrderByAggregateInput
  }

  export type LocalidadeScalarWhereWithAggregatesInput = {
    AND?: LocalidadeScalarWhereWithAggregatesInput | LocalidadeScalarWhereWithAggregatesInput[]
    OR?: LocalidadeScalarWhereWithAggregatesInput[]
    NOT?: LocalidadeScalarWhereWithAggregatesInput | LocalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localidade"> | number
    nome?: StringWithAggregatesFilter<"Localidade"> | string
    tipo?: StringWithAggregatesFilter<"Localidade"> | string
    uf?: StringNullableWithAggregatesFilter<"Localidade"> | string | null
    codigo_ibge?: StringNullableWithAggregatesFilter<"Localidade"> | string | null
  }

  export type DependenciaAdministrativaBasicaWhereInput = {
    AND?: DependenciaAdministrativaBasicaWhereInput | DependenciaAdministrativaBasicaWhereInput[]
    OR?: DependenciaAdministrativaBasicaWhereInput[]
    NOT?: DependenciaAdministrativaBasicaWhereInput | DependenciaAdministrativaBasicaWhereInput[]
    id?: IntFilter<"DependenciaAdministrativaBasica"> | number
    nome?: StringFilter<"DependenciaAdministrativaBasica"> | string
    tipo?: StringNullableFilter<"DependenciaAdministrativaBasica"> | string | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type DependenciaAdministrativaBasicaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrderInput | SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type DependenciaAdministrativaBasicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DependenciaAdministrativaBasicaWhereInput | DependenciaAdministrativaBasicaWhereInput[]
    OR?: DependenciaAdministrativaBasicaWhereInput[]
    NOT?: DependenciaAdministrativaBasicaWhereInput | DependenciaAdministrativaBasicaWhereInput[]
    nome?: StringFilter<"DependenciaAdministrativaBasica"> | string
    tipo?: StringNullableFilter<"DependenciaAdministrativaBasica"> | string | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type DependenciaAdministrativaBasicaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrderInput | SortOrder
    _count?: DependenciaAdministrativaBasicaCountOrderByAggregateInput
    _avg?: DependenciaAdministrativaBasicaAvgOrderByAggregateInput
    _max?: DependenciaAdministrativaBasicaMaxOrderByAggregateInput
    _min?: DependenciaAdministrativaBasicaMinOrderByAggregateInput
    _sum?: DependenciaAdministrativaBasicaSumOrderByAggregateInput
  }

  export type DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput = {
    AND?: DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput | DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput[]
    OR?: DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput[]
    NOT?: DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput | DependenciaAdministrativaBasicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DependenciaAdministrativaBasica"> | number
    nome?: StringWithAggregatesFilter<"DependenciaAdministrativaBasica"> | string
    tipo?: StringNullableWithAggregatesFilter<"DependenciaAdministrativaBasica"> | string | null
  }

  export type EtapaEnsinoBasicaWhereInput = {
    AND?: EtapaEnsinoBasicaWhereInput | EtapaEnsinoBasicaWhereInput[]
    OR?: EtapaEnsinoBasicaWhereInput[]
    NOT?: EtapaEnsinoBasicaWhereInput | EtapaEnsinoBasicaWhereInput[]
    id?: IntFilter<"EtapaEnsinoBasica"> | number
    nome?: StringFilter<"EtapaEnsinoBasica"> | string
    nome_curto?: StringNullableFilter<"EtapaEnsinoBasica"> | string | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type EtapaEnsinoBasicaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_curto?: SortOrderInput | SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type EtapaEnsinoBasicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtapaEnsinoBasicaWhereInput | EtapaEnsinoBasicaWhereInput[]
    OR?: EtapaEnsinoBasicaWhereInput[]
    NOT?: EtapaEnsinoBasicaWhereInput | EtapaEnsinoBasicaWhereInput[]
    nome?: StringFilter<"EtapaEnsinoBasica"> | string
    nome_curto?: StringNullableFilter<"EtapaEnsinoBasica"> | string | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type EtapaEnsinoBasicaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_curto?: SortOrderInput | SortOrder
    _count?: EtapaEnsinoBasicaCountOrderByAggregateInput
    _avg?: EtapaEnsinoBasicaAvgOrderByAggregateInput
    _max?: EtapaEnsinoBasicaMaxOrderByAggregateInput
    _min?: EtapaEnsinoBasicaMinOrderByAggregateInput
    _sum?: EtapaEnsinoBasicaSumOrderByAggregateInput
  }

  export type EtapaEnsinoBasicaScalarWhereWithAggregatesInput = {
    AND?: EtapaEnsinoBasicaScalarWhereWithAggregatesInput | EtapaEnsinoBasicaScalarWhereWithAggregatesInput[]
    OR?: EtapaEnsinoBasicaScalarWhereWithAggregatesInput[]
    NOT?: EtapaEnsinoBasicaScalarWhereWithAggregatesInput | EtapaEnsinoBasicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EtapaEnsinoBasica"> | number
    nome?: StringWithAggregatesFilter<"EtapaEnsinoBasica"> | string
    nome_curto?: StringNullableWithAggregatesFilter<"EtapaEnsinoBasica"> | string | null
  }

  export type EtapaEnsinoBasicaSchoolWhereInput = {
    AND?: EtapaEnsinoBasicaSchoolWhereInput | EtapaEnsinoBasicaSchoolWhereInput[]
    OR?: EtapaEnsinoBasicaSchoolWhereInput[]
    NOT?: EtapaEnsinoBasicaSchoolWhereInput | EtapaEnsinoBasicaSchoolWhereInput[]
    id?: IntFilter<"EtapaEnsinoBasicaSchool"> | number
    nome?: StringFilter<"EtapaEnsinoBasicaSchool"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type EtapaEnsinoBasicaSchoolOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type EtapaEnsinoBasicaSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtapaEnsinoBasicaSchoolWhereInput | EtapaEnsinoBasicaSchoolWhereInput[]
    OR?: EtapaEnsinoBasicaSchoolWhereInput[]
    NOT?: EtapaEnsinoBasicaSchoolWhereInput | EtapaEnsinoBasicaSchoolWhereInput[]
    nome?: StringFilter<"EtapaEnsinoBasicaSchool"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type EtapaEnsinoBasicaSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: EtapaEnsinoBasicaSchoolCountOrderByAggregateInput
    _avg?: EtapaEnsinoBasicaSchoolAvgOrderByAggregateInput
    _max?: EtapaEnsinoBasicaSchoolMaxOrderByAggregateInput
    _min?: EtapaEnsinoBasicaSchoolMinOrderByAggregateInput
    _sum?: EtapaEnsinoBasicaSchoolSumOrderByAggregateInput
  }

  export type EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput = {
    AND?: EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput | EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput[]
    OR?: EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput[]
    NOT?: EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput | EtapaEnsinoBasicaSchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EtapaEnsinoBasicaSchool"> | number
    nome?: StringWithAggregatesFilter<"EtapaEnsinoBasicaSchool"> | string
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    nome?: StringFilter<"Localizacao"> | string
    dados_basica?: DadoEducacaoBasicaListRelationFilter
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dados_basica?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    nome?: StringFilter<"Localizacao"> | string
    dados_basica?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacao"> | number
    nome?: StringWithAggregatesFilter<"Localizacao"> | string
  }

  export type VinculoFuncionalWhereInput = {
    AND?: VinculoFuncionalWhereInput | VinculoFuncionalWhereInput[]
    OR?: VinculoFuncionalWhereInput[]
    NOT?: VinculoFuncionalWhereInput | VinculoFuncionalWhereInput[]
    id?: IntFilter<"VinculoFuncional"> | number
    nome?: StringFilter<"VinculoFuncional"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type VinculoFuncionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type VinculoFuncionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VinculoFuncionalWhereInput | VinculoFuncionalWhereInput[]
    OR?: VinculoFuncionalWhereInput[]
    NOT?: VinculoFuncionalWhereInput | VinculoFuncionalWhereInput[]
    nome?: StringFilter<"VinculoFuncional"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type VinculoFuncionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: VinculoFuncionalCountOrderByAggregateInput
    _avg?: VinculoFuncionalAvgOrderByAggregateInput
    _max?: VinculoFuncionalMaxOrderByAggregateInput
    _min?: VinculoFuncionalMinOrderByAggregateInput
    _sum?: VinculoFuncionalSumOrderByAggregateInput
  }

  export type VinculoFuncionalScalarWhereWithAggregatesInput = {
    AND?: VinculoFuncionalScalarWhereWithAggregatesInput | VinculoFuncionalScalarWhereWithAggregatesInput[]
    OR?: VinculoFuncionalScalarWhereWithAggregatesInput[]
    NOT?: VinculoFuncionalScalarWhereWithAggregatesInput | VinculoFuncionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VinculoFuncional"> | number
    nome?: StringWithAggregatesFilter<"VinculoFuncional"> | string
  }

  export type FormacaoDocenteWhereInput = {
    AND?: FormacaoDocenteWhereInput | FormacaoDocenteWhereInput[]
    OR?: FormacaoDocenteWhereInput[]
    NOT?: FormacaoDocenteWhereInput | FormacaoDocenteWhereInput[]
    id?: IntFilter<"FormacaoDocente"> | number
    nome?: StringFilter<"FormacaoDocente"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type FormacaoDocenteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type FormacaoDocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormacaoDocenteWhereInput | FormacaoDocenteWhereInput[]
    OR?: FormacaoDocenteWhereInput[]
    NOT?: FormacaoDocenteWhereInput | FormacaoDocenteWhereInput[]
    nome?: StringFilter<"FormacaoDocente"> | string
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type FormacaoDocenteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: FormacaoDocenteCountOrderByAggregateInput
    _avg?: FormacaoDocenteAvgOrderByAggregateInput
    _max?: FormacaoDocenteMaxOrderByAggregateInput
    _min?: FormacaoDocenteMinOrderByAggregateInput
    _sum?: FormacaoDocenteSumOrderByAggregateInput
  }

  export type FormacaoDocenteScalarWhereWithAggregatesInput = {
    AND?: FormacaoDocenteScalarWhereWithAggregatesInput | FormacaoDocenteScalarWhereWithAggregatesInput[]
    OR?: FormacaoDocenteScalarWhereWithAggregatesInput[]
    NOT?: FormacaoDocenteScalarWhereWithAggregatesInput | FormacaoDocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormacaoDocente"> | number
    nome?: StringWithAggregatesFilter<"FormacaoDocente"> | string
  }

  export type FaixaEtariaWhereInput = {
    AND?: FaixaEtariaWhereInput | FaixaEtariaWhereInput[]
    OR?: FaixaEtariaWhereInput[]
    NOT?: FaixaEtariaWhereInput | FaixaEtariaWhereInput[]
    id?: IntFilter<"FaixaEtaria"> | number
    nome?: StringFilter<"FaixaEtaria"> | string
    idade_inicial?: IntNullableFilter<"FaixaEtaria"> | number | null
    idade_final?: IntNullableFilter<"FaixaEtaria"> | number | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }

  export type FaixaEtariaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade_inicial?: SortOrderInput | SortOrder
    idade_final?: SortOrderInput | SortOrder
    dados?: DadoEducacaoBasicaOrderByRelationAggregateInput
  }

  export type FaixaEtariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaixaEtariaWhereInput | FaixaEtariaWhereInput[]
    OR?: FaixaEtariaWhereInput[]
    NOT?: FaixaEtariaWhereInput | FaixaEtariaWhereInput[]
    nome?: StringFilter<"FaixaEtaria"> | string
    idade_inicial?: IntNullableFilter<"FaixaEtaria"> | number | null
    idade_final?: IntNullableFilter<"FaixaEtaria"> | number | null
    dados?: DadoEducacaoBasicaListRelationFilter
  }, "id">

  export type FaixaEtariaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade_inicial?: SortOrderInput | SortOrder
    idade_final?: SortOrderInput | SortOrder
    _count?: FaixaEtariaCountOrderByAggregateInput
    _avg?: FaixaEtariaAvgOrderByAggregateInput
    _max?: FaixaEtariaMaxOrderByAggregateInput
    _min?: FaixaEtariaMinOrderByAggregateInput
    _sum?: FaixaEtariaSumOrderByAggregateInput
  }

  export type FaixaEtariaScalarWhereWithAggregatesInput = {
    AND?: FaixaEtariaScalarWhereWithAggregatesInput | FaixaEtariaScalarWhereWithAggregatesInput[]
    OR?: FaixaEtariaScalarWhereWithAggregatesInput[]
    NOT?: FaixaEtariaScalarWhereWithAggregatesInput | FaixaEtariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FaixaEtaria"> | number
    nome?: StringWithAggregatesFilter<"FaixaEtaria"> | string
    idade_inicial?: IntNullableWithAggregatesFilter<"FaixaEtaria"> | number | null
    idade_final?: IntNullableWithAggregatesFilter<"FaixaEtaria"> | number | null
  }

  export type DadoEducacaoBasicaWhereInput = {
    AND?: DadoEducacaoBasicaWhereInput | DadoEducacaoBasicaWhereInput[]
    OR?: DadoEducacaoBasicaWhereInput[]
    NOT?: DadoEducacaoBasicaWhereInput | DadoEducacaoBasicaWhereInput[]
    id?: IntFilter<"DadoEducacaoBasica"> | number
    tipo?: StringFilter<"DadoEducacaoBasica"> | string
    ano?: IntFilter<"DadoEducacaoBasica"> | number
    total?: DecimalFilter<"DadoEducacaoBasica"> | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFilter<"DadoEducacaoBasica"> | Date | string
    localidade_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    dependencia_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_school_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    localizacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    vinculo_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    formacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    faixa_etaria_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    localidade?: XOR<LocalidadeNullableRelationFilter, LocalidadeWhereInput> | null
    dependencia?: XOR<DependenciaAdministrativaBasicaNullableRelationFilter, DependenciaAdministrativaBasicaWhereInput> | null
    etapa?: XOR<EtapaEnsinoBasicaNullableRelationFilter, EtapaEnsinoBasicaWhereInput> | null
    etapa_school?: XOR<EtapaEnsinoBasicaSchoolNullableRelationFilter, EtapaEnsinoBasicaSchoolWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableRelationFilter, LocalizacaoWhereInput> | null
    vinculo?: XOR<VinculoFuncionalNullableRelationFilter, VinculoFuncionalWhereInput> | null
    formacao?: XOR<FormacaoDocenteNullableRelationFilter, FormacaoDocenteWhereInput> | null
    faixa_etaria?: XOR<FaixaEtariaNullableRelationFilter, FaixaEtariaWhereInput> | null
  }

  export type DadoEducacaoBasicaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    data_atualizacao?: SortOrder
    localidade_id?: SortOrderInput | SortOrder
    dependencia_id?: SortOrderInput | SortOrder
    etapa_id?: SortOrderInput | SortOrder
    etapa_school_id?: SortOrderInput | SortOrder
    localizacao_id?: SortOrderInput | SortOrder
    vinculo_id?: SortOrderInput | SortOrder
    formacao_id?: SortOrderInput | SortOrder
    faixa_etaria_id?: SortOrderInput | SortOrder
    localidade?: LocalidadeOrderByWithRelationInput
    dependencia?: DependenciaAdministrativaBasicaOrderByWithRelationInput
    etapa?: EtapaEnsinoBasicaOrderByWithRelationInput
    etapa_school?: EtapaEnsinoBasicaSchoolOrderByWithRelationInput
    localizacao?: LocalizacaoOrderByWithRelationInput
    vinculo?: VinculoFuncionalOrderByWithRelationInput
    formacao?: FormacaoDocenteOrderByWithRelationInput
    faixa_etaria?: FaixaEtariaOrderByWithRelationInput
  }

  export type DadoEducacaoBasicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DadoEducacaoBasicaWhereInput | DadoEducacaoBasicaWhereInput[]
    OR?: DadoEducacaoBasicaWhereInput[]
    NOT?: DadoEducacaoBasicaWhereInput | DadoEducacaoBasicaWhereInput[]
    tipo?: StringFilter<"DadoEducacaoBasica"> | string
    ano?: IntFilter<"DadoEducacaoBasica"> | number
    total?: DecimalFilter<"DadoEducacaoBasica"> | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFilter<"DadoEducacaoBasica"> | Date | string
    localidade_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    dependencia_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_school_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    localizacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    vinculo_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    formacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    faixa_etaria_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    localidade?: XOR<LocalidadeNullableRelationFilter, LocalidadeWhereInput> | null
    dependencia?: XOR<DependenciaAdministrativaBasicaNullableRelationFilter, DependenciaAdministrativaBasicaWhereInput> | null
    etapa?: XOR<EtapaEnsinoBasicaNullableRelationFilter, EtapaEnsinoBasicaWhereInput> | null
    etapa_school?: XOR<EtapaEnsinoBasicaSchoolNullableRelationFilter, EtapaEnsinoBasicaSchoolWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableRelationFilter, LocalizacaoWhereInput> | null
    vinculo?: XOR<VinculoFuncionalNullableRelationFilter, VinculoFuncionalWhereInput> | null
    formacao?: XOR<FormacaoDocenteNullableRelationFilter, FormacaoDocenteWhereInput> | null
    faixa_etaria?: XOR<FaixaEtariaNullableRelationFilter, FaixaEtariaWhereInput> | null
  }, "id">

  export type DadoEducacaoBasicaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    data_atualizacao?: SortOrder
    localidade_id?: SortOrderInput | SortOrder
    dependencia_id?: SortOrderInput | SortOrder
    etapa_id?: SortOrderInput | SortOrder
    etapa_school_id?: SortOrderInput | SortOrder
    localizacao_id?: SortOrderInput | SortOrder
    vinculo_id?: SortOrderInput | SortOrder
    formacao_id?: SortOrderInput | SortOrder
    faixa_etaria_id?: SortOrderInput | SortOrder
    _count?: DadoEducacaoBasicaCountOrderByAggregateInput
    _avg?: DadoEducacaoBasicaAvgOrderByAggregateInput
    _max?: DadoEducacaoBasicaMaxOrderByAggregateInput
    _min?: DadoEducacaoBasicaMinOrderByAggregateInput
    _sum?: DadoEducacaoBasicaSumOrderByAggregateInput
  }

  export type DadoEducacaoBasicaScalarWhereWithAggregatesInput = {
    AND?: DadoEducacaoBasicaScalarWhereWithAggregatesInput | DadoEducacaoBasicaScalarWhereWithAggregatesInput[]
    OR?: DadoEducacaoBasicaScalarWhereWithAggregatesInput[]
    NOT?: DadoEducacaoBasicaScalarWhereWithAggregatesInput | DadoEducacaoBasicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DadoEducacaoBasica"> | number
    tipo?: StringWithAggregatesFilter<"DadoEducacaoBasica"> | string
    ano?: IntWithAggregatesFilter<"DadoEducacaoBasica"> | number
    total?: DecimalWithAggregatesFilter<"DadoEducacaoBasica"> | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeWithAggregatesFilter<"DadoEducacaoBasica"> | Date | string
    localidade_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    dependencia_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    etapa_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    etapa_school_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    localizacao_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    vinculo_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    formacao_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
    faixa_etaria_id?: IntNullableWithAggregatesFilter<"DadoEducacaoBasica"> | number | null
  }

  export type ImportacaoAPIWhereInput = {
    AND?: ImportacaoAPIWhereInput | ImportacaoAPIWhereInput[]
    OR?: ImportacaoAPIWhereInput[]
    NOT?: ImportacaoAPIWhereInput | ImportacaoAPIWhereInput[]
    id?: IntFilter<"ImportacaoAPI"> | number
    data_importacao?: DateTimeFilter<"ImportacaoAPI"> | Date | string
    tipo_dado?: StringFilter<"ImportacaoAPI"> | string
    anos_importados?: IntNullableListFilter<"ImportacaoAPI">
    filtros_aplicados?: JsonNullableFilter<"ImportacaoAPI">
    total_registros?: IntFilter<"ImportacaoAPI"> | number
    status?: StringFilter<"ImportacaoAPI"> | string
    mensagem_erro?: StringNullableFilter<"ImportacaoAPI"> | string | null
  }

  export type ImportacaoAPIOrderByWithRelationInput = {
    id?: SortOrder
    data_importacao?: SortOrder
    tipo_dado?: SortOrder
    anos_importados?: SortOrder
    filtros_aplicados?: SortOrderInput | SortOrder
    total_registros?: SortOrder
    status?: SortOrder
    mensagem_erro?: SortOrderInput | SortOrder
  }

  export type ImportacaoAPIWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImportacaoAPIWhereInput | ImportacaoAPIWhereInput[]
    OR?: ImportacaoAPIWhereInput[]
    NOT?: ImportacaoAPIWhereInput | ImportacaoAPIWhereInput[]
    data_importacao?: DateTimeFilter<"ImportacaoAPI"> | Date | string
    tipo_dado?: StringFilter<"ImportacaoAPI"> | string
    anos_importados?: IntNullableListFilter<"ImportacaoAPI">
    filtros_aplicados?: JsonNullableFilter<"ImportacaoAPI">
    total_registros?: IntFilter<"ImportacaoAPI"> | number
    status?: StringFilter<"ImportacaoAPI"> | string
    mensagem_erro?: StringNullableFilter<"ImportacaoAPI"> | string | null
  }, "id">

  export type ImportacaoAPIOrderByWithAggregationInput = {
    id?: SortOrder
    data_importacao?: SortOrder
    tipo_dado?: SortOrder
    anos_importados?: SortOrder
    filtros_aplicados?: SortOrderInput | SortOrder
    total_registros?: SortOrder
    status?: SortOrder
    mensagem_erro?: SortOrderInput | SortOrder
    _count?: ImportacaoAPICountOrderByAggregateInput
    _avg?: ImportacaoAPIAvgOrderByAggregateInput
    _max?: ImportacaoAPIMaxOrderByAggregateInput
    _min?: ImportacaoAPIMinOrderByAggregateInput
    _sum?: ImportacaoAPISumOrderByAggregateInput
  }

  export type ImportacaoAPIScalarWhereWithAggregatesInput = {
    AND?: ImportacaoAPIScalarWhereWithAggregatesInput | ImportacaoAPIScalarWhereWithAggregatesInput[]
    OR?: ImportacaoAPIScalarWhereWithAggregatesInput[]
    NOT?: ImportacaoAPIScalarWhereWithAggregatesInput | ImportacaoAPIScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImportacaoAPI"> | number
    data_importacao?: DateTimeWithAggregatesFilter<"ImportacaoAPI"> | Date | string
    tipo_dado?: StringWithAggregatesFilter<"ImportacaoAPI"> | string
    anos_importados?: IntNullableListFilter<"ImportacaoAPI">
    filtros_aplicados?: JsonNullableWithAggregatesFilter<"ImportacaoAPI">
    total_registros?: IntWithAggregatesFilter<"ImportacaoAPI"> | number
    status?: StringWithAggregatesFilter<"ImportacaoAPI"> | string
    mensagem_erro?: StringNullableWithAggregatesFilter<"ImportacaoAPI"> | string | null
  }

  export type LocalidadeCreateInput = {
    id: number
    nome: string
    tipo: string
    uf?: string | null
    codigo_ibge?: string | null
    dados_basica?: DadoEducacaoBasicaCreateNestedManyWithoutLocalidadeInput
  }

  export type LocalidadeUncheckedCreateInput = {
    id: number
    nome: string
    tipo: string
    uf?: string | null
    codigo_ibge?: string | null
    dados_basica?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutLocalidadeInput
  }

  export type LocalidadeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    dados_basica?: DadoEducacaoBasicaUpdateManyWithoutLocalidadeNestedInput
  }

  export type LocalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    dados_basica?: DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalidadeNestedInput
  }

  export type LocalidadeCreateManyInput = {
    id: number
    nome: string
    tipo: string
    uf?: string | null
    codigo_ibge?: string | null
  }

  export type LocalidadeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DependenciaAdministrativaBasicaCreateInput = {
    id: number
    nome: string
    tipo?: string | null
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutDependenciaInput
  }

  export type DependenciaAdministrativaBasicaUncheckedCreateInput = {
    id: number
    nome: string
    tipo?: string | null
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutDependenciaInput
  }

  export type DependenciaAdministrativaBasicaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    dados?: DadoEducacaoBasicaUpdateManyWithoutDependenciaNestedInput
  }

  export type DependenciaAdministrativaBasicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutDependenciaNestedInput
  }

  export type DependenciaAdministrativaBasicaCreateManyInput = {
    id: number
    nome: string
    tipo?: string | null
  }

  export type DependenciaAdministrativaBasicaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DependenciaAdministrativaBasicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaCreateInput = {
    id: number
    nome: string
    nome_curto?: string | null
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutEtapaInput
  }

  export type EtapaEnsinoBasicaUncheckedCreateInput = {
    id: number
    nome: string
    nome_curto?: string | null
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutEtapaInput
  }

  export type EtapaEnsinoBasicaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
    dados?: DadoEducacaoBasicaUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaEnsinoBasicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaEnsinoBasicaCreateManyInput = {
    id: number
    nome: string
    nome_curto?: string | null
  }

  export type EtapaEnsinoBasicaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaSchoolCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutEtapa_schoolInput
  }

  export type EtapaEnsinoBasicaSchoolUncheckedCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutEtapa_schoolInput
  }

  export type EtapaEnsinoBasicaSchoolUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUpdateManyWithoutEtapa_schoolNestedInput
  }

  export type EtapaEnsinoBasicaSchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapa_schoolNestedInput
  }

  export type EtapaEnsinoBasicaSchoolCreateManyInput = {
    id: number
    nome: string
  }

  export type EtapaEnsinoBasicaSchoolUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaEnsinoBasicaSchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoCreateInput = {
    id: number
    nome: string
    dados_basica?: DadoEducacaoBasicaCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id: number
    nome: string
    dados_basica?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados_basica?: DadoEducacaoBasicaUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados_basica?: DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoCreateManyInput = {
    id: number
    nome: string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoFuncionalCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutVinculoInput
  }

  export type VinculoFuncionalUncheckedCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutVinculoInput
  }

  export type VinculoFuncionalUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUpdateManyWithoutVinculoNestedInput
  }

  export type VinculoFuncionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutVinculoNestedInput
  }

  export type VinculoFuncionalCreateManyInput = {
    id: number
    nome: string
  }

  export type VinculoFuncionalUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoFuncionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FormacaoDocenteCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutFormacaoInput
  }

  export type FormacaoDocenteUncheckedCreateInput = {
    id: number
    nome: string
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutFormacaoInput
  }

  export type FormacaoDocenteUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUpdateManyWithoutFormacaoNestedInput
  }

  export type FormacaoDocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutFormacaoNestedInput
  }

  export type FormacaoDocenteCreateManyInput = {
    id: number
    nome: string
  }

  export type FormacaoDocenteUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FormacaoDocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FaixaEtariaCreateInput = {
    id: number
    nome: string
    idade_inicial?: number | null
    idade_final?: number | null
    dados?: DadoEducacaoBasicaCreateNestedManyWithoutFaixa_etariaInput
  }

  export type FaixaEtariaUncheckedCreateInput = {
    id: number
    nome: string
    idade_inicial?: number | null
    idade_final?: number | null
    dados?: DadoEducacaoBasicaUncheckedCreateNestedManyWithoutFaixa_etariaInput
  }

  export type FaixaEtariaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
    dados?: DadoEducacaoBasicaUpdateManyWithoutFaixa_etariaNestedInput
  }

  export type FaixaEtariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
    dados?: DadoEducacaoBasicaUncheckedUpdateManyWithoutFaixa_etariaNestedInput
  }

  export type FaixaEtariaCreateManyInput = {
    id: number
    nome: string
    idade_inicial?: number | null
    idade_final?: number | null
  }

  export type FaixaEtariaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FaixaEtariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImportacaoAPICreateInput = {
    data_importacao?: Date | string
    tipo_dado: string
    anos_importados?: ImportacaoAPICreateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros: number
    status: string
    mensagem_erro?: string | null
  }

  export type ImportacaoAPIUncheckedCreateInput = {
    id?: number
    data_importacao?: Date | string
    tipo_dado: string
    anos_importados?: ImportacaoAPICreateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros: number
    status: string
    mensagem_erro?: string | null
  }

  export type ImportacaoAPIUpdateInput = {
    data_importacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_dado?: StringFieldUpdateOperationsInput | string
    anos_importados?: ImportacaoAPIUpdateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportacaoAPIUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_importacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_dado?: StringFieldUpdateOperationsInput | string
    anos_importados?: ImportacaoAPIUpdateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportacaoAPICreateManyInput = {
    id?: number
    data_importacao?: Date | string
    tipo_dado: string
    anos_importados?: ImportacaoAPICreateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros: number
    status: string
    mensagem_erro?: string | null
  }

  export type ImportacaoAPIUpdateManyMutationInput = {
    data_importacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_dado?: StringFieldUpdateOperationsInput | string
    anos_importados?: ImportacaoAPIUpdateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportacaoAPIUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_importacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_dado?: StringFieldUpdateOperationsInput | string
    anos_importados?: ImportacaoAPIUpdateanos_importadosInput | number[]
    filtros_aplicados?: NullableJsonNullValueInput | InputJsonValue
    total_registros?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DadoEducacaoBasicaListRelationFilter = {
    every?: DadoEducacaoBasicaWhereInput
    some?: DadoEducacaoBasicaWhereInput
    none?: DadoEducacaoBasicaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DadoEducacaoBasicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    uf?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type LocalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    uf?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type LocalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    uf?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type LocalidadeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DependenciaAdministrativaBasicaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type DependenciaAdministrativaBasicaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DependenciaAdministrativaBasicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type DependenciaAdministrativaBasicaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type DependenciaAdministrativaBasicaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaEnsinoBasicaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_curto?: SortOrder
  }

  export type EtapaEnsinoBasicaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaEnsinoBasicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_curto?: SortOrder
  }

  export type EtapaEnsinoBasicaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_curto?: SortOrder
  }

  export type EtapaEnsinoBasicaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaEnsinoBasicaSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EtapaEnsinoBasicaSchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaEnsinoBasicaSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EtapaEnsinoBasicaSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EtapaEnsinoBasicaSchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VinculoFuncionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VinculoFuncionalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VinculoFuncionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VinculoFuncionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VinculoFuncionalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormacaoDocenteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FormacaoDocenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormacaoDocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FormacaoDocenteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FormacaoDocenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FaixaEtariaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade_inicial?: SortOrder
    idade_final?: SortOrder
  }

  export type FaixaEtariaAvgOrderByAggregateInput = {
    id?: SortOrder
    idade_inicial?: SortOrder
    idade_final?: SortOrder
  }

  export type FaixaEtariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade_inicial?: SortOrder
    idade_final?: SortOrder
  }

  export type FaixaEtariaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade_inicial?: SortOrder
    idade_final?: SortOrder
  }

  export type FaixaEtariaSumOrderByAggregateInput = {
    id?: SortOrder
    idade_inicial?: SortOrder
    idade_final?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocalidadeNullableRelationFilter = {
    is?: LocalidadeWhereInput | null
    isNot?: LocalidadeWhereInput | null
  }

  export type DependenciaAdministrativaBasicaNullableRelationFilter = {
    is?: DependenciaAdministrativaBasicaWhereInput | null
    isNot?: DependenciaAdministrativaBasicaWhereInput | null
  }

  export type EtapaEnsinoBasicaNullableRelationFilter = {
    is?: EtapaEnsinoBasicaWhereInput | null
    isNot?: EtapaEnsinoBasicaWhereInput | null
  }

  export type EtapaEnsinoBasicaSchoolNullableRelationFilter = {
    is?: EtapaEnsinoBasicaSchoolWhereInput | null
    isNot?: EtapaEnsinoBasicaSchoolWhereInput | null
  }

  export type LocalizacaoNullableRelationFilter = {
    is?: LocalizacaoWhereInput | null
    isNot?: LocalizacaoWhereInput | null
  }

  export type VinculoFuncionalNullableRelationFilter = {
    is?: VinculoFuncionalWhereInput | null
    isNot?: VinculoFuncionalWhereInput | null
  }

  export type FormacaoDocenteNullableRelationFilter = {
    is?: FormacaoDocenteWhereInput | null
    isNot?: FormacaoDocenteWhereInput | null
  }

  export type FaixaEtariaNullableRelationFilter = {
    is?: FaixaEtariaWhereInput | null
    isNot?: FaixaEtariaWhereInput | null
  }

  export type DadoEducacaoBasicaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    data_atualizacao?: SortOrder
    localidade_id?: SortOrder
    dependencia_id?: SortOrder
    etapa_id?: SortOrder
    etapa_school_id?: SortOrder
    localizacao_id?: SortOrder
    vinculo_id?: SortOrder
    formacao_id?: SortOrder
    faixa_etaria_id?: SortOrder
  }

  export type DadoEducacaoBasicaAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    localidade_id?: SortOrder
    dependencia_id?: SortOrder
    etapa_id?: SortOrder
    etapa_school_id?: SortOrder
    localizacao_id?: SortOrder
    vinculo_id?: SortOrder
    formacao_id?: SortOrder
    faixa_etaria_id?: SortOrder
  }

  export type DadoEducacaoBasicaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    data_atualizacao?: SortOrder
    localidade_id?: SortOrder
    dependencia_id?: SortOrder
    etapa_id?: SortOrder
    etapa_school_id?: SortOrder
    localizacao_id?: SortOrder
    vinculo_id?: SortOrder
    formacao_id?: SortOrder
    faixa_etaria_id?: SortOrder
  }

  export type DadoEducacaoBasicaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    data_atualizacao?: SortOrder
    localidade_id?: SortOrder
    dependencia_id?: SortOrder
    etapa_id?: SortOrder
    etapa_school_id?: SortOrder
    localizacao_id?: SortOrder
    vinculo_id?: SortOrder
    formacao_id?: SortOrder
    faixa_etaria_id?: SortOrder
  }

  export type DadoEducacaoBasicaSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    total?: SortOrder
    localidade_id?: SortOrder
    dependencia_id?: SortOrder
    etapa_id?: SortOrder
    etapa_school_id?: SortOrder
    localizacao_id?: SortOrder
    vinculo_id?: SortOrder
    formacao_id?: SortOrder
    faixa_etaria_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ImportacaoAPICountOrderByAggregateInput = {
    id?: SortOrder
    data_importacao?: SortOrder
    tipo_dado?: SortOrder
    anos_importados?: SortOrder
    filtros_aplicados?: SortOrder
    total_registros?: SortOrder
    status?: SortOrder
    mensagem_erro?: SortOrder
  }

  export type ImportacaoAPIAvgOrderByAggregateInput = {
    id?: SortOrder
    anos_importados?: SortOrder
    total_registros?: SortOrder
  }

  export type ImportacaoAPIMaxOrderByAggregateInput = {
    id?: SortOrder
    data_importacao?: SortOrder
    tipo_dado?: SortOrder
    total_registros?: SortOrder
    status?: SortOrder
    mensagem_erro?: SortOrder
  }

  export type ImportacaoAPIMinOrderByAggregateInput = {
    id?: SortOrder
    data_importacao?: SortOrder
    tipo_dado?: SortOrder
    total_registros?: SortOrder
    status?: SortOrder
    mensagem_erro?: SortOrder
  }

  export type ImportacaoAPISumOrderByAggregateInput = {
    id?: SortOrder
    anos_importados?: SortOrder
    total_registros?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutLocalidadeInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput> | DadoEducacaoBasicaCreateWithoutLocalidadeInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalidadeInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutLocalidadeInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput> | DadoEducacaoBasicaCreateWithoutLocalidadeInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalidadeInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DadoEducacaoBasicaUpdateManyWithoutLocalidadeNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput> | DadoEducacaoBasicaCreateWithoutLocalidadeInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalidadeInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalidadeInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalidadeInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalidadeInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalidadeInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalidadeInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalidadeInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalidadeNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput> | DadoEducacaoBasicaCreateWithoutLocalidadeInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalidadeInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalidadeInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalidadeInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalidadeInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalidadeInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalidadeInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalidadeInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutDependenciaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput> | DadoEducacaoBasicaCreateWithoutDependenciaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput | DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput[]
    createMany?: DadoEducacaoBasicaCreateManyDependenciaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutDependenciaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput> | DadoEducacaoBasicaCreateWithoutDependenciaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput | DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput[]
    createMany?: DadoEducacaoBasicaCreateManyDependenciaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutDependenciaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput> | DadoEducacaoBasicaCreateWithoutDependenciaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput | DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutDependenciaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutDependenciaInput[]
    createMany?: DadoEducacaoBasicaCreateManyDependenciaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutDependenciaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutDependenciaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutDependenciaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutDependenciaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutDependenciaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput> | DadoEducacaoBasicaCreateWithoutDependenciaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput | DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutDependenciaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutDependenciaInput[]
    createMany?: DadoEducacaoBasicaCreateManyDependenciaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutDependenciaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutDependenciaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutDependenciaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutDependenciaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutEtapaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput> | DadoEducacaoBasicaCreateWithoutEtapaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutEtapaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput> | DadoEducacaoBasicaCreateWithoutEtapaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput> | DadoEducacaoBasicaCreateWithoutEtapaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput> | DadoEducacaoBasicaCreateWithoutEtapaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutEtapa_schoolInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput> | DadoEducacaoBasicaCreateWithoutEtapa_schoolInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapa_schoolInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutEtapa_schoolInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput> | DadoEducacaoBasicaCreateWithoutEtapa_schoolInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapa_schoolInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutEtapa_schoolNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput> | DadoEducacaoBasicaCreateWithoutEtapa_schoolInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapa_schoolInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapa_schoolInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapa_schoolInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapa_schoolInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapa_schoolInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapa_schoolInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapa_schoolInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapa_schoolNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput> | DadoEducacaoBasicaCreateWithoutEtapa_schoolInput[] | DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput | DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapa_schoolInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapa_schoolInput[]
    createMany?: DadoEducacaoBasicaCreateManyEtapa_schoolInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapa_schoolInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapa_schoolInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapa_schoolInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapa_schoolInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput> | DadoEducacaoBasicaCreateWithoutLocalizacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalizacaoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput> | DadoEducacaoBasicaCreateWithoutLocalizacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalizacaoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput> | DadoEducacaoBasicaCreateWithoutLocalizacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalizacaoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalizacaoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalizacaoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalizacaoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput> | DadoEducacaoBasicaCreateWithoutLocalizacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalizacaoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyLocalizacaoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalizacaoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalizacaoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutVinculoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput> | DadoEducacaoBasicaCreateWithoutVinculoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput | DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput[]
    createMany?: DadoEducacaoBasicaCreateManyVinculoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutVinculoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput> | DadoEducacaoBasicaCreateWithoutVinculoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput | DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput[]
    createMany?: DadoEducacaoBasicaCreateManyVinculoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutVinculoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput> | DadoEducacaoBasicaCreateWithoutVinculoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput | DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutVinculoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutVinculoInput[]
    createMany?: DadoEducacaoBasicaCreateManyVinculoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutVinculoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutVinculoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutVinculoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutVinculoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutVinculoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput> | DadoEducacaoBasicaCreateWithoutVinculoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput | DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutVinculoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutVinculoInput[]
    createMany?: DadoEducacaoBasicaCreateManyVinculoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutVinculoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutVinculoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutVinculoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutVinculoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutFormacaoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput> | DadoEducacaoBasicaCreateWithoutFormacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyFormacaoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutFormacaoInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput> | DadoEducacaoBasicaCreateWithoutFormacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyFormacaoInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUpdateManyWithoutFormacaoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput> | DadoEducacaoBasicaCreateWithoutFormacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFormacaoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFormacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyFormacaoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFormacaoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFormacaoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutFormacaoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutFormacaoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutFormacaoNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput> | DadoEducacaoBasicaCreateWithoutFormacaoInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput | DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFormacaoInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFormacaoInput[]
    createMany?: DadoEducacaoBasicaCreateManyFormacaoInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFormacaoInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFormacaoInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutFormacaoInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutFormacaoInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaCreateNestedManyWithoutFaixa_etariaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput> | DadoEducacaoBasicaCreateWithoutFaixa_etariaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput | DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput[]
    createMany?: DadoEducacaoBasicaCreateManyFaixa_etariaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type DadoEducacaoBasicaUncheckedCreateNestedManyWithoutFaixa_etariaInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput> | DadoEducacaoBasicaCreateWithoutFaixa_etariaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput | DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput[]
    createMany?: DadoEducacaoBasicaCreateManyFaixa_etariaInputEnvelope
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DadoEducacaoBasicaUpdateManyWithoutFaixa_etariaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput> | DadoEducacaoBasicaCreateWithoutFaixa_etariaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput | DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFaixa_etariaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFaixa_etariaInput[]
    createMany?: DadoEducacaoBasicaCreateManyFaixa_etariaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFaixa_etariaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFaixa_etariaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutFaixa_etariaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutFaixa_etariaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutFaixa_etariaNestedInput = {
    create?: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput> | DadoEducacaoBasicaCreateWithoutFaixa_etariaInput[] | DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput[]
    connectOrCreate?: DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput | DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput[]
    upsert?: DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFaixa_etariaInput | DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFaixa_etariaInput[]
    createMany?: DadoEducacaoBasicaCreateManyFaixa_etariaInputEnvelope
    set?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    disconnect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    delete?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    connect?: DadoEducacaoBasicaWhereUniqueInput | DadoEducacaoBasicaWhereUniqueInput[]
    update?: DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFaixa_etariaInput | DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFaixa_etariaInput[]
    updateMany?: DadoEducacaoBasicaUpdateManyWithWhereWithoutFaixa_etariaInput | DadoEducacaoBasicaUpdateManyWithWhereWithoutFaixa_etariaInput[]
    deleteMany?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
  }

  export type LocalidadeCreateNestedOneWithoutDados_basicaInput = {
    create?: XOR<LocalidadeCreateWithoutDados_basicaInput, LocalidadeUncheckedCreateWithoutDados_basicaInput>
    connectOrCreate?: LocalidadeCreateOrConnectWithoutDados_basicaInput
    connect?: LocalidadeWhereUniqueInput
  }

  export type DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput = {
    create?: XOR<DependenciaAdministrativaBasicaCreateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: DependenciaAdministrativaBasicaCreateOrConnectWithoutDadosInput
    connect?: DependenciaAdministrativaBasicaWhereUniqueInput
  }

  export type EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput = {
    create?: XOR<EtapaEnsinoBasicaCreateWithoutDadosInput, EtapaEnsinoBasicaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: EtapaEnsinoBasicaCreateOrConnectWithoutDadosInput
    connect?: EtapaEnsinoBasicaWhereUniqueInput
  }

  export type EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput = {
    create?: XOR<EtapaEnsinoBasicaSchoolCreateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedCreateWithoutDadosInput>
    connectOrCreate?: EtapaEnsinoBasicaSchoolCreateOrConnectWithoutDadosInput
    connect?: EtapaEnsinoBasicaSchoolWhereUniqueInput
  }

  export type LocalizacaoCreateNestedOneWithoutDados_basicaInput = {
    create?: XOR<LocalizacaoCreateWithoutDados_basicaInput, LocalizacaoUncheckedCreateWithoutDados_basicaInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDados_basicaInput
    connect?: LocalizacaoWhereUniqueInput
  }

  export type VinculoFuncionalCreateNestedOneWithoutDadosInput = {
    create?: XOR<VinculoFuncionalCreateWithoutDadosInput, VinculoFuncionalUncheckedCreateWithoutDadosInput>
    connectOrCreate?: VinculoFuncionalCreateOrConnectWithoutDadosInput
    connect?: VinculoFuncionalWhereUniqueInput
  }

  export type FormacaoDocenteCreateNestedOneWithoutDadosInput = {
    create?: XOR<FormacaoDocenteCreateWithoutDadosInput, FormacaoDocenteUncheckedCreateWithoutDadosInput>
    connectOrCreate?: FormacaoDocenteCreateOrConnectWithoutDadosInput
    connect?: FormacaoDocenteWhereUniqueInput
  }

  export type FaixaEtariaCreateNestedOneWithoutDadosInput = {
    create?: XOR<FaixaEtariaCreateWithoutDadosInput, FaixaEtariaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: FaixaEtariaCreateOrConnectWithoutDadosInput
    connect?: FaixaEtariaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocalidadeUpdateOneWithoutDados_basicaNestedInput = {
    create?: XOR<LocalidadeCreateWithoutDados_basicaInput, LocalidadeUncheckedCreateWithoutDados_basicaInput>
    connectOrCreate?: LocalidadeCreateOrConnectWithoutDados_basicaInput
    upsert?: LocalidadeUpsertWithoutDados_basicaInput
    disconnect?: LocalidadeWhereInput | boolean
    delete?: LocalidadeWhereInput | boolean
    connect?: LocalidadeWhereUniqueInput
    update?: XOR<XOR<LocalidadeUpdateToOneWithWhereWithoutDados_basicaInput, LocalidadeUpdateWithoutDados_basicaInput>, LocalidadeUncheckedUpdateWithoutDados_basicaInput>
  }

  export type DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput = {
    create?: XOR<DependenciaAdministrativaBasicaCreateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: DependenciaAdministrativaBasicaCreateOrConnectWithoutDadosInput
    upsert?: DependenciaAdministrativaBasicaUpsertWithoutDadosInput
    disconnect?: DependenciaAdministrativaBasicaWhereInput | boolean
    delete?: DependenciaAdministrativaBasicaWhereInput | boolean
    connect?: DependenciaAdministrativaBasicaWhereUniqueInput
    update?: XOR<XOR<DependenciaAdministrativaBasicaUpdateToOneWithWhereWithoutDadosInput, DependenciaAdministrativaBasicaUpdateWithoutDadosInput>, DependenciaAdministrativaBasicaUncheckedUpdateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput = {
    create?: XOR<EtapaEnsinoBasicaCreateWithoutDadosInput, EtapaEnsinoBasicaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: EtapaEnsinoBasicaCreateOrConnectWithoutDadosInput
    upsert?: EtapaEnsinoBasicaUpsertWithoutDadosInput
    disconnect?: EtapaEnsinoBasicaWhereInput | boolean
    delete?: EtapaEnsinoBasicaWhereInput | boolean
    connect?: EtapaEnsinoBasicaWhereUniqueInput
    update?: XOR<XOR<EtapaEnsinoBasicaUpdateToOneWithWhereWithoutDadosInput, EtapaEnsinoBasicaUpdateWithoutDadosInput>, EtapaEnsinoBasicaUncheckedUpdateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput = {
    create?: XOR<EtapaEnsinoBasicaSchoolCreateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedCreateWithoutDadosInput>
    connectOrCreate?: EtapaEnsinoBasicaSchoolCreateOrConnectWithoutDadosInput
    upsert?: EtapaEnsinoBasicaSchoolUpsertWithoutDadosInput
    disconnect?: EtapaEnsinoBasicaSchoolWhereInput | boolean
    delete?: EtapaEnsinoBasicaSchoolWhereInput | boolean
    connect?: EtapaEnsinoBasicaSchoolWhereUniqueInput
    update?: XOR<XOR<EtapaEnsinoBasicaSchoolUpdateToOneWithWhereWithoutDadosInput, EtapaEnsinoBasicaSchoolUpdateWithoutDadosInput>, EtapaEnsinoBasicaSchoolUncheckedUpdateWithoutDadosInput>
  }

  export type LocalizacaoUpdateOneWithoutDados_basicaNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutDados_basicaInput, LocalizacaoUncheckedCreateWithoutDados_basicaInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDados_basicaInput
    upsert?: LocalizacaoUpsertWithoutDados_basicaInput
    disconnect?: LocalizacaoWhereInput | boolean
    delete?: LocalizacaoWhereInput | boolean
    connect?: LocalizacaoWhereUniqueInput
    update?: XOR<XOR<LocalizacaoUpdateToOneWithWhereWithoutDados_basicaInput, LocalizacaoUpdateWithoutDados_basicaInput>, LocalizacaoUncheckedUpdateWithoutDados_basicaInput>
  }

  export type VinculoFuncionalUpdateOneWithoutDadosNestedInput = {
    create?: XOR<VinculoFuncionalCreateWithoutDadosInput, VinculoFuncionalUncheckedCreateWithoutDadosInput>
    connectOrCreate?: VinculoFuncionalCreateOrConnectWithoutDadosInput
    upsert?: VinculoFuncionalUpsertWithoutDadosInput
    disconnect?: VinculoFuncionalWhereInput | boolean
    delete?: VinculoFuncionalWhereInput | boolean
    connect?: VinculoFuncionalWhereUniqueInput
    update?: XOR<XOR<VinculoFuncionalUpdateToOneWithWhereWithoutDadosInput, VinculoFuncionalUpdateWithoutDadosInput>, VinculoFuncionalUncheckedUpdateWithoutDadosInput>
  }

  export type FormacaoDocenteUpdateOneWithoutDadosNestedInput = {
    create?: XOR<FormacaoDocenteCreateWithoutDadosInput, FormacaoDocenteUncheckedCreateWithoutDadosInput>
    connectOrCreate?: FormacaoDocenteCreateOrConnectWithoutDadosInput
    upsert?: FormacaoDocenteUpsertWithoutDadosInput
    disconnect?: FormacaoDocenteWhereInput | boolean
    delete?: FormacaoDocenteWhereInput | boolean
    connect?: FormacaoDocenteWhereUniqueInput
    update?: XOR<XOR<FormacaoDocenteUpdateToOneWithWhereWithoutDadosInput, FormacaoDocenteUpdateWithoutDadosInput>, FormacaoDocenteUncheckedUpdateWithoutDadosInput>
  }

  export type FaixaEtariaUpdateOneWithoutDadosNestedInput = {
    create?: XOR<FaixaEtariaCreateWithoutDadosInput, FaixaEtariaUncheckedCreateWithoutDadosInput>
    connectOrCreate?: FaixaEtariaCreateOrConnectWithoutDadosInput
    upsert?: FaixaEtariaUpsertWithoutDadosInput
    disconnect?: FaixaEtariaWhereInput | boolean
    delete?: FaixaEtariaWhereInput | boolean
    connect?: FaixaEtariaWhereUniqueInput
    update?: XOR<XOR<FaixaEtariaUpdateToOneWithWhereWithoutDadosInput, FaixaEtariaUpdateWithoutDadosInput>, FaixaEtariaUncheckedUpdateWithoutDadosInput>
  }

  export type ImportacaoAPICreateanos_importadosInput = {
    set: number[]
  }

  export type ImportacaoAPIUpdateanos_importadosInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DadoEducacaoBasicaCreateWithoutLocalidadeInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutLocalidadeInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput>
  }

  export type DadoEducacaoBasicaCreateManyLocalidadeInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyLocalidadeInput | DadoEducacaoBasicaCreateManyLocalidadeInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalidadeInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedUpdateWithoutLocalidadeInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalidadeInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalidadeInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutLocalidadeInput, DadoEducacaoBasicaUncheckedUpdateWithoutLocalidadeInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalidadeInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalidadeInput>
  }

  export type DadoEducacaoBasicaScalarWhereInput = {
    AND?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
    OR?: DadoEducacaoBasicaScalarWhereInput[]
    NOT?: DadoEducacaoBasicaScalarWhereInput | DadoEducacaoBasicaScalarWhereInput[]
    id?: IntFilter<"DadoEducacaoBasica"> | number
    tipo?: StringFilter<"DadoEducacaoBasica"> | string
    ano?: IntFilter<"DadoEducacaoBasica"> | number
    total?: DecimalFilter<"DadoEducacaoBasica"> | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFilter<"DadoEducacaoBasica"> | Date | string
    localidade_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    dependencia_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    etapa_school_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    localizacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    vinculo_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    formacao_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
    faixa_etaria_id?: IntNullableFilter<"DadoEducacaoBasica"> | number | null
  }

  export type DadoEducacaoBasicaCreateWithoutDependenciaInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutDependenciaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput>
  }

  export type DadoEducacaoBasicaCreateManyDependenciaInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyDependenciaInput | DadoEducacaoBasicaCreateManyDependenciaInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutDependenciaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedUpdateWithoutDependenciaInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedCreateWithoutDependenciaInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutDependenciaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutDependenciaInput, DadoEducacaoBasicaUncheckedUpdateWithoutDependenciaInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutDependenciaInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutDependenciaInput>
  }

  export type DadoEducacaoBasicaCreateWithoutEtapaInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutEtapaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput>
  }

  export type DadoEducacaoBasicaCreateManyEtapaInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyEtapaInput | DadoEducacaoBasicaCreateManyEtapaInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutEtapaInput, DadoEducacaoBasicaUncheckedUpdateWithoutEtapaInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutEtapaInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapaInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutEtapaInput, DadoEducacaoBasicaUncheckedUpdateWithoutEtapaInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapaInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapaInput>
  }

  export type DadoEducacaoBasicaCreateWithoutEtapa_schoolInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutEtapa_schoolInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput>
  }

  export type DadoEducacaoBasicaCreateManyEtapa_schoolInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyEtapa_schoolInput | DadoEducacaoBasicaCreateManyEtapa_schoolInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutEtapa_schoolInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedUpdateWithoutEtapa_schoolInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedCreateWithoutEtapa_schoolInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutEtapa_schoolInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutEtapa_schoolInput, DadoEducacaoBasicaUncheckedUpdateWithoutEtapa_schoolInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutEtapa_schoolInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapa_schoolInput>
  }

  export type DadoEducacaoBasicaCreateWithoutLocalizacaoInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutLocalizacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput>
  }

  export type DadoEducacaoBasicaCreateManyLocalizacaoInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyLocalizacaoInput | DadoEducacaoBasicaCreateManyLocalizacaoInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutLocalizacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutLocalizacaoInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutLocalizacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutLocalizacaoInput, DadoEducacaoBasicaUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutLocalizacaoInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalizacaoInput>
  }

  export type DadoEducacaoBasicaCreateWithoutVinculoInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutVinculoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput>
  }

  export type DadoEducacaoBasicaCreateManyVinculoInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyVinculoInput | DadoEducacaoBasicaCreateManyVinculoInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutVinculoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutVinculoInput, DadoEducacaoBasicaUncheckedUpdateWithoutVinculoInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutVinculoInput, DadoEducacaoBasicaUncheckedCreateWithoutVinculoInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutVinculoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutVinculoInput, DadoEducacaoBasicaUncheckedUpdateWithoutVinculoInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutVinculoInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutVinculoInput>
  }

  export type DadoEducacaoBasicaCreateWithoutFormacaoInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    faixa_etaria?: FaixaEtariaCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutFormacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput>
  }

  export type DadoEducacaoBasicaCreateManyFormacaoInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyFormacaoInput | DadoEducacaoBasicaCreateManyFormacaoInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFormacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedUpdateWithoutFormacaoInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedCreateWithoutFormacaoInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFormacaoInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutFormacaoInput, DadoEducacaoBasicaUncheckedUpdateWithoutFormacaoInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutFormacaoInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutFormacaoInput>
  }

  export type DadoEducacaoBasicaCreateWithoutFaixa_etariaInput = {
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade?: LocalidadeCreateNestedOneWithoutDados_basicaInput
    dependencia?: DependenciaAdministrativaBasicaCreateNestedOneWithoutDadosInput
    etapa?: EtapaEnsinoBasicaCreateNestedOneWithoutDadosInput
    etapa_school?: EtapaEnsinoBasicaSchoolCreateNestedOneWithoutDadosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutDados_basicaInput
    vinculo?: VinculoFuncionalCreateNestedOneWithoutDadosInput
    formacao?: FormacaoDocenteCreateNestedOneWithoutDadosInput
  }

  export type DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
  }

  export type DadoEducacaoBasicaCreateOrConnectWithoutFaixa_etariaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    create: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput>
  }

  export type DadoEducacaoBasicaCreateManyFaixa_etariaInputEnvelope = {
    data: DadoEducacaoBasicaCreateManyFaixa_etariaInput | DadoEducacaoBasicaCreateManyFaixa_etariaInput[]
    skipDuplicates?: boolean
  }

  export type DadoEducacaoBasicaUpsertWithWhereUniqueWithoutFaixa_etariaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    update: XOR<DadoEducacaoBasicaUpdateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedUpdateWithoutFaixa_etariaInput>
    create: XOR<DadoEducacaoBasicaCreateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedCreateWithoutFaixa_etariaInput>
  }

  export type DadoEducacaoBasicaUpdateWithWhereUniqueWithoutFaixa_etariaInput = {
    where: DadoEducacaoBasicaWhereUniqueInput
    data: XOR<DadoEducacaoBasicaUpdateWithoutFaixa_etariaInput, DadoEducacaoBasicaUncheckedUpdateWithoutFaixa_etariaInput>
  }

  export type DadoEducacaoBasicaUpdateManyWithWhereWithoutFaixa_etariaInput = {
    where: DadoEducacaoBasicaScalarWhereInput
    data: XOR<DadoEducacaoBasicaUpdateManyMutationInput, DadoEducacaoBasicaUncheckedUpdateManyWithoutFaixa_etariaInput>
  }

  export type LocalidadeCreateWithoutDados_basicaInput = {
    id: number
    nome: string
    tipo: string
    uf?: string | null
    codigo_ibge?: string | null
  }

  export type LocalidadeUncheckedCreateWithoutDados_basicaInput = {
    id: number
    nome: string
    tipo: string
    uf?: string | null
    codigo_ibge?: string | null
  }

  export type LocalidadeCreateOrConnectWithoutDados_basicaInput = {
    where: LocalidadeWhereUniqueInput
    create: XOR<LocalidadeCreateWithoutDados_basicaInput, LocalidadeUncheckedCreateWithoutDados_basicaInput>
  }

  export type DependenciaAdministrativaBasicaCreateWithoutDadosInput = {
    id: number
    nome: string
    tipo?: string | null
  }

  export type DependenciaAdministrativaBasicaUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
    tipo?: string | null
  }

  export type DependenciaAdministrativaBasicaCreateOrConnectWithoutDadosInput = {
    where: DependenciaAdministrativaBasicaWhereUniqueInput
    create: XOR<DependenciaAdministrativaBasicaCreateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedCreateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaCreateWithoutDadosInput = {
    id: number
    nome: string
    nome_curto?: string | null
  }

  export type EtapaEnsinoBasicaUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
    nome_curto?: string | null
  }

  export type EtapaEnsinoBasicaCreateOrConnectWithoutDadosInput = {
    where: EtapaEnsinoBasicaWhereUniqueInput
    create: XOR<EtapaEnsinoBasicaCreateWithoutDadosInput, EtapaEnsinoBasicaUncheckedCreateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaSchoolCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type EtapaEnsinoBasicaSchoolUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type EtapaEnsinoBasicaSchoolCreateOrConnectWithoutDadosInput = {
    where: EtapaEnsinoBasicaSchoolWhereUniqueInput
    create: XOR<EtapaEnsinoBasicaSchoolCreateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedCreateWithoutDadosInput>
  }

  export type LocalizacaoCreateWithoutDados_basicaInput = {
    id: number
    nome: string
  }

  export type LocalizacaoUncheckedCreateWithoutDados_basicaInput = {
    id: number
    nome: string
  }

  export type LocalizacaoCreateOrConnectWithoutDados_basicaInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutDados_basicaInput, LocalizacaoUncheckedCreateWithoutDados_basicaInput>
  }

  export type VinculoFuncionalCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type VinculoFuncionalUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type VinculoFuncionalCreateOrConnectWithoutDadosInput = {
    where: VinculoFuncionalWhereUniqueInput
    create: XOR<VinculoFuncionalCreateWithoutDadosInput, VinculoFuncionalUncheckedCreateWithoutDadosInput>
  }

  export type FormacaoDocenteCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type FormacaoDocenteUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
  }

  export type FormacaoDocenteCreateOrConnectWithoutDadosInput = {
    where: FormacaoDocenteWhereUniqueInput
    create: XOR<FormacaoDocenteCreateWithoutDadosInput, FormacaoDocenteUncheckedCreateWithoutDadosInput>
  }

  export type FaixaEtariaCreateWithoutDadosInput = {
    id: number
    nome: string
    idade_inicial?: number | null
    idade_final?: number | null
  }

  export type FaixaEtariaUncheckedCreateWithoutDadosInput = {
    id: number
    nome: string
    idade_inicial?: number | null
    idade_final?: number | null
  }

  export type FaixaEtariaCreateOrConnectWithoutDadosInput = {
    where: FaixaEtariaWhereUniqueInput
    create: XOR<FaixaEtariaCreateWithoutDadosInput, FaixaEtariaUncheckedCreateWithoutDadosInput>
  }

  export type LocalidadeUpsertWithoutDados_basicaInput = {
    update: XOR<LocalidadeUpdateWithoutDados_basicaInput, LocalidadeUncheckedUpdateWithoutDados_basicaInput>
    create: XOR<LocalidadeCreateWithoutDados_basicaInput, LocalidadeUncheckedCreateWithoutDados_basicaInput>
    where?: LocalidadeWhereInput
  }

  export type LocalidadeUpdateToOneWithWhereWithoutDados_basicaInput = {
    where?: LocalidadeWhereInput
    data: XOR<LocalidadeUpdateWithoutDados_basicaInput, LocalidadeUncheckedUpdateWithoutDados_basicaInput>
  }

  export type LocalidadeUpdateWithoutDados_basicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadeUncheckedUpdateWithoutDados_basicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DependenciaAdministrativaBasicaUpsertWithoutDadosInput = {
    update: XOR<DependenciaAdministrativaBasicaUpdateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedUpdateWithoutDadosInput>
    create: XOR<DependenciaAdministrativaBasicaCreateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedCreateWithoutDadosInput>
    where?: DependenciaAdministrativaBasicaWhereInput
  }

  export type DependenciaAdministrativaBasicaUpdateToOneWithWhereWithoutDadosInput = {
    where?: DependenciaAdministrativaBasicaWhereInput
    data: XOR<DependenciaAdministrativaBasicaUpdateWithoutDadosInput, DependenciaAdministrativaBasicaUncheckedUpdateWithoutDadosInput>
  }

  export type DependenciaAdministrativaBasicaUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DependenciaAdministrativaBasicaUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaUpsertWithoutDadosInput = {
    update: XOR<EtapaEnsinoBasicaUpdateWithoutDadosInput, EtapaEnsinoBasicaUncheckedUpdateWithoutDadosInput>
    create: XOR<EtapaEnsinoBasicaCreateWithoutDadosInput, EtapaEnsinoBasicaUncheckedCreateWithoutDadosInput>
    where?: EtapaEnsinoBasicaWhereInput
  }

  export type EtapaEnsinoBasicaUpdateToOneWithWhereWithoutDadosInput = {
    where?: EtapaEnsinoBasicaWhereInput
    data: XOR<EtapaEnsinoBasicaUpdateWithoutDadosInput, EtapaEnsinoBasicaUncheckedUpdateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_curto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtapaEnsinoBasicaSchoolUpsertWithoutDadosInput = {
    update: XOR<EtapaEnsinoBasicaSchoolUpdateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedUpdateWithoutDadosInput>
    create: XOR<EtapaEnsinoBasicaSchoolCreateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedCreateWithoutDadosInput>
    where?: EtapaEnsinoBasicaSchoolWhereInput
  }

  export type EtapaEnsinoBasicaSchoolUpdateToOneWithWhereWithoutDadosInput = {
    where?: EtapaEnsinoBasicaSchoolWhereInput
    data: XOR<EtapaEnsinoBasicaSchoolUpdateWithoutDadosInput, EtapaEnsinoBasicaSchoolUncheckedUpdateWithoutDadosInput>
  }

  export type EtapaEnsinoBasicaSchoolUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaEnsinoBasicaSchoolUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoUpsertWithoutDados_basicaInput = {
    update: XOR<LocalizacaoUpdateWithoutDados_basicaInput, LocalizacaoUncheckedUpdateWithoutDados_basicaInput>
    create: XOR<LocalizacaoCreateWithoutDados_basicaInput, LocalizacaoUncheckedCreateWithoutDados_basicaInput>
    where?: LocalizacaoWhereInput
  }

  export type LocalizacaoUpdateToOneWithWhereWithoutDados_basicaInput = {
    where?: LocalizacaoWhereInput
    data: XOR<LocalizacaoUpdateWithoutDados_basicaInput, LocalizacaoUncheckedUpdateWithoutDados_basicaInput>
  }

  export type LocalizacaoUpdateWithoutDados_basicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoUncheckedUpdateWithoutDados_basicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoFuncionalUpsertWithoutDadosInput = {
    update: XOR<VinculoFuncionalUpdateWithoutDadosInput, VinculoFuncionalUncheckedUpdateWithoutDadosInput>
    create: XOR<VinculoFuncionalCreateWithoutDadosInput, VinculoFuncionalUncheckedCreateWithoutDadosInput>
    where?: VinculoFuncionalWhereInput
  }

  export type VinculoFuncionalUpdateToOneWithWhereWithoutDadosInput = {
    where?: VinculoFuncionalWhereInput
    data: XOR<VinculoFuncionalUpdateWithoutDadosInput, VinculoFuncionalUncheckedUpdateWithoutDadosInput>
  }

  export type VinculoFuncionalUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VinculoFuncionalUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FormacaoDocenteUpsertWithoutDadosInput = {
    update: XOR<FormacaoDocenteUpdateWithoutDadosInput, FormacaoDocenteUncheckedUpdateWithoutDadosInput>
    create: XOR<FormacaoDocenteCreateWithoutDadosInput, FormacaoDocenteUncheckedCreateWithoutDadosInput>
    where?: FormacaoDocenteWhereInput
  }

  export type FormacaoDocenteUpdateToOneWithWhereWithoutDadosInput = {
    where?: FormacaoDocenteWhereInput
    data: XOR<FormacaoDocenteUpdateWithoutDadosInput, FormacaoDocenteUncheckedUpdateWithoutDadosInput>
  }

  export type FormacaoDocenteUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FormacaoDocenteUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FaixaEtariaUpsertWithoutDadosInput = {
    update: XOR<FaixaEtariaUpdateWithoutDadosInput, FaixaEtariaUncheckedUpdateWithoutDadosInput>
    create: XOR<FaixaEtariaCreateWithoutDadosInput, FaixaEtariaUncheckedCreateWithoutDadosInput>
    where?: FaixaEtariaWhereInput
  }

  export type FaixaEtariaUpdateToOneWithWhereWithoutDadosInput = {
    where?: FaixaEtariaWhereInput
    data: XOR<FaixaEtariaUpdateWithoutDadosInput, FaixaEtariaUncheckedUpdateWithoutDadosInput>
  }

  export type FaixaEtariaUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FaixaEtariaUncheckedUpdateWithoutDadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    idade_final?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyLocalidadeInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutLocalidadeInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutLocalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyDependenciaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutDependenciaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutDependenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutDependenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyEtapaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutEtapaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutEtapaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyEtapa_schoolInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutEtapa_schoolInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutEtapa_schoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutEtapa_schoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyLocalizacaoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutLocalizacaoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyVinculoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    formacao_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutVinculoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutVinculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutVinculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyFormacaoInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    faixa_etaria_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutFormacaoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    faixa_etaria?: FaixaEtariaUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutFormacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutFormacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    faixa_etaria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaCreateManyFaixa_etariaInput = {
    id?: number
    tipo: string
    ano: number
    total: Decimal | DecimalJsLike | number | string
    data_atualizacao?: Date | string
    localidade_id?: number | null
    dependencia_id?: number | null
    etapa_id?: number | null
    etapa_school_id?: number | null
    localizacao_id?: number | null
    vinculo_id?: number | null
    formacao_id?: number | null
  }

  export type DadoEducacaoBasicaUpdateWithoutFaixa_etariaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade?: LocalidadeUpdateOneWithoutDados_basicaNestedInput
    dependencia?: DependenciaAdministrativaBasicaUpdateOneWithoutDadosNestedInput
    etapa?: EtapaEnsinoBasicaUpdateOneWithoutDadosNestedInput
    etapa_school?: EtapaEnsinoBasicaSchoolUpdateOneWithoutDadosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutDados_basicaNestedInput
    vinculo?: VinculoFuncionalUpdateOneWithoutDadosNestedInput
    formacao?: FormacaoDocenteUpdateOneWithoutDadosNestedInput
  }

  export type DadoEducacaoBasicaUncheckedUpdateWithoutFaixa_etariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DadoEducacaoBasicaUncheckedUpdateManyWithoutFaixa_etariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dependencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_id?: NullableIntFieldUpdateOperationsInput | number | null
    etapa_school_id?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao_id?: NullableIntFieldUpdateOperationsInput | number | null
    vinculo_id?: NullableIntFieldUpdateOperationsInput | number | null
    formacao_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LocalidadeCountOutputTypeDefaultArgs instead
     */
    export type LocalidadeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocalidadeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DependenciaAdministrativaBasicaCountOutputTypeDefaultArgs instead
     */
    export type DependenciaAdministrativaBasicaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DependenciaAdministrativaBasicaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EtapaEnsinoBasicaCountOutputTypeDefaultArgs instead
     */
    export type EtapaEnsinoBasicaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EtapaEnsinoBasicaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EtapaEnsinoBasicaSchoolCountOutputTypeDefaultArgs instead
     */
    export type EtapaEnsinoBasicaSchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EtapaEnsinoBasicaSchoolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocalizacaoCountOutputTypeDefaultArgs instead
     */
    export type LocalizacaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VinculoFuncionalCountOutputTypeDefaultArgs instead
     */
    export type VinculoFuncionalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VinculoFuncionalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormacaoDocenteCountOutputTypeDefaultArgs instead
     */
    export type FormacaoDocenteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormacaoDocenteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaixaEtariaCountOutputTypeDefaultArgs instead
     */
    export type FaixaEtariaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaixaEtariaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocalidadeDefaultArgs instead
     */
    export type LocalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocalidadeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DependenciaAdministrativaBasicaDefaultArgs instead
     */
    export type DependenciaAdministrativaBasicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DependenciaAdministrativaBasicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EtapaEnsinoBasicaDefaultArgs instead
     */
    export type EtapaEnsinoBasicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EtapaEnsinoBasicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EtapaEnsinoBasicaSchoolDefaultArgs instead
     */
    export type EtapaEnsinoBasicaSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EtapaEnsinoBasicaSchoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocalizacaoDefaultArgs instead
     */
    export type LocalizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocalizacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VinculoFuncionalDefaultArgs instead
     */
    export type VinculoFuncionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VinculoFuncionalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormacaoDocenteDefaultArgs instead
     */
    export type FormacaoDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormacaoDocenteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaixaEtariaDefaultArgs instead
     */
    export type FaixaEtariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaixaEtariaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DadoEducacaoBasicaDefaultArgs instead
     */
    export type DadoEducacaoBasicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DadoEducacaoBasicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImportacaoAPIDefaultArgs instead
     */
    export type ImportacaoAPIArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImportacaoAPIDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}