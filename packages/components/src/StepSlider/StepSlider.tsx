import { type ReactNode, useEffect, useRef, useState } from 'react';

import { useId } from '../hooks/useId';
import { Slide, type SlideProps } from '../Slide';

import { Item, Wrapper } from './styles';

type Direction = SlideProps['direction'];

const TO_LEFT: Direction = 'left';
const TO_RIGHT: Direction = 'right';

const DEFAULT_EASING: SlideProps['easing'] = {
  enter: 'ease-out',
  exit: 'ease-in',
};

type DefaultKey = string | number | symbol;

type Step<TKeys extends DefaultKey> = {
  id: TKeys;
  component: ReactNode;
};

type DirectionMap<TKeys extends DefaultKey> = Map<TKeys, Direction>;

const createDirectionMap = <TKeys extends DefaultKey>(
  current: TKeys,
  prev: TKeys,
  steps: Step<TKeys>[],
): DirectionMap<TKeys> => {
  const prevIndex = steps.findIndex(({ id }) => id === prev);
  const currentIndex = steps.findIndex(({ id }) => id === current);

  const commonDirection = prevIndex < currentIndex ? TO_RIGHT : TO_LEFT;

  const res: DirectionMap<TKeys> = new Map<TKeys, Direction>();

  steps.forEach(({ id }) => {
    if (current === id) {
      // если запрошенный id совпадает с текущим активным
      // выдаем для него обратное направление относительно нового активного шага
      // ибо специфика Slide компонента заставляет его анимироваться при закрытии,
      // туда же, откуда появился. Т.е. если direction=left, компонент появится слева,
      // и при закрытии будет уходить влево. Цель добиться, визуала как в слайдере
      res.set(id, commonDirection === TO_RIGHT ? TO_LEFT : TO_RIGHT);
    } else {
      res.set(id, commonDirection);
    }
  });

  return res;
};

export type StepSliderProps<TKeys extends DefaultKey> = {
  className?: string;
  /**
   * @description текущий активный шаг, должен совпадать с id одного из элементов steps
   */
  activeStep: TKeys;
  /**
   * @description массив шагов, порядок элемента в массивe имеет значение
   */
  steps: Step<TKeys>[];
  /**
   * @description растягивает на всю доступную ширину
   */
  isFullWidth?: boolean;
  /**
   * @description пропсы для кастомизации поведения Slide
   */
  slideProps?: Omit<SlideProps, 'direction' | 'in' | 'children' | 'appear'>;
};

/**
 * @description Компонент предназначенный для анимированного переключения активного элемента
 */
export const StepSlider = <TKeys extends DefaultKey>({
  activeStep,
  steps,
  className,
  isFullWidth,
  slideProps: {
    mountOnEnter = true,
    unmountOnExit = true,
    easing = DEFAULT_EASING,
    ...restSlideProps
  } = {},
}: StepSliderProps<TKeys>) => {
  const keyId = useId();
  const containerRef = useRef<HTMLDivElement>(
    globalThis.document?.body as HTMLDivElement,
  );
  const [currentStep, setCurrentStep] = useState(activeStep);
  const [directionMap, setDirectionMap] = useState<DirectionMap<TKeys>>(() =>
    createDirectionMap(activeStep, activeStep, steps),
  );

  useEffect(() => {
    if (activeStep !== currentStep) {
      setDirectionMap(createDirectionMap(currentStep, activeStep, steps));
      setCurrentStep(activeStep);
    }
  }, [activeStep, currentStep, steps]);

  return (
    <Wrapper ref={containerRef} className={className} isFullWidth={isFullWidth}>
      {steps.map(({ component, id }, index) => (
        <Slide
          {...restSlideProps}
          key={`${keyId}_${index}`}
          container={() => containerRef.current}
          easing={easing}
          mountOnEnter={mountOnEnter}
          unmountOnExit={unmountOnExit}
          in={id === currentStep}
          direction={directionMap.get(id)}
          appear={false}
        >
          <Item>{component}</Item>
        </Slide>
      ))}
    </Wrapper>
  );
};
