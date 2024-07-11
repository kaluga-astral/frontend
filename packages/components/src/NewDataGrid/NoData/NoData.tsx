import { useContext } from 'react';

import { ConfigContext, type ConfigContextProps } from '../../ConfigProvider';

import { Figcaption, Figure, NoDataImg, Wrapper } from './styles';

export type NoDataProps = {
  /**
   * Заголовок
   * @default 'Нет\u00a0данных'
   * Добавлен неразрывный пробел `\u00a0`,
   * так как без изображения текст форматируется в 2 строки
   */
  title?: string;

  /**
   * Ширина иллюстрации в px (высота рассчитывается пропорционально ширине)
   * @default '250'
   */
  noDataIconWidth?: number;
};

export const NoData = ({
  title = 'Нет\u00a0данных',
  noDataIconWidth = 250,
}: NoDataProps) => {
  const {
    imagesMap: { noDataImgSrc },
  } = useContext<ConfigContextProps>(ConfigContext);

  return (
    <Wrapper>
      <Figure>
        {noDataImgSrc && (
          <NoDataImg src={noDataImgSrc} width={noDataIconWidth} />
        )}

        <Figcaption component="figcaption" variant="h4">
          {title}
        </Figcaption>
      </Figure>
    </Wrapper>
  );
};
