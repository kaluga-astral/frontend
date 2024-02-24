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
   * Флаг, добавляющий стандартные отсупы (требуются не всегда)
   */
  isPaddingDisabled?: boolean;
  /*
   * Флаг, сообщающий о наличии actions в хедере (требуется для адаптива под мобильные устройства)
   */
  isHeaderActionsShown: boolean;
};

export const PageContent = (props: PageContentProps) => {
  const {
    children,
    isPaddingDisabled = true,
    isSeparatorShown = false,
    isHeaderActionsShown,
  } = props;

  return (
    <Wrapper
      isPaddingDisabled={isPaddingDisabled}
      isSeparatorShown={isSeparatorShown}
      isHeaderActionsShown={isHeaderActionsShown}
    >
      {children}
    </Wrapper>
  );
};
