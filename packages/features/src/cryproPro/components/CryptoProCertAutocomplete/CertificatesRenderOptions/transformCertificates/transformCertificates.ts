import { Certificate } from '@astral/cryptopro-cades';

import { getCertificateExpiresDate } from '../../../../services/CryptoProCertificateService/utils';
import { CertificateType } from '../../types';

type CertificateShortInfo = {
  notAfter: string;
  subjectKeyId: string | null;
  name: string | null;
  inn: string | null;
  type: CertificateType;
};

export const transformCertificate = (
  certificate: Certificate,
): CertificateShortInfo => {
  return {
    notAfter: getCertificateExpiresDate(certificate.notAfter),
    subjectKeyId: certificate.subjectKeyId,
    name: certificate.subject.commonName,
    inn: certificate.subject.innLe || certificate.subject.inn,
    type: certificate.subject.innLe
      ? CertificateType.LegalEntity
      : certificate.subject.ogrnip
      ? CertificateType.SoleTrader
      : CertificateType.Individual,
  };
};
