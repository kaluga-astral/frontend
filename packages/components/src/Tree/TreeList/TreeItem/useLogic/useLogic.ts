import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<
  TreeItemProps,
  | 'id'
  | 'value'
  | 'level'
  | 'isInitialExpanded'
  | 'expandedLevel'
  | 'disabledItems'
  | 'disableReasonItems'
  | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  disableReasonItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);
  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;
  const isDisabled = disabledItems?.includes(id);
  const disableReason =
    disableReasonItems && Object.fromEntries(disableReasonItems)[id];

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
