import { PropsWithChildren, forwardRef } from 'react';

import { TypographyProps } from '../Typography';
import { Button } from '../Button';

import { CollapsibleTypographyWrapper, CollapsibleWrapper } from './styles';
import { useCollabsible } from './hooks';

export const TEXT_SHOW_BUTTON = 'Показать полностью';

export const TEXT_HIDE_BUTTON = 'Скрыть';

export type CollapsibleProps = {
  /**
   * @example <CollapsibleTypography rowsCount={2} />
   * @description опорная единица по которой определяется максимиально отображаемое колличество строк
   */
  rowsCount?: number;
  /**
   * @default 'Показать полностью'
   * @description Текст кнопки для показа сокрытого текста
   *
   */
  textShowButton?: string;
  /**
   * @default 'Скрыть'
   * @description текст кнопки скрытия контента
   *
   */
  textHideButton?: string;
};

export type CollapsibleTypographyProps = PropsWithChildren<
  CollapsibleProps & TypographyProps
>;

/**
 * Компонент даёт возможность скрывать часть текста по строкам, и показывать их при нажатии на кнопку
 */
export const CollapsibleTypography = forwardRef<
  HTMLElement,
  CollapsibleTypographyProps
>(
  (
    {
      children,
      rowsCount = 1,
      textShowButton = TEXT_SHOW_BUTTON,
      textHideButton = TEXT_HIDE_BUTTON,
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
      ...props,
      children,
      rowsCount,
      ref,
      isOpenCollapse,
      currentHeight,
    };

    return (
      <CollapsibleWrapper>
        <CollapsibleTypographyWrapper {...collapsibleProps} />
        {isCollapsable && (
          <Button variant="link" onClick={toggleCollapse}>
            {isOpenCollapse ? textHideButton : textShowButton}
          </Button>
        )}
      </CollapsibleWrapper>
    );
  },
);
