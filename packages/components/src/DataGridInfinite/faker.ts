type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

const makeRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString();
};

export const makeDataList = (
  dataObjTemplate: DataType,
  length: number,
): DataType[] => {
  const DIRECTIONS = ['ФНС', 'ФСС', 'ПФР', 'РПН'];

  return Array.from({ length })
    .fill(dataObjTemplate)
    .map((_, i) => ({
      id: String(i + 1),
      documentName: `Документ ${i + 1}`,
      direction: DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
      createDate: makeRandomDate(),
    }));
};
