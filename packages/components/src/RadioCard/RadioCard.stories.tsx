import { type ChangeEvent, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { RadioGroup } from '../RadioGroup';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { RadioCard } from './RadioCard';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21229-6605&mode=design&t=yWkttJL21KBMODv0-0)
 * ### [Guide]()
 */

const meta: Meta<typeof RadioCard> = {
  title: 'Components/Inputs/RadioCard',
  component: RadioCard,
};

export default meta;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: inside;
`;

const Header = ({ price }: { price: string }) => (
  <HeaderWrapper>
    <Typography variant="h5">
      Наименование длинное в две строки а может быть и в три
    </Typography>

    <Typography variant="h5">{price} руб.</Typography>
  </HeaderWrapper>
);

type Story = StoryObj<typeof RadioCard>;

export const Interaction: Story = {
  args: {
    header: <Typography variant="h5">RadioCard Header</Typography>,
    children: <Typography>RadioCard content</Typography>,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup name="test" value={value} onChange={handleChange}>
      <RadioCard header={<Header price="2 500" />} value="one">
        <List>
          <li>Создание доверенностей от одной организации</li>
          <li>В пакете до 2 доверенностей</li>
          <li>На 12 месяцев</li>
        </List>
      </RadioCard>
      <RadioCard header={<Header price="5 000" />} value="two">
        <List>
          <li>Создание доверенностей от одной организации</li>
          <li>В пакете до 5 доверенностей</li>
          <li>На 12 месяцев</li>
        </List>
      </RadioCard>
      <RadioCard disabled header={<Header price="10 000" />} value="three">
        <List>
          <li>Создание доверенностей от одной организации</li>
          <li>В пакете от 5 доверенностей</li>
          <li>На 12 месяцев</li>
        </List>
      </RadioCard>
    </RadioGroup>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup name="test" value={value} onChange={handleChange}>
      <RadioCard disabled header={<Header price="10 000" />} value="three">
        <List>
          <li>Создание доверенностей от одной организации</li>
          <li>В пакете от 5 доверенностей</li>
          <li>На 12 месяцев</li>
        </List>
      </RadioCard>
    </RadioGroup>
  );
};
