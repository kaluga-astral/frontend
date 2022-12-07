import {
  FieldValues,
  UseFormProps as UseAstralFormProps,
  UseFormReturn,
  useForm as useAstralForm,
} from '@astral/form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationService } from '../../../../services';

export type UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line
  TContext = any,
> = Omit<UseAstralFormProps<TFieldValues, TContext>, 'resolver'> & {
  // eslint-disable-next-line
  validationSchema?: Record<keyof TFieldValues, any>;
};

export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line
  TContext = any,
>({
  validationSchema,
  ...params
}: UseFormProps<TFieldValues, TContext>): UseFormReturn<
  TFieldValues,
  TContext
> =>
  useAstralForm<TFieldValues, TContext>({
    ...params,
    resolver:
      validationSchema &&
      yupResolver(validationService.object(validationSchema)),
  });

export { UseFormReturn };
