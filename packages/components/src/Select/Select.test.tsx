import { renderWithTheme, screen } from '@astral/tests';
import { describe } from 'vitest';
import { useEffect, useRef } from 'react';

import { MenuItem } from '../MenuItem';

import { Select } from './Select';

describe('Select', () => {
  it('Предоставляет ref', () => {
    const resultRef = { current: null };

    const SelectWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Select ref={ref}>
          <MenuItem value="select">Select</MenuItem>
        </Select>
      );
    };

    renderWithTheme(<SelectWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Позволяет скрыть helperText', () => {
    renderWithTheme(<Select helperText="helper text" hideHelperText />);
    expect(screen.queryByText('helper text')).toBeNull();
  });

  it('Отображает helperText в состоянии ошибки', () => {
    renderWithTheme(<Select helperText="helper text" error />);
    expect(screen.getByText('helper text')).toBeInTheDocument();
  });

  it('Отображает helperText в состоянии success', () => {
    renderWithTheme(<Select helperText="helper text" success />);
    expect(screen.getByText('helper text')).toBeInTheDocument();
  });

  it('Отображает label', () => {
    renderWithTheme(<Select label="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('Отображает placeholder', () => {
    renderWithTheme(<Select value="" placeholder="placeholder" />);
    expect(screen.getByText('placeholder')).toBeInTheDocument();
  });

  it('Отображает placeholder noData, если нет ни одного option', () => {
    renderWithTheme(
      <Select value="" defaultOpen>
        {[]}
      </Select>,
    );

    expect(screen.getByText('Нет данных')).toBeInTheDocument();
  });

  it('Отображает состояние загрузки', () => {
    renderWithTheme(
      <Select loading value="" defaultOpen>
        {[]}
      </Select>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('Отображает выбранные значения, если  value не пустое', () => {
    const children = [
      { value: '1', name: 'Name 1' },
      { value: '2', name: 'Name 2' },
      { value: '3', name: 'Name 3' },
    ];
    const getOptionLabel = (selectedOption: string | number) => {
      return (
        children.find((child) => child.value === selectedOption)?.name || ''
      );
    };

    renderWithTheme(
      <Select
        value={['1', '3']}
        placeholder="placeholder"
        multiple
        getOptionLabel={getOptionLabel}
      >
        {[
          { value: '1', name: 'Name 1' },
          { value: '2', name: 'Name 2' },
          { value: '3', name: 'Name 3' },
        ].map((child) => (
          <MenuItem key={child.value}>{child.value}</MenuItem>
        ))}
      </Select>,
    );

    ['Name 1', 'Name 3'].map((resultValue) =>
      expect(screen.getByText(resultValue)).toBeInTheDocument(),
    );
  });

  it('Рендерит пустой инпут, если значения не выбраны', () => {
    const children = [
      { value: '1', name: 'Name 1' },
      { value: '2', name: 'Name 2' },
      { value: '3', name: 'Name 3' },
    ];
    const getOptionLabel = (selectedOption: string | number) => {
      return (
        children.find((child) => child.value === selectedOption)?.name || ''
      );
    };

    renderWithTheme(
      <Select
        value={[]}
        placeholder="placeholder"
        multiple
        getOptionLabel={getOptionLabel}
      >
        {[
          { value: '1', name: 'Name 1' },
          { value: '2', name: 'Name 2' },
          { value: '3', name: 'Name 3' },
        ].map((child) => (
          <MenuItem key={child.value}>{child.value}</MenuItem>
        ))}
      </Select>,
    );

    ['Name 1', 'Name 2', 'Name 3'].map((resultValue) =>
      expect(screen.queryByText(resultValue)).not.toBeInTheDocument(),
    );
  });
});
