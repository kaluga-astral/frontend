import { type Meta } from '@storybook/react';
import { useEffect } from 'react';
import { boolean, object, optional } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
//TODO необходимо вынести в отдельный пакет
import { LegacyGrid } from '../../../components';

import { FormCheckbox } from './FormCheckbox';
import { type FormCheckboxValue } from './types';

/**
 * Обертка [Checkbox](/story/components-checkbox--docs) для react-hook-form
 */
const meta: Meta<typeof FormCheckbox> = {
  title: 'Form/FormCheckbox',
  component: FormCheckbox,
};

export default meta;

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
  check1: optional(boolean()),
  check2: boolean(),
});

const validationSchema2 = object<Form2Values>({
  fieldName1: optional(boolean()),
  fieldName2: optional(boolean()),
  fieldName3: boolean(),
  fieldName4: boolean(),
});

export const Example = () => {
  const form = useForm<Form2Values>({
    defaultValues: {
      fieldName1: undefined,
      fieldName2: true,
      fieldName3: undefined,
      fieldName4: undefined,
    },
    resolver: resolver<Form2Values>(validationSchema2),
  });

  return (
    <FormStoryContainer form={form}>
      <FormCheckbox
        control={form.control}
        name="fieldName1"
        title={
          <>
            Lorem ipsum dolor sit amet <a href="/">some link in label</a>
            lorem ipsum
          </>
        }
      />
      <FormCheckbox
        control={form.control}
        name="fieldName2"
        title="Form checkbox field"
      />
      <FormCheckbox
        control={form.control}
        name="fieldName3"
        title="Required field with helper text"
      />
      <FormCheckbox
        control={form.control}
        hideHelperText
        name="fieldName4"
        title="Required field with tooltip"
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};

export const Disabled = () => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: true,
    },
    resolver: resolver<Form1Values>(validationSchema1),
  });

  return (
    <FormStoryContainer form={form}>
      <LegacyGrid
        container
        justifyContent="center"
        autoFlow="column"
        spacing={4}
      >
        <FormCheckbox control={form.control} name="check1" title="Текст" />
        <FormCheckbox
          control={form.control}
          disabled
          name="check2"
          title="Текст"
        />
      </LegacyGrid>
    </FormStoryContainer>
  );
};

export const Required = () => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: false,
    },
    resolver: resolver<Form1Values>(validationSchema1),
  });

  return (
    <FormStoryContainer form={form}>
      <LegacyGrid
        container
        justifyContent="center"
        autoFlow="column"
        spacing={4}
      >
        <FormCheckbox control={form.control} name="check1" title="Текст" />
        <FormCheckbox
          control={form.control}
          required
          name="check2"
          title="Текст"
        />
      </LegacyGrid>
    </FormStoryContainer>
  );
};

/**
 * Валидация компонента может быть, когда в результате обработки значения в форме произошла ошибка.
 */
export const Validation = () => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: true,
    },
    resolver: resolver<Form1Values>(validationSchema1),
  });

  useEffect(() => {
    form.trigger();
  }, [form.trigger]);

  return (
    <FormStoryContainer form={form}>
      <LegacyGrid
        container
        justifyContent="center"
        autoFlow="column"
        spacing={4}
      >
        <FormCheckbox
          control={form.control}
          name="check1"
          title="Текст"
          hideHelperText
        />
        <FormCheckbox
          control={form.control}
          isError
          name="check2"
          title="Текст"
        />
      </LegacyGrid>
    </FormStoryContainer>
  );
};
