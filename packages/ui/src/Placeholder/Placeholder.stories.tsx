import { Box } from '@mui/material';
import { Story } from '@storybook/react';
import { Certificate } from '@astral/illustrations';

import { Button } from '../Button';

import { Placeholder } from '.';

export default {
  title: 'Components/Placeholder',
  component: Placeholder,
};

export const Default: Story = () => {
  return (
    <Box border="1px solid #dfdfdf" width="800px" height="600px">
      <Placeholder
        title="Заголовок страницы"
        text={
          <>
            Текст для пользователя,{' '}
            <span style={{ color: 'red' }}>разъясняющий</span> принципы работы
            раздела или подсказки по работе в нем.
          </>
        }
        imgSrc={Certificate}
        imgAlt="альтернативный текст изображения"
        Actions={
          <>
            <Button>Дополнительное</Button>
            <Button>Основное действие</Button>
          </>
        }
      />
    </Box>
  );
};
