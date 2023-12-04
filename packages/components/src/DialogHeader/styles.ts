import { styled } from '../styles';

type DialogHeaderRootProps = {
  hasTitle: boolean;
  hasOnClose: boolean;
};

export const DialogHeaderRoot = styled('div', {
  label: 'DialogHeader-root',
})<DialogHeaderRootProps>`
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ hasTitle, hasOnClose }) => {
    if (hasTitle && hasOnClose) {
      return 'max-content 1fr 32px';
    }

    if (hasTitle) {
      return 'max-content 1fr';
    }

    if (hasOnClose) {
      return '1fr 32px';
    }

    return '1fr';
  }};
  column-gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  padding: ${({ theme }) => theme.spacing(4, 6)};
`;
