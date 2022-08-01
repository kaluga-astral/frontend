import { styled } from '../styles';

export const DashboardLayoutRoot = styled.div`
  display: grid;
  grid-template: ${() => {
    return `\n
      [header-start]  "header header"     [header-end]
      [main-start]    "sidebar main" 1fr  [main-end] / auto 1fr
    `;
  }};
  height: 100vh;
`;
