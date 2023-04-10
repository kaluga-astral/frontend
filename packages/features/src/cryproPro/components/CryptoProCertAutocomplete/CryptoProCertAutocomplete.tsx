import { Certificate } from '@astral/cryptopro-cades';
import { Autocomplete, AutocompleteProps } from '@astral/ui';

import { CertificatesOptions } from './CertificatesRenderOptions';

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
  return <Autocomplete {...props} renderOption={CertificatesOptions()} />;
};
