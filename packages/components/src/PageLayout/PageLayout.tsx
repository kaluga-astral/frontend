import { type ElementType } from 'react';

import { PageAside, type PageAsideProps } from '../PageAside';
import { PageContent, type PageContentProps } from '../PageContent';
import { PageHeader, type PageHeaderProps } from '../PageHeader';
import { PageLayoutContainer } from '../PageLayoutContainer';

export type PageLayoutProps<
  TMainActionComponent extends ElementType = ElementType,
  TSecondaryActionComponent extends ElementType = ElementType,
  TBackButtonComponent extends ElementType = ElementType,
> = {
  /**
   * Конфигурация PageHeader
   * @example <PageLayout header={{
   *  title: 'Заголовок страницы',
   *  description: 'Описание страницы',
   * }} />
   */
  header: PageHeaderProps<
    TMainActionComponent,
    TSecondaryActionComponent,
    TBackButtonComponent
  >;
  /**
   * Конфигурация PageContent
   * @example <PageLayout content={{
   *  children: 'Контент страницы',
   *  isPaddingDisabled: false,
   * }} />
   */
  content: Omit<PageContentProps, 'isSeparatorShown' | 'isHeaderActionsShown'>;
  /**
   * Конфигурация PageAside
   * @example <PageLayout aside={{
   *  children: 'Боковая панель страницы',
   * }} />
   */
  aside?: PageAsideProps;
  className?: string;
};

export const PageLayout = <
  TMainActionComponent extends ElementType,
  TSecondaryActionComponent extends ElementType,
  TBackButtonComponent extends ElementType,
>(
  props: PageLayoutProps<
    TMainActionComponent,
    TSecondaryActionComponent,
    TBackButtonComponent
  >,
) => {
  const { header, content, aside, className } = props;
  const hasAside = Boolean(aside);
  const isHeaderActionsShown = Boolean(header.actions);

  return (
    <PageLayoutContainer
      isHeaderActionsShown={isHeaderActionsShown}
      className={className}
    >
      <PageHeader {...header} />
      <PageContent
        isSeparatorShown={hasAside}
        isFullHeight={hasAside}
        {...content}
      />
      {aside && <PageAside {...aside} />}
    </PageLayoutContainer>
  );
};
