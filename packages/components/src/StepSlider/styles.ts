import { styled } from '../styles/styled';

type SliderContainerProps = {
  isFullWidth?: boolean;
};

export const SliderContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isFullWidth',
})<SliderContainerProps>`
  overflow: hidden;
  display: grid;
  grid-template-areas: 'slide';

  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '')};
  height: 100%;
`;

export const SliderItem = styled.div`
  overflow: auto;
  grid-area: slide;

  height: 100%;
  max-height: 100%;
`;
