import { inputBaseClasses } from '@mui/material';
import { CloseFillSm } from '@astral/icons';

import { styled } from '../../styles';
import { IconButton } from '../../IconButton';
import { TagsList } from '../../TagsList';
import { TextField } from '../../TextField';

export const StyledTextField = styled(TextField)`
  width: 400px;

  .${inputBaseClasses.root} {
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
  }

  .${inputBaseClasses.input} {
    width: 0;
    height: 0;
    padding: 0;
  }
`;

export const StyledTagsList = styled(TagsList)`
  overflow: hidden;

  width: 100%;
` as typeof TagsList;

export const EndAdornmentWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
`;

export const StyledIconButton = styled(IconButton)`
  background-color: transparent;

  &:hover {
    background-color: transparent;

    svg {
      fill: ${({ theme }) => theme.palette.grey['700']};
    }
  }
`;

export const StyledCloseFillSm = styled(CloseFillSm)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.palette.grey['500']};
`;
