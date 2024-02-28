import { Link } from '@mui/material';

import { styled } from '../styles';

const DEFAULT = '#1874FF';
const HOVER = '#268FF9';
const ACTIVE = '#072D57';
const VISITED = '#762376';
const OUTLINE = '#70AEFF';

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})`
  font-size: 14px;
  color: ${DEFAULT};
  text-decoration: none;

  &:active {
    color: ${ACTIVE};
  }

  &:visited {
    color: ${VISITED};
  }

  &:hover {
    color: ${HOVER};
    text-decoration: underline;
  }

  &:focus {
    border-radius: 4px;
    outline: 2px solid ${OUTLINE};
  }

  .MuiSvgIcon-root {
    width: 16px;
    height: 16px;
  }
`;
