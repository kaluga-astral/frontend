import { useEffect, useState } from 'react';
import { type Meta } from '@storybook/react';
import { fakerRU } from '@faker-js/faker';

import { styled } from '../styles';
import { Typography } from '../Typography';

import { DataList } from './DataList';

/**
 * ### DataList предназначен для отображения списка различного вида карточек с поддержкой infinity scroll и виртуализацией списка
 * Компонент также обрабатывает несколько состояний: загрузка, отсутствие данных и ошибка
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21329-59965&mode=design&t=iZHAqHilvNb41N6m-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DataList> = {
  title: 'Components/Data Display/DataList',
  component: DataList,
};

export default meta;

type MockData = {
  id: string;
  title: string;
  organization?: string;
};

const generateData = (length = 16): MockData[] => {
  return Array.from({ length }).map((_, i) => ({
    id: fakerRU.string.uuid(),
    title: `Договор на оказание услуг №${i + 1}`,
    organization: fakerRU.company.name(),
  }));
};

const Container = styled.div`
  width: 100%;
  height: 240px;
`;

export const Example = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<MockData[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  const TOTAL_COUNT = 40;

  const data = generateData();

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (slicedData.length >= TOTAL_COUNT) {
      setIsEndReached(true);
    }
  }, [slicedData]);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...generateData(10)]);
      setLoading(false);
    }, 1500);
  };

  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  return (
    <Container>
      <DataList
        keyId="id"
        data={slicedData}
        onEndReached={incrementData}
        isEndReached={isEndReached}
        isLoading={loading}
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={incrementData}
      />
    </Container>
  );
};

export const NoData = () => {
  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  return (
    <Container>
      <DataList<MockData>
        keyId="id"
        data={[]}
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={() => undefined}
      />
    </Container>
  );
};

export const LoadingWithData = () => {
  const data = generateData();

  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  return (
    <Container>
      <DataList
        keyId="id"
        data={data}
        isLoading
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={() => undefined}
      />
    </Container>
  );
};

export const ErrorWithData = () => {
  const data = generateData();

  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  const handleRetry = () => alert('Повторить запрос');

  return (
    <Container>
      <DataList
        keyId="id"
        data={data}
        isError
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={handleRetry}
      />
    </Container>
  );
};

export const Loading = () => {
  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  return (
    <Container>
      <DataList<MockData>
        keyId="id"
        data={[]}
        isLoading
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={() => undefined}
      />
    </Container>
  );
};

export const Error = () => {
  const handleClick = (itemIndex: number) =>
    alert(`Clicked item with index ${itemIndex}`);

  const handleRetry = () => alert('Повторить запрос');

  return (
    <Container>
      <DataList<MockData>
        keyId="id"
        data={[]}
        isError
        errorMsg="Ошибка 500"
        itemContent={({ title, organization }, { index, className }) => (
          <div className={className} onClick={() => handleClick(index)}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>
        )}
        onRetry={handleRetry}
      />
    </Container>
  );
};
