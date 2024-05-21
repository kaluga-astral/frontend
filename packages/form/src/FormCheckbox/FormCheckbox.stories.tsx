import { type StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import { boolean, object, optional } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
//TODO необходимо вынести в отдельный пакет
import { ExampleTemplate } from '../../../components/src/docs';
import { LegacyGrid, Typography } from '../../../components';

import { FormCheckbox } from './FormCheckbox';
import { type FormCheckboxValue } from './types';

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

const validationSchema1 = object<Form1Values>({
  check1: boolean(),
  check2: optional(boolean()),
});

const validationSchema2 = object<Form2Values>({
  fieldName1: optional(boolean()),
  fieldName2: optional(boolean()),
  fieldName3: boolean(),
  fieldName4: boolean(),
});

const Template: StoryFn = () => {
  const form1 = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: true,
    },
    resolver: resolver<Form1Values>(validationSchema1),
  });

  const form2 = useForm<Form2Values>({
    defaultValues: {
      fieldName1: undefined,
      fieldName2: true,
      fieldName3: undefined,
      fieldName4: undefined,
    },
    resolver: resolver<Form2Values>(validationSchema2),
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
          <LegacyGrid
            container
            justifyContent="center"
            autoFlow="column"
            spacing={4}
          >
            <FormCheckbox
              control={form1.control}
              name="check1"
              title="Текст"
              hideHelperText
            />
            <FormCheckbox
              control={form1.control}
              isError
              name="check2"
              title="Текст"
            />
          </LegacyGrid>
        </FormStoryContainer>
      </ExampleTemplate.Case>

      <LegacyGrid>
        <Typography variant="h5" paragraph>
          Пример использования
        </Typography>

        <FormStoryContainer form={form2}>
          <FormCheckbox
            control={form2.control}
            name="fieldName1"
            title={
              <>
                Lorem ipsum dolor sit amet <a href="/">some link in label</a>{' '}
                lorem ipsum
              </>
            }
          />
          <FormCheckbox
            control={form2.control}
            name="fieldName2"
            title="Form checkbox field"
          />
          <FormCheckbox
            control={form2.control}
            name="fieldName3"
            title="Required field with helper text"
          />
          <FormCheckbox
            control={form2.control}
            hideHelperText
            name="fieldName4"
            title="Required field with tooltip"
          />
          <FormSubmitButton>Submit</FormSubmitButton>
        </FormStoryContainer>
      </LegacyGrid>
    </ExampleTemplate>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
