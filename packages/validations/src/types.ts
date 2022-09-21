export type RuleError = string | string[];

export type ValidationResult = RuleError | undefined;

export type InitializedRule = (value?: unknown) => ValidationResult;

export type Rule<Args extends unknown[]> = (...args: Args) => InitializedRule;
