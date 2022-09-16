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

export const DataGridNoDataFigcaption = styled.figcaption`
  color: ${({ theme }) => theme.palette.grey[600]};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;
