import { type ReactNode } from 'react';

import { Wrapper } from './styles';

export type PageLayoutContainerProps = {
  children: ReactNode;

  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /*
   * Флаг, сообщающий о наличии actions в хедере (требуется для адаптива под мобильные устройства)
   */
  isHeaderActionsShown: boolean;
};

export const PageLayoutContainer = ({
  isHeaderActionsShown,
  children,
  className,
}: PageLayoutContainerProps) => (
  <Wrapper className={className} isHeaderActionsShown={isHeaderActionsShown}>
    {children}
  </Wrapper>
);
