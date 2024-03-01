import { styled } from '../styles';

export const Wrapper = styled.div<{ isHeaderActionsShown: boolean }>`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.spacing(4)};
  grid-template:
    'header header' auto
    'content aside' 1fr
    / 1fr min-content;

  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)};

  background-color: ${({ theme }) => theme.palette.common.white};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    scroll-behavior: smooth;

    overflow-y: auto;
    display: flex;
    flex-direction: column;

    margin-bottom: ${({ isHeaderActionsShown }) =>
      isHeaderActionsShown ? '80px' : '0'};
    padding-top: 0;
  }
`;
