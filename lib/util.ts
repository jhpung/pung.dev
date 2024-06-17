export type Nil = null | undefined;

export function isNil<T>(v: T | Nil): v is Nil {
  return v === null || v === undefined;
}

export function isExists<T>(v: T | Nil): v is T {
  return v !== null && v !== undefined;
}
