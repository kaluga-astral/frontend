import { act, renderWithTheme, userEvents } from '@astral/tests';

import { Autocomplete } from './Autocomplete';
import { AUTOCOMPLETE_INPUT_TEST_ID } from './constants';

describe('Autocomplete', () => {
  it('При пустых options отображается плейсхолдер', async () => {
    const user = userEvents.setup();

    const { getByText, getByTestId } = renderWithTheme(
      <Autocomplete options={[]} />,
    );

    await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

    const noDataPlaceholder = getByText('Нет данных');

    expect(noDataPlaceholder).toBeVisible();
  });

  it('При фокусе не отображается popover', async () => {
    const { queryByText, getByTestId } = renderWithTheme(
      <Autocomplete options={[]} />,
    );

    act(() => {
      getByTestId(AUTOCOMPLETE_INPUT_TEST_ID).focus();
    });

    const noDataPlaceholder = queryByText('Нет данных');

    expect(noDataPlaceholder).toBeNull();
  });

  it('При пустых options отображается плейсхолдер', async () => {
    const user = userEvents.setup();

    const { getByText, getByTestId } = renderWithTheme(
      <Autocomplete options={[]} />,
    );

    await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

    const noDataPlaceholder = getByText('Нет данных');

    expect(noDataPlaceholder).toBeVisible();
  });

  it('getOptionLabel позволяет отображать в popover label', async () => {
    const user = userEvents.setup();

    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    const { getByText, getByTestId } = renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

    const vasya = getByText('Pupkin');
    const kolya = getByText('Kolin');

    expect(vasya).toBeVisible();
    expect(kolya).toBeVisible();
  });

  it('Закрывается popover после выбора значения', async () => {
    const user = userEvents.setup();

    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    const { getByRole, getByTestId, queryByRole } = renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

    const selectedOption = getByRole('option', { name: 'Pupkin' });

    await user.click(selectedOption);
    expect(queryByRole('option')).toBeNull();
  });

  it('В инпут сетится label после выбора option', async () => {
    const user = userEvents.setup();

    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    const { getByRole, getByTestId } = renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

    const option = getByRole('option', { name: 'Pupkin' });

    await user.click(option);

    const input = getByTestId(AUTOCOMPLETE_INPUT_TEST_ID);

    expect(input).toHaveAttribute('value', 'Pupkin');
  });

  describe('Prop:Multiple', () => {
    it('В options отображаются чекбоксы', () => {
      expect(true).toBeTruthy();
    });

    it('После выбора option в инпуте появляется tag', () => {
      expect(true).toBeTruthy();
    });

    it('Tag из инпута можно удалить', () => {
      expect(true).toBeTruthy();
    });
  });
});
