import { Rule } from '../types';

/**
 * @description Фабрика по созданию правил валидации.
 */
export function createRule<Params extends object, RequiredParams extends true>(
  creator: Rule<Params & { exclude?: unknown }, RequiredParams>,
): Rule<Params & { exclude?: unknown }, RequiredParams>;

export function createRule<Params extends object, RequiredParams extends false>(
  creator: Rule<Params & { exclude?: unknown }, RequiredParams>,
): Rule<Params & { exclude?: unknown }, RequiredParams>;

// eslint-disable-next-line
export function createRule(creator: any) {
  // eslint-disable-next-line
  return (params: any) => (value: any) => {
    // const { exclude } = params;

    if (value === '') {
      return undefined;
    }

    return creator(params)(value);
  };
}
