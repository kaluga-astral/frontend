import { fireEvent, renderWithTheme, userEvents } from '@astral/tests';

import { Autocomplete } from './Autocomplete';
import { AUTOCOMPLETE_TEST_ID_MAP } from './constants';

describe('Autocomplete', () => {
  it('Prop:options: при пустом массиве отображается плейсхолдер', async () => {
    const { getByText, getByTestId } = renderWithTheme(
      <Autocomplete options={[]} />,
    );

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const noDataPlaceholder = getByText('Нет данных');

    expect(noDataPlaceholder).toBeVisible();
  });

  it('Behavior:focus: не отображается popover', async () => {
    const { queryByText, getByTestId } = renderWithTheme(
      <Autocomplete options={[]} />,
    );

    fireEvent.focus(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const noDataPlaceholder = queryByText('Нет данных');

    expect(noDataPlaceholder).toBeNull();
  });

  it('Prop:getOptionLabel: позволяет отображать в popover label', async () => {
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

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const vasya = getByText('Pupkin');
    const kolya = getByText('Kolin');

    expect(vasya).toBeVisible();
    expect(kolya).toBeVisible();
  });

  it('Behavior: закрывается popover после выбора значения', async () => {
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

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const selectedOption = getByRole('option', { name: 'Pupkin' });

    await userEvents.click(selectedOption);
    expect(queryByRole('option')).toBeNull();
  });

  it('Behavior: в инпут сетится label после выбора option', async () => {
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

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const option = getByRole('option', { name: 'Pupkin' });

    await userEvents.click(option);

    const input = getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input);

    expect(input).toHaveAttribute('value', 'Pupkin');
  });

  it('Prop:multiple: в options отображаются чекбоксы', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const { getByTestId } = renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    const checkbox = getByTestId(AUTOCOMPLETE_TEST_ID_MAP.optionCheckbox);

    expect(checkbox).toBeVisible();
  });

  it('Prop:multiple: после выбора option в инпуте появляется tag', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const { getByTestId } = renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    await userEvents.click(
      getByTestId(AUTOCOMPLETE_TEST_ID_MAP.optionCheckbox),
    );

    const checkbox = getByTestId(
      AUTOCOMPLETE_TEST_ID_MAP.optionCheckbox,
    ).getElementsByTagName('input')[0];

    expect(checkbox).toBeChecked();

    const tag = getByTestId(AUTOCOMPLETE_TEST_ID_MAP.tag);

    expect(tag).toBeVisible();
  });

  it('Prop:multiple: tag из инпута можно удалить', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const { getByTestId, queryByTestId } = renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(getByTestId(AUTOCOMPLETE_TEST_ID_MAP.input));

    await userEvents.click(
      getByTestId(AUTOCOMPLETE_TEST_ID_MAP.optionCheckbox),
    );

    const tagDeleteIcon = getByTestId(
      AUTOCOMPLETE_TEST_ID_MAP.tag,
    ).getElementsByTagName('svg')[0];

    await userEvents.click(tagDeleteIcon);

    const checkbox = getByTestId(
      AUTOCOMPLETE_TEST_ID_MAP.optionCheckbox,
    ).getElementsByTagName('input')[0];

    expect(checkbox).not.toBeChecked();

    const tag = queryByTestId(AUTOCOMPLETE_TEST_ID_MAP.tag);

    expect(tag).toBeNull();
  });
});
