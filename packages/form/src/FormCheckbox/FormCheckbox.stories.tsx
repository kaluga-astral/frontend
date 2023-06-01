import { Story } from '@storybook/react';
import { useEffect } from 'react';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
//TODO необходимо вынести в отдельный пакет
import { ExampleTemplate } from '../../../components/src/docs';
import { Grid, Typography } from '../../../components';

import { FormCheckbox } from './FormCheckbox';
import { FormCheckboxValue } from './types';

export default {
  title: 'Form/FormCheckbox',
  component: null,
};

type Form1Values = {
  check1: FormCheckboxValue;
  check2: FormCheckboxValue;
};

type Form2Values = {
  fieldName1: FormCheckboxValue;
  fieldName2: FormCheckboxValue;
  fieldName3: FormCheckboxValue;
  fieldName4: FormCheckboxValue;
};

const Template: Story = () => {
  const form1 = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: undefined,
      check2: true,
    },
  });

  const form2 = useForm<Form2Values>({
    defaultValues: {
      fieldName1: undefined,
      fieldName2: true,
      fieldName3: undefined,
      fieldName4: undefined,
    },
  });

  useEffect(() => {
    form1.trigger();
  }, [form1.trigger]);

  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        FormCheckbox
      </Typography>

      <ExampleTemplate.Case
        title="Validation"
        descriptionList={[
          'Валидация компонента может быть, когда в результате обработки значения в форме произошла ошибка.',
        ]}
      >
        <FormStoryContainer form={form1}>
          <Grid container justifyContent="center" autoFlow="column" spacing={4}>
            <FormCheckbox
              control={form1.control}
              rules={{ required: 'Required field' }}
              name="check1"
              title="Текст"
              hideHelperText
            />
            <FormCheckbox
              control={form1.control}
              rules={{
                validate: {
                  activeCheckError: (value) => !value,
                },
              }}
              name="check2"
              title="Текст"
            />
          </Grid>
        </FormStoryContainer>
      </ExampleTemplate.Case>

      <Grid>
        <Typography variant="h5" paragraph>
          Пример использования
        </Typography>

        <FormStoryContainer form={form2}>
          <FormCheckbox
            control={form2.control}
            name="fieldName1"
            title="Form checkbox field"
          />
          <FormCheckbox
            control={form2.control}
            name="fieldName2"
            title="Form checkbox field"
          />
          <FormCheckbox
            control={form2.control}
            rules={{ required: 'Required field' }}
            name="fieldName3"
            title="Required field with helper text"
          />
          <FormCheckbox
            control={form2.control}
            rules={{ required: 'Required field' }}
            hideHelperText
            name="fieldName4"
            title="Required field with tooltip"
          />
          <FormSubmitButton>Submit</FormSubmitButton>
        </FormStoryContainer>
      </Grid>
    </ExampleTemplate>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
