// Типизация была скопирована из @emotion/styled для того, чтобы в styled всегда была тема кита + чтобы не приходилось глобально переопределять типы
import * as React from 'react';
import { PropsOf } from '@emotion/react';
import {
  CreateStyledComponent,
  FilteringStyledOptions,
  StyledOptions,
} from '@emotion/styled/base';

import { Theme } from '../../theme';

/**
 * @desc
 * This function accepts a React component or tag ('div', 'a' etc).
 *
 * @example styled(MyComponent)({ width: 100 })
 * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
 * @example styled('div')({ width: 100 })
 * @example styled('div')<Props>(props => ({ width: props.width })
 */
interface BaseCreateStyled {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    JSX.IntrinsicElements[Tag]
  >;
}

type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme;
      as?: React.ElementType;
    },
    JSX.IntrinsicElements[Tag]
  >;
};

export interface CreateStyled extends BaseCreateStyled, StyledTags {}
