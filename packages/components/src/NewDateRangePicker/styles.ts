import { formHelperTextClasses } from '@mui/material';

import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { styled } from '../styles';

export const StyledDatePickerInput = styled(DatePickerInput)`
  .${formHelperTextClasses.root} {
    display: none;
  }
`;

export const PickerSplitter = styled.div`
  margin: ${({ theme }) => theme.spacing(-4, 4)};

  border-left: ${({ theme }) => theme.spacing(1)} solid
    ${({ theme }) => theme.palette.grey[300]};
`;
