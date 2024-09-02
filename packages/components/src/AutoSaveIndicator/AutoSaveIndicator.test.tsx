import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  ERROR_MESSAGE,
  LOADING_MESSAGE,
  ON_RETRY_MESSAGE,
  SUCCESS_MESSAGE,
} from './constants';
import { AutoSaveIndicator } from './AutoSaveIndicator';

describe('AutoSaveIndicator', () => {
  it('Состояние загрузки отображается', () => {
    renderWithTheme(
      <AutoSaveIndicator onRetry={() => {}} errorMsg="" isLoading />,
    );

    const label = screen.getByText(LOADING_MESSAGE);

    expect(label).toBeVisible();
  });

  it('Состояние ошибки отображается', () => {
    renderWithTheme(
      <AutoSaveIndicator onRetry={() => {}} errorMsg="" isError />,
    );

    const label = screen.getByText(ERROR_MESSAGE);

    expect(label).toBeVisible();
  });

  it('Состояние успешного сохранения отображается', () => {
    renderWithTheme(
      <AutoSaveIndicator onRetry={() => {}} errorMsg="" isSuccess />,
    );

    const label = screen.getByText(SUCCESS_MESSAGE);

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

    const item = screen.getByLabelText(
      'Изменения на этой странице сохраняются автоматически',
    );

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();

    expect(tooltip).toHaveTextContent(
      'Изменения на этой странице сохраняются автоматически',
    );
  });

  it('Popover отображается', () => {
    renderWithTheme(<AutoSaveIndicator onRetry={() => {}} errorMsg="" />);

    const item = screen.getByText(
      'Изменения на этой странице сохраняются автоматически',
    );

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
