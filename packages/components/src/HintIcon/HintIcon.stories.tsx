import { type Meta, type StoryObj } from '@storybook/react';

import { Description } from '../Description';
import { styled } from '../styles';
import { Typography } from '../Typography';

import { HintIcon } from './HintIcon';

const meta: Meta<typeof HintIcon> = {
  title: 'Components/HintIcon',
  component: HintIcon,
};

export default meta;

type Story = StoryObj<typeof HintIcon>;

export const Interaction: Story = {
  args: {
    variant: 'info',
    iconOption: {
      variant: 'fill',
      color: 'warning',
    },
    title: 'Безопасность',
    note: 'Последнее изменение пароля быо больше полугода назад',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const StyledDescriptionValue = styled(Description.Value)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
`;

export const Example = () => {
  return (
    <Description direction="row">
      <Description.Name>ИНН</Description.Name>
      <StyledDescriptionValue>
        <Typography>295995231495</Typography>

        <HintIcon
          variant="info"
          title="ИНН"
          iconOption={{ color: 'grey' }}
          note="ИНН — это идентификационный номер налогоплательщика."
        />
      </StyledDescriptionValue>
    </Description>
  );
};

export const Variant = () => {
  return (
    <>
      <HintIcon
        variant="info"
        title="Безопасность"
        note="Последнее изменение пароля быо больше полугода назад"
      />
      <HintIcon
        variant="question"
        title="Безопасность"
        note="Последнее изменение пароля быо больше полугода назад"
      />
    </>
  );
};

export const Color = () => {
  return (
    <>
      <HintIcon
        variant="question"
        title="Безопасность"
        note="Последнее изменение пароля быо больше полугода назад"
      />
      <HintIcon
        variant="question"
        title="Безопасность"
        iconOption={{ color: 'grey' }}
        note="Последнее изменение пароля быо больше полугода назад"
      />
      <HintIcon
        variant="question"
        title="Безопасность"
        iconOption={{ color: 'warning' }}
        note="Последнее изменение пароля быо больше полугода назад"
      />
    </>
  );
};

export const OptionsVariant = () => {
  return (
    <>
      <HintIcon
        variant="question"
        title="Безопасность"
        iconOption={{ color: 'grey' }}
        note="Последнее изменение пароля быо больше полугода назад"
      />
      <HintIcon
        variant="question"
        title="Безопасность"
        iconOption={{ color: 'grey', variant: 'outline' }}
        note="Последнее изменение пароля быо больше полугода назад"
      />
    </>
  );
};
