import { ReactNode, useMemo } from 'react';

import { StyledContentWrapper, StyledLabel } from './styles';

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
      <StyledLabel component="li" variant="h7">
        {upperCasedLabel}
      </StyledLabel>
      <StyledContentWrapper>
        <ul>{children}</ul>
      </StyledContentWrapper>
    </>
  );
};
