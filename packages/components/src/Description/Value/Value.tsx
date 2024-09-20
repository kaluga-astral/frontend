import {
  type ReactNode,
  type SyntheticEvent,
  useContext,
  useState,
} from 'react';

import { type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { DescriptionContext } from '../DescriptionContext';
import { Tooltip } from '../../Tooltip';

import {
  StyledCopyIcon,
  StyledCopyTypography,
  StyledTypography,
  Wrapper,
} from './styles';
import { CopyStatus } from './enums';

export type ValueProps = Pick<
  TypographyProps,
  'color' | 'variant' | 'children'
> & {
  /**
   * @example <Description.Item stub="нет значения">value</Description.Item>
   * Заглушка, отображающаяся, если нет значения
   */
  stub?: ReactNode;

  /**
   * Добавляет возможность копирования
   */
  canCopy?: boolean;

  /**
   * Позиционирует иконку "копировать" (слева / справа от текста)
   */
  copyPosition?: 'left' | 'right';
  /**
   * Текст, который будет скопирован. Перекрывает обычное копирование если children является строкой
   */
  copyText?: string;
};

export const Value = ({
  canCopy,
  copyPosition = 'right',
  copyText,
  children,
  stub,
  ...props
}: ValueProps) => {
  const { leader, direction } = useContext(DescriptionContext);

  const [status, setStatus] = useState<CopyStatus>(CopyStatus.CanCopy);
  const { emptySymbol } = useContext(ConfigContext);

  const resultChildren = children || stub || emptySymbol;

  if (!canCopy) {
    return (
      <StyledTypography
        $direction={direction}
        component="dd"
        children={resultChildren}
        $leader={leader}
        {...props}
      />
    );
  }

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    event.stopPropagation();

    navigator.clipboard
      .writeText(children?.toString() || '')
      .then(() => setStatus(CopyStatus.Copied))
      .catch(() => setStatus(CopyStatus.Error));
  };

  const handleMouseLeave = () => {
    if (status !== CopyStatus.CanCopy) {
      // Ставим таймер чтобы тултип успел скрыться
      // В ином случае пользователь увидит изменение текста
      setTimeout(() => {
        setStatus(CopyStatus.CanCopy);
      }, 100);
    }
  };

  return (
    <Wrapper>
      <StyledCopyTypography
        copyPosition={copyPosition}
        copyText={copyText}
        $direction={direction}
        $leader={leader}
        component="p"
        {...props}
      >
        {resultChildren}
      </StyledCopyTypography>
    </Wrapper>

    // <Wrapper onMouseLeave={handleMouseLeave}>
    //   <Tooltip placement="bottom" title={status}>
    //     <StyledTypography
    //       $direction={direction}
    //       $canCopy={canCopy}
    //       $leader={leader}
    //       {...props}
    //       onClick={handleClick}
    //     >
    //       {copyPosition === 'left' && (
    //         <StyledCopyIcon
    //           $copyPosition={copyPosition}
    //           color={props.color as 'secondary'}
    //         />
    //       )}
    //
    //       {resultChildren}
    //
    //       {copyPosition === 'right' && (
    //         <StyledCopyIcon
    //           $copyPosition={copyPosition}
    //           color={props.color as 'secondary'}
    //         />
    //       )}
    //     </StyledTypography>
    //   </Tooltip>
    // </Wrapper>
  );
};
