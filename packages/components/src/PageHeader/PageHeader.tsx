import { type ReactNode } from 'react';
import { ArrowLOutlineMd } from '@astral/icons';

import { type ButtonProps } from '../Button';
import { useViewportType } from '../hooks/useViewportType';

import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';
import {
  Actions,
  BackButton,
  Description,
  MobileWrapper,
  PageSubheader,
  StyledBreadcrumbs,
  Title,
  Wrapper,
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
  const { isMobile } = useViewportType();

  return (
    <Wrapper>
      {breadcrumbs && <StyledBreadcrumbs>{breadcrumbs}</StyledBreadcrumbs>}

      <MobileWrapper>
        {backButton && (
          <BackButton {...backButton} variant="light">
            <ArrowLOutlineMd />
          </BackButton>
        )}
        <Title variant="h3" noWrap={isMobile}>
          {title}
        </Title>
      </MobileWrapper>

      {description && <Description>{description}</Description>}
      {actions && (
        <Actions>
          <ButtonGroup {...actions} />
        </Actions>
      )}
      {subheader && <PageSubheader>{subheader}</PageSubheader>}
    </Wrapper>
  );
};
