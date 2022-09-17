import { Rule } from '../types';

/**
 * @description Фабрика по созданию правил валидации.
 * @example createRule((max: number, message: string) => value => value > max ? message : undefined)
 */
export const createRule = <Args extends unknown[]>(
  creator: Rule<Args>,
): Rule<Args> => creator;
