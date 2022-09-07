import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { styled } from '../styles';
import { Theme } from '../theme';

const getBgColor = (theme: Theme) =>
  theme.palette.mode === 'light'
    ? theme.palette.grey['900']
    : theme.palette.grey['300'];

const isDisplayed = (children: ReactNode) => (children ? 'none' : 'block');

export const StyledDrawerHeader = styled(Box)<{ drawerBleeding: number }>(
  ({ theme, drawerBleeding }) => ({
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.background.default
        : theme.palette.grey['800'],
    position: 'absolute',
    top: -drawerBleeding,
    height: drawerBleeding,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    visibility: 'visible',
    right: 0,
    left: 0,
    padding: '24px 24px 12px',
    boxShadow: '0 -1px 16px rgb(7 45 87 / 15%)',
  }),
);

export const StyledPuller = styled(Box)`
  position: absolute;
  top: 0;
  left: calc(50% - 15px);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    fill: ${(props) => getBgColor(props.theme)};
  }

  &::after {
    display: ${(props) => isDisplayed(props.children)};
    width: 14px;
    height: 2px;

    background-color: ${(props) => getBgColor(props.theme)};
    border-radius: 2px;

    content: '';
  }
`;

export const StyleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['700'],
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

export const StyledDrawerBody = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey['800'],
  height: '100%',
  overflow: 'auto',
  zIndex: 1,
}));
