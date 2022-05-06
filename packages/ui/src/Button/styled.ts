import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';

export const StyledLoadingButton = styled(LoadingButton)`
  .MuiButton-startIcon {
    margin-right: 4px;

    & > .MuiSvgIcon-root {
      font-size: 1.7143rem;
    }
  }
`;
