import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { InfoFillMd } from '@astral/icons';

import { Typography } from '../Typography';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('Prop:ref: присутствует', () => {
    const resultRef = { current: null };

    const AccordionWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Accordion
          title="Тест"
          startAdorment={<InfoFillMd color="info" />}
          ref={ref}
        />
      );
    };

    renderWithTheme(<AccordionWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:title: задает title', () => {
    renderWithTheme(
      <Accordion
        title="Тест"
        startAdorment={<InfoFillMd color="info" />}
      ></Accordion>,
    );

    const title = screen.getByText('Тест');

    expect(title).toBeVisible();
  });

  it('Скрывает и отображает контент', async () => {
    renderWithTheme(
      <Accordion title="Тест" startAdorment={<InfoFillMd color="info" />}>
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const title = screen.getByText('Тест');

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
    await userEvents.click(title);
    expect(content).toBeVisible();
  });

  it('Prop:isOpen:true Отображает контент', async () => {
    renderWithTheme(
      <Accordion
        title="Тест"
        startAdorment={<InfoFillMd color="info" />}
        isOpen
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const content = screen.getByText('Контент');

    expect(content).toBeVisible();
  });

  it('Prop:isOpen:false Скрывает контент', async () => {
    renderWithTheme(
      <Accordion
        title="Тест"
        startAdorment={<InfoFillMd color="info" />}
        isOpen={false}
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
  });
});
