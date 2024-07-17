import { type ReactNode } from 'react';

import { TreeItem } from '../../Tree';
import { styled } from '../../styles';
import { FormControlLabel } from '../../FormControlLabel';
import { Checkbox } from '../../Checkbox';

export const StyledItemContent = styled(TreeItem)`
  & > div {
    padding-bottom: 0;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel, {
  shouldForwardProp: (prop) => !['$subtitle'].includes(prop),
})<{
  $subtitle?: ReactNode;
}>`
  align-items: ${({ $subtitle }) => ($subtitle ? 'flex-start' : 'center')};
`;

export const StyledCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => !['$subtitle'].includes(prop),
})<{
  $subtitle?: ReactNode;
}>`
  padding-top: ${({ $subtitle, theme }) =>
    $subtitle ? theme.spacing(1) : theme.spacing(2)};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
