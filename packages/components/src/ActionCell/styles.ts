import { styled } from '../styles';
import { Tooltip } from '../Tooltip';

export const Wrapper = styled.div`
  z-index: 500;

  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  padding-right: ${({ theme }) => theme.spacing(4)};
`;

export const ActionTooltip = styled(Tooltip)`
  white-space: pre-line;
`;
