import { CertificateType } from '../../../../constants';

const IP_INN_LENGTH = 12;

const isIPINN = (inn: string | null) => inn?.length === IP_INN_LENGTH;

export const getCertificateType = (inn: string | null, ogrn: string | null) => {
  if (isIPINN(inn)) {
    if (ogrn) {
      return CertificateType.SoleTrader;
    }

    return CertificateType.Individual;
  }

  return CertificateType.LegalEntity;
};
