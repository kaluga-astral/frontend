import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Typography } from '../Typography';

import { CollapsableAlert } from './CollapsableAlert';

describe('CollapsableAlert', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const CollapsableAlertWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <CollapsableAlert title="Счет успешно сформирован" ref={ref}>
          <Typography>Номер вашего счета: 32-0021</Typography>
        </CollapsableAlert>
      );
    };

    renderWithTheme(<CollapsableAlertWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Title отображает заголовок', () => {
    renderWithTheme(
      <CollapsableAlert title="Счет успешно сформирован">
        <Typography>Номер вашего счета: 32-0021</Typography>
      </CollapsableAlert>,
    );

    const title = screen.getByText('Счет успешно сформирован');

    expect(title).toBeVisible();
  });

  describe('Контент', () => {
    it('Скрыт по-дефолту', async () => {
      renderWithTheme(
        <CollapsableAlert title="Счет успешно сформирован">
          <Typography>Контент</Typography>
        </CollapsableAlert>,
      );

      const content = screen.getByText('Контент');

      expect(content).not.toBeVisible();
    });

    it('Отображается по нажатию на header', async () => {
      renderWithTheme(
        <CollapsableAlert title="Счет успешно сформирован">
          <Typography>Контент</Typography>
        </CollapsableAlert>,
      );

      const title = screen.getByRole('button', {
        name: 'Счет успешно сформирован',
      });

      const content = screen.getByText('Контент');

      await userEvents.click(title);
      expect(content).toBeVisible();
    });

    it('Отображается при isExpanded=true', async () => {
      renderWithTheme(
        <CollapsableAlert title="Тест" isExpanded>
          <Typography>Контент</Typography>
        </CollapsableAlert>,
      );

      const content = screen.getByText('Контент');

      expect(content).toBeVisible();
    });

    it('Скрыт при isExpanded=false', async () => {
      renderWithTheme(
        <CollapsableAlert title="Тест" isExpanded={false}>
          <Typography>Контент</Typography>
        </CollapsableAlert>,
      );

      const content = screen.getByText('Контент');

      expect(content).not.toBeVisible();
    });
  });
});
