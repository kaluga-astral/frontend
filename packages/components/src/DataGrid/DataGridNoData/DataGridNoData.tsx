import { useContext } from 'react';

import { ConfigContext } from '../../ConfigProvider';

import {
  DataGridNoDataFigcaption,
  DataGridNoDataFigure,
  DataGridNoDataIcon,
  DataGridNoDataWrapper,
} from './styles';

export type DataGridNoDataProps = {
  /**
   * @default 'Нет данных'
   * @example <DataGridNoData title='Нет данных' />
   * @description Заголовок
   */
  title?: string;
  /**
   * @example <DataGridNoData noDataIcon="data:image/svg+xml;base64,PHN2..." />
   * @description Иконка
   */
  noDataIcon?: string;
  /**
   * @default 250
   * @example <DataGridNoData noDataIconWidth={250} />
   * @description Ширина иконки (высота рассчитывается пропорционально ширине)
   */
  noDataIconWidth?: number;
};

export const DataGridNoData = ({
  title = 'Нет данных',
  noDataIcon,
  noDataIconWidth = 250,
}: DataGridNoDataProps) => {
  const { noDataImgSrc } = useContext(ConfigContext).imagesMap;

  return (
    <DataGridNoDataWrapper>
      <DataGridNoDataFigure>
        {noDataImgSrc && (
          <DataGridNoDataIcon
            src={noDataIcon || noDataImgSrc}
            width={noDataIconWidth}
          />
        )}
        <DataGridNoDataFigcaption component="figcaption" variant="h4">
          {title}
        </DataGridNoDataFigcaption>
      </DataGridNoDataFigure>
    </DataGridNoDataWrapper>
  );
};
