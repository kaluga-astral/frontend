import { type SelectChangeEvent } from '@mui/material';

import { useLogic } from './hooks/useLogic';
import { TagsWrapper } from './styles';
import { SelectTag } from './SelectTag';

export type SelectTagsListProps = {
  selectedOptions: string[];
  getOptionLabel: (value: string | number) => string | number;

  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode,
  ) => void;
};

/**
 * Список тегов для селекта
 */
export const SelectTagsList = ({
  selectedOptions,
  getOptionLabel,
  onChange,
}: SelectTagsListProps) => {
  const { maxItems, tagsContainerRef, visibleOptions, getTagProps } = useLogic({
    selectedOptions,
    getOptionLabel,
    onChange,
  });

  return (
    <TagsWrapper ref={tagsContainerRef}>
      {visibleOptions.map((option, i) => {
        const tagProps = getTagProps(option, i);

        return <SelectTag key={option} {...tagProps} />;
      })}

      {maxItems < selectedOptions.length && (
        <SelectTag key="more" label={`+${selectedOptions.length - maxItems}`} />
      )}
    </TagsWrapper>
  );
};
