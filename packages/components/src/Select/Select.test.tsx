import { renderWithTheme } from '@astral/tests';
import { describe, expect, it } from 'vitest';
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
});
