import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react';

import { Button } from '../../Button';
import { ListItemIcon } from '../../ListItemIcon';
import { MenuGroup } from '../MenuGroup';
import { Menu } from '../../Menu';

import {
  AoIcon,
  Ap2Icon,
  ApIcon,
  AsIcon,
  EdoIcon,
  KedoIcon,
  OfdIcon,
} from './Icons';
import { StyledLabel, StyledMenuItem } from './styled';

export default {
  title: 'Components/MenuGroup',
  component: MenuGroup,
};

const Template: Story = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button variant="text" onClick={handleClick}>
        Products
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuGroup label="Мои продукты">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <AoIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Отчет</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <ApIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Подпись</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <EdoIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.ЭДО</StyledLabel>
          </StyledMenuItem>
        </MenuGroup>
        <MenuGroup label="Больше продуктов от a-soft">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <KedoIcon />
            </ListItemIcon>
            <StyledLabel>Кадровый ЭДО</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <AsIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.Скрин</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <OfdIcon />
            </ListItemIcon>
            <StyledLabel>Астрал.ОФД</StyledLabel>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <Ap2Icon />
            </ListItemIcon>
            <StyledLabel>Астрал.Подпись</StyledLabel>
          </StyledMenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
