import { type Certificate } from '@astral/cryptopro-cades';

import { getCertificateExpiresDate } from '../../../../services';
import { CertificateType } from '../../../../constants';

type CertificateShortInfo = {
  notAfter: string | null;
  subjectKeyId: string | null;
  name: string | null;
  ownerName: string | null;
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
    ownerName: `${certificate.subject.surname} ${certificate.subject.name}`,
    inn: certificate.subject.innLe || certificate.subject.inn,
    type: isCertificateTypeLegal
      ? CertificateType.LegalEntity
      : сertificateTypeIfNotLegal,
  };
};
