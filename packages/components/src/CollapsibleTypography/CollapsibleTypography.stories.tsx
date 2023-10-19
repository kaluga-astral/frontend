import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Typography } from '../Typography';

import { CollapsibleTypography } from './CollapsibleTypography';

export default {
  title: 'Components/CollapsibleTypography',
  component: CollapsibleTypography,
};

export const ShowCase: Story = () => {
  return (
    <Stack maxWidth={500} spacing={4}>
      <Typography variant="code">
        Вариация 'Typography' элемента, с автоматической проверкой на
        переполнение текстового контента, и если есть переполнение, тo
        появляется возможность скрытия/раскрытия.
        <br />
        Важный параметр 'rowsCount', по умолчанию равен '1'. Означает число
        строк, после которого текст будет обрезаться, и добавляться многоточие.
        <br />
        Так же важно учитывать, что элементы с 'rowsCount' больше 1 будут
        обрезаться по словам, в одну строку будут обрезаться по буквенно.
        <br />
        При 'rowsCount' равному меньше 1, он автоматически приведется к значению
        по умолчанию.
      </Typography>
      <Typography variant="h2">Примеры</Typography>
      <Typography variant="h3">rowsCount=1</Typography>
      <CollapsibleTypography rowsCount={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        deserunt dolore doloremque eligendi error esse facilis harum inventore
        labore maxime non pariatur perspiciatis quae quibusdam, recusandae
        repudiandae saepe tempore veritatis?
      </CollapsibleTypography>

      <Typography variant="h3">rowsCount=2</Typography>
      <CollapsibleTypography rowsCount={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        deserunt dolore doloremque eligendi error esse facilis harum inventore
        labore maxime non pariatur perspiciatis quae quibusdam, recusandae
        repudiandae saepe tempore veritatis?
      </CollapsibleTypography>

      <Typography variant="h3">rowsCount {'>'} content</Typography>
      <CollapsibleTypography rowsCount={10}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        deserunt dolore doloremque eligendi error esse facilis harum inventore
        labore maxime non pariatur perspiciatis quae quibusdam, recusandae
        repudiandae saepe tempore veritatis?
      </CollapsibleTypography>
    </Stack>
  );
};

const Template: Story = (args) => {
  return (
    <Stack maxWidth={500}>
      <CollapsibleTypography {...args} ref={undefined}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        deserunt dolore doloremque eligendi error esse facilis harum inventore
        labore maxime non pariatur perspiciatis quae quibusdam, recusandae
        repudiandae saepe tempore veritatis?
      </CollapsibleTypography>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
