import { TypeError } from './enums';

/**
 * Ошибки при устаревшем релизе
 * Вынесено отдельно и массивом, если окажется что покрыты не все кейсы из сценария
 */
const OUTDATED_RELEASE_ERRORS = ['ChunkLoadError'];

/**
 * Условие поиска определенного типа ошибки
 * Чем выше элемент списка, тем больше у него приоритет при пересекающихся условиях
 */
export const CONDITION_TYPE_ERROR = [
  {
    type: TypeError.OutdatedRelease,
    condition: (error: Error) => OUTDATED_RELEASE_ERRORS.includes(error.name),
  },
  { type: TypeError.Default, condition: () => true },
];
