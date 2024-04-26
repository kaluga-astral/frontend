import {
  type CADESCOM_XML_SIGNATURE_TYPE,
  type Certificate,
} from '@astral/cryptopro-cades';
import { makeAutoObservable } from 'mobx';

import {
  CryptoProCertificateService,
  CryptoProSignService,
  type FormatedCertificate,
} from '../../services';
import {
  type CheckWorkspace,
  type WorkspaceSetupService,
  createWorkspaceSetupService,
} from '../../services/WorkspaceSetupService';
import { type FileData } from '../../types';

/**
 * @description Стор для работы с сертификатами и выполнения криптоопераций. Является фасадом для сервисом КриптоПро
 * */
export class CryptoProStore {
  /**
   * @description Флаг для открытия окна настройки рабочего места
   * */
  public isRequestSetupWorkspace: boolean = false;

  /**
   * @description Флаг установки плагина
   * */
  public isPluginInstalled: boolean = false;

  /**
   * @description Список сертификатов
   * */
  public certificateList: Certificate[] = [];

  /**
   * @description Список сертификатов приведенный к интерфейсу FormatedCertificate
   * */
  public formatedCertificateList: FormatedCertificate[] = [];

  /**
   * @description Сертификат, найденный по Skid
   * */
  public certificateBySkid?: Certificate = {} as Certificate;

  /**
   * @description Информация о настройках рабочего места
   * */
  public workspaceSetupInfo: CheckWorkspace = {} as CheckWorkspace;

  private static instance: CryptoProStore | null = null;

  private workspaceSetupService: WorkspaceSetupService =
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
    this.workspaceSetupService = createWorkspaceSetupService();
    this.cryptoProCertificateService = new CryptoProCertificateService();
    this.cryptoProSignService = new CryptoProSignService();
    makeAutoObservable(this, {}, { autoBind: true });
  }

  /**
   * @description Метод проверки настройки рабочего места
   * */
  public checkWorkspace = async () => {
    this.workspaceSetupInfo = await this.workspaceSetupService
      .checkWorkspace()
      .finally(() => (this.isRequestSetupWorkspace = true));

    this.isPluginInstalled = this.workspaceSetupInfo.isPluginInstalled;
  };

  /**
   * @description Метод сброса флага для открытия окна настройки рабочего места
   * */
  public resetIsRequestSetupWorkspace = async () => {
    this.isRequestSetupWorkspace = false;
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
   * @description Метод фильтрации списка сертификатов по ключам: subjectKeyId, innLe, inn
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
   * @description Метод приведения списка сертификатов к интерфейсу FormatedCertificate
   * * @param certificates список сертификатов
   * */
  public formatCertificateList = (certificates: Certificate[]) => {
    this.formatedCertificateList =
      this.cryptoProCertificateService.formatCertificateList(certificates);
  };

  /**
   * @description Метод подписания в формате CMS
   * @param certificate сертификат пользователя
   * @param fileData данные для подписания в виде массива байт либо, в формате Base64 строки
   * @param detach присоединять подпись к данным или отдельно?
   * @param includeCertChain включать в результат всю цепочку?
   * */
  public signCms = async (
    certificate: Certificate,
    fileData: FileData,
    detach?: boolean,
    includeCertChain?: boolean,
  ) => {
    return this.cryptoProSignService.signCms(
      certificate,
      fileData,
      detach,
      includeCertChain,
    );
  };

  /**
   * @description Метод подписания хэша указанным сертификатом в формате CMS
   * @param certificate сертификат пользователя
   * @param fileData данные для подписания в виде массива байт хэша, либо сам хэш в формате hex строки (в любом регистре)
   * @param includeCertChain включать в результат всю цепочку?
   * */
  public signHashCms = async (
    certificate: Certificate,
    fileData: FileData,
    includeCertChain?: boolean,
  ) => {
    return this.cryptoProSignService.signHashCms(
      certificate,
      fileData,
      includeCertChain,
    );
  };

  /**
   * @description Метод подписания указанным сертификатом в формате XmlDSig
   * @param certificate сертификат пользователя
   * @param fileData данные для подписания в виде массива байт, либо в формате Base64 строки
   * @param xmlSignatureType тип xml подписи
   * */
  public signXmlCms = async (
    certificate: Certificate,
    fileData: FileData,
    xmlSignatureType: CADESCOM_XML_SIGNATURE_TYPE,
  ) => {
    return this.cryptoProSignService.signXmlCms(
      certificate,
      fileData,
      xmlSignatureType,
    );
  };

  /**
   * @description Метод расшифровки данных
   * @param fileData данные для расшифрования в виде массива байт, либо в формате Base64 строки
   * */
  public decryptCms = async (fileData: FileData) => {
    return this.cryptoProSignService.decryptCms(fileData);
  };
}
