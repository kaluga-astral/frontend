import { ReactNode } from 'react';

import { PageContentWrapper } from './styles';

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
};

export const PageContent = (props: PageContentProps) => {
  const {
    children,
    isPaddingDisabled = true,
    isSeparatorShown = false,
  } = props;

  return (
    <PageContentWrapper
      isPaddingDisabled={isPaddingDisabled}
      isSeparatorShown={isSeparatorShown}
    >
      {children}
    </PageContentWrapper>
  );
};
