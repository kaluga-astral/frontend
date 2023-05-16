import { ReactNode } from 'react';
import { ArrowLOutlineMd } from '@astral/icons';

import { type ButtonProps } from '../Button';

import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';
import {
  PageHeaderBackButton,
  PageHeaderBreadcrumbs,
  PageHeaderDescription,
  PageHeaderTitle,
  PageHeaderWrapper,
  PageSubheader,
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
   * @example <PageHeader subheader={<TextField placeholder="Поиск на странице..." size="small" />} />
   * Набор компонент, отображаемый в нижней части блока
   */
  subheader?: ReactNode;
  /**
   * @example <PageHeader breadcrumbs={
   *  [
   *    <Link>Первая ссылка</Link>,
   *    <Link>Вторая ссылка</Link>,
   *    <>Текст</>,
   *  ]
   * } />
   * Хлебные крошки
   */
  breadcrumbs?: ReactNode[];
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
  backButton?: Omit<ButtonProps, 'children' | 'variant'>;
};

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description, subheader, breadcrumbs, actions, backButton } =
    props;

  return (
    <PageHeaderWrapper>
      {breadcrumbs && (
        <PageHeaderBreadcrumbs>{breadcrumbs}</PageHeaderBreadcrumbs>
      )}
      {backButton && (
        <PageHeaderBackButton {...backButton} variant="light">
          <ArrowLOutlineMd />
        </PageHeaderBackButton>
      )}
      <PageHeaderTitle variant="h3">{title}</PageHeaderTitle>
      {description && (
        <PageHeaderDescription>{description}</PageHeaderDescription>
      )}
      {actions && <ButtonGroup {...actions} />}
      {subheader && <PageSubheader>{subheader}</PageSubheader>}
    </PageHeaderWrapper>
  );
};
