import { type Meta } from '@storybook/react';

import { Typography } from '../Typography';

import { DataListItem } from './DataListItem';

/**
 * ### DataListItem - базовый элемент карточки для списка
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21329-59965&mode=design&t=iZHAqHilvNb41N6m-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DataListItem> = {
  title: 'Components/DataListItem',
  component: DataListItem,
};

export default meta;

export const Example = () => {
  const data = [
    {
      id: 1,
      title: 'Договор на оказание услуг №1',
      organization: 'ООО "Очень очень очень длинное наименование организации"',
      createDate: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Договор на оказание услуг №2',
      organization: 'ООО "Золоты рога и бриллиантовые копыта"',
      createDate: new Date().toISOString(),
    },
  ];

  const handleClick = () => alert('Click');

  return (
    <ul>
      {data.map(({ title, organization }) => (
        <DataListItem onClick={handleClick}>
          <Typography>{title}</Typography>
          <Typography color="secondary">{organization}</Typography>
        </DataListItem>
      ))}
    </ul>
  );
};
