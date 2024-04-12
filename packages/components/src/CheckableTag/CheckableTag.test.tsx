import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { describe, expect, it, vi } from 'vitest';

import { CheckableTag } from './CheckableTag';
import { type CheckableTagAddon } from './types';

describe('CheckableTag', () => {
  it('Ref доступен', () => {
    const resultRefMock = { current: null };

    const CheckableTagWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRefMock.current = ref.current;
      }, []);

      return <CheckableTag ref={ref} />;
    };

    renderWithTheme(<CheckableTagWithRef />);
    expect(resultRefMock.current).not.toBeNull();
  });

  it('Callback Ref доступен', () => {
    const callbackRefSpy = vi.fn();

    renderWithTheme(<CheckableTag ref={callbackRefSpy} />);
    expect(callbackRefSpy).toBeCalledWith(expect.any(HTMLElement));
  });

  it('Компонент работает с data атрибутами', () => {
    const tagTestId = 'test-id';

    renderWithTheme(<CheckableTag data-testid={tagTestId} />);

    const tag = screen.queryByTestId(tagTestId);

    expect(tag).toBeVisible();
  });

  it('Компонент получает checked состояние, если checked=true', () => {
    const handleChangeSpy = vi.fn();

    renderWithTheme(<CheckableTag checked={true} onChange={handleChangeSpy} />);

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    expect(checkbox).toBeChecked();
  });

  it('Компонент получает disabled состояние, если disabled=true', () => {
    renderWithTheme(<CheckableTag disabled />);

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    expect(checkbox).toBeDisabled();
  });

  it('OnChange вызывается при нажатии на тег', async () => {
    const label = 'Тег';
    const handleChangeSpy = vi.fn();

    renderWithTheme(<CheckableTag label={label} onChange={handleChangeSpy} />);

    const checkbox = screen.getByText(label);

    await userEvents.click(checkbox);
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it('Дополнительный компонент отображается при передаче через startAddon', () => {
    const addonTestId = 'addonTestId';

    const StartAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    renderWithTheme(<CheckableTag startAddon={StartAddon} />);

    const startAddon = screen.getByTestId(addonTestId);

    expect(startAddon).toBeInTheDocument();
  });

  it('Дополнительный компонент отображается при передаче через endAddon', () => {
    const addonTestId = 'addonTestId';

    const EndAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    renderWithTheme(<CheckableTag endAddon={EndAddon} />);

    const endAddon = screen.getByTestId(addonTestId);

    expect(endAddon).toBeInTheDocument();
  });

  it('Дополнительные компоненты получают checked prop при передаче checked=true', () => {
    const addonTestId = 'addonTestId';
    const handleChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ checked }) => (
      <span data-testid={addonTestId}>{String(checked)}</span>
    );

    renderWithTheme(
      <CheckableTag
        checked
        onChange={handleChangeSpy}
        startAddon={Addon}
        endAddon={Addon}
      />,
    );

    const addonList = screen
      .getAllByTestId(addonTestId)
      .filter((node) => node.textContent === 'true');

    expect(addonList).toHaveLength(2);
  });

  it('Дополнительные компоненты получают disabled prop при передаче disabled=true', () => {
    const addonTestId = 'addonTestId';
    const handleChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ disabled }) => (
      <span data-testid={addonTestId}>{String(disabled)}</span>
    );

    renderWithTheme(
      <CheckableTag
        disabled
        onChange={handleChangeSpy}
        startAddon={Addon}
        endAddon={Addon}
      />,
    );

    const addonList = screen
      .getAllByTestId(addonTestId)
      .filter((node) => node.textContent === 'true');

    expect(addonList).toHaveLength(2);
  });
});
