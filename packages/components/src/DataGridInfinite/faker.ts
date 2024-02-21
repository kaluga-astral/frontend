import { faker } from '@faker-js/faker';

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

const makeRandomDate = () => {
  const randomDate = faker.date.recent();

  return randomDate.toISOString();
};

export const makeDataList = (length: number = 10): DataType[] => {
  const DIRECTIONS = ['ФНС', 'ФСС', 'ПФР', 'РПН'];

  return Array.from({ length }).map((_, i) => ({
    id: faker.string.uuid(),
    documentName: `Документ ${i + 1}`,
    direction: DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
    createDate: makeRandomDate(),
  }));
};
