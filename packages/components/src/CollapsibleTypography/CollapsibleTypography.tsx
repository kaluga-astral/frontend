import { PropsWithChildren, forwardRef } from 'react';

import { TypographyProps } from '../Typography';
import { Button } from '../Button';

import { CollapsibleTypographyWrapper, CollapsibleWrapper } from './styles';
import { useCollabsible } from './hooks';

export const DEFAULT_ROWS_COUNT = 1;

export const SHOW_BUTTON_TEXT = 'Показать полностью';

export const HIDE_BUTTON_TEXT = 'Скрыть';

export type CollapsibleProps = {
  /**
   * Maximum displayed number of lines
   * @example <CollapsibleTypography rowsCount={2} />
   * @default 1
   * @description опорная единица по которой определяется максимиально отображаемое колличество строк
   */
  rowsCount?: number;
  /**
   * Show button text
   * @default 'Показать полностью'
   * @description Текст кнопки для показа сокрытого текста
   *
   */
  showButtonText?: string;
  /**
   * Hide button text
   * @default 'Скрыть'
   * @description текст кнопки скрытия контента
   *
   */
  hideButtonText?: string;
};

export type CollapsibleElementProps = CollapsibleProps & TypographyProps;

export type CollapsibleTypographyProps =
  PropsWithChildren<CollapsibleElementProps>;

/**
 * За основу взята логика компонента OverflowTypography.
 * Пропс rowsCount определяет максимиально отображаемое колличество строк
 */
export const CollapsibleTypography = forwardRef<
  HTMLElement,
  CollapsibleTypographyProps
>(
  (
    {
      children,
      rowsCount = DEFAULT_ROWS_COUNT,
      showButtonText = SHOW_BUTTON_TEXT,
      hideButtonText = HIDE_BUTTON_TEXT,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      ref,
      isOpenCollapse,
      toggleCollapse,
      isCollapsable,
      currentHeight,
    } = useCollabsible(forwardedRef);

    const collapsibleProps = {
      children,
      rowsCount,
      ref,
      isOpenCollapse,
      currentHeight,
      ...props,
    };

    return (
      <CollapsibleWrapper>
        <CollapsibleTypographyWrapper {...collapsibleProps} />
        {isCollapsable && (
          <Button variant="link" onClick={toggleCollapse}>
            {isOpenCollapse ? hideButtonText : showButtonText}
          </Button>
        )}
      </CollapsibleWrapper>
    );
  },
);
