export function arrayUnion<T>(...arrays: readonly (readonly T[])[]): T[] {
  if (arrays.some((array) => !Array.isArray(array))) throw new TypeError('Expected arrays');
  return [...new Set(arrays.flat())];
}
