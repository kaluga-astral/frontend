import { type TreeItemProps } from '../../types';

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
