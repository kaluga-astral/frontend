import { useCollapse } from '../hooks';
import { type TreeItemProps } from '../types';

type UseLogicProps = Pick<TreeItemProps, 'id' | 'value' | 'onChange'>;

export const useLogic = ({ id, value, onChange }: UseLogicProps) => {
  const { isOpen, handleToggle } = useCollapse();

  const isSelected = Object.is(value, id);

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isOpen,
    isSelected,
    handleToggle,
    handleChange,
  };
};
