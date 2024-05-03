import { styled } from '../../styles';
import { CLEAR_BUTTON_SIZE } from '../constants';

export const TagsWrapper = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(1)};

  margin-bottom: -${({ theme }) => theme.spacing(1)};
  padding-right: ${CLEAR_BUTTON_SIZE}px;
`;
