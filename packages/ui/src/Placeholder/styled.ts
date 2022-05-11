import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledInnerContainer = styled.div`
  max-width: 384px;
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-height: 162px;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const StyledTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  text-align: center;
`;

export const StyledDescription = styled(Typography)`
  display: block;

  text-align: center;
`;

export const StyledActions = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(5)};

  > * {
    margin: ${({ theme }) => theme.spacing(1)};
  }
`;
