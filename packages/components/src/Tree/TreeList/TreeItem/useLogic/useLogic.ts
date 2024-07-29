import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<
  TreeItemProps,
  | 'id'
  | 'value'
  | 'level'
  | 'isInitialExpanded'
  | 'expandedLevel'
  | 'disabledItems'
  | 'onChange'
>;

type DisableItem = { id: number; disableReason?: string };

export const useLogic = ({
  id,
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);
  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const formatDisabledItems: Array<DisableItem> =
    disabledItems?.map((item) => {
      if (typeof item === 'string') {
        return { id: parseInt(item) };
      } else {
        return item;
      }
    }) || [];

  const findItem = formatDisabledItems.find((item) => item.id === parseInt(id));
  const isDisabled = !!findItem;
  const disableReason = findItem?.disableReason;

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    handleChange,
  };
};
