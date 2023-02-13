import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it, vi } from 'vitest';
import { useEffect, useRef } from 'react';

import { CheckableTag } from './CheckableTag';

describe('CheckableTag', () => {
  it('Prop:ref: присутствует', () => {
    const resultRef = { current: null };

    const CheckableTagWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <CheckableTag ref={ref} />;
    };

    renderWithTheme(<CheckableTagWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:disabled: блокирует тег', () => {
    renderWithTheme(<CheckableTag disabled />);

    const tag = screen.getByRole('checkbox', { hidden: true });

    expect(tag).toBeDisabled();
  });

  it('Prop:onChange: вызывается', () => {
    const label = 'Тег';
    const obj = { onChange: () => {} };

    const spy = vi.spyOn(obj, 'onChange');

    renderWithTheme(<CheckableTag label={label} onChange={obj.onChange} />);
    screen.getByText(label)?.click();
    expect(spy).toHaveBeenCalled();
  });
});
