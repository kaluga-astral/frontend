import { Certificate } from '@astral/cryptopro-cades';

import { getCertificateExpiresDate } from '../../../../../services';
import { CertificateType } from '../../../../../constants';

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
  const сertificateTypeIfNotLegal = certificate.subject.ogrnip
    ? CertificateType.SoleTrader
    : CertificateType.Individual;

  const isCertificateTypeLegal = certificate.subject.innLe;

  return {
    notAfter: getCertificateExpiresDate(certificate.notAfter),
    subjectKeyId: certificate.subjectKeyId,
    name: certificate.subject.commonName,
    inn: certificate.subject.innLe || certificate.subject.inn,
    type: isCertificateTypeLegal
      ? CertificateType.LegalEntity
      : сertificateTypeIfNotLegal,
  };
};
