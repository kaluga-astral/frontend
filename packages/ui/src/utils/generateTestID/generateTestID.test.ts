import { generateTestID } from './generateTestID';

describe('generateTestID', () => {
  it('Создает testID для базового элемента', () => {
    const testID = generateTestID('button');

    expect(testID).toBe('button-testid');
  });

  it('Создает testID для вложенных элементов: ', () => {
    const testID = generateTestID('button', 'loader', 'item');

    expect(testID).toBe('button-loader-item-testid');
  });
});
