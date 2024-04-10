import { type ReactNode, useMemo } from 'react';

import { Content, Label } from './styles';

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
      <Label component="li" variant="h7">
        {upperCasedLabel}
      </Label>
      <Content>
        <ul>{children}</ul>
      </Content>
    </>
  );
};
