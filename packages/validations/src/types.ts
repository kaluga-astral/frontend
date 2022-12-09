export type RuleError = string | string[];

export type ValidationResult = RuleError | undefined;

export type InitializedRule = (value?: unknown) => ValidationResult;

export type Rule<
  Params extends object,
  RequiredParams extends boolean,
> = RequiredParams extends true
  ? (
      params: Params & { exclude?: (value: unknown) => boolean },
    ) => InitializedRule
  : (
      params?: Params & { exclude?: (value: unknown) => boolean },
    ) => InitializedRule;
