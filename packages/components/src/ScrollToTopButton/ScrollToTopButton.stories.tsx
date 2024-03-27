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
  title: 'Components/ScrollToTopButton',
  component: ScrollToTopButton,
};

export default meta;

// Задаем размеры листа
const StyledWrapper = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
`;

// Задаем скролл
const InnerWrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ListItem = styled.div<{ $background: string }>((props) => ({
  background: props.$background,
  height: '250px',
  width: '100%',
}));

type DivListProps = { children: ReactNode };

const DivList = forwardRef<HTMLDivElement, DivListProps>((props, ref) => {
  return (
    <StyledWrapper>
      <InnerWrapper ref={ref}>
        <ListItem $background="red" />
        <ListItem $background="blue" />
        <ListItem $background="green" />
        <ListItem $background="orange" />
      </InnerWrapper>

      {props.children}
    </StyledWrapper>
  );
});

export const Example = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const onScrollClick = () => {
    listRef.current?.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <DivList ref={listRef}>
      <ScrollToTopButton onClick={onScrollClick} />
    </DivList>
  );
};
