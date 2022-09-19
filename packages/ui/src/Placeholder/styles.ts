import { styled } from '../styles';
import { Typography } from '../Typography';

export const PlaceholderRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const PlaceholderInnerContainer = styled.div`
  max-width: 384px;
`;

export const PlaceholderImage = styled.img`
  display: block;
  width: 100%;
  height: 162px;
  margin: auto auto ${({ theme }) => theme.spacing(8)};
`;

export const PlaceholderTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  text-align: center;
`;

export const PlaceholderDescription = styled(Typography)`
  display: block;

  text-align: center;
`;

export const PlaceholderActions = styled.footer`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing(5)};
`;
