import { generateTestID } from '../utils';

export const DEFAULT_AUTOCOMPLETE_ELEMENT_ROWS_COUNT = 2;

export const AUTOCOMPLETE_TEST_ID = generateTestID('autocomplete');

export const AUTOCOMPLETE_INPUT_TEST_ID = generateTestID(
  'autocomplete',
  'input',
);

export const AUTOCOMPLETE_OPTION_CHECKBOX_TEST_ID = generateTestID(
  'autocomplete',
  'option',
  'checkbox',
);

export const AUTOCOMPLETE_TAG_TEST_ID = generateTestID('autocomplete', 'tag');
