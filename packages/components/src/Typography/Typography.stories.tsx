import { type Meta, type StoryObj } from '@storybook/react';

import { Grid } from '../Grid';
import { Paper } from '../Paper';
import { styled } from '../styles';

import { Typography } from './Typography';

/**
 * Весь текст должен задаваться через Typography.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1-347&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Interaction: Story = {
  args: {
    children: 'Электронная отчетность и документооборот',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const ExamplePaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Example = () => (
  <ExamplePaper>
    <Typography variant="h3" component="h2" gutterBottom>
      Заявка успешно отправлена
    </Typography>
    <Typography paragraph>
      Заявка{' '}
      <Typography color="info" component="span">
        22
      </Typography>{' '}
      была отправлена на ваш email
    </Typography>
  </ExamplePaper>
);

export const Variants = () => (
  <Grid container spacing={6}>
    <Typography variant="h1">
      h1. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="h2">
      h2. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="h3">
      h3. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="h4">
      h4. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="h5">
      h5. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="h6">
      h6. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="subtitle1">
      subtitle1. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="subtitle2">
      subtitle2. Электронная отчетность и документооборот
    </Typography>
    <Typography>Default. Электронная отчетность и документооборот</Typography>
    <Typography variant="ui">
      ui. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="body1">
      body1. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="body2">
      body2. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="caption">
      caption. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="button">
      button. Электронная отчетность и документооборот
    </Typography>
    <Typography variant="overline">
      overline. Электронная отчетность и документооборот
    </Typography>
  </Grid>
);

/**
 * При указании inherit будут унаследованы все стили родителя
 */
export const VariantInherit = () => (
  <Grid container spacing={6}>
    <Typography variant="h5">
      <Typography variant="inherit">
        inherit. Электронная отчетность и документооборот
      </Typography>
    </Typography>
  </Grid>
);

export const Colors = () => (
  <Grid container spacing={6}>
    <Typography>default. Электронная отчетность и документооборот</Typography>
    <Typography color="text">
      text. Электронная отчетность и документооборот
    </Typography>
    <Typography color="primary">
      primary. Электронная отчетность и документооборот
    </Typography>
    <Typography color="secondary">
      secondary. Электронная отчетность и документооборот
    </Typography>
    <Typography color="error">
      error. Электронная отчетность и документооборот
    </Typography>
    <Typography color="warning">
      warning. Электронная отчетность и документооборот
    </Typography>
    <Typography color="info">
      info. Электронная отчетность и документооборот
    </Typography>
    <Typography color="textSecondary">
      textSecondary. Электронная отчетность и документооборот
    </Typography>
    <Typography color="grey">
      grey. Электронная отчетность и документооборот
    </Typography>
    <Typography color="red">
      red. Электронная отчетность и документооборот
    </Typography>
    <Typography color="green">
      green. Электронная отчетность и документооборот
    </Typography>
    <Typography color="yellow">
      yellow. Электронная отчетность и документооборот
    </Typography>
  </Grid>
);

/**
 * Prop ```colorIntensity``` позволяет задать интенсивность указанного ```color```.
 */
export const ColorIntensity = () => (
  <Grid container spacing={6}>
    <Typography color="info" colorIntensity="300">
      text[300]. Электронная отчетность и документооборот
    </Typography>
    <Typography color="red" colorIntensity="200">
      red[200]. Электронная отчетность и документооборот
    </Typography>
    <Typography color="grey" colorIntensity="400">
      grey[400]. Электронная отчетность и документооборот
    </Typography>
  </Grid>
);

/**
 * Prop ```noWrap``` позволяет добавить ```...```, если текст не помещается в контейнер.
 *
 * Если необходимо умное ограничение длинны поля с tooltip, смотрите на [OverflowTypography](/docs/components-overflowtypography--docs).
 */
export const Ellipsis = () => (
  <div style={{ width: '200px' }}>
    <Typography noWrap>
      Электронная отчетность и документооборот. Электронная отчетность и
      документооборот
    </Typography>
  </div>
);

/**
 * Prop ```isUpperCase``` переводит текст в верхний регистр
 */
export const UpperCase = () => (
  <Grid container spacing={6}>
    <Typography isUpperCase>
      Электронная отчетность и документооборот{' '}
      <Typography color="info" component="span">
        и{' '}
      </Typography>
      документооборот
    </Typography>
  </Grid>
);
