import { type CSSProperties } from 'react';

import type { AlignVariant } from '../../types';

import {
  ALIGN_TO_JUSTIFY_CONTENT_MAP,
  DEFAULT_JUSTIFY_CONTENT,
} from './constants';

type JustifyContentVariant = CSSProperties['justifyContent'];

export const alignToJustifyContent = (
  align: AlignVariant | undefined,
): JustifyContentVariant => {
  if (!align) {
    return DEFAULT_JUSTIFY_CONTENT;
  }

  return ALIGN_TO_JUSTIFY_CONTENT_MAP[align] || DEFAULT_JUSTIFY_CONTENT;
};
