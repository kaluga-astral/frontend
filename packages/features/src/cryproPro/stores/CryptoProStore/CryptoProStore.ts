import {
  CADESCOM_XML_SIGNATURE_TYPE,
  Certificate,
} from '@astral/cryptopro-cades';
import { makeAutoObservable } from 'mobx';

import {
  CryptoProCertificateService,
  CryptoProSignService,
  FormatedCertificate,
} from '../../services';

export class CryptoProStore {
  public certificateList: Certificate[] = [];

  public formatedCertificateList: FormatedCertificate[] = [];

  public certificateBySkid: Certificate = {} as Certificate;

  private static instance: CryptoProStore | null = null;

  private cryptoProCertificateService: CryptoProCertificateService =
    {} as CryptoProCertificateService;

  private cryptoProSignService: CryptoProSignService =
    {} as CryptoProSignService;

  constructor() {
    // делаем из класса singleton
    if (CryptoProStore.instance) {
      return CryptoProStore.instance;
    }

    CryptoProStore.instance = this;
    this.cryptoProCertificateService = new CryptoProCertificateService();
    this.cryptoProSignService = new CryptoProSignService();
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public getCertificateList = async () => {
    this.certificateList =
      await this.cryptoProCertificateService.getCertificateList();
  };

  public getCertificateBySkid = async (skid: string) => {
    this.certificateBySkid =
      await this.cryptoProCertificateService.getCertificateBySkid(skid);
  };

  public filterCertificateList = (
    certificates: Certificate[],
    certificateSelectors?: string[],
  ) => {
    this.certificateList =
      this.cryptoProCertificateService.filterCertificateList(
        certificates,
        certificateSelectors,
      );
  };

  public formatCertificateList = (certificates: Certificate[]) => {
    this.formatedCertificateList =
      this.cryptoProCertificateService.formatCertificateList(certificates);
  };

  public signCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    detach?: boolean,
  ) => {
    return this.cryptoProSignService.signCms(certificate, fileBuffer, detach);
  };

  public signHashCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
  ) => {
    return this.cryptoProSignService.signHashCms(certificate, fileBuffer);
  };

  public signXmlCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    xmlSignatureType: CADESCOM_XML_SIGNATURE_TYPE,
  ) => {
    return this.cryptoProSignService.signXmlCms(
      certificate,
      fileBuffer,
      xmlSignatureType,
    );
  };

  public decryptCms = async (fileBuffer: ArrayBuffer) => {
    return this.cryptoProSignService.decryptCms(fileBuffer);
  };
}
