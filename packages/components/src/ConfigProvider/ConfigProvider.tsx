import { ReactNode, createContext, useEffect } from 'react';

import { LanguageMap } from '../DatePicker/types';
import { russianMap } from '../DatePicker/constants/russianMap';

const imagesMapDefault = {
  noDataImgSrc: '',
  defaultErrorImgSrc: '',
  outdatedReleaseErrorImgSrc: '',
};

const techSupDefault = {
  phone: '',
  email: '',
};

type Language = 'ru';
type ImagesMap = {
  /**
   * @description изображение при отсутствии данных (используется в DataGrid)
   */
  noDataImgSrc: string;
  /**
   * @description изображение при ошибке (используется в ContentState)
   */
  defaultErrorImgSrc: string;
  /**
   * @description изображение при ошибке загрузки актуальных чанков (используется в ContentState/ErrorBoundary)
   */
  outdatedReleaseErrorImgSrc: string;
};

type TechnicalSupport = {
  phone: string;
  email: string;
};

export type ConfigContextProps = {
  /**
   * @description язык локализации
   * @default 'ru'
   */
  language: Language;
  /**
   * @description языковая карта для DatePicker
   * @default russianMap
   */
  datePickerLanguageMap: LanguageMap;
  /*
   * Callback для отправки ошибки в sentry
   */
  // eslint-disable-next-line
  captureException: (error: any) => void;

  /**
   * @description карта для типовых изображений.
   * Используется в компонентах ui-kit, где требуется отображение декоративных img
   */
  imagesMap: ImagesMap;
  /**
   * @description символ для пустого значения
   * @default '-'
   */
  emptySymbol: string;
  /**
   * @description Данные технической поддержки
   * @default '-'
   */
  techSup: TechnicalSupport;
};

export type ConfigProviderProps = Partial<ConfigContextProps> & {
  children: ReactNode;
};

export const ConfigContext = createContext<ConfigContextProps>({
  language: 'ru',
  datePickerLanguageMap: russianMap,
  captureException: (error) => console.error(error),
  imagesMap: imagesMapDefault,
  techSup: techSupDefault,
  emptySymbol: '-',
});

export const ConfigProvider = ({
  children,
  language = 'ru',
  datePickerLanguageMap = russianMap,
  captureException,
  emptySymbol = '-',
  imagesMap = imagesMapDefault,
  techSup = techSupDefault,
}: Partial<ConfigProviderProps>) => {
  useEffect(() => {
    if (!captureException) {
      console.warn(
        'ConfigProvider: Необходимо наличие captureException, связанного с сервисом мониторинга ошибок.\n' +
          'На данный момент все ошибки, отлавливаемые в ErrorBoundary будут выводиться только в консоль',
      );
    }
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        language,
        datePickerLanguageMap,
        captureException: captureException || ((error) => console.error(error)),
        emptySymbol,
        imagesMap,
        techSup,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
