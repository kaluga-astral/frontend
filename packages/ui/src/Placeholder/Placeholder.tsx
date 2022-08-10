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
  description,
  Actions,
}: PlaceholderProps) => {
  return (
    <PlaceholderRoot>
      <PlaceholderInnerContainer>
        <PlaceholderImage src={imgSrc} alt={imgAlt} />
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
