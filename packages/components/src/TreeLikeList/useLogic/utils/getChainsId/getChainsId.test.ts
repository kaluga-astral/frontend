import { describe, expect, it } from 'vitest';

import type { TreeListData } from '../../../../Tree';

import { getChainsId } from './getChainsId';

describe('getChainsId', () => {
  it('Возвращает цепочки идентификаторов до целевых id', () => {
    const fakeTree: Array<TreeListData> = [
      {
        id: '1',
        label: '1',
        children: [{ id: '11', label: '11' }],
      },
      {
        id: '2',
        label: '2',
        children: [
          {
            id: '21',
            label: '21',
            children: [
              { id: '211', label: '211' },
              { id: '212', label: '212' },
            ],
          },
          {
            id: '22',
            label: '22',
          },
        ],
      },
      { id: '3', label: '3' },
    ];

    const sut = getChainsId(fakeTree, ['211', '3']);

    expect(sut).toEqual([['2', '21', '211'], ['3']]);
  });

  it('Возвращает пустой массив, если не указаны целевые id', () => {
    const fakeTree: Array<TreeListData> = [
      {
        id: '1',
        label: '1',
        children: [{ id: '11', label: '11' }],
      },
      {
        id: '2',
        label: '2',
        children: [
          { id: '21', label: '21' },
          {
            id: '22',
            label: '22',
            children: [
              { id: '211', label: '211' },
              { id: '222', label: '222' },
            ],
          },
        ],
      },
      { id: '3', label: '3' },
    ];

    const sut = getChainsId(fakeTree, ['211, 3']);

    expect(sut).toEqual([]);
  });
});
