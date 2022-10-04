export type RuleError = string | string[];

export type ValidationResult = RuleError | undefined;

export type InitializedRule = (value?: unknown) => ValidationResult;

export type Rule<
  Params extends object,
  RequiredParams extends boolean,
> = RequiredParams extends true
  ? (params: Params) => InitializedRule
  : (params?: Params) => InitializedRule;

export type Message = {
  defaultMessage?: string;
  incorrectValue?: string;
};
