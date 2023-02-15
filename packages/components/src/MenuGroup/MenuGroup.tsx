import { ReactNode, useMemo } from 'react';

import { MenuGroupContent, MenuGroupLabel } from './styles';

export type MenuGroupProps = {
  children: ReactNode;
  /**
   * Заголовок группы
   */
  label: string;
};

export const MenuGroup = (props: MenuGroupProps) => {
  const { children, label } = props;
  const upperCasedLabel = useMemo(() => label.toUpperCase(), [label]);

  return (
    <>
      <MenuGroupLabel component="li" variant="h7">
        {upperCasedLabel}
      </MenuGroupLabel>
      <MenuGroupContent>
        <ul>{children}</ul>
      </MenuGroupContent>
    </>
  );
};
