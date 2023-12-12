import { vi } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { CheckableTag } from './CheckableTag';

describe('CheckableTag', () => {
  it('Ref доступен', () => {
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

  it('Тэг блокируется при disabled=true', () => {
    renderWithTheme(<CheckableTag disabled />);

    const tag = screen.getByRole('checkbox', { hidden: true });

    expect(tag).toBeDisabled();
  });

  it('onChange вызывается при нажатии на тэг', async () => {
    const label = 'Тег';
    const onChange = vi.fn();

    renderWithTheme(<CheckableTag label={label} onChange={onChange} />);
    await userEvents.click(screen.getByText(label));
    expect(onChange).toHaveBeenCalled();
  });
});
