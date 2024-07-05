import { type Meta} from '@storybook/react';
import { Box, Popper } from '@mui/material';
import { useRef, useState } from 'react';

import { Button } from '../Button';

import { ClickAwayListener } from './ClickAwayListener';

/**
 * Абстрактный компонент, предназначенный для отлавливания кликов снаружи кастомных компонентов. Для более узких кейсов, где требуется управление рефом, используйте хук useClickAwayEffect
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof ClickAwayListener> = {
  title: 'Components/ClickAwayListener',
};

export default meta;

export const Example = () => {
  const [isActive, setActive] = useState(false);

  const ref = useRef(null);

  const handleClickAway = () => {
    setActive(false);
  };

  return (
          <ClickAwayListener onClickAway={handleClickAway} isActive={isActive}>
            <div>
              <Button ref={ref} onClick={() => setActive(true)}>
                открыть поппер
              </Button>
              <Popper
                open={isActive}
                anchorEl={ref?.current}
                placement="right"
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
  );
};