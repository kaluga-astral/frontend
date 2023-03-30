import { Certificate } from '@astral/cryptopro-cades';
import {
  Autocomplete,
  AutocompleteProps,
  WithFormFieldProps,
  useFormController,
  useFormFieldErrorProps,
} from '@astral/ui';

import { CertificatesRenderOptions } from './CertificatesRenderOptions';

export type FormAutocompleteProps<
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
> = WithFormFieldProps<
  AutocompleteProps<Certificate, Multiple, DisableClearable, FreeSolo>,
  // eslint-disable-next-line
  any
>;

/**
 * @description CertAutocomplete для формы
 */
export const CryptoProCertAutocomplete = <
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
>(
  props: FormAutocompleteProps<Multiple, DisableClearable>,
) => {
  const { field, fieldState } = useFormController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  // eslint-disable-next-line
  const handleChange: any = (_: any, value: Certificate | Certificate[]) => {
    field.onChange(value);
  };

  return (
    <Autocomplete
      {...field}
      {...props}
      {...errorProps}
      onChange={handleChange}
      renderOption={CertificatesRenderOptions()}
    />
  );
};
