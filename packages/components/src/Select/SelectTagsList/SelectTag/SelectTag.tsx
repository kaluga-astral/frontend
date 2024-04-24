import { type MouseEvent } from 'react';

import { StyledTag } from './styles';

type SelectTagProps = {
  /**
   * Текст тега
   */
  label: string | number;

  /**
   * Может ли текст сузиться путем обрезания части символов
   */
  shrinks?: boolean;

  /**
   * Хендлер mouseDown для удаления тега
   */
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
};

/**
 * Тег что отображается в инпуте Select'а
 */
export const SelectTag = ({ label, shrinks, onMouseDown }: SelectTagProps) => {
  const handleDelete = onMouseDown ? () => {} : undefined;

  return (
    <StyledTag
      color="grey"
      label={label}
      $shrinks={shrinks}
      onDelete={handleDelete}
      onMouseDown={onMouseDown}
    />
  );
};
