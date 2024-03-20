import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { vi } from 'vitest';

import { MenuItem } from '../MenuItem';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  it('Кнопка заблокирована если disabled=true', () => {
    renderWithTheme(
      <DropdownButton disabled name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    const button = screen.getByRole('button', { name: 'btn' });

    expect(button).toBeDisabled();
  });

  it('Popover закрывается gри клике на option', async () => {
    renderWithTheme(
      <DropdownButton name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    await userEvents.click(screen.getByRole('button'));
    await userEvents.click(screen.getByText('Item'));

    const menuItem = screen.queryByRole('menuitem');

    expect(menuItem).not.toBeInTheDocument();
  });

  it('OnClick вызывается при клике на option', async () => {
    const onClickSpy = vi.fn();

    renderWithTheme(
      <DropdownButton name="btn">
        <MenuItem onClick={onClickSpy}>Item</MenuItem>
      </DropdownButton>,
    );

    await userEvents.click(screen.getByRole('button'));
    await userEvents.click(screen.getByRole('menuitem'));
    expect(onClickSpy).toBeCalled();
  });

  it('Name отображается внутри кнопки', async () => {
    renderWithTheme(
      <DropdownButton name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    const button = screen.getByRole('button', { name: 'btn' });

    expect(button).toBeInTheDocument();
  });
});
