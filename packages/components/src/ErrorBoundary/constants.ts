import { TypeError } from './enums';

/**
 * Условие поиска определенного типа ошибки
 * Чем выше элемент списка, тем больше у него приоритет при пересекающихся условиях
 */
export const CONDITION_TYPE_ERROR = [
  {
    type: TypeError.OutdatedRelease,
    condition: (error: Error) =>
      error.name === 'ChunkLoadError' ||
      error.message.includes('Failed to fetch dynamically imported module'),
  },
  { type: TypeError.Default, condition: () => true },
];
