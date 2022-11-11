import { colord } from 'colord';

export const hexToRgb = (hex: string): string => colord(hex).toRgbString();
