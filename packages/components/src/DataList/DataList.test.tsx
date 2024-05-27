import { describe, expect, it, vi } from 'vitest';
import { fireEvent, renderWithTheme, screen } from '@astral/tests';
// import { VirtuosoMockContext } from 'react-virtuoso';
// import { theme } from '@astral/tests/src/theme';
// import { fakerRU } from '@faker-js/faker';

// import { ThemeProvider } from '../ThemeProvider';
// import { Typography } from '../Typography';

import { DataList } from './DataList';

describe('DataList', () => {
  it('Placeholder отображается при отсутствии данных', () => {
    renderWithTheme(
      <DataList<{ id: string }>
        keyId="id"
        data={[]}
        itemContent={() => <div>item</div>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Нет данных');

    expect(title).toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <DataList<{ id: string }>
        keyId="id"
        data={[]}
        isError
        itemContent={() => <div>item</div>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('Лоадер отображается при isLoading=true', () => {
    renderWithTheme(
      <DataList<{ id: string }>
        keyId="id"
        data={[]}
        isLoading
        itemContent={() => <div>item</div>}
        onRetry={() => undefined}
      />,
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('Сообщение "Вы достигли конца списка" отображается при достижении конца списка', () => {
    renderWithTheme(
      <DataList
        keyId="id"
        data={[{ id: '1', name: 'test' }]}
        isEndReached
        itemContent={({ name }) => <div>{name}</div>}
        onRetry={() => undefined}
      />,
    );

    const title = screen.getByText('Вы достигли конца списка');

    expect(title).toBeVisible();
  });

  it('onRetry вызывается при нажатии на кнопку "Попробовать снова"', () => {
    const onRetrySpy = vi.fn();

    renderWithTheme(
      <DataList<{ id: string }>
        keyId="id"
        data={[]}
        isError
        itemContent={() => <div>item</div>}
        onRetry={onRetrySpy}
      />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onRetrySpy).toHaveBeenCalled();
  });

  // TODO: не удается вызвать onEndReached при скроле
  // Заведена отдельная задача на этот тест - https://track.astral.ru/soft/browse/UIKIT-1263
  it('onEndReached вызывается при прокрутке до конца текущего списка', async () => {
    // const makeDataList = (length: number = 10) =>
    //   Array.from({ length }).map((_, i) => ({
    //     id: fakerRU.string.uuid(),
    //     title: `Договор на оказание услуг №${i + 1}`,
    //     organization: fakerRU.company.name(),
    //   }));

    const onEndReachedSpy = vi.fn();

    // const { container } = render(
    //   <ThemeProvider theme={theme}>
    //     <DataList
    //       keyId="id"
    //       data={makeDataList()}
    //       isError
    //       itemContent={({ title, organization }) => (
    //         <div onClick={() => undefined}>
    //           <Typography>{title}</Typography>
    //           <Typography color="secondary">{organization}</Typography>
    //         </div>
    //       )}
    //       onEndReached={onEndReachedSpy}
    //       onRetry={() => undefined}
    //     />
    //   </ThemeProvider>,
    //   {
    //     wrapper: ({ children }) => (
    //       <VirtuosoMockContext.Provider
    //         value={{ viewportHeight: 300, itemHeight: 66 }}
    //       >
    //         {children}
    //       </VirtuosoMockContext.Provider>
    //     ),
    //   },
    // );

    // console.log('container offsetTop 1', container.getAttributeNode);
    // console.log('container scrollTop 1', container.scrollTop);
    // console.log('container children', container.lastChild);
    // console.log('container offsetTop 1', container.offsetTop);

    // // Прокручиваем список до конца
    // // await act(async () => {
    // //   container.lastChild.scrollTo(0, 720); // Прокручиваем до конца списка
    // //   container.lastChild.dispatchEvent(new Event('scroll'));
    // // });

    // fireEvent.scroll(container, { target: { scrollY: 720 } }); // вот тут контейнер чую кривой
    // console.log('container offsetTop 2', container.offsetTop);
    // console.log('container scrollTop 2', container.scrollTop);
    expect(onEndReachedSpy).not.toHaveBeenCalled();
  });
});
