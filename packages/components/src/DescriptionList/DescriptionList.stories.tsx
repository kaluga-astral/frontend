import { type Meta, type StoryObj } from '@storybook/react';

import { Tag, type TagColor } from '../Tag';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { DescriptionList, type DescriptionListItem } from './DescriptionList';

/**
 * Компонент для упрощенного построения UI списка формата name: value, использующий для отображения элементов компонент [Description](/docs/components-description--docs)
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
        options: { nameMaxWidth: '200px', color: 'primary', canCopy: true },
      },
      {
        name: 'Описание',
        value: 'ИНН физического лица является последовательностью из 12 цифр',
        options: { nameMaxWidth: '300px', color: 'error' },
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

const Wrapper = styled.div`
  width: 400px;
`;

export const Example = () => {
  const items: DescriptionListItem[] = [
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
      name: 'СНИЛС',
      value: '',
    },
  ];

  return <DescriptionList items={items} />;
};

/**
 * ```canCopy``` можно задать для каждого элемента списка отдельно
 */
export const CanCopy = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ИНН',
      value: '295995231495',
      options: { canCopy: true },
    },
    {
      name: 'СНИЛС',
      value: '23339576886',
    },
  ];

  return <DescriptionList items={items} />;
};

/**
 * По дефолту copyPosition="right", можно задать "left"
 */
export const CopyPosition = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ИНН',
      value: '295995231495',
      options: { canCopy: true, copyPosition: 'left' },
    },
    {
      name: 'СНИЛС',
      value: '23339576886',
      options: { canCopy: true },
    },
  ];

  return <DescriptionList items={items} />;
};

/**
 * По дефолту ширина Name не ограничена, можно задать ```nameMaxWidth``` для фиксированной длины
 */
export const NameMaxWidth = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'Полное именование',
      value:
        '_тест_ОАО "Тестовое коммерческое профессиональное учреждение\n' +
        '          Специальное управление службы №007 Министерство Внутренней Разработки\n' +
        '          по делам тестирования, исправления, чрезвычайным ситуациям и\n' +
        '          ликвидации последствии действия багов"',
      options: { nameMaxWidth: '100px' },
    },
    {
      name: 'Описания ИНН юридического лица',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр',
    },
  ];

  return <DescriptionList items={items} />;
};

/**
 * Prop ```justifyContent``` по дефолту start, можно задать space-between для всего списка
 */
export const JustifyContent = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
    },
    {
      name: 'ФИО',
      value: 'Швецова Мария Дмитриевна',
    },
  ];

  return <DescriptionList items={items} justifyContent="space-between" />;
};

export const JustifyContentCanCopy = () => {
  const items: DescriptionListItem[] = [
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

  return <DescriptionList items={items} justifyContent="space-between" />;
};

/**
 * Prop ```leader``` добавляет dashed строку
 */
export const Leader = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
    },
    {
      name: 'ФИО',
      value: 'Швецова Мария Дмитриевна',
    },
  ];

  return <DescriptionList items={items} leader />;
};

export const Separator = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д.',
    },
    {
      name: 'ФИО',
      value: 'Швецова Мария Дмитриевна',
    },
  ];

  return <DescriptionList items={items} separator="-" />;
};

export const CustomRenderOption = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: {
        color: 'warning',
        renderValue: (value, optionProps) => (
          <div>
            <Tag
              label={value}
              variant="light"
              color={optionProps?.color as TagColor}
            />
          </div>
        ),
      },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: {
        renderValue: (value) => (
          <Typography color="primary">{value}</Typography>
        ),
      },
    },
  ];

  return <DescriptionList items={items} />;
};

export const VariantTag = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'grey', variant: 'tag' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'warning', variant: 'tag' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'error', variant: 'tag' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'success', variant: 'tag' },
    },
    {
      name: 'Название показателя',
      value: 'Значение показателя',
      options: { color: 'primary', variant: 'tag' },
    },
  ];

  return <DescriptionList items={items} />;
};

export const LongDescriptionValueLeader = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'Полное наименование',
      value: 'ПРЕДСТАВИТЕЛЬСТВО АО"КАЛУГА АСТРАЛ" (Г.БАРНАУЛ)#1 ',
    },
    {
      name: 'Краткое наименование',
      value: 'АО"КАЛУГА АСТРАЛ"',
    },
  ];

  return (
    <Wrapper>
      <DescriptionList items={items} leader />
    </Wrapper>
  );
};

export const LongNameValue = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'Описания ИНН юридического лица',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр',
    },
    {
      name: 'Описания ИНН юридического лица',
      value: 'ИНН юридического лица — последовательность из 10 арабских цифр"',
      options: { nameMaxWidth: '100px' },
    },
  ];

  return (
    <Wrapper>
      <DescriptionList items={items} />
    </Wrapper>
  );
};

export const Colors = () => {
  const items: DescriptionListItem[] = [
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

  return <DescriptionList items={items} />;
};

export const ColorsCanCopy = () => {
  const items: DescriptionListItem[] = [
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

  return <DescriptionList items={items} />;
};

export const EmptyValue = () => {
  const items: DescriptionListItem[] = [
    {
      name: 'ФИО',
      value: 'Швецова М. Д',
    },
    {
      name: 'СНИЛС',
      value: '',
    },
  ];

  return <DescriptionList items={items} />;
};
