import { faker } from '@faker-js/faker';

import { type DataGridRowOptionColumns } from '../NewDataGrid';

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

export const makeDataList = (length: number = 10): DataType[] => {
  return Array.from({ length }).map((_, i) => ({
    id: faker.string.uuid(),
    documentName: `Договор №${i + 1}`,
    recipient: RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)],
    createDate: makeRandomDate(),
  }));
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
