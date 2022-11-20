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
   * @example <PageContent hasDefaultPadding>Контент</PageContent>
   * @default false
   * Флаг, добавляющий стандартные отсупы (требуются не всегда)
   */
  hasDefaultPadding?: boolean;
};

export const PageContent = (props: PageContentProps) => {
  const {
    children,
    hasDefaultPadding = false,
    isSeparatorShown = false,
  } = props;

  return (
    <PageContentWrapper
      hasDefaultPadding={hasDefaultPadding}
      isSeparatorShown={isSeparatorShown}
    >
      {children}
    </PageContentWrapper>
  );
};
