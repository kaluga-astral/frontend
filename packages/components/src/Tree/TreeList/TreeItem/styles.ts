import { Typography } from '../../../Typography';
import { styled } from '../../../styles';
import { OverflowTypography } from '../../../OverflowTypography';

export const Label = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

export const SubTitle = styled(OverflowTypography)`
  margin-left: ${({ theme }) => theme.spacing(1)};

  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
