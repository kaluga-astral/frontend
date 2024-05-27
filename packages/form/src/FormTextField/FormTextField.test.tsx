import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormTextField } from './FormTextField';

type FormValues = { user: string };

const validationSchema = object<FormValues>({
  user: string(),
});

describe('FormTextField', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormTextField name="user" control={form.control} />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const errorText = screen.getByText('Обязательно');

      expect(errorText).toBeVisible();
    });
  });

  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const FormTextFieldWithRef = () => {
      const ref = useRef(null);
      const form = useForm();

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Form form={form}>
          <FormTextField name="user" control={form.control} ref={ref} />
        </Form>
      );
    };

    renderWithTheme(<FormTextFieldWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:inputRef: Фокус на поле после клика на Submit', async () => {
    const TestComponent = () => {
      const form = useForm({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormTextField name="user" control={form.control} label="user" />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const input = await screen.findByRole('textbox', { name: /user/i });

    expect(input).toHaveFocus();
  });
});
