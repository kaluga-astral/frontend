import { useEffect, useRef, useState } from 'react';
import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';

import { TextField } from '../TextField';

import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  it('Плейсхолдер отображается при пустом списке options', async () => {
    renderWithTheme(<Autocomplete options={[]} />);
    await userEvents.click(screen.getByRole('combobox'));

    const noDataPlaceholder = screen.getByText('Нет данных');

    expect(noDataPlaceholder).toBeVisible();
  });

  it('Popover не отображается пои фокусе на инпут', async () => {
    renderWithTheme(<Autocomplete options={[]} />);
    fireEvent.focus(screen.getByRole('combobox'));

    const noDataPlaceholder = screen.queryByText('Нет данных');

    expect(noDataPlaceholder).toBeNull();
  });

  it('GetOptionLabel позволяет отображать в popover label', async () => {
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

  it('Popover закрывается после выбора значения', async () => {
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

  it('Label сетится  в инпут после выбора option при multiple=false', async () => {
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

  it('Чекбоксы отображаются в options при multiple=true', async () => {
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

  it('Тег появляется в инпуте после выбора option при multiple=true', async () => {
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

  it('Tag из инпута можно удалить при multiple=true', async () => {
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

  it('Ref правильно задается', () => {
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

  it('RenderInput рендерит на странице инпут', async () => {
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

  it('Фокус не теряется после ввода первой буквы, при использовании onInputChange в связке с renderInput', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [
      { name: 'Vasya', surname: 'Pupkin' },
      { name: 'Kolya', surname: 'Kolin' },
    ];

    const ControlledAutocompleteWithRenderInput = () => {
      const [inputValue, setInputValue] = useState('');

      return (
        <Autocomplete<Option, false, false, false>
          options={options}
          inputValue={inputValue}
          getOptionLabel={(option) => option.surname}
          onInputChange={(_event, value) => setInputValue(value)}
          renderInput={(props) => (
            <TextField {...props} data-testid="customField" />
          )}
        />
      );
    };

    renderWithTheme(<ControlledAutocompleteWithRenderInput />);

    const input = await screen.findByRole('combobox');

    await userEvents.click(input);
    await userEvents.type(input, 'test');
    expect(input).toHaveValue('test');
    expect(input).toHaveFocus();
  });

  it('Плейсхолдер не отображается, если выбрана одна из опций при multiple=true', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];
    const placeholder = 'Меня тут быть не должно';

    renderWithTheme(
      <Autocomplete<Option, true, false, false>
        multiple
        options={options}
        getOptionLabel={(option) => option.surname}
        placeholder={placeholder}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));
    await userEvents.click(screen.getByRole('menuitemcheckbox'));
    expect(screen.queryByText(placeholder)).not.toBeInTheDocument();
  });
});
