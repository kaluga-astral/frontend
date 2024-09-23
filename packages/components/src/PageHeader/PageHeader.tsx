import { type ComponentProps, type ElementType, type ReactNode } from 'react';
import { ArrowLOutlineMd } from '@astral/icons';

import { type ButtonProps } from '../Button';
import { useViewportType } from '../hooks/useViewportType';
import { type Theme } from '../theme';
import { OverflowTypography } from '../OverflowTypography';

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

export type PageHeaderProps<
  TMainActionComponent extends ElementType = ElementType,
  TSecondaryActionComponent extends ElementType = ElementType,
  TBackButtonComponent extends ElementType = ElementType,
> = {
  /**
   * Заголовок страницы
   * @example <PageHeader title="Заголовок страницы" />
   */
  title: ReactNode;
  /**
   * Описание страницы
   * @example <PageHeader description="Описание страницы" />
   */
  description?: ReactNode;
  /**
   * Набор компонент, отображаемый в нижней части блока
   * @example <PageHeader subheader={<TextField placeholder="Поиск на странице..." size="small" />} />
   */
  subheader?: ReactNode;
  /**
   * Хлебные крошки
   * @example <PageHeader breadcrumbs={
   *  [
   *    <Link>Первая ссылка</Link>,
   *    <Link>Вторая ссылка</Link>,
   *    <>Текст</>,
   *  ]
   * } />
   */
  breadcrumbs?: ReactNode[];
  /**
   * Набор кнопок, видимые конфигурируются через объект main, скрытые в меню - через secondary
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
   */
  actions?: ButtonGroupProps<TMainActionComponent, TSecondaryActionComponent>;
  /**
   * Кнопка возврата на предыдущий экран
   * @example
   * <PageHeader
   *  backButton={{
   *    onClick: () => {},
   *  }}
   * />
   */
  backButton?: Omit<ButtonProps, 'children' | 'variant'> & {
    component?: TBackButtonComponent;
    theme?: Theme | undefined;
  } & ComponentProps<
      ElementType extends TBackButtonComponent ? 'button' : TBackButtonComponent
    >;
};

export const PageHeader = <
  TMainActionComponent extends ElementType,
  TSecondaryActionComponent extends ElementType,
  TBackButtonComponent extends ElementType,
>(
  props: PageHeaderProps<
    TMainActionComponent,
    TSecondaryActionComponent,
    TBackButtonComponent
  >,
) => {
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
        {typeof title === 'string' ? (
          <Title component="h1" variant="h3" noWrap={isMobile}>
            <OverflowTypography component="div" variant="inherit">
              {title}
            </OverflowTypography>
          </Title>
        ) : (
          <Title
            component="div"
            role="heading"
            variant="h3"
            aria-level={1}
            noWrap={isMobile}
          >
            {title}
          </Title>
        )}
      </MobileWrapper>

      {description && typeof description !== 'string' ? (
        <Description component="div" role="heading" aria-level={4}>
          {description}
        </Description>
      ) : (
        <Description>{description}</Description>
      )}
      {actions && (
        <Actions>
          <ButtonGroup {...actions} />
        </Actions>
      )}
      {subheader && <PageSubheader>{subheader}</PageSubheader>}
    </Wrapper>
  );
};
