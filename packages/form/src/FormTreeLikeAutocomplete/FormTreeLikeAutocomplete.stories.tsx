import { type Meta } from '@storybook/react';
import { Grid } from '@astral/components';
import { array, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import {
  FormTreeLikeAutocomplete,
  type FormTreeLikeAutocompleteValue,
} from './FormTreeLikeAutocomplete';

/* cSpell:ignore treelikeutocomplete */

/**
 * Обертка [TreeLikeAutocomplete](/story/components-treelikeautocomplete--docs) для react-hook-form
 */

const meta: Meta<typeof FormTreeLikeAutocomplete> = {
  title: 'Form/FormTreeLikeAutocomplete',
  component: FormTreeLikeAutocomplete,
};

export default meta;

type FormValues = {
  treeLikeAutocomplete: FormTreeLikeAutocompleteValue;
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
  treeLikeAutocomplete: array(),
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
        <FormTreeLikeAutocomplete
          name="treeLikeAutocomplete"
          label="Название"
          required
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
