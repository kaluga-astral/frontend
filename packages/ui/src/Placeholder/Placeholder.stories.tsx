import { Box } from '@mui/material';
import { Story } from '@storybook/react';

// пока что указал такой путь, до публикации @astral/illustrations, чтобы сборка не падала
import NoCertificates from '../../../illustrations/src/NoCertificates.svg';
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
        description={
          <>
            Текст для пользователя,{' '}
            <span style={{ color: 'red' }}>разъясняющий</span> принципы работы
            раздела или подсказки по работе в нем.
          </>
        }
        imgSrc={NoCertificates}
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
