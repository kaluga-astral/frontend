import { CopyOutlineSm } from '@astral/icons';

import { styled } from '../../styles';

import { type ValueProps } from './Value';

export const Wrapper = styled.div<ValueProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.copyPosition === 'left' ? 'row-reverse' : 'row'};
  column-gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const StyledCopyIcon = styled(CopyOutlineSm)`
  font-size: ${({ theme }) => theme.spacing(4)};

  fill: ${(props) => props.color};
`;
