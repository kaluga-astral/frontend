import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { vi } from 'vitest';

import { MenuItem } from '../MenuItem';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  it('Props:disabled: нельзя нажать кнопку', () => {
    renderWithTheme(
      <DropdownButton disabled name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    const button = screen.getByRole('button', { name: 'btn' });

    expect(button).toBeDisabled();
  });

  it('При клике на option закрывается popover', async () => {
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

  it('При клике на option вызывается onClick', async () => {
    const onClick = vi.fn();

    renderWithTheme(
      <DropdownButton name="btn">
        <MenuItem onClick={onClick}>Item</MenuItem>
      </DropdownButton>,
    );

    await userEvents.click(screen.getByRole('button'));
    await userEvents.click(screen.getByRole('menuitem'));
    expect(onClick).toBeCalled();
  });
});
