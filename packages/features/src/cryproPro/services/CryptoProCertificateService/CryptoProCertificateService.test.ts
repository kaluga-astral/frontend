import { certificatesList, formatedCertificatesList } from './constants';
import { CryptoProCertificateService } from './CryptoProCertificateService';

describe('CryptoProCertificateService.getCerts', () => {
  const cryptoProCertificateService = new CryptoProCertificateService();

  it('Props:Skid: происходит поиск сертификата по ключу', async () => {
    const certificateBySkid =
      await cryptoProCertificateService.getCertificateBySkid(
        '91835696AEFD6AFD9AE5D504339BC510674C6E39',
      );

    expect(certificateBySkid).toEqual(certificatesList[0]);
  });

  it('Props:Skid: поиск фильтрация списка по ключу', () => {
    const filteredCertificates =
      cryptoProCertificateService.filterCertificateList(certificatesList, [
        '91835696AEFD6AFD9AE5D504339BC510674C6E39',
      ]);

    expect(filteredCertificates).toEqual([certificatesList[0]]);
  });

  it('Props:certificates: происходит форматирование списка сертификатов', () => {
    const result =
      cryptoProCertificateService.formatCertificateList(certificatesList);

    expect(result).toEqual(formatedCertificatesList);
  });
});
