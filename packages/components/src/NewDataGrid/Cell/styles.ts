import { styled } from '../../styles';
import { alignToJustifyContent } from '../utils';
import { MIN_ROW_HEIGHT } from '../constants';
import type { AlignVariant } from '../types';

type HeadCellProps = {
  $align?: AlignVariant;
  $isDisabled?: boolean;
  $hasStartAdornment?: boolean;
};

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    !['$align', '$isDisabled', '$hasStartAdornment'].includes(prop),
})<HeadCellProps>`
  /* При развертывании на стенде откуда-то добавляется overflow: hidden; */
  overflow: unset;
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => alignToJustifyContent($align)};

  min-height: ${MIN_ROW_HEIGHT}px;
  padding: ${({ theme, $hasStartAdornment }) =>
    $hasStartAdornment ? theme.spacing(1, 2, 1, 0) : theme.spacing(1, 2)};

  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;
