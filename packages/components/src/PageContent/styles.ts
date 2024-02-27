import { styled } from '../styles';

type PageContentWrapperProps = {
  isPaddingDisabled?: boolean;
  isSeparatorShown?: boolean;
  isFullHeight?: boolean;
};

export const Wrapper = styled.article<PageContentWrapperProps>`
  scroll-behavior: smooth;

  overflow: auto;
  grid-area: content;

  padding: ${({ isPaddingDisabled, theme }) =>
    isPaddingDisabled ? 0 : theme.spacing(0, 6)};

  border-top: ${({ isSeparatorShown, theme }) =>
    isSeparatorShown ? `1px solid ${theme.palette.grey[300]}` : 'none'};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    overflow: unset;
    flex-grow: 1;

    height: ${({ isFullHeight }) => (isFullHeight ? 'auto' : '100%')};
    padding: ${({ isPaddingDisabled, theme }) =>
      isPaddingDisabled ? 0 : theme.spacing(0, 4)};

    border-top: none;
  }
`;
