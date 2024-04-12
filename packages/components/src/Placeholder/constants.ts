export const SIZE = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;

export const IMAGE_WIDTH = {
  [SIZE.Small]: '239px',
  [SIZE.Medium]: '323px',
  [SIZE.Large]: '458px',
};

export const IMAGE_HEIGHT = {
  [SIZE.Small]: '119px',
  [SIZE.Medium]: '161px',
  [SIZE.Large]: '229px',
};

export const MAX_INNER_WIDTH = {
  [SIZE.Small]: '384px',
  [SIZE.Medium]: '400px',
  [SIZE.Large]: '460px',
};

export const TITLE_HEADER_LEVEL = {
  [SIZE.Small]: 'h5',
  [SIZE.Medium]: 'h4',
  [SIZE.Large]: 'h3',
} as const;
