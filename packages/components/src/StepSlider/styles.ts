import { styled } from '../styles/styled';

type SliderContainerProps = {
  isFullWidth?: boolean;
};

export const SliderContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isFullWidth',
})<SliderContainerProps>`
  display: grid;
  grid-template-areas: 'slide';
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '')};
  height: 100%;
  overflow: hidden;
`;

export const SliderItem = styled.div`
  grid-area: slide;
  height: 100%;
  max-height: 100%;
  overflow: auto;
`;
