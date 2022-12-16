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
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin: auto auto ${({ theme }) => theme.spacing(6)};
  object-fit: contain;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    color: ${({ theme }) => theme.palette.grey[900]};
  }
`;

export const PlaceholderTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  color: ${({ theme }) => theme.palette.grey[700]};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    color: ${({ theme }) => theme.palette.grey[900]};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }
`;

export const PlaceholderDescription = styled(Typography)`
  display: block;

  color: ${({ theme }) => theme.palette.grey[700]};

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    color: ${({ theme }) => theme.palette.grey[900]};
  }
`;

export const PlaceholderActions = styled.footer`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(5)};

    color: ${({ theme }) => theme.palette.grey[900]};
  }
`;
