import type {
  CADESCOM_XML_SIGNATURE_TYPE,
  Certificate,
} from '@astral/cryptopro-cades';
import { decrypt, sign, signHash, signXml } from '@astral/cryptopro-cades';

/**
 * @description Сервис для методов подписания КриптоПро
 * */
export class CryptoProSignService {
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
    return sign(certificate, fileBuffer, detach, includeCertChain);
  };

  /**
   * @description Метод подписания хэша указанным сертификатом в формате CMS
   * @param certificate сертификат пользователя
   * @param data данные для подписания в виде массива байт хэша либо сам хэш в формате hex строки (в любом регистре)
   * @param includeCertChain включать в результат всю цепочку?
   * */
  public signHashCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    includeCertChain?: boolean,
  ) => {
    return signHash(certificate, fileBuffer, includeCertChain);
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
    return signXml(certificate, fileBuffer, xmlSignatureType);
  };

  /**
   * @description Метод расшифровки данных
   * @param encryptedData данные для расшифрования в виде массива байт либо в формате Base64 строки
   * */
  public decryptCms = async (fileBuffer: ArrayBuffer) => {
    return decrypt(fileBuffer);
  };
}
