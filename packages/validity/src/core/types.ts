/**
 * @description Уникальный код ошибки валидации
 */
export type ErrorCode = Symbol;

/**
 * @description Информация, которая есть для каждой ошибки
 */
export type ErrorInfo = {
  code: ErrorCode;
  message: string;
};

/**
 * @description Причина ошибки валидации
 */
export type ValidationErrorCause = { code: ErrorCode };

/**
 * @description Ошибка правил валидации
 */
export class ValidationError extends Error {
  cause: ValidationErrorCause;

  constructor(message: string, data: { cause: ValidationErrorCause }) {
    super(message);
    this.cause = data.cause;
  }
}

/**
 * @description Контекст, который доступен в каждом правиле
 */
export type ValidationContext<TValues> = {
  /**
   * @description Значения, которые валидируется guard самого высоко порядка
   */
  values: TValues;
};

/**
 * @description Правило валидации, проверяющее тип value
 */
export type ValidationGuard<TValues> = (
  value: unknown,
  ctx?: ValidationContext<TValues>,
) => ValidationError | undefined;

export type ValidationResult = ValidationError | undefined;

/**
 * @description Правило для валидации
 */
export type ValidationRule<TValue, TValues> = (
  value: TValue,
  ctx: ValidationContext<TValues>,
) => ValidationResult;

/**
 * @description Позволяет писать правила валидации, работающие с любыми value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValidationAnyType = any;

export type ValidationObjectType = Record<string, ValidationAnyType>;

export type ValidationStringType = string;

export type ValidationNumberType = number;

export type ValidationDateType = number;

export type ValidationTypes =
  | ValidationObjectType
  | ValidationStringType
  | ValidationNumberType
  | ValidationDateType;
