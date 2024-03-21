import { PageAside, type PageAsideProps } from '../PageAside';
import { PageContent, type PageContentProps } from '../PageContent';
import { PageHeader, type PageHeaderProps } from '../PageHeader';
import { PageLayoutContainer } from '../PageLayoutContainer';

export type PageLayoutProps = {
  /**
   * @example <PageLayout header={{
   *  title: 'Заголовок страницы',
   *  description: 'Описание страницы',
   * }} />
   * Конфигурация PageHeader
   */
  header: PageHeaderProps;
  /**
   * @example <PageLayout content={{
   *  children: 'Контент страницы',
   *  isPaddingDisabled: false,
   * }} />
   * Конфигурация PageContent
   */
  content: Omit<PageContentProps, 'isSeparatorShown' | 'isHeaderActionsShown'>;
  /**
   * @example <PageLayout aside={{
   *  children: 'Боковая панель страницы',
   * }} />
   * Конфигурация PageAside
   */
  aside?: PageAsideProps;
  className?: string;
};

export const PageLayout = (props: PageLayoutProps) => {
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
