import { type Theme } from '../../types';
import { type CreateThemeParams, createTheme } from '../baseTheme';

type SnapshotTheme = Theme & {
  computedGetters: {
    spacing: string[];
  };
};

// функция получения темы для снепшота
export const createSnapshotTheme = (
  params: CreateThemeParams,
): SnapshotTheme => {
  const theme = createTheme(params);
  const spacingResults: string[] = [];

  // Вычисляем значения геттеров
  for (let i = 0; i < 2; i++) {
    spacingResults.push(theme.spacing(i));
  }

  // Записываем их в объект для сериализации
  return {
    ...theme,
    computedGetters: {
      spacing: spacingResults,
    },
  };
};
