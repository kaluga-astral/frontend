import { styled } from '../styles';
import { Typography } from '../Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const InnerContainer = styled.div`
  max-width: 48%;
`;

export const StyledImage = styled.img`
  display: block;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const StyledTypography = styled(Typography)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  text-align: center;
`;

export const FooterLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
