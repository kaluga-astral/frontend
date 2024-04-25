import {
  type CADESCOM_XML_SIGNATURE_TYPE,
  type Certificate,
  decrypt,
  sign,
  signHash,
  signXml,
} from '@astral/cryptopro-cades';

import { type FileData } from '../../types';

/**
 * @description Сервис для методов подписания КриптоПро
 * */
export class CryptoProSignService {
  /**
   * @description Метод подписания в формате CMS
   * @param certificate сертификат пользователя
   * @param fileData данные для подписания в виде массива байт, либо в формате Base64 строки
   * @param detach присоединять подпись к данным или отдельно?
   * @param includeCertChain включать в результат всю цепочку?
   * */
  public signCms = async (
    certificate: Certificate,
    fileData: FileData,
    detach?: boolean,
    includeCertChain?: boolean,
  ) => {
    return sign(certificate, fileData, detach, includeCertChain);
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
    return signHash(certificate, fileData, includeCertChain);
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
    return signXml(certificate, fileData, xmlSignatureType);
  };

  /**
   * @description Метод расшифровки данных
   * @param fileData данные для расшифрования в виде массива байт, либо в формате Base64 строки
   * */
  public decryptCms = async (fileData: FileData) => {
    return decrypt(fileData);
  };
}
