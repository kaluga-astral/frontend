import { useContext } from 'react';

import { ConfigContext, type ConfigContextProps } from '../../ConfigProvider';
import { Button } from '../../Button';
import { Placeholder, type PlaceholderSize } from '../../Placeholder';

export type NoDataProps = {
  /**
   * Заголовок
   * @default 'Нет\u00a0данных'
   * Добавлен неразрывный пробел `\u00a0`,
   * так как без изображения текст форматируется в 2 строки
   */
  title?: string;
  /**
   * альтернативный текст в случае, если изображение по какой-то причине не загрузилось
   * @default эквивалентно title
   */
  imgAlt?: string;
  /**
   * Ширина иллюстрации в px (высота рассчитывается пропорционально ширине)
   * @default '250'
   * @deprecated
   */
  noDataIconWidth?: number;
  /**
   * Текст и обработчик для кнопки действия
   */
  action?: {
    text: string;
    onClick: () => void;
  };
  /**
   * Задает общий размер компонента
   * @default 'small'
   */
  size?: PlaceholderSize;
};

export const NoData = ({
  title = 'Нет\u00a0данных',
  imgAlt = title,
  action,
  size = 'small',
}: NoDataProps) => {
  const {
    imagesMap: { noDataImgSrc },
  } = useContext<ConfigContextProps>(ConfigContext);

  return (
    <Placeholder
      title={title}
      imgSrc={noDataImgSrc}
      size={size}
      Actions={
        action ? (
          <Button onClick={action.onClick} aria-label={action.text}>
            {action.text}
          </Button>
        ) : undefined
      }
      imgAlt={imgAlt}
    />
  );
};
