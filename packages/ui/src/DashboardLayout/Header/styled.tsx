import { styled } from '../../styles';

export const StyledHeader = styled('header')`
  grid-column: 1 / -1;
  min-height: 56px;
  height: 56px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  box-shadow: ${({ theme }) => theme.elevation[200]};
  padding: 0 ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const InnerContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const LeftContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const LogoContainer = styled('div')<{ withWidget: boolean }>`
  margin-left: ${({ withWidget, theme }) => withWidget && theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(4)};
  max-height: 24px;
  height: 100%;
  > * {
    height: 100%;
  }
`;

export const LogoStyle = styled('img')`
  height: 100%;
  cursor: pointer;
`;
