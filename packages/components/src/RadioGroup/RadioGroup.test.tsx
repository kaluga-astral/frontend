import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { useContext } from 'react';

import { RadioGroupContext } from './RadioGroupContext';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('Флаг ошибки доступен в RadioGroupContext', () => {
    const ChildComponent = () => {
      const { isError } = useContext(RadioGroupContext);

      if (typeof isError === 'boolean') {
        return <div>{isError ? 'error' : 'ok'}</div>;
      }

      return null;
    };

    renderWithTheme(
      <RadioGroup isError>
        <ChildComponent />
      </RadioGroup>,
    );

    const errorText = screen.getByText('error');

    expect(errorText).toBeDefined();
  });

  it('Label отображается для группы', () => {
    renderWithTheme(<RadioGroup groupLabel="group label" />);

    const groupLabel = screen.getByText(/group label/i);

    expect(groupLabel).toBeVisible();
  });

  it('"*" отображается, если поле required', () => {
    renderWithTheme(<RadioGroup groupLabel="radio label" required />);

    const asterisk = screen.getByText('*');

    expect(asterisk).toBeVisible();
  });

  it('Ошибка поля отображается в tooltip', async () => {
    renderWithTheme(
      <RadioGroup groupLabel="group label" isError errorText="error text" />,
    );

    const groupLabel = screen.getByText('group label');

    await userEvents.hover(groupLabel);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(/^error text$/);
  });
});
