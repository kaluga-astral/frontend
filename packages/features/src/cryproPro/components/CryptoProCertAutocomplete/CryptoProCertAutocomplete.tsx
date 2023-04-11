import { Certificate } from '@astral/cryptopro-cades';
import { Autocomplete, AutocompleteProps } from '@astral/ui';

import { CertificatesOptions } from './CertificatesRenderOptions';

type AutocompleteFreeSoloValueMapping<FreeSolo> = FreeSolo extends true
  ? string
  : never;

/**
 * @description Autocomplete с сертификатами
 */
export const CryptoProCertAutocomplete = <
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  props: AutocompleteProps<Certificate, Multiple, DisableClearable, FreeSolo>,
) => {
  const getOptionLabel = (
    option: Certificate | AutocompleteFreeSoloValueMapping<FreeSolo>,
  ) =>
    props.getOptionLabel
      ? props.getOptionLabel(option)
      : ((option as Certificate).subject.commonName as string);

  return (
    <Autocomplete
      {...props}
      renderOption={CertificatesOptions()}
      getOptionLabel={getOptionLabel}
    />
  );
};
