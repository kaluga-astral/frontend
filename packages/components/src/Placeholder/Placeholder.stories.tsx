import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import certificatesNotFound from '../../../ui/illustrations/certificates-not-found.svg';
import { styled } from '../styles';

import { Placeholder } from './Placeholder';

/**
 * Предназначен для отображения статусов. Используется внутри [ContentState](/story/components-contentstate--docs).
 * Примеры частных реализаций представлены в [InternalErrorPlaceholder](?path=/docs/components-data-display-placeholders-internalerrorplaceholder--docs) и [OutdatedReleasePlaceholder](?path=/docs/components-data-display-placeholders-outdatedreleaseplaceholder--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=735-12816&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Placeholder> = {
  title: 'Components/Data Display/Placeholder',
  component: Placeholder,
};

export default meta;

type Story = StoryObj<typeof Placeholder>;

export const Interaction: Story = {
  args: {
    title: 'Заявка успешно отправлена',
    description: 'Вы успешно отправили заявку',
    imgSrc: certificatesNotFound,
    imgAlt: 'alt',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <Placeholder
    title="Заявка успешно отправлена"
    description={
      <>
        Вы успешно отправили заявку{' '}
        <Typography color="red" component="span">
          22
        </Typography>
        .
      </>
    }
    imgSrc={certificatesNotFound}
    imgAlt="альтернативный текст изображения"
    Actions={
      <>
        <Button variant="text">Вернуться</Button>
        <Button>ОК</Button>
      </>
    }
  />
);

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const Size = () => {
  return (
    <List>
      <Placeholder
        title="Заголовок страницы"
        description="Текст для пользователя, разъясняющий принципы работы раздела или подсказки по работе в нем."
        imgSrc={certificatesNotFound}
        imgAlt="альтернативный текст изображения"
        size="small"
        Actions={
          <>
            <Button variant="text">Вернуться</Button>
            <Button>ОК</Button>
          </>
        }
      />

      <Placeholder
        title="Заголовок страницы"
        description="Текст для пользователя, разъясняющий принципы работы раздела или подсказки по работе в нем."
        imgSrc={certificatesNotFound}
        imgAlt="альтернативный текст изображения"
        size="medium"
        Actions={
          <>
            <Button variant="text">Вернуться</Button>
            <Button>ОК</Button>
          </>
        }
      />

      <Placeholder
        title="Заголовок страницы"
        description="Текст для пользователя, разъясняющий принципы работы раздела или подсказки по работе в нем."
        imgSrc={certificatesNotFound}
        imgAlt="альтернативный текст изображения"
        size="large"
        Actions={
          <>
            <Button variant="text">Вернуться</Button>
            <Button>ОК</Button>
          </>
        }
      />
    </List>
  );
};
