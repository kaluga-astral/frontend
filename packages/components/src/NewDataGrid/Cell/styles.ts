import { styled } from '../../styles';
import { alignToJustifyContent } from '../utils';
import { ROW_HEIGHT } from '../constants';
import type { AlignVariant } from '../types';

type HeadCellProps = {
  $align?: AlignVariant;
  $isDisabled?: boolean;
};

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['$align', '$isDisabled'].includes(prop),
})<HeadCellProps>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => alignToJustifyContent($align)};

  height: ${ROW_HEIGHT}px;
  padding: ${({ theme }) => theme.spacing(1, 2)};

  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;
