import { styled } from '../styles';
import { Typography } from '../Typography';

import { Size } from './enums';
import { MAX_INNER_WIDTH } from './constants';

type WithSize = {
  $size: Size;
};

export const Wrapper = styled.div<WithSize>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $size }) =>
    $size === Size.Small ? theme.spacing(4) : theme.spacing(6)};
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
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const InnerContainer = styled.div<WithSize>`
  max-width: ${({ $size }) => MAX_INNER_WIDTH[$size]};
  margin: 0 auto;
`;

export const Image = styled.img<WithSize>`
  display: block;

  width: ${({ width }) => width || 'auto'};
  max-width: 100%;
  height: ${({ height }) => height || 'auto'};
  margin: auto auto
    ${({ theme, $size }) =>
      $size === Size.Small ? theme.spacing(4) : theme.spacing(6)};

  color: ${({ theme }) => theme.palette.grey[900]};

  object-fit: contain;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: auto auto ${({ theme }) => theme.spacing(8)};
  }
`;

export const Title = styled(Typography)<WithSize>`
  margin-bottom: ${({ theme, $size }) =>
    $size === Size.Medium ? theme.spacing(2) : theme.spacing(4)};

  text-align: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    font-size: ${({ theme }) => theme.typography.pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Description = styled(Typography)<WithSize>`
  display: block;

  font-size: ${({ $size, theme }) =>
    $size === Size.Large
      ? theme.typography.pxToRem(16)
      : theme.typography.body1.fontSize};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
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
