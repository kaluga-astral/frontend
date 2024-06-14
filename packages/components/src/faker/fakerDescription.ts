import { fakerRU } from '@faker-js/faker';

type DescriptionType = {
  descriptionName: string;
  descriptionValue: string;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const makeDescriptionData = (wordCount: number): DescriptionType => {
  return {
    descriptionName: capitalizeFirstLetter(fakerRU.company.name()),
    descriptionValue: capitalizeFirstLetter(fakerRU.lorem.sentence(wordCount)),
  };
};

export const makeLongDescriptionData = (wordCount: number): DescriptionType => {
  return {
    descriptionName: capitalizeFirstLetter(fakerRU.lorem.sentence(6)),
    descriptionValue: capitalizeFirstLetter(fakerRU.lorem.sentence(wordCount)),
  };
};
