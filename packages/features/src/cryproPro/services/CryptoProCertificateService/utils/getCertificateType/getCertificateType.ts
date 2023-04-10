import { CertificateType } from '../../../../components/CryptoProCertAutocomplete/enums';

const IP_INN_LENGTH = 12;

export const getCertificateType = (inn: string | null, ogrn: string | null) => {
  if (inn?.length === IP_INN_LENGTH) {
    if (ogrn) {
      return CertificateType.SoleTrader;
    }

    return CertificateType.Individual;
  }

  return CertificateType.LegalEntity;
};
