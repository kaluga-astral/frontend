import { describe, expect, it } from 'vitest';
import { useEffect, useRef, useState } from 'react';
import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';

import { TextField } from '../TextField';

import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  it('Popover не отображается при клике на инпут, если inputValue пуст, а опций для выбора нет', async () => {
    renderWithTheme(<Autocomplete options={[]} inputValue="" />);
    await userEvents.click(screen.getByRole('combobox'));

    const noDataPlaceholder = screen.queryByText('Нет данных');

    expect(noDataPlaceholder).toBeNull();
  });

  it('Popover отображается при клике на инпут, если есть опции для выбора, но inputValue пуст', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    renderWithTheme(
      <Autocomplete<Option, false, false, false>
        options={options}
        inputValue=""
        getOptionLabel={(option) => option.surname}
      />,
    );

    await userEvents.click(screen.getByRole('combobox'));

    const expectedOption = screen.getByText('Pupkin');

    expect(expectedOption).toBeVisible();
  });

  it('Popover не отображается при фокусе на инпут', async () => {
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

  it('Текст инпута принимает значение надписи выбранного option', async () => {
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

  it('Ref доступен', () => {
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

    const input = screen.getByTestId('customField');

    expect(input).toBeVisible();
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

  it('Плейсхолдер отображается, если не выбрана одна из опций при multiple=true', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];
    const placeholder = 'Меня должно быть видно';

    const TestComponent = () => {
      const [val, setVal] = useState<Option[]>([]);
      const getOptionLabel = (option: Option) => option.surname;

      const onChange = (_: unknown, newVal: Option[]) => {
        setVal(newVal);
      };

      return (
        <Autocomplete<Option, true, false, false>
          value={val}
          multiple
          options={options}
          onChange={onChange}
          getOptionLabel={getOptionLabel}
          placeholder={placeholder}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('Плейсхолдер не отображается, если выбрана одна из опций при multiple=true', async () => {
    type Option = { name: string; surname: string };

    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];
    const placeholder = 'Меня тут быть не должно';

    const TestComponent = () => {
      const [val, setVal] = useState<Option[]>([...options]);
      const getOptionLabel = (option: Option) => option.surname;

      const onChange = (_: unknown, newVal: Option[]) => {
        setVal(newVal);
      };

      return (
        <Autocomplete<Option, true, false, false>
          value={val}
          multiple
          options={options}
          onChange={onChange}
          getOptionLabel={getOptionLabel}
          placeholder={placeholder}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    expect(screen.queryByPlaceholderText(placeholder)).not.toBeInTheDocument();
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

  it('Кнопка сброса скрыта, если инпут пуст', async () => {
    const clearText = 'Очистить';

    type Option = { name: string; surname: string };

    const TestComponent = () => {
      return (
        <Autocomplete<Option, false, false, true>
          label="user"
          freeSolo
          options={[]}
          clearText={clearText}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    expect(screen.queryByTitle(clearText)).not.toBeInTheDocument();
  });
});
