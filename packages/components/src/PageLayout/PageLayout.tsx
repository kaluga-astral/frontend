import type { PageAsideProps } from '../PageAside';
import { PageAside } from '../PageAside';
import type { PageContentProps } from '../PageContent';
import { PageContent } from '../PageContent';
import type { PageHeaderProps } from '../PageHeader';
import { PageHeader } from '../PageHeader';
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
