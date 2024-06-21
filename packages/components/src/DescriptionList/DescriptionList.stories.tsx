import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles';
import { Grid } from '../Grid';

import { DescriptionList, type DescriptionListProps } from './DescriptionList';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=9482-124414&t=voulOUycMV4eKx39-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DescriptionList> = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
};

export default meta;

type Story = StoryObj<typeof DescriptionList>;

export const Interaction: Story = {
  args: {
    items: [
      {
        name: 'ИНН',
        value: '295995231495',
        options: { maxWidth: '200px', color: 'primary', canCopy: true },
      },
      {
        name: 'Описание',
        value: 'ИНН физического лица является последовательностью из 12 цифр',
        options: { maxWidth: '300px', color: 'error' },
      },
    ],
    justifyContent: 'space-between',
    leader: true,
    separator: ':',
  },
  parameters: {
    options: { showPanel: true },
    docs: {
      disable: true,
    },
  },
};

const GridWrapper = styled(Grid)`
  justify-content: center;
`;

export const Example = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ИНН',
      value: '295995231495',
      options: { canCopy: true },
    },
    {
      name: 'Описание ИНН физического лица',
      value: 'ИНН физического лица является последовательностью из 12 цифр',
    },
    {
      name: 'Снилс',
      value: '',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

/**
 * ```canCopy``` можно задать для каждого элемента списка отдельно
 */
export const CanCopy = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ИНН',
      value: '295995231495',
      options: { canCopy: true },
    },
    {
      name: 'Снилс',
      value: '23339576886',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

/**
 * По дефолту copyPosition="right", можно задать "left"
 */
export const CopyPosition = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ИНН',
      value: '295995231495',
      options: { canCopy: true, copyPosition: 'left' },
    },
    {
      name: 'Снилс',
      value: '23339576886',
      options: { canCopy: true },
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

/**
 * По дефолту ширина Label не ограничена, можно задать maxWidth для фиксированной длины
 */
export const MaxWidth = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'Описания ИНН юридического лица',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр',
      options: { maxWidth: '150px' },
    },
    {
      name: 'Описания ИНН юридического лица',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

/**
 * Prop ```justifyContent``` по дефолту start, можно задать space-between для всего списка
 */
export const JustifyContent = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
    },
    {
      name: 'ФИО',
      value: 'Швецова Мария Дмитриевна',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} justifyContent="space-between" />
    </GridWrapper>
  );
};

export const JustifyContentCanCopy = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
      options: { canCopy: true },
    },
    {
      name: 'Описание',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр',
      options: { canCopy: true, copyPosition: 'left' },
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} justifyContent="space-between" />
    </GridWrapper>
  );
};

/**
 * Prop ```leader``` добавляет dashed строку
 */
export const Leader = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
    },
    {
      name: 'ФИО',
      value: 'Швецова Мария Дмитриевна',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} leader />
    </GridWrapper>
  );
};

export const Colors = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'grey' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'warning' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'error' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'success' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'primary' },
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

export const ColorsCanCopy = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'grey', canCopy: true },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'warning', canCopy: true },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'error', canCopy: true },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'success', canCopy: true },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'primary', canCopy: true },
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};

export const EmptyValue = () => {
  const items: DescriptionListProps['items'] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д',
    },
    {
      name: 'Снилс',
      value: '',
    },
  ];

  return (
    <GridWrapper rowSpacing={3} container>
      <DescriptionList items={items} />
    </GridWrapper>
  );
};
