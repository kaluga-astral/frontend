import { Box } from '@mui/material';
import { Story } from '@storybook/react';
import NoCertificates from '@astral/illustrations/src/no-certificates.svg';

import { Button } from '../Button';
import { Typography } from '../Typography';

import { Placeholder } from '.';

export default {
  title: 'Components/Placeholder',
  component: Placeholder,
};

export const Default: Story = () => {
  return (
    <Box border="1px solid #dfdfdf" width="100%" height="600px">
      <Placeholder
        title="Заголовок страницы"
        description={
          <>
            Текст для пользователя,{' '}
            <Typography color="error" variant="ui">
              разъясняющий
            </Typography>{' '}
            принципы работы раздела или подсказки по работе в нем.
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
