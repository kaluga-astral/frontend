import { type ReactNode } from 'react';

import { Wrapper } from './styles';

export type PageContentProps = {
  children: ReactNode;

  /**
   * @example <PageContent isSeparatorShown />
   * @default false
   * Флаг, отображающий границу шапки
   */
  isSeparatorShown?: boolean;

  /**
   * @example <PageContent isPaddingDisabled>Контент</PageContent>
   * @default true
   * Флаг, добавляющий стандартные отступы (требуются не всегда)
   */
  isPaddingDisabled?: boolean;

  /*
   * Флаг, растягивающий контейнер на 100% высоты (используется только для мобильных устройств)
   * Для десктопа высота контейнера всегда 100%
   */
  isFullHeight?: boolean;
};

export const PageContent = (props: PageContentProps) => {
  const {
    children,
    isPaddingDisabled = true,
    isSeparatorShown = false,
    isFullHeight,
  } = props;

  return (
    <Wrapper
      isPaddingDisabled={isPaddingDisabled}
      isSeparatorShown={isSeparatorShown}
      isFullHeight={isFullHeight}
    >
      {children}
    </Wrapper>
  );
};
