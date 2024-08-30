import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  DEFAULT_STATE,
  ERROR_STATE,
  LOADING_STATE,
  ON_RETRY_MESSAGE,
  POPOVER_MESSAGE,
  SUCCESS_STATE,
} from './constants';
import { AutoSaveIndicator } from './AutoSaveIndicator';

describe('AutoSaveIndicator', () => {
  it.each([
    [{ isSuccess: true }, SUCCESS_STATE],
    [{ isError: true }, ERROR_STATE],
    [{ isLoading: true }, LOADING_STATE],
    [{}, DEFAULT_STATE],
  ])('Состояния отображаются', (props, expectedState) => {
    renderWithTheme(
      <AutoSaveIndicator onRetry={() => {}} errorMsg="" {...props} />,
    );

    const label = screen.getByText(expectedState);

    expect(label).toBeVisible();
  });

  it('Тултип отображается, если isError=true', async () => {
    const errorMsg = 'Ошибка автосохранения';

    renderWithTheme(
      <AutoSaveIndicator onRetry={() => {}} errorMsg={errorMsg} isError />,
    );

    const item = screen.getByLabelText(errorMsg);

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(errorMsg);
  });

  it('Тултип отображается, если состояние не передано', async () => {
    renderWithTheme(<AutoSaveIndicator onRetry={() => {}} errorMsg="" />);

    const item = screen.getByLabelText(POPOVER_MESSAGE);

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(POPOVER_MESSAGE);
  });

  it('Popover отображается', () => {
    renderWithTheme(<AutoSaveIndicator onRetry={() => {}} errorMsg="" />);

    const item = screen.getByText(POPOVER_MESSAGE);

    expect(item).toBeVisible();
  });

  it('OnRetry вызывается при нажатии на кнопку "Повторить попытку"', async () => {
    const onRetrySpy = vi.fn();

    renderWithTheme(
      <AutoSaveIndicator onRetry={onRetrySpy} errorMsg="" isError />,
    );

    const item = screen.getByText(ON_RETRY_MESSAGE);

    await userEvents.click(item);
    expect(onRetrySpy).toBeCalled();
  });
});
