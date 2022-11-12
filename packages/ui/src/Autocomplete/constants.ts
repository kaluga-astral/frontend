import { generateTestID } from '../utils';

export const DEFAULT_AUTOCOMPLETE_ELEMENT_ROWS_COUNT = 2;

export const AUTOCOMPLETE_TEST_ID_MAP = {
  root: generateTestID('autocomplete'),
  input: generateTestID('autocomplete', 'input'),
  optionCheckbox: generateTestID('autocomplete', 'option', 'checkbox'),
  tag: generateTestID('autocomplete', 'tag'),
  option: generateTestID('autocomplete', 'option'),
} as const;
