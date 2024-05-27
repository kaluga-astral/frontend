import { describe, expect, it } from 'vitest';
import { type Certificate } from '@astral/cryptopro-cades';

import { CryptoProCertificateService } from './CryptoProCertificateService';
import { type FormatedCertificate } from './CryptoProCertificateService';

export const formatedCertificatesList: FormatedCertificate[] = [
  {
    type: 'ИП',
    title: 'Кузнецова Таисия Болеславовна',
    inn: '966785728532',
    owner: 'Кузнецова Т. Б.',
    skid: '91835696AEFD6AFD9AE5D504339BC510674C6E39',
    expires: '30.08.2032',
  },
  {
    type: 'ЮЛ',
    title: '_тест_Кордиант',
    inn: '9622038976',
    owner: 'Шестаков Д. Г.',
    skid: '9BAC1B50B2D987FC6C2903EC73F1DDD8694188CE',
    expires: '10.04.2024',
  },
];

export const certificatesList: Certificate[] = [
  {
    subject: {
      commonName: 'Кузнецова Таисия Болеславовна',
      surname: 'Кузнецова',
      name: 'Таисия Болеславовна',
      country: 'RU',
      region: 'Ханты-Мансийский АО',
      locality: 'клх Усть-Ишим',
      street: 'бул. Зои Космодемьянской, д. 366 стр. 78',
      ogrnip: '318389344539622',
      snils: '96147439743',
      inn: '966785728532',
      email: 'gorbunovaregina@example.org',
      ogrn: null,
      innLe: null,
      organization: null,
      department: null,
      post: null,
    },
    issuer: {
      commonName: 'CRYPTO-PRO Test Center 2',
      inn: null,
      innLe: null,
    },
    thumbprint: 'B5F3C0ED1B2A589F9C8673AAC6491A0981913ADD',
    notBefore: new Date('2022-05-30T10:03:12.000Z'),
    notAfter: new Date('2032-08-30T10:13:12.000Z'),
    subjectName:
      'ОГРНИП=318389344539622, CN=Кузнецова Таисия Болеславовна, C=RU, G=Таисия Болеславовна, SN=Кузнецова, СНИЛС=96147439743, S=Ханты-Мансийский АО, L=клх Усть-Ишим, E=gorbunovaregina@example.org, STREET="бул. Зои Космодемьянской, д. 366 стр. 78", ИНН=966785728532',
    subjectKeyId: '91835696AEFD6AFD9AE5D504339BC510674C6E39',
    certificateBase64Data:
      /* cspell:disable-next-line */
      'MIIE9zCCBKagAwIBAgITEgBe8fOVQaR3CDtTngABAF7x8zAIBgYqhQMCAgMwfzEj\r\nMCEGCSqGSIb3DQEJARYUc3VwcG9ydEBjcnlwdG9wcm8ucnUxCzAJBgNVBAYTAlJV\r\nMQ8wDQYDVQQHEwZNb3Njb3cxFzAVBgNVBAoTDkNSWVBUTy1QUk8gTExDMSEwHwYD\r\nVQQDExhDUllQVE8tUFJPIFRlc3QgQ2VudGVyIDIwHhcNMjIwNTMwMTAwMzEyWhcN\r\nMjIwODMwMTAxMzEyWjCCAbcxGjAYBggqhQMDgQMBARIMOTY2Nzg1NzI4NTMyMUow\r\nSAYDVQQJDEHQsdGD0LsuINCX0L7QuCDQmtC+0YHQvNC+0LTQtdC80YzRj9C90YHQ\r\nutC+0LksINC0LiAzNjYg0YHRgtGALiA3ODEqMCgGCSqGSIb3DQEJARYbZ29yYnVu\r\nb3ZhcmVnaW5hQGV4YW1wbGUub3JnMSEwHwYDVQQHDBjQutC70YUg0KPRgdGC0Ywt\r\n0JjRiNC40LwxLTArBgNVBAgMJNCl0LDQvdGC0Yst0JzQsNC90YHQuNC50YHQutC4\r\n0Lkg0JDQnjEWMBQGBSqFA2QDEgs5NjE0NzQzOTc0MzEbMBkGA1UEBAwS0JrRg9C3\r\n0L3QtdGG0L7QstCwMS4wLAYDVQQqDCXQotCw0LjRgdC40Y8g0JHQvtC70LXRgdC7\r\n0LDQstC+0LLQvdCwMQswCQYDVQQGEwJSVTFBMD8GA1UEAww40JrRg9C30L3QtdGG\r\n0L7QstCwINCi0LDQuNGB0LjRjyDQkdC+0LvQtdGB0LvQsNCy0L7QstC90LAxGjAY\r\nBgUqhQNkBRIPMzE4Mzg5MzQ0NTM5NjIyMGYwHwYIKoUDBwEBAQEwEwYHKoUDAgIk\r\nAAYIKoUDBwEBAgIDQwAEQCO/cqWQDtuCyTDzXV1xHp0hdVlQQwmgzFh6cZ2t6kzk\r\nC+tE1rp2vpi0GINw3h4mx+Noxgy6/t7WJVY7c9tdFU6jggG6MIIBtjAOBgNVHQ8B\r\nAf8EBAMCBPAwGQYJKoZIhvcNAQkPBAwwCjAIBgYqhQMCAhUwHQYDVR0lBBYwFAYI\r\nKwYBBQUHAwIGCCsGAQUFBwMEMB0GA1UdIAQWMBQwCAYGKoUDZHEBMAgGBiqFA2Rx\r\nAjAdBgNVHQ4EFgQUkYNWlq79av2a5dUEM5vFEGdMbjkwHwYDVR0jBBgwFoAUToM+\r\nFGnv7F16lStfEf43MhZJVSswXAYDVR0fBFUwUzBRoE+gTYZLaHR0cDovL3Rlc3Rj\r\nYS5jcnlwdG9wcm8ucnUvQ2VydEVucm9sbC9DUllQVE8tUFJPJTIwVGVzdCUyMENl\r\nbnRlciUyMDIoMSkuY3JsMIGsBggrBgEFBQcBAQSBnzCBnDBkBggrBgEFBQcwAoZY\r\naHR0cDovL3Rlc3RjYS5jcnlwdG9wcm8ucnUvQ2VydEVucm9sbC90ZXN0LWNhLTIw\r\nMTRfQ1JZUFRPLVBSTyUyMFRlc3QlMjBDZW50ZXIlMjAyKDEpLmNydDA0BggrBgEF\r\nBQcwAYYoaHR0cDovL3Rlc3RjYS5jcnlwdG9wcm8ucnUvb2NzcC9vY3NwLnNyZjAI\r\nBgYqhQMCAgMDQQBUTN70+MchU7VIL9WLWkucmFq/99/FZJr4udD+vMgwNqTrG7LU\r\nUFL5pMYdRd+JDxHm6/qIawLOrN3WbCg5M2Hs\r\n',
    certificateBin: null,
    providerName: 'Crypto-Pro GOST R 34.10-2012 Cryptographic Service Provider',
    providerType: 80,
    hasPrivateKey: true,
    isGost: true,
    algorithm: '1.2.643.7.1.1.1.1',
  },
  {
    subject: {
      commonName: '_тест_Кордиант',
      surname: 'Шестаков',
      name: 'Доброслав Глебович',
      country: 'RU',
      region: 'Камчатский край',
      locality: 'с. Мичуринск',
      street: 'наб. Поселковая, д. 744 к. 458',
      post: 'Гидролог',
      ogrn: '5208280797313',
      snils: '29682610722',
      innLe: '9622038976',
      inn: '968971594488',
      email: 'suvorovparamon@example.org',
      ogrnip: null,
      organization: null,
      department: null,
    },
    issuer: {
      commonName: 'Тестовый АО КАЛУГА АСТРАЛ',
      inn: '4029017981',
      innLe: null,
    },
    thumbprint: '052241BCA8EC58174A3E7CC49AEC71FCC921C782',
    notBefore: new Date('2023-01-10T08:50:35.000Z'),
    notAfter: new Date('2024-04-10T09:00:35.000Z'),
    subjectName:
      'CN=_тест_Кордиант, O=_тест_Кордиант, L=с. Мичуринск, S=Камчатский край, C=RU, SN=Шестаков, G=Доброслав Глебович, T=Гидролог, ИНН=968971594488, СНИЛС=29682610722, ОГРН=5208280797313, E=suvorovparamon@example.org, ИНН ЮЛ=9622038976, STREET="наб. Поселковая, д. 744 к. 458"',
    subjectKeyId: '9BAC1B50B2D987FC6C2903EC73F1DDD8694188CE',
    certificateBase64Data:
      // cspell:disable-next-line
      'MIIIGjCCB8egAwIBAgIRAl95lACGr3qwSg+56yHWkC0wCgYIKoUDBwEBAwIwggEP\r\nMRgwFgYFKoUDZAESDTEwMjQwMDE0MzQwNDkxGjAYBggqhQMDgQMBARIMMDA0MDI5\r\nMDE3OTgxMQswCQYDVQQGEwJSVTEeMBwGA1UECAwVNDAg0JrQsNC70YPQttGB0LrQ\r\nsNGPMRkwFwYDVQQHDBDQsy4g0JrQsNC70YPQs9CwMSwwKgYDVQQJDCPQv9C10YAu\r\nINCi0LXRgNC10L3QuNC90YHQutC40Lkg0LQuNjEnMCUGA1UECgwe0JDQniDQmtCQ\r\n0JvQo9CT0JAg0JDQodCi0KDQkNCbMTgwNgYDVQQDDC/QotC10YHRgtC+0LLRi9C5\r\nINCQ0J4g0JrQkNCb0KPQk9CQINCQ0KHQotCg0JDQmzAeFw0yMzAxMTAwODUwMzVa\r\nFw0yNDA0MTAwOTAwMzVaMIIBzDE2MDQGA1UECQwt0L3QsNCxLiDQn9C+0YHQtdC7\r\n0LrQvtCy0LDRjywg0LQuIDc0NCDQui4gNDU4MRUwEwYFKoUDZAQSCjk2MjIwMzg5\r\nNzYxKTAnBgkqhkiG9w0BCQEWGnN1dm9yb3ZwYXJhbW9uQGV4YW1wbGUub3JnMRgw\r\nFgYFKoUDZAESDTUyMDgyODA3OTczMTMxFjAUBgUqhQNkAxILMjk2ODI2MTA3MjIx\r\nGjAYBggqhQMDgQMBARIMOTY4OTcxNTk0NDg4MRkwFwYDVQQMDBDQk9C40LTRgNC+\r\n0LvQvtCzMSwwKgYDVQQqDCPQlNC+0LHRgNC+0YHQu9Cw0LIg0JPQu9C10LHQvtCy\r\n0LjRhzEZMBcGA1UEBAwQ0KjQtdGB0YLQsNC60L7QsjELMAkGA1UEBhMCUlUxJjAk\r\nBgNVBAgMHdCa0LDQvNGH0LDRgtGB0LrQuNC5INC60YDQsNC5MR8wHQYDVQQHDBbR\r\ngS4g0JzQuNGH0YPRgNC40L3RgdC6MSMwIQYDVQQKDBpf0YLQtdGB0YJf0JrQvtGA\r\n0LTQuNCw0L3RgjEjMCEGA1UEAwwaX9GC0LXRgdGCX9Ca0L7RgNC00LjQsNC90YIw\r\nZjAfBggqhQMHAQEBATATBgcqhQMCAiQABggqhQMHAQECAgNDAARA198GaOv4e/UD\r\nFhSevuwzITC9rnVG433kDmwQpt+FGj8rpR7TOoHnc+cti/uqyM++wPp7lrneMRzb\r\nqOwH/8KkA6OCBDQwggQwMA4GA1UdDwEB/wQEAwID+DAdBgNVHSUEFjAUBggrBgEF\r\nBQcDAgYIKwYBBQUHAwQwHQYDVR0gBBYwFDAIBgYqhQNkcQEwCAYGKoUDZHECMCwG\r\nBSqFA2RvBCMMIdCh0JrQl9CYICLQmtGA0LjQv9GC0L7Qn9GA0L4gQ1NQIjAMBgUq\r\nhQNkcgQDAgEAMCcGCSsGAQQBgjcVCgQaMBgwCgYIKwYBBQUHAwIwCgYIKwYBBQUH\r\nAwQwUQYIKwYBBQUHAQEERTBDMEEGCCsGAQUFBzAChjVodHRwOi8vcmVnc2Vydmlj\r\nZS5rZXlkaXNrLnJ1L3Rlc3RjYS9yb290L3Rlc3RjYTEzLmNydDAfBgkrBgEEAYI3\r\nFQcEEjAQBggqhQMCAi4ACAIBAQIBADCCAUoGBSqFA2RwBIIBPzCCATsMU9Ch0JrQ\r\nl9CYICLQmtGA0LjQv9GC0L7Qn9Cg0J4gQ1NQIiAo0LLQtdGA0YHQuNGPIDQuMCkg\r\nKNC40YHQv9C+0LvQvdC10L3QuNC1IDIgLUJhc2UpDIGR0J/RgNC+0LPRgNCw0LzQ\r\nvNC90L4t0LDQv9C/0LDRgNCw0YLQvdGL0Lkg0LrQvtC80L/Qu9C10LrRgSAi0KPQ\r\ntNC+0YHRgtC+0LLQtdGA0Y/RjtGJ0LjQuSDRhtC10L3RgtGAICLQmtGA0LjQv9GC\r\n0L7Qn9GA0L4g0KPQpiIg0LLQtdGA0YHQuNC40LggMi4wIgwh0KHQpC8xMjQtMzM4\r\nMCDQvtGCIDExINC80LDRjyAyMDE4DC3QodCkLzEyOC0zNTkyINC+0YIgMTcg0L7Q\r\nutGC0Y/QsdGA0Y8gMjAxOCDQsy4wRQYDVR0fBD4wPDA6oDigNoY0aHR0cDovL3Jl\r\nZ3NlcnZpY2Uua2V5ZGlzay5ydS90ZXN0Y2EvY3JsL3Rlc3RjYTEzLmNybDCCAVEG\r\nA1UdIwSCAUgwggFEgBRj07CB78JgsUL8w2rFd2LLBc0Dy6GCARekggETMIIBDzEY\r\nMBYGBSqFA2QBEg0xMDI0MDAxNDM0MDQ5MRowGAYIKoUDA4EDAQESDDAwNDAyOTAx\r\nNzk4MTELMAkGA1UEBhMCUlUxHjAcBgNVBAgMFTQwINCa0LDQu9GD0LbRgdC60LDR\r\njzEZMBcGA1UEBwwQ0LMuINCa0LDQu9GD0LPQsDEsMCoGA1UECQwj0L/QtdGALiDQ\r\notC10YDQtdC90LjQvdGB0LrQuNC5INC0LjYxJzAlBgNVBAoMHtCQ0J4g0JrQkNCb\r\n0KPQk9CQINCQ0KHQotCg0JDQmzE4MDYGA1UEAwwv0KLQtdGB0YLQvtCy0YvQuSDQ\r\nkNCeINCa0JDQm9Cj0JPQkCDQkNCh0KLQoNCQ0JuCEQLUAIoAl640nEf/8T8srwn2\r\nMB0GA1UdDgQWBBSbrBtQstmH/GwpA+xz8d3YaUGIzjAKBggqhQMHAQEDAgNBAHFz\r\n7Y2Lswi2bItHcs4eIH9youmpfpObeIdnmdPZK1OLodfLeEYdxU4AzURwprtSXplS\r\n7X7eNneZqbl0jf3fQug=\r\n',
    certificateBin: null,
    providerName: 'Crypto-Pro GOST R 34.10-2012 Cryptographic Service Provider',
    providerType: 80,
    hasPrivateKey: true,
    isGost: true,
    algorithm: '1.2.643.7.1.1.1.1',
  },
];

describe('CryptoProCertificateService.getCerts', () => {
  const cryptoProCertificateService = new CryptoProCertificateService();

  it('Props:Skid: происходит поиск сертификата по ключу', async () => {
    const certificateBySkid =
      await cryptoProCertificateService.getCertificateBySkid(
        '91835696AEFD6AFD9AE5D504339BC510674C6E39',
        certificatesList,
      );

    expect(certificateBySkid).toEqual(certificatesList[0]);
  });

  it('Props:Skid: фильтрация списка по ключу', () => {
    const filteredCertificates =
      cryptoProCertificateService.filterCertificateList(certificatesList, [
        '91835696AEFD6AFD9AE5D504339BC510674C6E39',
      ]);

    expect(filteredCertificates).toEqual([certificatesList[0]]);
  });

  it('Props:certificates: происходит форматирование списка сертификатов', () => {
    const result =
      cryptoProCertificateService.formatCertificateList(certificatesList);

    expect(result).toStrictEqual(formatedCertificatesList);
  });
});
