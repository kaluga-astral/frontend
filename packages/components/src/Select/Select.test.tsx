import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, waitFor } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { MenuItem } from '../MenuItem';

import { Select } from './Select';

describe('Select', () => {
  it('Ref доступен', () => {
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

  describe('HelperText', () => {
    it('Скрывается, если hideHelperText=true', () => {
      renderWithTheme(<Select helperText="helper text" hideHelperText />);
      expect(screen.queryByText('helper text')).toBeNull();
    });

    it('Отображается в состоянии ошибки', () => {
      renderWithTheme(<Select helperText="helper text" error />);
      expect(screen.getByText('helper text')).toBeInTheDocument();
    });

    it('Отображается в состоянии success', () => {
      renderWithTheme(<Select helperText="helper text" success />);
      expect(screen.getByText('helper text')).toBeInTheDocument();
    });
  });

  it('Label отображается', () => {
    renderWithTheme(<Select label="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('Placeholder отображается', () => {
    renderWithTheme(<Select value="" placeholder="placeholder" />);
    expect(screen.getByText('placeholder')).toBeInTheDocument();
  });

  it('NoData placeholder отображается, если нет ни одного option', async () => {
    renderWithTheme(
      <Select value="" defaultOpen>
        {[]}
      </Select>,
    );

    await waitFor(() => {
      expect(screen.getByText('Нет данных')).toBeInTheDocument();
    });
  });

  it('Отображается лоадер в состоянии загрузки', () => {
    renderWithTheme(
      <Select loading value="" defaultOpen>
        {[]}
      </Select>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('Выбранные значения отображаются, если  value не пустое', () => {
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
        value={['1']}
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

    expect(screen.getByText('Name 1')).toBeInTheDocument();
  });

  it('Рендерится пустой инпут, если значения не выбраны', () => {
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
