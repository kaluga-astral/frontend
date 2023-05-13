import { styled } from '../styles';

import { Paper } from './Paper';

export const PaperHeaderStyled = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

export const PaperExampleStory = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 202px;
  height: 96px;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

export const IndentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 8)};

  & > :nth-child(odd) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  & > :nth-child(even):not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export const PaperMenu = styled(Paper)`
  width: 200px;
  padding: ${({ theme }) => theme.spacing(1, 0)};
`;
