import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { mobilePhone, object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { type MouseEvent } from 'react';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormMobilePhoneField } from './FormMobilePhoneField';
import { type FormMobilePhoneFieldValue } from './types';

const validationSchema = object<FormValues>({
  phoneField: string(mobilePhone()),
});

type FormValues = { phoneField: FormMobilePhoneFieldValue };

describe('FormMobilePhoneField', () => {
  it('Поле фокусируется после клика на Submit', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      // вызываем form.submit программно,
      // т.к jsdom не имплементирует requestSubmit
      const onSubmitClick = (e: MouseEvent) => {
        e.preventDefault();
        form.handleSubmit(() => {})();
      };

      return (
        <Form form={form} onSubmit={(e) => e.preventDefault()}>
          <FormMobilePhoneField
            required
            label="Phone mask field"
            control={form.control}
            name="phoneField"
            onFocus={() => console.log('Focused')}
          />

          <button onClick={onSubmitClick}>Submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('Submit'));

    const input = await screen.findByRole('textbox');

    expect(input).toHaveFocus();
  });
});
