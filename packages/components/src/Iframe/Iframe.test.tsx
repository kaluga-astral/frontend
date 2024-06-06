import { describe, expect, it, vi } from 'vitest';
import { act, renderWithTheme, screen } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { Iframe } from './Iframe';

describe('Iframe', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const IframeWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Iframe ref={ref} src="https://example.com" />;
    };

    renderWithTheme(<IframeWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Атрибут src соответствует переданному', () => {
    renderWithTheme(<Iframe title="test iframe" src="https://example.com" />);

    const iframe = screen.getByTitle('test iframe');

    expect(iframe).toHaveAttribute('src', 'https://example.com');
  });

  it('Sandbox не применяется, если указать пустую строку', () => {
    renderWithTheme(
      <Iframe title="test iframe" sandbox="" src="https://example.com" />,
    );

    const iframe = screen.getByTitle('test iframe');

    expect(iframe).not.toHaveAttribute('sandbox');
  });

  it('onError вызывается при ошибке', async () => {
    const onErrorSpy = vi.fn();

    renderWithTheme(
      <Iframe
        title="test iframe"
        src="https://example.com"
        onError={onErrorSpy}
      />,
    );

    const iframe: HTMLIFrameElement = screen.getByTitle('test iframe');

    act(() => {
      iframe.dispatchEvent(new ErrorEvent('error'));
    });

    expect(onErrorSpy).toHaveBeenCalled();
  });
});
