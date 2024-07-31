import { type Certificate } from '@astral/cryptopro-cades';
import { Autocomplete, type AutocompleteProps } from '@astral/ui';
import { type HTMLAttributes } from 'react';

import { AutocompleteListItem } from './AutocompleteListItem';
import { transformCertificate } from './utils';

interface AutocompleteRenderOptionState {
  inputValue: string;
  selected: boolean;
}

const CertificatesOptions =
  (disabled: boolean = false) =>
  (
    { className, ...restAttrs }: HTMLAttributes<HTMLLIElement>,
    params: Certificate,
    meta: AutocompleteRenderOptionState,
  ) => {
    const certificate = transformCertificate(params);

    return (
      <AutocompleteListItem
        {...restAttrs}
        key={certificate.subjectKeyId}
        title={certificate.name}
        sidetitle={certificate.ownerName}
        type={certificate.type}
        checked={meta.selected}
        inn={`ИНН: ${certificate.inn} `}
        notAfter={
          certificate.notAfter ? ` Действует до: ${certificate.notAfter}` : ''
        }
        disabled={disabled}
      />
    );
  };

type AutocompleteFreeSoloValueMapping<FreeSolo> = FreeSolo extends true
  ? string
  : never;

const defaultGetOptionLabel = (
  option: Certificate | AutocompleteFreeSoloValueMapping<boolean>,
) => (option as Certificate).subject.commonName as string;

/**
 * @description Autocomplete с сертификатами
 * @deprecated Используйте пакет @astral-private/crypto https://cryptodocs.astralnalog.ru/
 * Причина отказа от поддержки: поддержка функционала теперь осуществляется централизовано командой Астрал-Софт в закрытом контуре.
 */
export const CryptoProCertAutocomplete = <
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>({
  getOptionLabel = defaultGetOptionLabel,
  ...props
}: AutocompleteProps<Certificate, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <Autocomplete
      {...props}
      renderOption={CertificatesOptions()}
      getOptionLabel={getOptionLabel}
    />
  );
};
