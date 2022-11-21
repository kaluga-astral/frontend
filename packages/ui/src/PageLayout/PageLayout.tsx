import { PageAside, PageAsideProps } from '../PageAside';
import { PageContent, PageContentProps } from '../PageContent';
import { PageHeader, PageHeaderProps } from '../PageHeader';
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
};

export const PageLayout = (props: PageLayoutProps) => {
  const { header, content, aside } = props;
  const isSeparatorShown = Boolean(aside);

  return (
    <PageLayoutContainer>
      <PageHeader {...header} />
      <PageContent isSeparatorShown={isSeparatorShown} {...content} />
      {aside && <PageAside {...aside} />}
    </PageLayoutContainer>
  );
};
