export interface Facade<Input, Output> {
  execute(input: Input): Output | Promise<Output>;
}
