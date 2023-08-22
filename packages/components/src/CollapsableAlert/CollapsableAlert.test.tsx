import { describe } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Typography } from '../Typography';

import { CollapsableAlert } from './CollapsableAlert';

describe('CollapsableAlert', () => {
  it('Prop:ref: присутствует', () => {
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

  it('Prop:title: задает title', () => {
    renderWithTheme(
      <CollapsableAlert title="Счет успешно сформирован">
        <Typography>Номер вашего счета: 32-0021</Typography>
      </CollapsableAlert>,
    );

    const title = screen.getByText('Счет успешно сформирован');

    expect(title).toBeVisible();
  });

  it('Скрывает и отображает контент', async () => {
    renderWithTheme(
      <CollapsableAlert title="Счет успешно сформирован">
        <Typography>Контент</Typography>
      </CollapsableAlert>,
    );

    const title = screen.getByRole('button', {
      name: 'Счет успешно сформирован',
    });

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
    await userEvents.click(title);
    expect(content).toBeVisible();
  });

  it('Prop:isExpanded:true Отображает контент', async () => {
    renderWithTheme(
      <CollapsableAlert title="Тест" isExpanded>
        <Typography>Контент</Typography>
      </CollapsableAlert>,
    );

    const content = screen.getByText('Контент');

    expect(content).toBeVisible();
  });

  it('Prop:isExpanded:false Скрывает контент', async () => {
    renderWithTheme(
      <CollapsableAlert title="Тест" isExpanded={false}>
        <Typography>Контент</Typography>
      </CollapsableAlert>,
    );

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
  });
});
