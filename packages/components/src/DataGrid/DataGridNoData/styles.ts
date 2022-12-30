import { Typography, TypographyProps } from '../../Typography';
import { styled } from '../../styles';

export const DataGridNoDataWrapper = styled.tr`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
`;

export const DataGridNoDataFigure = styled.figure`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataGridNoDataIcon = styled.div<{ noDataIconWidth: number }>`
  svg {
    width: ${({ noDataIconWidth }) => `${noDataIconWidth}px`};
    height: auto;
  }
`;

export const DataGridNoDataFigcaption = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[600]};
`;
