import { Rule } from '../types';

/**
 * @example createRule((max: number, message: string) => value => value > max ? message : undefined)
 * @description Фабрика по созданию правил валидации.
 */
export const createRule = <Args extends unknown[]>(
  creator: Rule<Args>,
): Rule<Args> => creator;
