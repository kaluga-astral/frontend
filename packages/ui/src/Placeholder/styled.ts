import { styled } from '../styles';
import { Grid } from '../Grid';
import { Typography } from '../Typography';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const InnerContainer = styled.div`
  width: ${({ theme }) => theme.spacing(96)};
`;

export const StyledImage = styled.img`
  display: block;
  width: auto;
  height: ${({ theme }) => theme.spacing(40)};
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const StyledTitle = styled(Typography)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  text-align: center;
`;

export const StyledActions = styled(Grid)`
  grid-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: 1fr 1fr;
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
