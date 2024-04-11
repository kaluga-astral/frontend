import { type ReactNode } from 'react';

import {
  Description,
  Footer,
  Image,
  InnerContainer,
  Title,
  Wrapper,
} from './styles';
import { IMAGE_HEIGHT, IMAGE_WIDTH, TITLE_HEADER_LEVEL } from './constants';
import { Size } from './enums';

type PlaceholderSize = 'small' | 'medium' | 'large';

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
  description,
  Actions,
  size: externalSize = 'small',
  imgWidth,
  imgHeight,
}: PlaceholderProps) => {
  // Нужно чтобы не заставлять других разработчиков
  // писать size={'small' as PlaceholderProps[size]}
  const getSizeEnum = () => {
    switch (externalSize) {
      case 'small':
        return Size.Small;
      case 'medium':
        return Size.Medium;
      default:
        return Size.Large;
    }
  };

  const size = getSizeEnum();

  return (
    <Wrapper $size={size} className={className}>
      <InnerContainer $size={size}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth || IMAGE_WIDTH[size]}
            height={imgHeight || IMAGE_HEIGHT[size]}
            $size={size}
          />
        )}

        <Title $size={size} variant={TITLE_HEADER_LEVEL[size] as 'h5'}>
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
