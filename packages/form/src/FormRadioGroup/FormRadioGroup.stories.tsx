import { Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { styled } from '../../../components/src/styles';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
import { Form } from '../Form';
import { RadioGroupField } from '../../../components/src/RadioGroupField';

import { FormRadioGroup } from './FormRadioGroup';

/**
 * Обертка [FormRadioGroup](/story/components-radiogroup--radio-groups) для react-hook-form
 */
const meta: Meta<typeof FormRadioGroup> = {
  title: 'Form/FormRadioGroup',
  component: FormRadioGroup,
};

export default meta;

enum RadioValues {
  First = 'first',
  Second = 'second',
  Third = 'third',
}

type FormValues = {
  group1: RadioValues;
  group2: RadioValues;
};

const validationSchema = object<FormValues>({
  group1: string(),
  group2: string(),
});

const ExampleWrapper = styled.div`
  height: 350px;
`;

export const Example = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
    defaultValues: {
      group1: RadioValues.First,
    },
  });

  const handleSubmit = form.handleSubmit(
    (values) =>
      new Promise<void>((resolve) => {
        setTimeout(() => {
          window.alert(JSON.stringify(values));
          resolve();
        }, 1000);
      }),
  );

  return (
    <ExampleWrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <Grid container spacing={4} direction="row">
          <FormRadioGroup
            control={form.control}
            name="group1"
            groupLabel="Column group"
          >
            <RadioGroupField label="Radio 1" value={RadioValues.First} />
            <RadioGroupField label="Radio 2" value={RadioValues.Second} />
            <RadioGroupField
              label="Radio 3"
              value={RadioValues.Third}
              disabled
              disabledReason="Причина дизейбла"
            />
          </FormRadioGroup>

          <FormRadioGroup
            control={form.control}
            name="group2"
            row
            groupLabel="Row group (required)"
            required
          >
            <RadioGroupField label="Radio 1" value={RadioValues.First} />
            <RadioGroupField label="Radio 2" value={RadioValues.Second} />
            <RadioGroupField
              label="Radio 3"
              value={RadioValues.Third}
              disabled
              disabledReason="Причина дизейбла"
            />
          </FormRadioGroup>
          <FormSubmitButton>Submit</FormSubmitButton>
        </Grid>
      </Form>
    </ExampleWrapper>
  );
};
