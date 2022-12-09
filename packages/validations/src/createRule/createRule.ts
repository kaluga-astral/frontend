import { Rule } from '../types';

/**
 * @description Фабрика по созданию правил валидации.
 */
export function createRule<Params extends object, RequiredParams extends true>(
  creator: Rule<Params, RequiredParams>,
): Rule<Params, RequiredParams>;

export function createRule<Params extends object, RequiredParams extends false>(
  creator: Rule<Params, RequiredParams>,
): Rule<Params, RequiredParams>;

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
