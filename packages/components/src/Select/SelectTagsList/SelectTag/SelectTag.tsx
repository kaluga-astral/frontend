import { type MouseEvent } from 'react';

import { type TagProps } from '../../../Tag';

import { StyledTag } from './styles';
import { useLogic } from './useLogic';

type SelectTagProps = {
  /**
   * Текст тега
   */
  label: TagProps['label'];

  /**
   * Может ли текст сузиться путем обрезания части символов
   */
  shrinks?: boolean;

  /**
   * Хендлер удаления тега
   */
  onDelete?: () => void;

  /**
   * Хендлер клика по тегу
   */
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

/**
 * Тег что отображается в инпуте Select'а
 */
export const SelectTag = ({
  label,
  shrinks,
  onDelete,
  onClick,
}: SelectTagProps) => {
  const { onMouseDown } = useLogic();

  return (
    <StyledTag
      color="grey"
      label={label}
      $shrinks={shrinks}
      onDelete={onDelete}
      onClick={onClick}
      onMouseDown={onMouseDown}
    />
  );
};
