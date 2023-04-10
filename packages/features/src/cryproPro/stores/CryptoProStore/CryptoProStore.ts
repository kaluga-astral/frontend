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
import {
  WorkspaceSetupService,
  createWorkspaceSetupService,
} from '../../services/WorkspaceSetupService';

/**
 * @description Стор для сертификатов и методов КриптоПро
 * */
export class CryptoProStore {
  /**
   * @description Флаг проверки плагина
   * */
  public isPluginChecked: boolean = false;

  /**
   * @description Флаг установки плагина
   * */
  public isPluginInstalled: boolean = false;

  /**
   * @description Список сертификатов
   * */
  public certificateList: Certificate[] = [];

  /**
   * @description Форматированный список сертификатов
   * */
  public formatedCertificateList: FormatedCertificate[] = [];

  /**
   * @description Сертификат, найденный по Skid
   * */
  public certificateBySkid: Certificate = {} as Certificate;

  private static instance: CryptoProStore | null = null;

  private workspaceSetupStore: WorkspaceSetupService =
    {} as WorkspaceSetupService;

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
    this.workspaceSetupStore = createWorkspaceSetupService();
    this.cryptoProCertificateService = new CryptoProCertificateService();
    this.cryptoProSignService = new CryptoProSignService();
    makeAutoObservable(this, {}, { autoBind: true });
  }

  /**
   * @description Метод проверки плагина
   * */
  public checkWorkspace = async () => {
    this.isPluginChecked = true;

    return (this.isPluginInstalled = await (
      await this.workspaceSetupStore.checkWorkspace()
    ).isPluginInstalled);
  };

  /**
   * @description Метод получения списка сертификатов
   * */
  public getCertificateList = async () => {
    this.certificateList =
      await this.cryptoProCertificateService.getCertificateList();
  };

  /**
   * @description Метод получения сертификата по skid
   * */
  public getCertificateBySkid = async (skid: string) => {
    this.certificateBySkid =
      await this.cryptoProCertificateService.getCertificateBySkid(skid);
  };

  /**
   * @description Метод фильтрации списка сертификатов
   * */
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

  /**
   * @description Метод форматирования списка сертификатов
   * */
  public formatCertificateList = (certificates: Certificate[]) => {
    this.formatedCertificateList =
      this.cryptoProCertificateService.formatCertificateList(certificates);
  };

  /**
   * @description Метод подписания в формате CMS
   * @param certificate сертификат пользователя
   * @param fileBuffer данные для подписания в виде массива байт либо в формате Base64 строки
   * @param detach присоединять подпись к данным или отдельно?
   * @param includeCertChain включать в результат всю цепочку?
   * */
  public signCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    detach?: boolean,
    includeCertChain?: boolean,
  ) => {
    return this.cryptoProSignService.signCms(
      certificate,
      fileBuffer,
      detach,
      includeCertChain,
    );
  };

  /**
   * @description Метод подписания хэша указанным сертификатом в формате CMS
   * @param certificate сертификат пользователя
   * @param data данные для подписания в виде массива байт хэша либо сам хэш в формате hex строки (в любом регистре)
   * * @param includeCertChain включать в результат всю цепочку?
   * */
  public signHashCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    includeCertChain?: boolean,
  ) => {
    return this.cryptoProSignService.signHashCms(
      certificate,
      fileBuffer,
      includeCertChain,
    );
  };

  /**
   * @description Метод подписания указанным сертификатом в формате XmlDSig
   * @param certificate сертификат пользователя
   * @param data данные для подписания в виде массива байт либо в формате Base64 строки
   * @param xmlSignatureType тип xml подписи
   * */
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

  /**
   * @description Метод расшифровки данных
   * @param encryptedData данные для расшифрования в виде массива байт либо в формате Base64 строки
   * */
  public decryptCms = async (fileBuffer: ArrayBuffer) => {
    return this.cryptoProSignService.decryptCms(fileBuffer);
  };
}
