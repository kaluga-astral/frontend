import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { mobilePhone, object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormMobilePhoneField } from './FormMobilePhoneField';
import { type FormMobilePhoneFieldValue } from './types';

const validationSchema = object<FormValues>({
  phoneField: string(mobilePhone()),
});

type FormValues = { phoneField: FormMobilePhoneFieldValue };

describe('FormMobileField', () => {
  it('Поле фокусируется после клика на Submit', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={() => form.handleSubmit(() => undefined)}>
          <FormMobilePhoneField
            required
            label="Phone mask field"
            control={form.control}
            name="phoneField"
          />

          <button type="submit">Submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('Submit'));

    const input = await screen.findByRole('textbox');

    expect(input).toHaveFocus();
  });
});
