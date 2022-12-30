import { Story } from '@storybook/react';
import { Box, Popper } from '@mui/material';
import { useRef, useState } from 'react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { Grid } from '../Grid';

import { ClickAwayListener } from './ClickAwayListener';

export default {
  title: 'Components/ClickAwayListener',
};

const Template: Story<{}> = () => {
  const [isActive, setActive] = useState(false);

  const ref = useRef(null);

  const handleClickAway = () => {
    setActive(false);
  };

  return (
    <ExampleTemplate>
      <Typography variant="h3">ClickAwayListener</Typography>
      <Typography paragraph>
        Абстрактный компонент, предназначенный для отлавливания кликов снаружи
        кастомных компонентов. Для более узких кейсов, где требуется управление
        рефом, используйте хук useClickAwayEffect
      </Typography>

      <ExampleTemplate.Case title="Пример">
        <Grid container justifyContent="center">
          <ClickAwayListener onClickAway={handleClickAway} isActive={isActive}>
            <div>
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
                  Клик внутри родителя поппера и кнопки не закроет поппер, а
                  клик снаружи закроет его
                </Box>
              </Popper>
            </div>
          </ClickAwayListener>
        </Grid>
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
