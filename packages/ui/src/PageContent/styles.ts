import { styled } from '../styles';

type PageContentWrapperProps = {
  isPaddingDisabled?: boolean;
  isSeparatorShown?: boolean;
};

export const PageContentWrapper = styled.article<PageContentWrapperProps>`
  grid-area: content;
  padding: ${({ isPaddingDisabled, theme }) =>
    isPaddingDisabled ? 0 : theme.spacing(0, 6)};
  overflow: auto;

  border-top: ${({ isSeparatorShown, theme }) =>
    isSeparatorShown ? `1px solid ${theme.palette.grey[300]}` : 'none'};
`;
