import { ValidationRule, ValidationTypes } from '../types';
import { GuardCreator, createGuard } from '../createGuard';

export const createCompositeGuard =
  <ValidationType extends ValidationTypes>(
    guardCreator: GuardCreator<Array<ValidationRule<ValidationType, unknown>>>,
  ) =>
  <TValues>(...params: ValidationRule<ValidationType, TValues>[]) =>
    createGuard<ValidationType, Array<ValidationRule<ValidationType, TValues>>>(
      // на данном этапе уже известно какое исходного значение валидируется (TValues), поэтому необходимо приведение
      guardCreator as GuardCreator<
        Array<ValidationRule<ValidationType, TValues>>
      >,
    )(...params);
