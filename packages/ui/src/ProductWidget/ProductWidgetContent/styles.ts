import { Grid } from '../../Grid';
import { styled } from '../../styles';

export const ContentWrapper = styled(Grid)`
  width: 285px;
  min-height: 124px;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(4)};

  list-style-type: none;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};

    color: ${({ theme }) => theme.palette.error.dark};
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
