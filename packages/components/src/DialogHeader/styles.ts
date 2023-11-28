import { CSSProperties } from 'react';

import { styled } from '../styles';

type DialogHeaderRootProps = {
  /**
   * @description Если есть заголовок
   */
  hasTitle: boolean;
  /**
   * @description Если есть кнопка закрытия
   * */
  hasOnClose: boolean;
};

export const DialogHeaderRoot = styled('div', {
  label: 'DialogHeader-root',
  shouldForwardProp: (prop) => !['hasTitle', 'hasOnClose'].includes(prop),
})<DialogHeaderRootProps>`
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

  height: auto;
  padding: ${({ theme }) => theme.spacing(4, 6)};
`;

export type DialogHeaderContentProps = {
  justifyContent: CSSProperties['justifyContent'];
  columnSpacing: number;
};

export const DialogHeaderContent = styled('div', {
  shouldForwardProp: (prop) => !['justifyContent', 'spacing'].includes(prop),
  label: 'DialogHeader-content',
})<DialogHeaderContentProps>`
  overflow: hidden;
  display: flex;
  column-gap: ${({ columnSpacing, theme }) => theme.spacing(columnSpacing)};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};

  width: 100%;
  height: 100%;
  padding: 0;
`;
