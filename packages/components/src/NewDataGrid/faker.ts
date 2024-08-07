import { faker } from '@faker-js/faker';

import type {
  CellValue,
  DataGridColumns,
  DataGridRowOptionColumns,
  DataGridRowOptions,
  DataGridRowWithOptions,
} from './types';

type DataType = {
  id: string;
  documentName: string;
  recipient: string;
  createDate: string;
  actions?: object;
};

const RECIPIENTS = [
  'ИП Иванов О.В.',
  'ООО "Новая организация"',
  'ООО "Волшебные документы"',
];

export const makeRandomDate = () => {
  const randomDate = faker.date.recent();

  return randomDate.toISOString();
};

export const makeColumns = (
  columnsTemplate: DataGridColumns<DataType>[],
  mergedColumns: DataGridColumns<DataType>[] = [],
): DataGridColumns<DataType>[] => {
  const mergedColumnsMap = mergedColumns.reduce(
    (acc, { field, ...columnsOptions }) => {
      if (field) {
        return {
          ...acc,
          [field]: columnsOptions,
        };
      }

      return acc;
    },
    {},
  );

  return columnsTemplate.map((column) => ({
    ...column,
    // @ts-ignore
    ...(mergedColumnsMap[column?.field] || {}),
  }));
};

export const makeDataList = <TData extends Record<string, CellValue>>(
  dataObjTemplate: TData,
  options?: DataGridRowOptions<TData>,
): DataGridRowWithOptions<TData>[] => {
  const DATA_ARRAY_LENGTH = 16;

  return Array.from({ length: DATA_ARRAY_LENGTH })
    .fill(dataObjTemplate)
    .map((_, i) => ({
      id: String(i + 1),
      documentName: `Договор №${i + 1}`,
      recipient: RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)],
      createDate: makeRandomDate(),
      options: Math.random() < 0.5 ? options : {},
    })) as unknown as DataGridRowWithOptions<TData>[];
};

export const makeDataListWithTree = (
  length: number = 10,
  options?: {
    isNotSelectable?: boolean;
    childrenCount?: number;
    childrenColumns?: DataGridRowOptionColumns<DataType>[];
  },
): DataType[] => {
  const { isNotSelectable, childrenCount = 3, childrenColumns } = options || {};

  return Array.from({ length }).map((_, i) => {
    const recipient = RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)];
    const createDate = makeRandomDate();
    const isTree = Math.random() > 0.5;

    return {
      id: faker.string.uuid(),
      documentName: isTree ? 'Пакет документов' : `Договор №${i + 1}`,
      recipient,
      createDate,
      options: {
        isNotSelectable,
        childrenColumns,
      },
      children: isTree
        ? Array.from({ length: childrenCount }).map((__, childrenIndex) => ({
            id: faker.string.uuid(),
            documentName: `Договор №${i + Number(`1${childrenIndex}0`)}`,
            recipient,
            createDate,
          }))
        : undefined,
    };
  });
};
