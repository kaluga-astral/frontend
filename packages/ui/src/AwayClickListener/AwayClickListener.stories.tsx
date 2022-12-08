import { Story } from '@storybook/react';
import { Box, Popper } from '@mui/material';
import { useRef, useState } from 'react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { Grid } from '../Grid';

import { AwayClickListener } from './AwayClickListener';

export default {
  title: 'Components/AwayClickListener',
};

const Template: Story<{}> = () => {
  const [isActive, setActive] = useState(false);

  const ref = useRef(null);

  const handleAwayClick = () => {
    setActive(false);
  };

  return (
    <ExampleTemplate>
      <Typography variant="h3">AwayClickListener</Typography>
      <Typography paragraph>
        Абстрактный компонент, предназначенный для отлавливания кликов снаружи
        кастомных компонентов. Для более узких кейсов, где требуется управление
        рефом, используйте хук useAwayClickEffect
      </Typography>

      <ExampleTemplate.Case title="Пример">
        <Grid container justifyContent="center">
          <AwayClickListener onAwayClick={handleAwayClick} isActive={isActive}>
            <Button ref={ref} onClick={() => setActive(true)}>
              открыть поппер
            </Button>
            <Popper
              open={isActive}
              anchorEl={ref?.current}
              placement="bottom-start"
              disablePortal
              modifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
            >
              <Box
                padding={4}
                maxWidth={300}
                borderRadius={3}
                border="1px solid black"
              >
                Клик внутри родителя поппера и кнопки не закроет поппер, а клик
                снаружи закроет его
              </Box>
            </Popper>
          </AwayClickListener>
        </Grid>
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
