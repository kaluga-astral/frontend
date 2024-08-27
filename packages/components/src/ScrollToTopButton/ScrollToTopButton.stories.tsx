import { type Meta } from '@storybook/react';
import { type ReactNode, forwardRef, useRef } from 'react';

import { styled } from '../styles';

import { ScrollToTopButton } from './ScrollToTopButton';

/**
 * Универсальная кнопка прокрутки содержимого наверх, не содержит логику
 *
 * ### [Figma](https://www.figma.com/file/6iaVKvmw5B2yAccBuZrW0e/%D0%AD%D0%94%D0%9E-mobile?type=design&node-id=516-3685&mode=design&t=WfzvGCbR0KJdR6Qf-4)
 * ### [Guide]()
 */
const meta: Meta<typeof ScrollToTopButton> = {
  title: 'Components/Navigation/ScrollToTopButton',
  component: ScrollToTopButton,
};

export default meta;

// Задаем размеры листа
const StyledWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 250px;
`;

// Задаем скролл
const InnerWrapper = styled.div`
  overflow-y: auto;
  overscroll-behavior: none;

  max-height: 100%;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 250px;
  margin-bottom: 30px;

  font-size: ${({ theme }) => theme.typography.h2.fontSize};

  background: ${({ theme }) => theme.palette.grey[300]};
  border-radius: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const List = forwardRef<HTMLDivElement, { children: ReactNode }>(
  (props, ref) => {
    return (
      <StyledWrapper>
        <InnerWrapper ref={ref}>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
        </InnerWrapper>

        {props.children}
      </StyledWrapper>
    );
  },
);

export const Example = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const onScrollClick = () => {
    listRef.current?.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <List ref={listRef}>
      <ScrollToTopButton onClick={onScrollClick} />
    </List>
  );
};
