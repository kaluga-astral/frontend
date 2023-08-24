import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { InfoFillMd } from '@astral/icons';
import { vi } from 'vitest';

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
          summary="Тест"
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
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
      ></Accordion>,
    );

    const title = screen.getByText('Тест');

    expect(title).toBeVisible();
  });

  it('Скрывает и отображает контент', async () => {
    renderWithTheme(
      <Accordion summary="Тест" startAdorment={<InfoFillMd color="info" />}>
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const title = screen.getByRole('button', { name: 'Тест' });

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
    await userEvents.click(title);
    expect(content).toBeVisible();
  });

  it('Prop:isExpanded:true Отображает контент', async () => {
    renderWithTheme(
      <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
        isExpanded
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const content = screen.getByText('Контент');

    expect(content).toBeVisible();
  });

  it('Prop:isExpanded:false Скрывает контент', async () => {
    renderWithTheme(
      <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
        isExpanded={false}
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const content = screen.getByText('Контент');

    expect(content).not.toBeVisible();
  });

  it('Prop:onChange Вызывается без переданного isExpanded', async () => {
    const onChange = vi.fn();

    renderWithTheme(
      <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
        onChange={onChange}
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const title = screen.getByRole('button', { name: 'Тест' });

    await userEvents.click(title);
    expect(onChange).toHaveBeenCalled();
  });

  it('Prop:onChange Вызывается с переданным isExpanded', async () => {
    const onChange = vi.fn();

    renderWithTheme(
      <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
        isExpanded
        onChange={onChange}
      >
        <Typography>Контент</Typography>
      </Accordion>,
    );

    const title = screen.getByRole('button', { name: 'Тест' });

    await userEvents.click(title);
    expect(onChange).toHaveBeenCalled();
  });
});
