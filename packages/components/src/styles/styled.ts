import { default as emotionStyled } from '@emotion/styled';

export { keyframes, Global } from '@emotion/react';

export const styled = new Proxy(emotionStyled, {
  apply: (target, _thisArg, argArray) =>
    target(argArray[0], {
      ...argArray[1],
      shouldForwardProp: (prop) =>
        !prop.match(/^\$/) || argArray[1]?.shouldForwardProp?.(prop),
    }),
});
