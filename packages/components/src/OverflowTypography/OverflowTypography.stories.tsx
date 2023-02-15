import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

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
    <Stack maxWidth={600} spacing={4}>
      <Typography variant="h2">Мотивация</Typography>
      <Typography variant="code">
        Вариация 'Typography' элемента, с автоматической проверкой на
        переполнение текстового контента, и если есть переполнение, то тогда
        добавляется кастомизируемая обертка 'Tooltip'.
        <br />
        Важный параметр 'rowsCount', по умолчанию равен '1'. Означает число
        строк, после которого текст будет обрезаться, и добавляться многоточие.
        <br />
        Так же важно учитывать, что элементы с 'rowsCount' больше 1 будут
        обрезаться по словам, в одну строку будут обрезаться по буквенно
      </Typography>
      <Typography variant="h2">Примеры</Typography>
      <OverflowTypography>
        Not enough long text for special behavior.
      </OverflowTypography>
      <OverflowTypography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
        delectus dolorem ea, explicabo illo minus nostrum quae quod veniam.
      </OverflowTypography>
      <OverflowTypography rowsCount={2} maxWidth={300}>
        rowsCount = 2, like in default Autocomplite component. Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
        tempore.
      </OverflowTypography>
      <OverflowTypography
        tooltipProps={{
          title: 'custom tooltip, with separate settings',
          placement: 'top-start',
        }}
      >
        With custom tooltip settings. Lorem ipsum dolor sit amet, consecrate
        adipisicing elit. Assumenda autem debitis eligendi inventore magni nobis
        perspiciatis quisquam ratione, unde vel?
      </OverflowTypography>
    </Stack>
  );
};

ShowCase.parameters = { options: { showPanel: false } };

const Template: Story<OverflowedTypographyProps> = (args) => {
  return (
    <OverflowTypography {...args} ref={undefined}>
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
