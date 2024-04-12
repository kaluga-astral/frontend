import { collapseClasses, formHelperTextClasses } from '@mui/material';

import { Collapse } from '../Collapse';
import { TextArea } from '../TextArea';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { EmojiRating } from './EmojiRaiting';

export const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.snackbar};
  right: 20px;
  bottom: 20px;

  width: 360px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;

  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledTypography = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(0, 5)};
`;

export const StyledEmojiRating = styled(EmojiRating)`
  margin: 0 auto;
`;

export const StyledTextArea = styled(TextArea)`
  margin-top: ${({ theme }) => theme.spacing(2)};

  .${formHelperTextClasses.root} {
    min-height: unset;
    margin: 0;
  }
`;

export const StyledCollapse = styled(Collapse)`
  .${collapseClasses.wrapperInner} {
    display: grid;
    gap: ${({ theme }) => theme.spacing(6)};

    padding: ${({ theme }) => theme.spacing(0, 5)};
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
`;
