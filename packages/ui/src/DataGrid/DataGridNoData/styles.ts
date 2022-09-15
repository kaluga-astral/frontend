import { Typography, TypographyProps } from '../../Typography';
import { styled } from '../../styles';

export const DataGridNoDataWrapper = styled.tr`
  position: sticky;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
`;

export const StyledDataGridNoData = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataGridNoDataIcon = styled.div`
  svg {
    width: 250px;
    height: auto;
  }
`;

export const DataGridNoDataTitle = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[600]};
`;
