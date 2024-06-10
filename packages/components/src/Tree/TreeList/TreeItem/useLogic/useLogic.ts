import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<TreeItemProps, 'id' | 'value' | 'onChange'>;

export const useLogic = ({ id, value, onChange }: UseLogicProps) => {
  const isSelected = Object.is(value, id);

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    handleChange,
  };
};
