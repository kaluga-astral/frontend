import { screen } from '@testing-library/react';
import { renderWithTheme } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { Button } from './Button';
import { BUTTON_LOADER_TEST_ID } from './constants';

describe('Button', () => {
  it('Возможно получить ref', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Button ref={ref}>Btn</Button>;
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop disabled блокирует кнопку', () => {
    renderWithTheme(<Button disabled>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Prop loading блокирует кнопку', () => {
    renderWithTheme(<Button loading>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  describe('Prop: Loading', () => {
    it('Блокирует кнопку', () => {
      renderWithTheme(<Button loading>Btn</Button>);

      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
    });

    it('Отображает лоадер', () => {
      const { getByTestId } = renderWithTheme(<Button loading>Btn</Button>);

      const loader = getByTestId(BUTTON_LOADER_TEST_ID);

      expect(loader).toBeVisible();
    });
  });
});
