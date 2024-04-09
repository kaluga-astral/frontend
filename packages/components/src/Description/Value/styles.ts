import { CopyOutlineSm } from '@astral/icons';

import { styled } from '../../styles';

import { type ValueProps } from './Value';

export const CopyWrapper = styled.div<ValueProps>`
  cursor: pointer;

  display: flex;
  flex-direction: ${(props) =>
    props.copyPosition === 'left' ? 'row-reverse' : 'row'};
  column-gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;

  &:hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const StyledCopyIcon = styled(CopyOutlineSm)`
  font-size: ${({ theme }) => theme.spacing(4)};

  fill: ${(props) => props.color};
`;
