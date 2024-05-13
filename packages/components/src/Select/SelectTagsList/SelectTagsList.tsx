import { type SelectChangeEvent } from '@mui/material';
import { type RefObject } from 'react';

import { useLogic } from './useLogic';
import { TagsWrapper } from './styles';
import { SelectTag } from './SelectTag';

export type SelectTagsListProps = {
  selectedOptions: string[];
  getOptionLabel: (value: string | number) => string | number;

  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode,
  ) => void;

  openMenu: () => void;

  resetButtonRef: RefObject<HTMLButtonElement>;
};

/**
 * Список тегов для селекта
 */
export const SelectTagsList = ({
  resetButtonRef,
  selectedOptions,
  getOptionLabel,
  onChange,
  openMenu,
}: SelectTagsListProps) => {
  const { maxItems, tagsContainerRef, visibleOptions, getTagProps } = useLogic({
    resetButtonRef,
    selectedOptions,
    getOptionLabel,
    onChange,
    openMenu,
  });

  return (
    <TagsWrapper ref={tagsContainerRef}>
      {visibleOptions.map((option, i) => {
        const tagProps = getTagProps(option, i);

        return <SelectTag key={option} {...tagProps} />;
      })}

      {maxItems < selectedOptions.length && (
        <SelectTag
          key="more"
          label={`+${selectedOptions.length - maxItems}`}
          onClick={openMenu}
        />
      )}
    </TagsWrapper>
  );
};
