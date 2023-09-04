import { Meta } from '@storybook/react';

import { Grid, Step, StepContent, StepLabel, Stepper, Typography } from '..';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=427-5578&mode=design&t=cAVE2DuNhtiUtoF6-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
};

export default meta;

export const Example = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper default
    </Typography>
    <Stepper activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const Сonnector = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper со стрелочным коннектором
    </Typography>
    <Stepper connector="arrow" activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const AlternativeLabel = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper c альтернативным лэйблом
    </Typography>
    <Stepper alternativeLabel activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const Orientation = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Вертикальный Stepper(все элементы активны)
    </Typography>
    <Stepper orientation={'vertical'} activeStep={4}>
      <Step active={true}>
        <StepLabel>Completed</StepLabel>
        <StepContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur culpa debitis fugit iure obcaecati recusandae
            reprehenderit repudiandae vero? Ad aliquam aspernatur aut debitis
            earum fugit minus numquam officiis quaerat sapiente.
          </Typography>
        </StepContent>
      </Step>
      <Step active={true}>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step active={true}>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step active={true}>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);
