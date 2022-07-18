import { Story } from '@storybook/react';

import { Grid } from '../Grid';
import { Typography } from '../Typography';

import {
  OverflowTypography,
  OverflowedTypographyProps,
} from './OverflowTypography';

export default {
  title: 'Components/OverflowTypography',
  component: OverflowTypography,
};

export const ShowCase: Story = () => {
  return (
    <Grid container spacing={4}>
      <Typography variant="h2">Мотивация</Typography>
      <Typography variant="code">
        Вариация 'Typography' элемента, с автоматической проверкой на длину
        строки, и если длина больше настраиваемого значения 'overflowLimit', то
        тогда добавляется кастомизируемая обертка 'Tooltip'.
        <br />
        Так же важный параметр 'rowsCount', по умолчанию равен '1'. Означает
        число строк, после которого текст будет обрезаться, и добавляться
        многоточие.
        <br />
        Расчет максимальной ширины элемента производится по формуле
        {'`${ overflowLimit / rowsCount }ch`.'}
        <br />
        Единица измерения 'ch' выбрана из того соображения, что нужно
        рассчитывать ширину по усредненной ширине символа, коей 'ch'
        приблизительно и является.
      </Typography>
      <Typography variant="h2">Примеры</Typography>
      <OverflowTypography>
        Not enough long text for special behavior.
      </OverflowTypography>
      <OverflowTypography>
        Enough long. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At eos nam ratione!
      </OverflowTypography>
      <OverflowTypography overflowLimit={74} rowsCount={2}>
        Short with overflow = 74 rowsCount = 2, like in Autocomplite
      </OverflowTypography>
      <OverflowTypography overflowLimit={74} rowsCount={2}>
        Long with overflow = 74 rowsCount = 2, like in default Autocomplite
        component. Lorem ipsum dolor sit amet.
      </OverflowTypography>
      <OverflowTypography
        tooltipProps={{
          title: 'custom tooltip, with separate settings',
          placement: 'top-start',
        }}
      >
        With custom tooltip settings. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Esse, ipsum.
      </OverflowTypography>
    </Grid>
  );
};

ShowCase.parameters = { options: { showPanel: false } };

const Template: Story<OverflowedTypographyProps> = (args) => {
  return (
    <OverflowTypography {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      deserunt dolore doloremque eligendi error esse facilis harum inventore
      labore maxime non pariatur perspiciatis quae quibusdam, recusandae
      repudiandae saepe tempore veritatis?
    </OverflowTypography>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
