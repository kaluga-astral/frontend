export type MultipleErrorObj = {
  /**
   * @description Идентификатор возникновения ошибки. Необходим для идентификации ошибки при выполнении
   */
  reason: string;
  /**
   * @description Сообщение ошибки
   */
  message: string;
};

export type RuleError = string | MultipleErrorObj[];

export type InitializedRule = (value?: unknown) => RuleError | undefined;

export type Rule<Args extends unknown[]> = (...args: Args) => InitializedRule;
