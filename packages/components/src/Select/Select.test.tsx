import { renderWithTheme, screen } from '@astral/tests';
import { describe } from 'vitest';
import { useEffect, useRef } from 'react';

import { MenuItem } from '../MenuItem';

import { Select } from './Select';

describe('Select', () => {
  it('Prop:ref: is present', () => {
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

  it('Props:hideHelperText=true: helperText не отображается', () => {
    renderWithTheme(<Select helperText="helper text" hideHelperText />);
    expect(screen.queryByText('helper text')).toBeNull();
  });

  it('Props:error, helperText: отображается статус error и helperText', () => {
    renderWithTheme(<Select helperText="helper text" error />);
    expect(screen.getByText('helper text')).toBeInTheDocument();
  });

  it('Props:success, helperText: отображается статус success и helperText', () => {
    renderWithTheme(<Select helperText="helper text" success />);
    expect(screen.getByText('helper text')).toBeInTheDocument();
  });

  it('Props:label: отображается label', () => {
    renderWithTheme(<Select label="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('Props:placeholder: отображается placeholder', () => {
    renderWithTheme(<Select value="" placeholder="placeholder" />);
    expect(screen.getByText('placeholder')).toBeInTheDocument();
  });

  it('Props:isNoData: отображается isNoData', () => {
    renderWithTheme(
      <Select value="" defaultOpen>
        {[]}
      </Select>,
    );

    expect(screen.getByText('Нет данных')).toBeInTheDocument();
  });

  it('Props:loading: отображается loading', () => {
    renderWithTheme(
      <Select loading value="" defaultOpen>
        {[]}
      </Select>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it.each([
    [
      ['1', '3'],
      [
        { value: '1', name: 'Name 1' },
        { value: '2', name: 'Name 2' },
        { value: '3', name: 'Name 3' },
      ],
      ['Name 1', 'Name 3'],
    ],
    [
      [],
      [
        { value: '1', name: 'Name 1' },
        { value: '2', name: 'Name 2' },
        { value: '3', name: 'Name 3' },
      ],
      ['Name 1', 'Name 2', 'Name 3'],
    ],
  ])(
    'Props:renderValue: правильно отрабатывает renderValue',
    (value, children, result) => {
      const getOptionLabel = (selectedOption: string | number) => {
        return (
          children.find((child) => child.value === selectedOption)?.name || ''
        );
      };

      renderWithTheme(
        <Select
          value={value}
          placeholder="placeholder"
          multiple
          getOptionLabel={getOptionLabel}
        >
          {children.map((child) => (
            <MenuItem key={child.value}>{child.value}</MenuItem>
          ))}
        </Select>,
      );

      result.map((resultValue) => {
        if (value.length) {
          expect(screen.getByText(resultValue)).toBeInTheDocument();
        } else {
          expect(screen.queryByText(resultValue)).not.toBeInTheDocument();
        }
      });
    },
  );
});
