import { formHelperTextClasses } from '@mui/material';

import { Paper } from '../Paper';
import { TextArea } from '../TextArea';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { EmojiRating } from './EmojiRaiting';

export const StyledPaper = styled(Paper)`
  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 360px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;

  padding: 8px;
`;

export const Content = styled.div`
  display: grid;
  gap: 16px;

  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledTypography = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(0, 5)};
`;

export const StyledEmojiRating = styled(EmojiRating)`
  margin: 0 auto;
`;

export const StyledTextArea = styled(TextArea)`
  margin-top: 8px;

  .${formHelperTextClasses.root} {
    min-height: unset;
    margin: 0;
  }
`;

export const LastStep = styled.div<{ isShow: boolean }>`
  overflow: hidden;
  display: grid;
  gap: 24px;

  max-height: ${({ isShow }) => (isShow ? '200px' : '0px')};
  padding: ${({ theme }) => theme.spacing(0, 5)};

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};

  transition:
    max-height 300ms,
    opacity 300ms;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
`;
