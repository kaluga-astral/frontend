import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormCodeField } from './FormCodeField';

type FormValues = { code: string };

const validationSchema = object<FormValues>({
  code: string(),
});

describe('FormTextField', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormCodeField codeLength={6} name="code" control={form.control} />
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
});
