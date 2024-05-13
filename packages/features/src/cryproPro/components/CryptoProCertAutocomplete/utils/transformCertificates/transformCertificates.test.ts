import { transformCertificate } from './transformCertificates';

describe('transformCertificate', () => {
  const originalCertificate = {
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
    notAfter: new Date('2022-08-30T10:13:12.000Z'),
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
  };
  const transformedCertificate = {
    inn: '966785728532',
    name: 'Кузнецова Таисия Болеславовна',
    notAfter: '30.08.2022',
    ownerName: 'Кузнецова Таисия Болеславовна',
    subjectKeyId: '91835696AEFD6AFD9AE5D504339BC510674C6E39',
    type: 'ИП',
  };

  it('Props:certificate: приведение сертификата к типу CertificateShortInfo', async () => {
    const resultCertificate = transformCertificate(originalCertificate);

    expect(resultCertificate).toStrictEqual(transformedCertificate);
  });
});
