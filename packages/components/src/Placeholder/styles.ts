import { styled } from '../styles';
import { Typography } from '../Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ theme }) => theme.palette.background.paper};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr max-content;
  }
`;

export const InnerContainer = styled.div`
  max-width: 384px;
  margin: 0 auto;
`;

export const Image = styled.img`
  display: block;

  width: ${({ width }) => width || 'auto'};
  max-width: 100%;
  height: ${({ height }) => height || 'auto'};
  margin: auto auto ${({ theme }) => theme.spacing(4)};

  color: ${({ theme }) => theme.palette.grey[900]};

  object-fit: contain;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: auto auto ${({ theme }) => theme.spacing(8)};
  }
`;

export const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  text-align: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    font-size: ${({ theme }) => theme.typography.pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Description = styled(Typography)`
  display: block;

  text-align: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;

  color: ${({ theme }) => theme.palette.grey[900]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};

    margin-top: auto;
  }
`;
