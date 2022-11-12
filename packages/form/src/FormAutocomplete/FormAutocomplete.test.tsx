import { fireEvent, renderWithTheme, userEvents, waitFor } from '@astral/tests';
import { AUTOCOMPLETE_TEST_ID_MAP } from '@astral/ui';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormAutocomplete } from './FormAutocomplete';

describe('FormAutocomplete', () => {
  it('После выбора значения в форму сетится весь выбранный option', async () => {
    type Option = {
      name: string;
      surname: string;
    };

    const user = userEvents.setup();
    const onSubmit = jest.fn();
    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const TestComponent = () => {
      const form = useForm<{ user: Option }>();

      return (
        <Form
          data-testid="form"
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormAutocomplete
            name="user"
            getOptionLabel={(option) => (option as Option).name}
            options={options}
          />
        </Form>
      );
    };

    const { getByTestId } = renderWithTheme(<TestComponent />);

    await user.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));
    await user.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.option));
    fireEvent.submit(getByTestId('form'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: { name: 'Vasya', surname: 'Pupkin' },
      });
    });
  });
});
