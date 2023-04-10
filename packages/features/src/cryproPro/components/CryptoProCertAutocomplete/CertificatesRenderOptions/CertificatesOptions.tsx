import { Certificate } from '@astral/cryptopro-cades';
import { HTMLAttributes } from 'react';

import { AutocompleteListItem } from '../AutocompleteListItem';

import { transformCertificate } from './utils/transformCertificates';

interface AutocompleteRenderOptionState {
  inputValue: string;
  selected: boolean;
}

export const CertificatesOptions =
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
        type={certificate.type}
        checked={meta.selected}
        inn={`ИНН: ${certificate.inn} `}
        notAfter={` Действует до: ${certificate.notAfter}`}
        disabled={disabled}
      />
    );
  };
