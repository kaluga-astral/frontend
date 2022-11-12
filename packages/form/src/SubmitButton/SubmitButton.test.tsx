import { renderWithTheme } from '@astral/tests';
import { useEffect } from 'react';
import { BUTTON_TEST_ID_MAP } from '@astral/ui';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  it('Form:submitting: отображается лоадер', () => {
    const TestComponent = () => {
      const form = useForm();

      const handleSubmit = () => new Promise(() => {});

      useEffect(() => {}, []);

      return (
        <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
          <SubmitButton>submit</SubmitButton>
        </Form>
      );
    };

    const { getByText, getByTestId } = renderWithTheme(<TestComponent />);

    getByText('submit').click();

    const buttonLoader = getByTestId(BUTTON_TEST_ID_MAP.loader);

    expect(buttonLoader).toBeVisible();
  });
});
