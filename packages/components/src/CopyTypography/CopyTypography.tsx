import { type TypographyProps } from '../Typography';
import { Tooltip } from '../Tooltip';

import { StyledCopyIcon, Wrapper } from './styles';
import { useLogic } from './useLogic';

export type CopyTypographyProps = TypographyProps & {
  copyText?: string;
  copyPosition?: 'right' | 'left';
};

export const CopyTypography = (props: CopyTypographyProps) => {
  const {
    children,
    copyPosition = 'right',
    copyText,
    color,
    ...restProps
  } = props;

  const { handleMouseLeave, status, handleClick } = useLogic(props);

  return (
    <Tooltip title={status} disableInteractive placement="bottom">
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
