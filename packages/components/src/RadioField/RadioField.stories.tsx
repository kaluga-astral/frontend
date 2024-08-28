import { type Meta, type StoryObj } from '@storybook/react';

import { Grid } from '../Grid';
import { styled } from '../styles/styled';

import { RadioField } from './RadioField';

/**
 * RadioField - Составной компонент, инкапсулирует внутри логику отображения label, tooltip и т.п.
 * Упрощает использование компонента Radio
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof RadioField> = {
  title: 'Components/Inputs/RadioField',
  component: RadioField,
};

export default meta;

type Story = StoryObj<typeof RadioField>;

export const Interaction: Story = {
  args: {
    label: 'Лейбл',
    isError: false,
    required: false,
    checked: false,
    disabled: false,
    disabledReason: 'Причина, по которой radio заблокирован',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const BaseContainer = styled(Grid)`
  width: 300px;
  min-height: 90px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Example = () => (
  <BaseContainer>
    <RadioField value="foo" label="Radio label" />
  </BaseContainer>
);

export const Required = () => (
  <BaseContainer>
    <RadioField value="foo" label="Radio label" required name="bar" />
  </BaseContainer>
);

export const DisabledReason = () => (
  <BaseContainer>
    <RadioField
      label="Radio label"
      value="foo"
      disabledReason="Причина, по которой radio заблокирован"
      checked
      disabled
    />
  </BaseContainer>
);

export const ErrorState = () => (
  <BaseContainer>
    <RadioField label="Radio label" value="foo" isError />
  </BaseContainer>
);
