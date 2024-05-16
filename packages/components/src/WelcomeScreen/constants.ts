export const LOADING_DISPLAY_DELAY_MS = 300;

export const FIRST_STEP_DURATION_MS = 1400;

export const LAST_STEP_DURATION_MS = 2100;

export const ALL_DURATION_MS = FIRST_STEP_DURATION_MS + LAST_STEP_DURATION_MS;

// Используется для расчета скорости показа текста на втором шаге
// %-е отношение к общей продолжительности показа второго шага
const TEXT_RELATIVE_DURATION_IN_LAST_STEP = 0.2;

export const APPEAR_DURATION_TEXT_IN_LAST_STEP_MS =
  LAST_STEP_DURATION_MS * TEXT_RELATIVE_DURATION_IN_LAST_STEP;

export const SESSION_KEY = 'astralui-session';
