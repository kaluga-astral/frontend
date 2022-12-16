import { ReactNode } from 'react';

import {
  PlaceholderActions,
  PlaceholderDescription,
  PlaceholderImage,
  PlaceholderInnerContainer,
  PlaceholderRoot,
  PlaceholderTitle,
} from './styles';

export type PlaceholderProps = {
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
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  description,
  Actions,
}: PlaceholderProps) => {
  return (
    <PlaceholderRoot>
      <PlaceholderInnerContainer>
        {imgSrc && (
          <PlaceholderImage
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        )}
        <PlaceholderTitle variant="h4">{title}</PlaceholderTitle>
        {description && (
          <PlaceholderDescription variant="ui">
            {description}
          </PlaceholderDescription>
        )}
      </PlaceholderInnerContainer>
      {Actions && <PlaceholderActions>{Actions}</PlaceholderActions>}
    </PlaceholderRoot>
  );
};
