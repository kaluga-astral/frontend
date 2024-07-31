import { styled } from '../styles';

export const DataGridWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const DisabledDataGridWrapper = styled(DataGridWrapper)`
  pointer-events: none;

  background: ${({ theme }) => theme.palette.background.element};
  mix-blend-mode: luminosity;
`;

export const FooterRow = styled.footer`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  min-height: 68px;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({ theme }) => theme.palette.background.element};
`;
