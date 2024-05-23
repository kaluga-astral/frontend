import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

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

  it('Popover открывается при клике на кнопку', async () => {
    renderWithTheme(
      <DropdownButton name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    await userEvents.click(screen.getByRole('button'));

    const menuItem = screen.queryByRole('menuitem');

    expect(menuItem).toBeInTheDocument();
  });

  describe('Popover закрывается', () => {
    const setup = async () => {
      renderWithTheme(
        <>
          <DropdownButton name="btn">
            <MenuItem>Item</MenuItem>
          </DropdownButton>
          <div>Outside popover</div>
        </>,
      );

      await userEvents.click(screen.getByRole('button'));
    };

    it('При клике на option', async () => {
      await setup();
      await userEvents.click(screen.getByText('Item'));

      const menuItem = screen.queryByRole('menuitem');

      expect(menuItem).not.toBeInTheDocument();
    });

    it('При клике вне popover', async () => {
      await setup();
      await userEvents.click(screen.getByText('Outside popover'));

      const menuItem = screen.queryByRole('menuitem');

      expect(menuItem).not.toBeInTheDocument();
    });
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

  it('StartIcon отображается', async () => {
    renderWithTheme(
      <DropdownButton startIcon={<div>Icon</div>} name="btn">
        <MenuItem>Item</MenuItem>
      </DropdownButton>,
    );

    const icon = screen.getByText('Icon');

    expect(icon).toBeInTheDocument();
  });
});
