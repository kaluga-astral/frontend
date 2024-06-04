import React, { useEffect, useState } from 'react';

let globalId = 0;

function useGlobalId(idOverride?: string): string | undefined {
  const [defaultId, setDefaultId] = useState(idOverride);
  const id = idOverride || defaultId;

  useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);

  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const maybeReactUseId: undefined | (() => string) = (React as any)[
  'useId'.toString()
];

/**
 * Хук не предназначен для экспорта из пакета и необходим для решения проблемы совместимости с React 17.
 * Реализация скопирована из mui, так как из пакета она экспортируется с префиксом unstable:
 * import { unstable_useId } from '@mui/material';
 * https://github.com/mui/material-ui/blob/next/packages/mui-utils/src/useId/useId.ts
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
export default function useId(idOverride?: string): string | undefined {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();

    return idOverride ?? reactId;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}
