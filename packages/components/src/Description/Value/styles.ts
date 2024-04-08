import { styled } from '../../styles';

import { type ValueProps } from './Value';

export const Wrapper = styled.div<ValueProps>`
  display: flex;
  flex-direction: ${(props) => {
    console.log(props.copyPosition);

    return props.copyPosition === 'left' ? 'row-reverse' : 'row';
  }};
  column-gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;
