import { useMemo } from 'react';

import { MenuGroupProps } from './types';
import { StyledContentWrapper, StyledLabel } from './styled';

export const MenuGroup = (props: MenuGroupProps) => {
  const { children, label } = props;
  const upperCasedLabel = useMemo(() => label.toUpperCase(), [label]);

  return (
    <>
      <StyledLabel variant="h7">{upperCasedLabel}</StyledLabel>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </>
  );
};
