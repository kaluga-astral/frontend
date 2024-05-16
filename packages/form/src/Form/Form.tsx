import { type FormHTMLAttributes, type ReactNode } from 'react';

import { FormProvider } from '../FormProvider';
import { type UseFormReturn } from '../hooks';

export type FormProps<FormValues extends object> =
  FormHTMLAttributes<HTMLFormElement> & {
    /**
     * @description Значение, которое возвращает useForm. Необходимо для передачи в FormContext
     * @example
     * ```tsx
     * import { Form, useForm } from '@astral/form';
     *
     * function App() {
     *   const form = useForm();
     *   const onSubmit = data => console.log(data);
     *
     *   return (
     *     <Form onSubmit={handleSubmit(onSubmit)} form={form}>
     *       <input defaultValue="test" {...form.register("example")} />
     *       <input type="submit" />
     *     </form>
     *   );
     * }
     * ```
     */
    // eslint-disable-next-line
    form: UseFormReturn<FormValues>;
    children?: ReactNode;
  };

/**
 * @description Компонент, инкапсулирующий FormProvider
 * @example
 * ```tsx
 * import { Form, useForm } from '@astral/form';
 *
 * function App() {
 *   const form = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <Form onSubmit={handleSubmit(onSubmit)} form={form}>
 *       <input defaultValue="test" {...form.register("example")} />
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
export const Form = <FormValues extends object>({
  form,
  children,
  ...props
}: FormProps<FormValues>) => {
  return (
    <FormProvider {...form}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <form noValidate {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
