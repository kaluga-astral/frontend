import { type ReactNode, useId } from 'react';

import { type RadioProps } from '../Radio';

import { Label, StyledRadio, Wrapper } from './styles';

export type RadioCardProps = Omit<
  RadioProps,
  'icon' | 'required' | 'LinkComponent' | 'edge'
> & {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Пропс для передачи контента в заголовок карточки
   */
  header: ReactNode;

  children?: ReactNode;
};

export const RadioCard = ({
  id,
  disabled,
  className,
  header,
  children,
  ...props
}: RadioCardProps) => {
  const customId = useId();
  const inputId = id || customId;

  return (
    <Wrapper className={className}>
      <StyledRadio id={inputId} disabled={disabled} {...props} />
      <Label htmlFor={inputId}>
        <div>{header}</div>
        <div>{children}</div>
      </Label>
    </Wrapper>
  );
};
