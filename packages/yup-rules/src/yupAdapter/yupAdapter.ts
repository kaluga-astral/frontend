import { InitializedRule, Rule } from '@astral/validations';
import { BaseSchema, TestFunction, ValidationError } from 'yup';

/**
 * @description Адаптирует проинициализированное правило из @astral/validation к интерфейсу yup.test
 * @example yup.string().test(yupAdapter(isMinLength(22)))
 */
const yupTestAdapter =
  <Value = unknown>(rule: InitializedRule): TestFunction<Value> =>
  (value) => {
    const validationResult = rule(value);

    if (!validationResult) {
      return true;
    }

    if (Array.isArray(validationResult)) {
      return new ValidationError(
        validationResult.map(
          (errorMessage) => new ValidationError(errorMessage),
        ),
        value,
      );
    }

    return new ValidationError(validationResult, value);
  };

type YupAdapterPredicate = () => BaseSchema;

/**
 * @description Адаптирует правило из @astral/validation для yup
 * @example
 *    const isYupInn = yupAdapter(yup.string, isInn);
 *    const scheme = { inn: isYupInn().required() };
 * @param yupPredicate - базовое правило валидации yup
 * @param rule - правило из пакета @astral/validation
 */
export function yupAdapter<
  // для правильного вывода типов здесь необходим any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TRule extends Rule<any, RequiredParams>,
  RequiredParams extends true,
>(
  yupPredicate: YupAdapterPredicate,
  rule: TRule,
): (params: Parameters<TRule>[0]) => BaseSchema;

export function yupAdapter<
  // для правильного вывода типов здесь необходим any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TRule extends Rule<any, RequiredParams>,
  RequiredParams extends false,
>(
  yupPredicate: YupAdapterPredicate,
  rule: TRule,
): (params?: Parameters<TRule>[0]) => BaseSchema;

export function yupAdapter(
  yupPredicate: YupAdapterPredicate,
  rule: Rule<object, boolean>,
) {
  return (params: object = {}) =>
    yupPredicate().test(yupTestAdapter(rule(params)));
}
