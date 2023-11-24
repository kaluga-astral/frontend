import { styled } from '../styles';

type DialogHeaderRootProps = {
  /**
   * @description Если есть заголовок
   * @type boolean
   * @default undefined
   */
  hasTitle: boolean;
  /**
   * @description Если есть кнопка закрытия
   * @type boolean
   * @default undefined
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
  /**
   * @description Горизонтальное выравнивание
   * @type 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
   * @default 'flex-start'
   * */
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * @description Расстояние между элементами
   * @type number
   * @default 2
   * */
  spacing?: number;
};

export const DialogHeaderContent = styled('div', {
  shouldForwardProp: (prop) => !['justifyContent', 'spacing'].includes(prop),
  label: 'DialogHeader-content',
})<DialogHeaderContentProps>`
  overflow: hidden;
  display: flex;
  column-gap: ${({ spacing = 2, theme }) => theme.spacing(spacing)};
  align-items: center;
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};

  width: 100%;
  height: 100%;
  padding: 0;
`;
