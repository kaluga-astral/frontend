import { type MouseEvent } from 'react';

import { type TagProps as BaseTagProps } from '../../Tag';

import { useLogic } from './useLogic';
import { StyledTag } from './styles';

export type TagProps = {
  /**
   * Текст тега
   */
  label: BaseTagProps['label'];

  /**
   * Если `true`, то тег будет недоступен для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Если `true`, то текст может сокращаться путем обрезания части символов
   */
  shrinks?: boolean;

  /**
   * Хендлер удаления тега
   */
  onDelete?: () => void;

  /**
   * Хендлер клика по тегу
   */
  onClick: (value: MouseEvent<HTMLDivElement>) => void;
};

export const Tag = (props: TagProps) => {
  const { onMouseDown } = useLogic();

  const { shrinks, isDisabled } = props;

  return (
    <StyledTag
      $shrinks={shrinks}
      color="grey"
      disabled={isDisabled}
      {...props}
      onMouseDown={onMouseDown}
    />
  );
};
