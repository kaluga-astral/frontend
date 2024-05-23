import {
  type Certificate,
  STORE_TYPE,
  findCertificateBySkid,
  getCertificates,
} from '@astral/cryptopro-cades';

import {
  getCertificateExpiresDate,
  getCertificateOwnerShortName,
  getCertificateType,
} from './utils';

export type FormatedCertificate = {
  type: string;
  title: string;
  inn: string;
  owner: string | null;
  skid: string;
  expires: string | null;
};

/**
 * @description Сервис для сертификатов КриптоПро
 * */
export class CryptoProCertificateService {
  /**
   * @description Метод получения списка сертификатов
   * @param resetCache - сбросить кэш и произвести повторный поиск сертификатов
   * */
  public getCertificateList = (resetCache?: boolean) => {
    return getCertificates(STORE_TYPE.ALL, resetCache);
  };

  /**
   * @description Метод получения сертификата по skid
   * */
  public getCertificateBySkid = (
    skid: string,
    certificates?: Certificate[],
  ) => {
    return certificates?.length
      ? certificates.find((certificate) => certificate.subjectKeyId === skid)
      : (findCertificateBySkid(skid) as unknown as Promise<Certificate>);
  };

  /**
   * @description Метод фильтрации списка сертификатов по ключам: subjectKeyId, innLe, inn
   * */
  public filterCertificateList = (
    certificates: Certificate[],
    certificateSelectors?: string[],
  ) => {
    return certificates.filter((certificate) => {
      const isCertificateExpired =
        new Date(certificate.notAfter as Date).getTime() < new Date().getTime();
      // проверяем, пришел ли certificateSelector, если его нет - возвращаем true (отключаем фильтр по селектору)
      const filterByCertificateSelector = certificateSelectors
        ? certificateSelectors.some((certificateSelector) => {
            return (
              certificate.subjectKeyId === certificateSelector ||
              certificate.subject.innLe === certificateSelector ||
              certificate.subject.inn === certificateSelector
            );
          })
        : true;

      return (
        certificate.hasPrivateKey &&
        !isCertificateExpired &&
        filterByCertificateSelector
      );
    });
  };

  /**
   * @description Метод приведения списка сертификатов к интерфейсу FormatedCertificate
   * */
  public formatCertificateList = (
    certificates: Certificate[],
  ): FormatedCertificate[] => {
    return certificates.map((certificate) => {
      return {
        type: getCertificateType(
          certificate.subject.innLe || certificate.subject.inn,
          certificate.subject.ogrn || certificate.subject.ogrnip,
        ),
        title: certificate.subject.commonName || '',
        inn: certificate.subject.innLe || certificate.subject.inn || '',
        owner: getCertificateOwnerShortName(
          certificate.subject.surname,
          certificate.subject.name,
        ),
        skid: certificate.subjectKeyId || '',
        expires: getCertificateExpiresDate(certificate.notAfter),
      };
    });
  };
}
