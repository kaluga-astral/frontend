import { type CSSProperties } from 'react';

import { styled } from '../styles';

type DialogHeaderRootProps = {
  /**
   * Если есть заголовок
   */
  hasTitle: boolean;
  /**
   * Если есть кнопка закрытия
   * */
  hasOnClose: boolean;
};

export const Wrapper = styled('div', {
  label: 'DialogHeader-root',
  shouldForwardProp: (prop) => !['hasTitle', 'hasOnClose'].includes(prop),
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

  height: auto;
  padding: ${({ theme }) => theme.spacing(4, 6)};
`;

export type DialogHeaderContentProps = {
  justifyContent: CSSProperties['justifyContent'];
  columnSpacing: number;
};

export const HeaderContent = styled('div', {
  shouldForwardProp: (prop) =>
    !['justifyContent', 'columnSpacing'].includes(prop),
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
