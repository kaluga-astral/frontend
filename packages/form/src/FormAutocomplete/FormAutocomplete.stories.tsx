import { type Meta } from '@storybook/react';
import { array, arrayItem, min, object, or, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Button } from '@astral/components';
import { useState } from 'react';

import { useForm } from '../hooks';
import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';

import { FormAutocomplete } from './FormAutocomplete';

/**
 * Обертка [FormAutocomplete](/docs/components-autocomplete--docs) для react-hook-form
 */
const meta: Meta<typeof FormAutocomplete> = {
  title: 'Form/FormAutocomplete',
  component: FormAutocomplete,
};

export default meta;

type IOption = {
  value: string;
  title: string;
};

const OPTIONS: IOption[] = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
  {
    value: '9',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci, aliquam aliquid delectus ipsam laboriosam magni molestias possimus ullam voluptatibus!',
  },
  {
    value: '10',
    title:
      '12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vero?',
  },
];

type FormValues = {
  autocomplete: IOption[];
};

type FormFreeValues = {
  autocomplete: IOption | string;
};

const validationSchema = object<FormValues>({
  autocomplete: array(
    min(1),
    arrayItem(
      object<IOption>({
        value: string(),
        title: string(),
      }),
    ),
  ),
});

const validationFreeSchema = object<FormFreeValues>({
  autocomplete: or(
    object<IOption>({
      value: string(),
      title: string(),
    }),
    string(min(4)),
  ),
});

export const Example = () => {
  const form = useForm<FormValues>({
    defaultValues: { autocomplete: [OPTIONS[0]] },
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormAutocomplete<FormValues, IOption, true, false, false>
        multiple
        control={form.control}
        name="autocomplete"
        options={OPTIONS}
        label="Form autocomplete"
        getOptionLabel={(params) => params.title}
        placeholder="Placeholder"
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};

/**
 * Prop `freeSolo`: если true, значение в input не будет связано со списком options.
 *
 * В данные формы могут быть установлены как строка из input, так и объект из списка.
 */
export const FreeSolo = () => {
  const form = useForm<FormFreeValues>({
    defaultValues: { autocomplete: '' },
    resolver: resolver<FormFreeValues>(validationFreeSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormAutocomplete<FormFreeValues, IOption, false, boolean, true>
        control={form.control}
        name="autocomplete"
        options={OPTIONS}
        freeSolo
        placeholder="Placeholder"
        label="Form autocomplete with freeSolo"
        getOptionLabel={(params) =>
          typeof params === 'string' ? params : params.title
        }
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};

/**
 * Можно задать значение в форме и инпут подхватит изменения
 */
export const ControlledForm = () => {
  const [, setIsUpdate] = useState(false);

  const form = useForm<FormFreeValues>({
    reValidateMode: 'onChange',
    resolver: resolver<FormFreeValues>(validationFreeSchema),
  });

  const handleButtonClick = () => {
    // eslint-disable-next-line quotes
    form.setValue('autocomplete', "It's sunny today");
    setIsUpdate(true);
  };

  return (
    <FormStoryContainer form={form}>
      <FormAutocomplete<FormFreeValues, IOption, true, false, true>
        control={form.control}
        name="autocomplete"
        options={OPTIONS}
        freeSolo
        label="Form autocomplete with freeSolo"
        getOptionLabel={(params) =>
          typeof params === 'string' ? params : params.title
        }
      />

      <Button onClick={handleButtonClick}>Set text</Button>
    </FormStoryContainer>
  );
};
