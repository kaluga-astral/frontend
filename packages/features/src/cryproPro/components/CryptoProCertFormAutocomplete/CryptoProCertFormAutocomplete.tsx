import { Certificate } from '@astral/cryptopro-cades';
import {
  AutocompleteProps,
  WithFormFieldProps,
  useFormController,
  useFormFieldErrorProps,
} from '@astral/ui';

import { CryptoProCertAutocomplete } from '../CryptoProCertAutocomplete';

export type CryptoProCertFormAutocompleteProps<
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
> = WithFormFieldProps<
  AutocompleteProps<Certificate, Multiple, DisableClearable, FreeSolo>,
  // eslint-disable-next-line
  any
>;

/**
 * @description Autocomplete с сертификатами для формы
 */
export const CryptoProCertFormAutocomplete = <
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
>(
  props: CryptoProCertFormAutocompleteProps<Multiple, DisableClearable>,
) => {
  const { field, fieldState } = useFormController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  return (
    <CryptoProCertAutocomplete
      {...field}
      {...props}
      {...errorProps}
      onChange={(_, value) => field.onChange(value)}
    />
  );
};
