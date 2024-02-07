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
  content: Omit<PageContentProps, 'isSeparatorShown'>;
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
  const isSeparatorShown = Boolean(aside);

  return (
    <PageLayoutContainer className={className}>
      <PageHeader {...header} />
      <PageContent isSeparatorShown={isSeparatorShown} {...content} />
      {aside && <PageAside {...aside} />}
    </PageLayoutContainer>
  );
};
