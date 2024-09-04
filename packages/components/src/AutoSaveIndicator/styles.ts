import { styled } from '../styles';
import { Typography } from '../Typography';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const PopoverContent = styled.div`
  display: flex;
  align-items: center;

  margin: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
