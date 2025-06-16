export async function trycatch<T>(
  promise: Promise<T>
): Promise<[Error] | [undefined, T]> {
  try {
    return [undefined, await promise];
  } catch (error) {
    return [error as Error];
  }
}
