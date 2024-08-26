import { type Meta } from '@storybook/react';
import { Grid } from '@astral/components';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { styled } from '../../../components/src/styles';
import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import {
  FormTreeAutocomplete,
  type FormTreeAutocompleteValue,
} from './FormTreeAutocomplete';

/* cSpell:ignore treeautocomplete */

/**
 * Обертка [TreeAutocomplete](/story/components-treeautocomplete--docs) для react-hook-form
 */

const meta: Meta<typeof FormTreeAutocomplete> = {
  title: 'Form/FormTreeAutocomplete',
  component: FormTreeAutocomplete,
};

export default meta;

type FormValues = {
  treeAutocomplete: FormTreeAutocompleteValue;
};

const FAKE_NOTE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'Организация 1',
    note: 'Руководитель',
    children: [
      {
        id: '11',
        label: 'Подразделение 1.1',
        note: 'Руководитель',
      },
      {
        id: '12',
        label: 'Подразделение 1.2',
        note: 'Руководитель',
      },
    ],
  },
  {
    id: '2',
    label: 'Организация 2',
    note: 'Руководитель',
  },
];

const validationSchema = object<FormValues>({
  treeAutocomplete: string(),
});

export const Example = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  const fakeOptions = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Организация 3',
    },
  ];

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
    <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormTreeAutocomplete
          name="treeAutocomplete"
          label="Название"
          options={fakeOptions}
          dialogProps={{
            title: 'Выбор элемента',
          }}
          control={form.control}
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </Grid>
    </Form>
  );
};
