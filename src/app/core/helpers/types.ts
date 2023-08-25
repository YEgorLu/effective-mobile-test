export type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];

export type ObjectKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? never : T[K] extends object ? K : never;
}[keyof T];

export type FromEnum<T extends object, V = T[any]> = Record<keyof T, V>;
