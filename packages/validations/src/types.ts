export type Rule<Args extends unknown[]> = (
  ...args: Args
) => (value?: unknown) => string | undefined;
