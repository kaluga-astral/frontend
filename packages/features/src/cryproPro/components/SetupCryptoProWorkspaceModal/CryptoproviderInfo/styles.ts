import { styled } from '@astral/ui';

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.spacing(1)};

  vertical-align: middle;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;
