import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import { hexToRgb, renderWithTheme, theme } from '@astral/tests';

import { Button } from './Button';
import { ButtonProps } from './types';

describe('Button', () => {
  it('По дефолту отображается contained вариант', () => {
    renderWithTheme(<Button>Btn</Button>);

    const button = screen.getByRole('button');

    const backgroundColor = window
      .getComputedStyle(button)
      .getPropertyValue('background-color');

    expect(backgroundColor).toBe(hexToRgb(theme.palette.primary.main));
  });

  it.each<ButtonProps['variant']>(['contained', 'light', 'text', 'link'])(
    'При доступе через tab появляется outline для variant: %s',
    async (variant) => {
      renderWithTheme(<Button variant={variant}>Btn</Button>);

      const user = userEvent.setup();

      await user.tab({ shift: true });

      const button = screen.getByRole('button');

      const outline = window
        .getComputedStyle(button)
        .getPropertyValue('outline');

      expect(outline.includes('2px')).toBeTruthy();
    },
  );

  it.each<ButtonProps['variant']>(['contained', 'light', 'text', 'link'])(
    'При фокусе отсутствует тень для variant: %s',
    (variant) => {
      renderWithTheme(<Button variant={variant}>Btn</Button>);

      const button = screen.getByRole('button');

      act(() => {
        button.focus();
      });

      const shadow = window
        .getComputedStyle(button)
        .getPropertyValue('box-shadow');

      expect(shadow).toBe('none');
    },
  );

  it('Prop disabled блокирует кнопку', () => {
    renderWithTheme(<Button disabled>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
