import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Description } from '../Description';
import {
  type DataGridColumns,
  type DataGridRowOptions,
  NewDataGrid,
} from '../NewDataGrid';
import { styled } from '../styles/styled';

import { TableDescriptionCell } from './TableDescriptionCell';

/**
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof TableDescriptionCell> = {
  title: 'Components/TableDescriptionCell',
  component: TableDescriptionCell,
};

export default meta;

type Story = StoryObj<typeof TableDescriptionCell>;

const Icon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
        fill="url(#paint0_linear_28532_4841)"
      />
      <path
        d="M12 17C15.3137 17 18 14.3137 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C6 14.3137 8.6863 17 12 17Z"
        fill="white"
      />
      <path
        d="M10.9283 10.6193C11.4041 9.7936 12.5959 9.7936 13.0717 10.6193L16.8299 17.142C17.4096 18.1482 16.4081 19.3263 15.3215 18.9164L12.4367 17.8279C12.1552 17.7217 11.8448 17.7217 11.5633 17.8279L8.6785 18.9164C7.5919 19.3263 6.5904 18.1482 7.1701 17.142L10.9283 10.6193Z"
        fill="#0082AA"
      />
      <defs>
        <linearGradient
          id="paint0_linear_28532_4841"
          x1="79.0807"
          y1="0"
          x2="79.0807"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3ACEFC" />
          <stop offset="1" stop-color="#27B9E6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Interaction: Story = {
  args: {
    title: 'Заголовок',
    subtitle: 'Подзаголовок',
    icon: <Icon />,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const StyledDescriptionName = styled(Description.Name)`
  color: unset;
`;

export const Example = () => {
  return (
    <TableDescriptionCell
      title="Заголовок"
      icon={<Icon />}
      subtitle="Подзаголовок"
    />
  );
};

export const DescriptionSubtitle = () => {
  return (
    <TableDescriptionCell
      title="Прибыль"
      subtitle={
        <Description>
          <StyledDescriptionName>Направление</StyledDescriptionName>
          <Description.Value>ФНС</Description.Value>
        </Description>
      }
    />
  );
};

/**
 * С помощью prop ```iconPosition``` можно позиционировать иконку слева или справа от текста.
 * По дефолту left
 */

export const IconPosition = () => {
  return (
    <Wrapper>
      <TableDescriptionCell
        title="Заголовок"
        subtitle="Подзаголовок"
        icon={<Icon />}
      />
      <TableDescriptionCell
        title="Заголовок"
        subtitle="Подзаголовок"
        iconPosition="right"
        icon={<Icon />}
      />
    </Wrapper>
  );
};

export const DataGridDescriptionCell = () => {
  type DataType = {
    id: string;
    documentName: JSX.Element;
    product: JSX.Element;
    createDate: string;
  };

  type SortField = 'documentName' | 'product' | 'createDate';

  const FAKE_DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: <TableDescriptionCell title="НДС" />,
    product: <TableDescriptionCell title="1C отчетность" />,
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const generateRandomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    const randomTimestamp =
      start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTimestamp);

    return randomDate.toISOString();
  };

  const generateData = (
    dataObjTemplate: DataType,
    options?: DataGridRowOptions,
  ): DataType[] => {
    const PRODUCT = [
      <TableDescriptionCell
        icon={<Icon />}
        title="1С Отчетность"
        subtitle={
          <Description>
            <StyledDescriptionName>ID</StyledDescriptionName>
            <Description.Value>a17fee3e-07d6-4488</Description.Value>
          </Description>
        }
      />,
      <TableDescriptionCell
        icon={<Icon />}
        title="Астрал.Отчет 5.0"
        subtitle={
          <Description>
            <StyledDescriptionName>ID</StyledDescriptionName>
            <Description.Value>bb6a549b-5b5a-402f</Description.Value>
          </Description>
        }
      />,
      <TableDescriptionCell
        icon={<Icon />}
        title="Астрал.Отчет 4.0"
        subtitle={
          <Description>
            <StyledDescriptionName>ID</StyledDescriptionName>
            <Description.Value>d76a51ad-1a83-423b</Description.Value>
          </Description>
        }
      />,
    ];
    const DATA_ARRAY_LENGTH = 16;
    const DOCUMENT_NAMES = [
      <TableDescriptionCell
        title="НДС"
        subtitle={
          <Description>
            <StyledDescriptionName>Направление</StyledDescriptionName>
            <Description.Value>ФНС</Description.Value>
          </Description>
        }
      />,
      <TableDescriptionCell
        title="Прибыль"
        subtitle={
          <Description>
            <StyledDescriptionName>Направление</StyledDescriptionName>
            <Description.Value>ФНС</Description.Value>
          </Description>
        }
      />,
      <TableDescriptionCell
        title="Бухгалтерский отчет"
        subtitle={
          <Description>
            <StyledDescriptionName>Направление</StyledDescriptionName>
            <Description.Value>ФНС</Description.Value>
          </Description>
        }
      />,
    ];

    return Array.from({ length: DATA_ARRAY_LENGTH })
      .fill(dataObjTemplate)
      .map((_, i) => ({
        id: String(i + 1),
        documentName:
          DOCUMENT_NAMES[Math.floor(Math.random() * DOCUMENT_NAMES.length)],
        product: PRODUCT[Math.floor(Math.random() * PRODUCT.length)],
        createDate: generateRandomDate(),
        options: Math.random() < 0.5 ? options : undefined,
      }));
  };
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Документа',
      sortable: true,
    },
    {
      field: 'product',
      label: 'Продукт',
      sortable: true,
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      sortable: true,
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};
