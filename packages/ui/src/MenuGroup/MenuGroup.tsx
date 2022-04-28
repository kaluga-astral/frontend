import { MenuGroupProps } from './types';
import { StyledContentWrapper, StyledLabel } from './styled';

export const MenuGroup = (props: MenuGroupProps) => {
  const { children, label } = props;

  return (
    <>
      <StyledLabel variant="h7">{label}</StyledLabel>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </>
  );
};
