import { act, renderWithTheme, userEvents } from '@astral/tests';

import { Autocomplete } from './Autocomplete';
import {
  AUTOCOMPLETE_INPUT_TEST_ID,
  AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID,
  AUTOCOMPLETE_TAG_TEST_ID,
} from './constants';

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
    it('В options отображаются чекбоксы', async () => {
      const user = userEvents.setup();

      type Option = { name: string; surname: string };

      const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

      const { getByTestId } = renderWithTheme(
        <Autocomplete<Option, true, false, false>
          multiple
          options={options}
          getOptionLabel={(option) => option.surname}
        />,
      );

      await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));

      const checkbox = getByTestId(AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID);

      expect(checkbox).toBeVisible();
    });

    it('После выбора option в инпуте появляется tag', async () => {
      const user = userEvents.setup();

      type Option = { name: string; surname: string };

      const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

      const { getByTestId } = renderWithTheme(
        <Autocomplete<Option, true, false, false>
          multiple
          options={options}
          getOptionLabel={(option) => option.surname}
        />,
      );

      await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));
      await user.click(getByTestId(AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID));

      const checkbox = getByTestId(
        AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID,
      ).getElementsByTagName('input')[0];

      expect(checkbox).toBeChecked();

      const tag = getByTestId(AUTOCOMPLETE_TAG_TEST_ID);

      expect(tag).toBeVisible();
    });

    it('Tag из инпута можно удалить', async () => {
      const user = userEvents.setup();

      type Option = { name: string; surname: string };

      const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

      const { getByTestId, queryByTestId } = renderWithTheme(
        <Autocomplete<Option, true, false, false>
          multiple
          options={options}
          getOptionLabel={(option) => option.surname}
        />,
      );

      await user.click(getByTestId(AUTOCOMPLETE_INPUT_TEST_ID));
      await user.click(getByTestId(AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID));

      const tagDeleteIcon = getByTestId(
        AUTOCOMPLETE_TAG_TEST_ID,
      ).getElementsByTagName('svg')[0];

      await user.click(tagDeleteIcon);

      const checkbox = getByTestId(
        AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID,
      ).getElementsByTagName('input')[0];

      expect(checkbox).not.toBeChecked();

      const tag = queryByTestId(AUTOCOMPLETE_TAG_TEST_ID);

      expect(tag).toBeNull();
    });
  });
});
