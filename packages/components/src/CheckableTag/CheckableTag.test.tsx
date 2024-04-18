import { useEffect, useRef } from 'react';
import {
  CHECK_INTERACTION_REGEXP,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
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

  it('Чекбокс получает состояние checked, если checked=true', () => {
    const onChangeSpy = vi.fn();

    renderWithTheme(<CheckableTag checked={true} onChange={onChangeSpy} />);

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    expect(checkbox).toBeChecked();
  });

  it('Чекбокс получает состояние disabled, если disabled=true', () => {
    renderWithTheme(<CheckableTag disabled />);

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    expect(checkbox).toBeDisabled();
  });

  it('OnDelete не вызывается при нажатии на иконку удаления, при disabled=true', async () => {
    const onDeleteSpy = vi.fn();
    const deleteIconTestId = 'deleteIconTestId';
    const deleteIcon = <span data-testid={deleteIconTestId} />;

    renderWithTheme(
      <CheckableTag disabled onDelete={onDeleteSpy} deleteIcon={deleteIcon} />,
    );

    const deleteIconElement = screen.getByTestId(deleteIconTestId);

    await expect(() => userEvents.click(deleteIconElement)).rejects.toThrow(
      CHECK_INTERACTION_REGEXP,
    );
  });

  it('OnChange не вызывается при нажатии на тег, при disabled=true', async () => {
    const onChangeSpy = vi.fn();

    renderWithTheme(<CheckableTag disabled onChange={onChangeSpy} />);

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    await userEvents.click(checkbox);
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('OnChange вызывается при нажатии на тег', async () => {
    const label = 'Тег';
    const onChangeSpy = vi.fn();

    renderWithTheme(<CheckableTag label={label} onChange={onChangeSpy} />);

    const checkbox = screen.getByText(label);

    await userEvents.click(checkbox);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('Вложенный компонент отображается при передаче через startAddon', () => {
    const addonTestId = 'addonTestId';

    const StartAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    renderWithTheme(<CheckableTag startAddon={StartAddon} />);

    const startAddon = screen.getByTestId(addonTestId);

    expect(startAddon).toBeInTheDocument();
  });

  it('Вложенный компонент отображается при передаче через endAddon', () => {
    const addonTestId = 'addonTestId';

    const EndAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    renderWithTheme(<CheckableTag endAddon={EndAddon} />);

    const endAddon = screen.getByTestId(addonTestId);

    expect(endAddon).toBeInTheDocument();
  });

  it('Вложенные компоненты получают prop checked при передаче checked=true', () => {
    const addonTestId = 'addonTestId';
    const onChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ checked }) => (
      <span data-testid={addonTestId}>{String(checked)}</span>
    );

    renderWithTheme(
      <CheckableTag
        checked
        onChange={onChangeSpy}
        startAddon={Addon}
        endAddon={Addon}
      />,
    );

    const addonList = screen
      .getAllByTestId(addonTestId)
      .filter((node) => node.textContent === 'true');

    expect(addonList).toHaveLength(2);
  });

  it('Вложенные компоненты получают prop disabled при передаче disabled=true', () => {
    const addonTestId = 'addonTestId';
    const onChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ disabled }) => (
      <span data-testid={addonTestId}>{String(disabled)}</span>
    );

    renderWithTheme(
      <CheckableTag
        disabled
        onChange={onChangeSpy}
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
