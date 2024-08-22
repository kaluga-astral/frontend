import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { TextField } from '../TextField';
import { Typography } from '../Typography';

import { StepSlider } from './StepSlider';

/**
 * Компонент предназначенный для анимированного переключения активного компонента. Может быть полезно в пошаговых формах, где пользователь может переключаться между шагами формы.
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof StepSlider> = {
  title: 'Components/Utils/StepSlider',
  component: StepSlider,
};

export default meta;

type Story = StoryObj<typeof StepSlider>;

export const Interaction: Story = {
  args: {
    activeStep: 1,
    steps: [
      { id: 1, component: <div>Первый</div> },
      { id: 2, component: <div>Второй</div> },
      { id: 3, component: <div>Третий</div> },
    ],
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [active, setActive] = useState(1);

  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);

  return (
    <StepSlider
      activeStep={active}
      steps={[
        {
          id: 1,
          component: (
            <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
          ),
        },
        {
          id: 2,
          component: (
            <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 3,
          component: (
            <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 4,
          component: (
            <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
          ),
        },
      ]}
    />
  );
};

/**
 * Prop ```slideProps``` позволяет кастомизировать поведение Slide
 */
export const SlideProps = () => {
  const [active, setActive] = useState(1);

  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);

  return (
    <StepSlider
      activeStep={active}
      slideProps={{
        timeout: 1000,
        easing: 'linear',
      }}
      steps={[
        {
          id: 1,
          component: (
            <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
          ),
        },
        {
          id: 2,
          component: (
            <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 3,
          component: (
            <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 4,
          component: (
            <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
          ),
        },
      ]}
    />
  );
};

/**
 * Prop ```isFullWidth``` позволяет быстро стилизовать элемент для растягивания на всю доступную ширину
 */
export const IsFullWidth = () => {
  const [active, setActive] = useState(1);

  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);

  return (
    <StepSlider
      activeStep={active}
      isFullWidth={true}
      steps={[
        {
          id: 1,
          component: (
            <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
          ),
        },
        {
          id: 2,
          component: (
            <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 3,
          component: (
            <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
          ),
        },
        {
          id: 4,
          component: (
            <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
          ),
        },
      ]}
    />
  );
};
