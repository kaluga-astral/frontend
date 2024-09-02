import { styled } from '../styles';

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== '$maxHeight',
})<{ $maxHeight?: number }>`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-height: ${({ $maxHeight }) =>
    $maxHeight ? `${$maxHeight}px` : 'initial'};
`;

export const DataGridWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const DisabledDataGridWrapper = styled(DataGridWrapper)`
  pointer-events: none;

  background: ${({ theme }) => theme.palette.background.element};
  mix-blend-mode: luminosity;
`;
