import { type ReactNode, type SyntheticEvent } from 'react';

import { Button } from '../Button';
import { Popover, type PopoverProps } from '../Popover';

import { DEFAULT_ANCHOR_ORIGIN, DEFAULT_TRANSFORM_ORIGIN } from './constants';
import { useLogic } from './useLogic';
import { Actions, StyledTypography, Wrapper } from './styles';

export type ActionComponentParams = {
  onClick: (event: SyntheticEvent) => void;
};

export type ConfirmActionProps = {
  /**
   * Поясняющий текст
   */
  text?: string;

  /**
   * Параметры кнопки подтверждения действия
   */
  confirmButtonProps?: {
    /**
     * Текст кнопки
     */
    text?: string;

    /**
     * Если `true`, кнопка будет иметь акцент на критичность действия. Стоит использовать для важных действий, например при удалении.
     * @default 'false'
     */
    isAccented?: boolean;
  };

  /**
   * Параметры всплывающего окна
   */
  popoverProps?: Pick<PopoverProps, 'anchorOrigin' | 'transformOrigin'>;

  /**
   * Кнопка, действие которой необходимо подтвердить
   */
  actionComponent: (params: ActionComponentParams) => ReactNode;

  /**
   * Целевое действие, которое должно произойти после подтверждения
   */
  onConfirm: () => void;
};

export const ConfirmAction = (props: ConfirmActionProps) => {
  const {
    actionComponentProps,
    popoverProps,
    cancelButtonProps,
    confirmButtonProps,
  } = useLogic(props);

  const {
    text,
    confirmButtonProps: externalConfirmButtonProps,
    popoverProps: externalPopoverProps,
    actionComponent,
  } = props;
  const { text: confirmButtonText = 'Подтвердить' } =
    externalConfirmButtonProps || {};

  const {
    anchorOrigin = DEFAULT_ANCHOR_ORIGIN,
    transformOrigin = DEFAULT_TRANSFORM_ORIGIN,
  } = externalPopoverProps || {};

  return (
    <>
      {actionComponent(actionComponentProps)}

      <Popover
        anchorOrigin={anchorOrigin as PopoverProps['anchorOrigin']}
        transformOrigin={transformOrigin as PopoverProps['transformOrigin']}
        {...popoverProps}
      >
        <Wrapper>
          {text && <StyledTypography>{text}</StyledTypography>}

          <Actions>
            <Button variant="text" {...cancelButtonProps}>
              Отмена
            </Button>

            <Button {...confirmButtonProps}>{confirmButtonText}</Button>
          </Actions>
        </Wrapper>
      </Popover>
    </>
  );
};
