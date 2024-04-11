import { type ReactNode } from 'react';

import {
  Description,
  Footer,
  Image,
  InnerContainer,
  Title,
  Wrapper,
} from './styles';

type PlaceholderSize = 'sm' | 'md' | 'lg';

export type PlaceholderProps = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Ссылка на изображение
   */
  imgSrc?: string;

  /**
   * Описание изображения (атрибут alt)
   */
  imgAlt?: string;

  /**
   * @deprecated
   * ширина изображения
   */
  imgWidth?: string;

  /**
   * @deprecated
   * высота изображения
   */
  imgHeight?: string;

  /**
   * Заголовок
   */
  title: JSX.Element | JSX.Element[] | string;

  /**
   * Описание
   */
  description?: JSX.Element | JSX.Element[] | string;

  /**
   * Действия
   */
  Actions?: ReactNode;

  /**
   * Задает общий размер компонента (sm, md, lg)
   */
  size?: PlaceholderSize;
};

export const Placeholder = ({
  className,
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  description,
  Actions,
  size = 'md',
}: PlaceholderProps) => {
  // Для совместимости с текущим кодом учитывается imgWidth & imgHeight
  const getImgWidth = () => {
    if (imgWidth) {
      return imgWidth;
    }

    switch (size) {
      case 'sm':
        return '239px';
      case 'md':
        return '323px';
      default:
        return '458px';
    }
  };

  const getImgHeight = () => {
    if (imgHeight) {
      return imgHeight;
    }

    switch (size) {
      case 'sm':
        return '119px';

      case 'md':
        return '161px';

      default:
        return '229px';
    }
  };

  const getTitleVariant = (): 'h3' | 'h4' | 'h5' => {
    switch (size) {
      case 'sm':
        return 'h5';
      case 'md':
        return 'h4';
      default:
        return 'h3';
    }
  };

  return (
    <Wrapper $size={size} className={className}>
      <InnerContainer $size={size}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={getImgWidth()}
            height={getImgHeight()}
            $size={size}
          />
        )}

        <Title $size={size} variant={getTitleVariant()}>
          {title}
        </Title>

        {description && (
          <Description $size={size} variant="ui">
            {description}
          </Description>
        )}
      </InnerContainer>

      {Actions && <Footer>{Actions}</Footer>}
    </Wrapper>
  );
};
