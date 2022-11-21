import { ReactNode } from 'react';
import { ArrowLOutlineMd } from '@astral/icons';

import { BaseButtonProps } from '../ButtonBase';

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import {
  PageHeaderBackButton,
  PageHeaderBreadcrumbs,
  PageHeaderDescription,
  PageHeaderTitle,
  PageHeaderWrapper,
  PageSubHeader,
} from './styles';

export type PageHeaderProps = {
  /**
   * @example <PageHeader title="Заголовок страницы" />
   * Заголовок страницы
   */
  title: ReactNode;
  /**
   * @example <PageHeader description="Описание страницы" />
   * Описание страницы
   */
  description?: ReactNode;
  /**
   * @example <PageHeader subHeader={<TextField placeholder="Поиск на странице..." size="small" />} />
   * Набор компонент, отображаемый в нижней части блока
   */
  subHeader?: ReactNode;
  /**
   * @example <PageHeader breadCrumbs={
   *  [
   *    <Link>Первая ссылка</Link>,
   *    <Link>Вторая ссылка</Link>,
   *    <>Текст</>,
   *  ]
   * } />
   * Хлебные крошки
   */
  breadCrumbs?: ReactNode[];
  /**
   * @example <PageHeader actions={{
   *  main: [
   *    {
   *      text: 'Основное действие',
   *    },
   *  ],
   *  secondary: [
   *    {
   *      text: 'Вспомогательное действие',
   *    },
   *  ]
   * }} />
   * Набор кнопок, видимые кофигурируются через объект main, скрытые в меню - через secondary
   */
  actions?: ButtonGroupProps;
  /**
   * @example <PageHeader backButton={{
   *  onClick: () => {},
   * }} />
   * Кнопка назад
   */
  backButton?: Pick<BaseButtonProps, 'component' | 'onClick'>;
};

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description, subHeader, breadCrumbs, actions, backButton } =
    props;

  return (
    <PageHeaderWrapper>
      {breadCrumbs && (
        <PageHeaderBreadcrumbs>{breadCrumbs}</PageHeaderBreadcrumbs>
      )}
      {backButton && (
        <PageHeaderBackButton variant="light" {...backButton}>
          <ArrowLOutlineMd />
        </PageHeaderBackButton>
      )}
      <PageHeaderTitle variant="h3">{title}</PageHeaderTitle>
      {description && (
        <PageHeaderDescription>{description}</PageHeaderDescription>
      )}
      {actions && <ButtonGroup {...actions} />}
      {subHeader && <PageSubHeader>{subHeader}</PageSubHeader>}
    </PageHeaderWrapper>
  );
};
