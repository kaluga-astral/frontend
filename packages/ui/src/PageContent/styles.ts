import { styled } from '../styles';

type PageContentWrapperProps = {
  hasDefaultPadding?: boolean;
  isSeparatorShown?: boolean;
};

export const PageContentWrapper = styled.article<PageContentWrapperProps>`
  grid-area: content;
  padding: ${({ hasDefaultPadding, theme }) =>
    hasDefaultPadding ? theme.spacing(0, 6) : 0};
  overflow: auto;

  border-top: ${({ isSeparatorShown, theme }) =>
    isSeparatorShown ? `1px solid ${theme.palette.grey[300]}` : 'none'};
`;
