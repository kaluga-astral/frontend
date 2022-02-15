import { styled } from '../styles';

export const StyledHeader = styled('header')`
  box-shadow: ${({ theme }) => theme.elevation[200]};
  padding: 0 ${({ theme }) => theme.spacing(5)};
  min-height: 56px;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const styles = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const InnerContainer = styled('div')`
  ${styles}
`;

export const LeftPartContainer = styled('div')<{ withWidget: boolean }>`
  ${styles}
  .logo {
    line-height: normal;
    margin-left: ${({ withWidget, theme }) => withWidget && theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(4)};
    max-height: 24px;
    height: 100%;
    cursor: pointer;
  }
  img.logo:not([src]) {
    display: none;
  }
`;
