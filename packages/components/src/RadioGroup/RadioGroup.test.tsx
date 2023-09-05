import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect } from 'vitest';
import { useContext } from 'react';

import { RadioGroupContext } from './RadioGroupProvider';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('Prop:isError: isError доступен в контексте', () => {
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

    expect(errorText).not.toBeUndefined();
  });

  it('Prop:groupLabel: отображается', () => {
    renderWithTheme(<RadioGroup groupLabel="group label" />);

    const groupLabel = screen.getByText(/group label/i);

    expect(groupLabel).toBeVisible();
  });

  it('Prop:required: применяет required', () => {
    renderWithTheme(<RadioGroup groupLabel="radio label" required />);

    const asterisk = screen.getByText('*');

    expect(asterisk).toBeVisible();
  });

  it('Prop:isError: :errorText: При наведении отображается tooltip с переданным текстом', async () => {
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
