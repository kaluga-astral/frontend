import { PropsWithChildren, forwardRef } from 'react';

import { TypographyProps } from '../Typography';
import { Button } from '../Button';

import { CollapsibleTypographyWrapper, CollapsibleWrapper } from './styles';
import { useCollabsible } from './hooks';

export const DEFAULT_ROWS_COUNT = 1;

export type CollapsibleProps = {
  /**
   * @example <CollapsibleTypography rowsCount={2} />
   * @default 1
   * @description опорная единица по которой определяется максимиально отображаемое колличество строк
   */
  rowsCount?: number;
};

export type CollapsibleElementProps = CollapsibleProps & TypographyProps;

export type CollapsibleTypographyProps =
  PropsWithChildren<CollapsibleElementProps>;

export const CollapsibleTypography = forwardRef<
  HTMLElement,
  CollapsibleTypographyProps
>(({ children, rowsCount = DEFAULT_ROWS_COUNT, ...props }, forwardedRef) => {
  const {
    ref,
    isOpenCollapse,
    setIsOpenCollaps,
    isCollapsControll,
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
      {isCollapsControll && (
        <Button
          variant="link"
          onClick={() => setIsOpenCollaps(!isOpenCollapse)}
        >
          {isOpenCollapse ? 'Скрыть' : 'Показать полностью'}
        </Button>
      )}
    </CollapsibleWrapper>
  );
});
