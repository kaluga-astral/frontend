import { type Meta, type StoryObj } from '@storybook/react';
import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { useEffect, useState } from 'react';

import { styled } from '../styles';
import { ActionCell, type Actions } from '../ActionCell';
import {
  type DataGridColumns,
  type DataGridRowOptions,
  NewDataGrid,
} from '../NewDataGrid';

import { Filename } from './Filename';

/**
 * Filename применяется для отображения названий файлов, с автоматической проверкой текстового переполнения
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Filename> = {
  title: 'Components/Filename',
  component: Filename,
};

export default meta;

type Story = StoryObj<typeof Filename>;

export const Interaction: Story = {
  args: {
    children:
      'Версия 1.0Приложение No 10к Договору подряда No КрФ/15331/24 от\n' +
      '25.04.2024.pdf',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 10px;
`;

type DataType = {
  id: string;
  documentName: JSX.Element;
  direction: string;
  createDate: string;
};

type SortField = 'documentName' | 'direction' | 'createDate';

const FAKE_DATA_OBJECT_TEMPLATE = {
  id: '1',
  documentName: <Filename>OS_FINAL_BDW_FW24_MeA_21022024.pdf</Filename>,
  direction: 'ФНС',
  createDate: '2022-03-24T17:50:40.206Z',
};

const FAKE_ACTIONS: Actions<DataType> = {
  main: [
    {
      icon: <EyeFillMd />,
      name: 'Просмотреть',
      onClick: () => console.log('main'),
    },
    {
      icon: <SendOutlineMd />,
      nested: true,
      name: 'Отправить',
      actions: [
        { name: 'Туда', onClick: () => console.log('nested 1') },
        { name: 'Сюда', onClick: () => console.log('nested 2') },
      ],
    },
  ],
  secondary: [
    { name: 'Редактировать', onClick: () => console.log('secondary 1') },
    { name: 'Удалить', onClick: () => console.log('secondary 2') },
  ],
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
  const DIRECTIONS = ['ФНС', 'ФСС', 'ПФР', 'РПН'];
  const DATA_ARRAY_LENGTH = 16;
  const DOCUMENT_NAMES = [
    <Filename>api-единая.-спецификация-api.docs</Filename>,
    <Filename>OS_FINAL_BDW_FW24_MeA_21022024.pdf</Filename>,
    <Filename>OS_FINAL_BDW_FW24_MeA.pdf</Filename>,
    <Filename>OS_FINAL.pdf</Filename>,
  ];

  return Array.from({ length: DATA_ARRAY_LENGTH })
    .fill(dataObjTemplate)
    .map((_, i) => ({
      id: String(i + 1),
      documentName:
        DOCUMENT_NAMES[Math.floor(Math.random() * DOCUMENT_NAMES.length)],
      direction: DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
      createDate: generateRandomDate(),
      options: Math.random() < 0.5 ? options : undefined,
    }));
};

export const Example = () => {
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Наименование документа',
      sortable: true,
    },
    {
      field: 'direction',
      label: 'Направление',
      sortable: true,
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      sortable: true,
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
    {
      label: 'Действия',
      sortable: false,
      align: 'center',
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);

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
      selectedRows={selected}
      onRowClick={handleRowClick}
      onSelectRow={handleSelect}
      onRetry={() => {}}
    />
  );
};

export const LongFileName = () => {
  return (
    <Wrapper>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024.pdf
      </Filename>
    </Wrapper>
  );
};

export const ShortFileName = () => {
  return (
    <Wrapper>
      <Filename>Приложение №10.pdf</Filename>
    </Wrapper>
  );
};

export const ComplexFileExtension = () => {
  return (
    <div>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.dist
        </Filename>
      </Wrapper>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.tar.xz
        </Filename>
      </Wrapper>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.orig
        </Filename>
      </Wrapper>
    </div>
  );
};
