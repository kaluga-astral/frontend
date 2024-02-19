import { renderWithTheme, screen } from '@astral/tests';

import { DataListItem } from '../DataListitem';

import { DataList } from './DataList';

describe('DataList', () => {
  it('Placeholder отображается при отсутствии данных', () => {
    renderWithTheme(
      <DataList
        keyId="id"
        data={[]}
        listItem={() => <DataListItem>item</DataListItem>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Нет данных');

    expect(title).toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <DataList
        keyId="id"
        data={[]}
        isError
        listItem={() => <DataListItem>item</DataListItem>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('Отображается лоадер при isLoading=true', () => {
    renderWithTheme(
      <DataList
        keyId="id"
        data={[]}
        isLoading
        listItem={() => <DataListItem>item</DataListItem>}
        onRetry={() => undefined}
      />,
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('Отображается сообщение при достижении конца списка', () => {
    renderWithTheme(
      <DataList
        keyId="id"
        data={[{ id: '1', name: 'test' }]}
        isEndReached
        listItem={({ name }) => <DataListItem>{name}</DataListItem>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Вы достигли конца списка');

    expect(title).toBeVisible();
  });
});
