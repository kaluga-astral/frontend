import { useEffect, useRef } from 'react';
import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';

import { TextField } from '../TextField';

import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  it('Prop:options: при пустом массиве отображается плейсхолдер', async () => {
    renderWithTheme(<Autocomplete options={[]} />);
    await userEvents.click(screen.getByRole('combobox'));

    const noDataPlaceholder = screen.getByText('Нет данных');

    expect(noDataPlaceholder).toBeVisible();
  });

  it('Focus: не отображается popover', async () => {
    renderWithTheme(<Autocomplete options={[]} />);
    fireEvent.focus(screen.getByRole('combobox'));

    const noDataPlaceholder = screen.queryByText('Нет данных');

    expect(noDataPlaceholder).toBeNull();
  });

  it('Prop:getOptionLabel: позволяет отображать в popover label', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));

    const vasya = screen.getByText('Pupkin');
    const kolya = screen.getByText('Kolin');

    expect(vasya).toBeVisible();
    expect(kolya).toBeVisible();
  });

  it('Закрывается popover после выбора значения', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));

    const selectedOption = screen.getByRole('option', { name: 'Pupkin' });

    await userEvents.click(selectedOption);
    expect(screen.queryByRole('option')).toBeNull();
  });

  it('Props:multiple=false: в инпут сетится label после выбора option', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));

    const option = screen.getByRole('option', { name: 'Pupkin' });

    await userEvents.click(option);

    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('value', 'Pupkin');
  });

  it('Prop:multiple: в options отображаются чекбоксы', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));

    const checkbox = screen.getByRole('menuitemcheckbox');

    expect(checkbox).toBeVisible();
  });

  it('Prop:multiple: после выбора option в инпуте появляется tag', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));
    await userEvents.click(screen.getByRole('menuitemcheckbox'));

    const checkbox = screen
      .getByRole('menuitemcheckbox')
      .getElementsByTagName('input')[0];

    expect(checkbox).toBeChecked();

    const tag = screen.getByRole('button', { name: 'Pupkin' });

    expect(tag).toBeVisible();
  });

  it('Prop:multiple: tag из инпута можно удалить', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));
    await userEvents.click(screen.getByRole('menuitemcheckbox'));

    const tagDeleteIcon = screen
      .getByRole('button', { name: 'Pupkin' })
      .getElementsByTagName('svg')[0];

    await userEvents.click(tagDeleteIcon);

    const checkbox = screen
      .getByRole('menuitemcheckbox')
      .getElementsByTagName('input')[0];

    expect(checkbox).not.toBeChecked();

    const tag = screen.queryByRole('button', { name: 'Pupkin' });

    expect(tag).toBeNull();
  });

  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const AutocompleteWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Autocomplete options={[]} ref={ref} />;
    };

    renderWithTheme(<AutocompleteWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:renderInput: is present', async () => {
    renderWithTheme(
      <Autocomplete
        options={[]}
        renderInput={(props) => (
          <TextField {...props} data-testid="customField" />
        )}
      />,
    );

    const paper = screen.getByTestId('customField');

    expect(paper).toBeVisible();
  });
});
