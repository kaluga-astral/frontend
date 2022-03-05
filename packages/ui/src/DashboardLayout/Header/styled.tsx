import { styled } from '../../styles';

export const StyledHeader = styled('header')`
  z-index: ${({ theme }) => theme.zIndex.appBar};

  grid-column: 1 / -1;
  width: 100%;
  height: 56px;
  min-height: 56px;
  padding: 0 ${({ theme }) => theme.spacing(5)};

  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.elevation[200]};
`;

export const InnerContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const LeftContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const LogoContainer = styled('div')<{ withWidget: boolean }>`
  height: 100%;
  max-height: 24px;
  margin-right: ${({ theme }) => theme.spacing(4)};
  margin-left: ${({ withWidget, theme }) => withWidget && theme.spacing(2)};

  > * {
    height: 100%;
  }
`;

export const LogoStyle = styled('img')`
  height: 100%;

  cursor: pointer;
`;
