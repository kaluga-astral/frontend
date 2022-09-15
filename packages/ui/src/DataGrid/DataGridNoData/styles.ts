import { Typography, TypographyProps } from '../../Typography';
import { styled } from '../../styles';

export const DataGridNoDataWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledDataGridNoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataGridNoDataIcon = styled.img`
  width: 250px;
`;

export const DataGridNoDataTitle = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[600]};
`;
