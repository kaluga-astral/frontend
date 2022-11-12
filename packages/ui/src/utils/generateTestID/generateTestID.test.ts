import { generateTestID } from './generateTestID';

describe('generateTestID', () => {
  it('Создает testID для базового элемента', () => {
    const testID = generateTestID('button');

    expect(testID).toBe('astralui-button');
  });

  it('Создает testID для вложенных элементов: ', () => {
    const testID = generateTestID('button', 'loader', 'item');

    expect(testID).toBe('astralui-button-loader-item');
  });
});
