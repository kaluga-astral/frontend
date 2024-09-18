import { type TypographyProps } from '../Typography';
import { Tooltip } from '../Tooltip';

import { StyledCopyIcon, Wrapper } from './styles';
import { useLogic } from './useLogic';

export type CopyTypographyProps = TypographyProps & {
  /**
   * Текст, который будет скопирован. Перекрывает обычное копирование если children является строкой
   */
  copyText?: string;
  /**
   * Отображает иконку слева или справа от текста
   * @default right
   */
  copyPosition?: 'right' | 'left';
  /**
   * Показывает в тултипе текст, который будет скопирован при нажатии
   */
  isShowCopyText?: boolean;
};

export const CopyTypography = (props: CopyTypographyProps) => {
  const {
    children,
    copyPosition = 'right',
    copyText,
    isShowCopyText,
    color,
    ...restProps
  } = props;

  const { handleMouseLeave, handleClick, tooltipTitle } = useLogic(props);

  return (
    <Tooltip title={tooltipTitle} disableInteractive placement="bottom">
      <Wrapper
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        $copyPosition={copyPosition}
        component="div"
        {...restProps}
      >
        {children}
        <StyledCopyIcon
          $copyPosition={copyPosition}
          color={color as 'secondary'}
        />
      </Wrapper>
    </Tooltip>
  );
};
