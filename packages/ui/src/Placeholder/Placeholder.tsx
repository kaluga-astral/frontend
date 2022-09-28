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
  imgSrc: string;
  /**
   * Описание изображения
   */
  imgAlt: string;
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
  title: string;
  /**
   * Описание
   */
  description?: string | ReactNode;
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
        <PlaceholderImage
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
        />
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
