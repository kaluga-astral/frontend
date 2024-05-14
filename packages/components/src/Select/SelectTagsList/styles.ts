import { styled } from '../../styles';

export const TagsWrapper = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(1)};

  margin-bottom: -${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(8)};
`;
