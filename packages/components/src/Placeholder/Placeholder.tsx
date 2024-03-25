import { type ReactNode } from 'react';

import {
  Description,
  Footer,
  Image,
  InnerContainer,
  Title,
  Wrapper,
} from './styles';

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
   * ширина изображения
   */
  imgWidth?: string;

  /**
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
}: PlaceholderProps) => {
  return (
    <Wrapper className={className}>
      <InnerContainer>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        )}

        <Title variant="h5">{title}</Title>
        {description && <Description variant="ui">{description}</Description>}
      </InnerContainer>

      {Actions && <Footer>{Actions}</Footer>}
    </Wrapper>
  );
};
