import { Rule } from '../types';

/**
 * @description Фабрика по созданию правил валидации.
 */
export function createRule<Params extends object, RequiredParams extends true>(
  creator: Rule<
    Params & { exclude?: (value: unknown) => boolean },
    RequiredParams
  >,
): Rule<Params & { exclude?: (value: unknown) => boolean }, RequiredParams>;

export function createRule<Params extends object, RequiredParams extends false>(
  creator: Rule<
    Params & { exclude?: (value: unknown) => boolean },
    RequiredParams
  >,
): Rule<Params & { exclude?: (value: unknown) => boolean }, RequiredParams>;

// Реализована перегрузка, поэтому используется any
// eslint-disable-next-line
export function createRule(creator: any) {
  // eslint-disable-next-line
  return (params: any) => (value: any) => {
    if (params?.exclude?.(value)) {
      return undefined;
    }

    return creator(params)(value);
  };
}
