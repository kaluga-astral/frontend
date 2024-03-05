import { filterEmptyParams } from './filterEmptyParams';

describe('filterEmptyParams', () => {
  it('Из объекта параметров удаляются неопределенные значения', () => {
    const result = filterEmptyParams({
      name: 'name',
      surname: 'surname',
      patronymic: undefined,
    });

    expect(result).toStrictEqual({
      name: 'name',
      surname: 'surname',
    });
  });

  it('Из объекта параметров удаляются null-значения', () => {
    const result = filterEmptyParams({
      name: 'name',
      surname: 'surname',
      patronymic: null,
    });

    expect(result).toStrictEqual({
      name: 'name',
      surname: 'surname',
    });
  });
});
