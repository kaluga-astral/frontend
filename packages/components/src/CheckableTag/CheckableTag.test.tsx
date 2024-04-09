import { useEffect, useRef } from 'react';
import {
  describe,
  expect,
  it,
  renderWithTheme,
  screen,
  userEvents,
  vi,
} from '@astral/tests';

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

    const sut = <CheckableTag ref={callbackRefSpy} />;

    renderWithTheme(sut);
    expect(callbackRefSpy).toBeCalledWith(expect.any(HTMLElement));
  });

  it('Компонент получает checked состояние при передаче checked=true через props', () => {
    const handleChangeSpy = vi.fn();

    const sut = <CheckableTag checked={true} onChange={handleChangeSpy} />;

    renderWithTheme(sut);

    const sutNode = screen.getByRole('checkbox', { hidden: true });

    expect(sutNode).toBeChecked();
  });

  it('Компонент дизейблится при disabled=true', () => {
    const sut = <CheckableTag disabled />;

    renderWithTheme(sut);

    const tagNode = screen.getByRole('checkbox', { hidden: true });

    expect(tagNode).toBeDisabled();
  });

  it('OnChange вызывается при нажатии на тег', async () => {
    const label = 'Тег';
    const handleChangeSpy = vi.fn();

    const sut = <CheckableTag label={label} onChange={handleChangeSpy} />;

    renderWithTheme(sut);

    const sutNode = screen.getByText(label);

    await userEvents.click(sutNode);
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it('Дополнительный компонент отображается при передаче через startAddon', () => {
    const addonTestId = 'addonTestId';

    const StartAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    const sut = <CheckableTag startAddon={StartAddon} />;

    renderWithTheme(sut);

    const addonNode = screen.getByTestId(addonTestId);

    expect(addonNode).toBeInTheDocument();
  });

  it('Дополнительный компонент отображается при передаче через endAddon', () => {
    const addonTestId = 'addonTestId';

    const EndAddon: CheckableTagAddon = () => (
      <span data-testid={addonTestId} />
    );

    const sut = <CheckableTag endAddon={EndAddon} />;

    renderWithTheme(sut);

    const endAddonNode = screen.getByTestId(addonTestId);

    expect(endAddonNode).toBeInTheDocument();
  });

  it('Дополнительные компоненты получают checked prop при передаче checked=true через props', () => {
    const addonTestId = 'addonTestId';
    const handleChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ checked }) => (
      <span data-testid={addonTestId}>{String(checked)}</span>
    );

    const sut = (
      <CheckableTag
        checked
        onChange={handleChangeSpy}
        startAddon={Addon}
        endAddon={Addon}
      />
    );

    renderWithTheme(sut);

    const addonNodeList = screen
      .getAllByTestId(addonTestId)
      .filter((node) => node.textContent === 'true');

    expect(addonNodeList).toHaveLength(2);
  });

  it('Дополнительные компоненты получают disabled prop при передаче disabled=true через props', () => {
    const addonTestId = 'addonTestId';
    const handleChangeSpy = vi.fn();

    const Addon: CheckableTagAddon = ({ disabled }) => (
      <span data-testid={addonTestId}>{String(disabled)}</span>
    );

    const sut = (
      <CheckableTag
        disabled
        onChange={handleChangeSpy}
        startAddon={Addon}
        endAddon={Addon}
      />
    );

    renderWithTheme(sut);

    const addonNodeList = screen
      .getAllByTestId(addonTestId)
      .filter((node) => node.textContent === 'true');

    expect(addonNodeList).toHaveLength(2);
  });
});
