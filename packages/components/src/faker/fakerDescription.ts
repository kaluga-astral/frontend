import { faker } from '@faker-js/faker/locale/ru';

type DescriptionType = {
  descriptionName: string;
  descriptionValue: string;
};

export const makeDescriptionData = (): DescriptionType => {
  return {
    descriptionName: faker.company.name(),
    descriptionValue: faker.lorem.words(4),
  };
};

export const makeLongDescriptionData = (): DescriptionType => {
  return {
    descriptionName: `${faker.company.name()} ${faker.lorem.word('longest')}`,
    descriptionValue: faker.lorem.words(10),
  };
};
