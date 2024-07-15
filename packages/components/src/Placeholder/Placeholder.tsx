import { type ReactNode } from 'react';

import {
  Description,
  Footer,
  Image,
  InnerContainer,
  Title,
  Wrapper,
} from './styles';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  type SIZE,
  TITLE_HEADER_LEVEL,
} from './constants';

export type PlaceholderSize = (typeof SIZE)[keyof typeof SIZE];

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
   * Задает общий размер компонента
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
  size = 'small',
  imgWidth,
}: PlaceholderProps) => {
  return (
    <Wrapper $size={size} className={className}>
      <InnerContainer $size={size}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth || IMAGE_WIDTH[size]}
            height={IMAGE_HEIGHT[size]}
            $size={size}
          />
        )}

        <Title $size={size} variant={TITLE_HEADER_LEVEL[size]}>
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
