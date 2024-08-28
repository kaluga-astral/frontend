import { type ReactNode, useId } from 'react';

import { OverflowTypography } from '../OverflowTypography';
import { type TypographyColor } from '../Typography';

import {
  EmptyIcon,
  Inner,
  Item,
  RejectIcon,
  SuccessIcon,
  Wrapper,
} from './styles';

type ItemStatus = 'success' | 'reject' | 'default';

type BackgroundColor = 'grey' | 'primary';

export type ComplianceStatusItem = {
  /**
   * Текст для отображения в элементе списка
   */
  text: string;
  /**
   * Статус элемента
   */
  status: ItemStatus;
};

export type ComplianceStatusProps = {
  /**
   * Основной заголовок элемента
   */
  title?: string | null;
  /**
   * Пропс для добавления контента между заголовком и списком
   */
  subtitle?: ReactNode;
  /**
   * Пропс для добавления контента после списка
   */
  children?: ReactNode;
  /**
   * Элементы списка
   */
  itemsList: ComplianceStatusItem[];
  /**
   * Фоновый цвет
   * @default grey
   */
  backgroundColor?: BackgroundColor;
};

const TEXT_COLOR_BY_STATUS: Record<ItemStatus, TypographyColor> = {
  default: 'grey',
  reject: 'error',
  success: 'grey',
};

const ICON_BY_STATUS: Record<ItemStatus, JSX.Element> = {
  default: <EmptyIcon />,
  success: <SuccessIcon />,
  reject: <RejectIcon />,
};

export const ComplianceStatus = ({
  title,
  itemsList,
  children,
  subtitle,
  backgroundColor = 'grey',
}: ComplianceStatusProps) => {
  const id = useId();

  return (
    <Wrapper $background={backgroundColor}>
      {title && (
        <OverflowTypography variant="button" component="h4">
          {title}
        </OverflowTypography>
      )}
      {subtitle}
      <Inner>
        {itemsList.map(({ text, status }, index) => (
          <Item key={`${id}_${index}`}>
            {ICON_BY_STATUS[status]}
            <OverflowTypography
              color={TEXT_COLOR_BY_STATUS[status]}
              colorIntensity="900"
              rowsCount={2}
            >
              {text}
            </OverflowTypography>
          </Item>
        ))}
      </Inner>
      {children}
    </Wrapper>
  );
};
