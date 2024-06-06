import { Collapse } from '../Collapse';

import { type TreeItemProps } from './types';
import { ChevronIcon, CollapseButton, Item, ItemContent } from './styles';
import { useLogic } from './useLogic';

export { type TreeItemProps };

export const TreeItem = ({
  label,
  children,
  className,
  isRoot,
  isSelected,
  level = 0,
  component = 'div',
  onClick,
  ...props
}: TreeItemProps) => {
  const { isOpen, handleToggle } = useLogic();

  if (isRoot) {
    return (
      <Item {...props} $level={level} as={component} className={className}>
        <ItemContent $isSelected={isSelected} $level={level} onClick={onClick}>
          <CollapseButton variant="text" onClick={handleToggle}>
            <ChevronIcon $isActive={isOpen} />
          </CollapseButton>
          {label}
        </ItemContent>

        <Collapse in={isOpen}>{children}</Collapse>
      </Item>
    );
  }

  return (
    <Item {...props} $level={level} as={component} className={className}>
      <ItemContent $isSelected={isSelected} $level={level} onClick={onClick}>
        {label}
      </ItemContent>
    </Item>
  );
};
