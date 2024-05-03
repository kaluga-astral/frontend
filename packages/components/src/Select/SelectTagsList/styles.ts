import { styled } from '../../styles';

export const TagsWrapper = styled.div`
  overflow: hidden;
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(1)};

  margin-bottom: -${({ theme }) => theme.spacing(1)};
`;
