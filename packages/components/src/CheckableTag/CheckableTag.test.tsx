import { vi } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

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

  it('Prop:onChange: вызывается', async () => {
    const label = 'Тег';
    const onChange = vi.fn();

    renderWithTheme(<CheckableTag label={label} onChange={onChange} />);
    await userEvents.click(screen.getByText(label));
    expect(onChange).toHaveBeenCalled();
  });
});
