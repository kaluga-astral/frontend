import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { RadioCard } from './RadioCard';

describe('RadioCard', () => {
  it('Содержимое header отображается в карточке', () => {
    renderWithTheme(<RadioCard header="Content header" />);

    const header = screen.getByText('Content header');

    expect(header).toBeVisible();
  });

  it('Содержимое children отображается в карточке', () => {
    renderWithTheme(
      <RadioCard header="Content header">Content body</RadioCard>,
    );

    const body = screen.getByText('Content body');

    expect(body).toBeVisible();
  });

  it('OnChange вызывается при нажатии на карточку', async () => {
    const onChangeSpy = vi.fn();

    renderWithTheme(
      <RadioCard header="Content header" onChange={onChangeSpy} />,
    );

    const label = screen.getByLabelText('Content header');

    await userEvents.click(label);
    expect(onChangeSpy).toBeCalled();
  });

  it('Карточка не доступна для взаимодействия при disabled=true', async () => {
    const onChangeSpy = vi.fn();

    renderWithTheme(
      <RadioCard disabled header="Content header" onChange={onChangeSpy} />,
    );

    const label = await screen.findByLabelText('Content header');

    expect(label).toBeDisabled();
  });
});
