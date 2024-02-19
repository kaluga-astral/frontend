import { useEffect, useState } from 'react';
import { type Meta } from '@storybook/react';

import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { DataListItem } from '../DataListitem';

import { DataList } from './DataList';

/**
 * ### DataList предназначен для отображения списка различного вида карточек с поддержкой infinity scroll и виртуализацией списка
 * Компонент также обрабатывает несколько состояний: загрузка, отсутствие данных и ошибка
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21329-59965&mode=design&t=iZHAqHilvNb41N6m-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DataList> = {
  title: 'Components/DataList',
  component: DataList,
};

export default meta;

type MockDate = {
  id: string;
  title: string;
  organization: string;
  createDate: string;
};

const generateRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString();
};

const generateData = (length = 16) => {
  const ORGANIZATIONS = [
    'ООО "Очень очень очень длинное наименование организации"',
    'ООО "Золоты рога и бриллиантовые копыта"',
    'ПАО "Газпром народное достояние"',
  ];

  return Array.from({ length })
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1),
      title: `Договор на оказание услуг №${i + 1}`,
      organization:
        ORGANIZATIONS[Math.floor(Math.random() * ORGANIZATIONS.length)],
      createDate: generateRandomDate(),
    }));
};

export const Example = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<MockDate[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  const data = generateData();

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...generateData(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  const handleClick = () => alert('Click');

  return (
    <div style={{ width: '100%', height: '240px' }}>
      <DataList
        keyId="organization"
        data={slicedData}
        onEndReached={incrementData}
        isEndReached={isEndReached}
        isLoading={loading}
        listItem={({ title, organization }) => (
          <DataListItem onClick={handleClick}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </DataListItem>
        )}
        onRetry={() => undefined}
      />
    </div>
  );
};

export const NoData = () => {
  return (
    <Grid container spacing={4}>
      <DataList
        keyId="id"
        data={[]}
        listItem={() => <DataListItem>item</DataListItem>}
        onRetry={() => undefined}
      />
    </Grid>
  );
};

export const LoadingWithData = () => {
  const data = generateData();

  const handleClick = () => alert('Click');

  return (
    <div style={{ width: '100%', height: '240px' }}>
      <DataList
        keyId="id"
        data={data}
        isLoading
        listItem={({ title, organization }) => (
          <DataListItem onClick={handleClick}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </DataListItem>
        )}
        onRetry={() => undefined}
      />
    </div>
  );
};

export const ErrorWithData = () => {
  const data = generateData();

  const handleClick = () => alert('Click');

  const handleRetry = () => alert('Повторить запрос');

  return (
    <div style={{ width: '100%', height: '240px' }}>
      <DataList
        keyId="id"
        data={data}
        isError
        listItem={({ title, organization }) => (
          <DataListItem onClick={handleClick}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </DataListItem>
        )}
        onRetry={handleRetry}
      />
    </div>
  );
};

export const Loading = () => {
  const handleClick = () => alert('Click');

  return (
    <div style={{ width: '100%', height: '240px' }}>
      <DataList
        keyId="id"
        data={[]}
        isLoading
        listItem={({ title, organization }) => (
          <DataListItem onClick={handleClick}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </DataListItem>
        )}
        onRetry={() => undefined}
      />
    </div>
  );
};

export const Error = () => {
  const handleClick = () => alert('Click');

  const handleRetry = () => alert('Повторить запрос');

  return (
    <div style={{ width: '100%', height: '240px' }}>
      <DataList
        keyId="id"
        data={[]}
        isError
        errorMsg="Ошибка 500"
        listItem={({ title, organization }) => (
          <DataListItem onClick={handleClick}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </DataListItem>
        )}
        onRetry={handleRetry}
      />
    </div>
  );
};
