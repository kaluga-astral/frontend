import { useContext } from 'react';

import { ConfigContext, type ConfigContextProps } from '../../ConfigProvider';

import {
  DataGridNoDataFigcaption,
  DataGridNoDataIcon,
  DataGridNoDataWrapper,
} from './styles';

export type DataGridNoDataProps = {
  /**
   * Добавлен неразрывный пробел `\u00a0`
   * тк без изображения текст форматируется в 2 строки
   * @default 'Нет\u00a0данных'
   * @example <DataGridNoData title='Нет данных' />
   * @description Заголовок
   */
  title?: string;
  /**
   * @default 250
   * @example <DataGridNoData noDataIconWidth={250} />
   * @description Ширина иконки (высота рассчитывается пропорционально ширине)
   */
  noDataIconWidth?: number;
};

export const DataGridNoData = ({
  title = 'Нет\u00a0данных',
  noDataIconWidth = 250,
}: DataGridNoDataProps) => {
  const {
    imagesMap: { noDataImgSrc },
  } = useContext<ConfigContextProps>(ConfigContext);

  return (
    <DataGridNoDataWrapper>
      <td>
        <figure>
          {noDataImgSrc && (
            <DataGridNoDataIcon src={noDataImgSrc} width={noDataIconWidth} />
          )}
          <DataGridNoDataFigcaption component="figcaption" variant="h4">
            {title}
          </DataGridNoDataFigcaption>
        </figure>
      </td>
    </DataGridNoDataWrapper>
  );
};
