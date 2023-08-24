import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { useForm } from '../hooks';
import { Form } from '../Form';
import { RadioGroupField } from '../../../components/src/RadioGroupField';

import { FormRadioGroup } from './FormRadioGroup';

type FormValues = {
  radioGroupValue: string;
};

const validationSchema = object<FormValues>({
  radioGroupValue: string(),
});

describe('RormRadioGroup', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form
          name="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormRadioGroup
            control={form.control}
            name="radioGroupValue"
            groupLabel="group label"
          >
            <RadioGroupField label="radio label" value="foo" />
            <RadioGroupField label="radio label" value="bar" />
          </FormRadioGroup>
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const groupLabel = screen.getByText('group label');

    await userEvents.hover(groupLabel);

    const tooltip = await screen.findByRole('tooltip');

    //TODO пока нет возможности прокинуть свой текст в валидацию string
    expect(tooltip).toHaveTextContent(/^Обязательно$/);
  });
});
