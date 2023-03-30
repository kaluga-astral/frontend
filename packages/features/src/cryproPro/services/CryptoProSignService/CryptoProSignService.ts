import {
  CADESCOM_XML_SIGNATURE_TYPE,
  Certificate,
  decrypt,
  sign,
  signHash,
  signXml,
} from '@astral/cryptopro-cades';

export class CryptoProSignService {
  public signCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    detach?: boolean,
  ) => {
    return sign(certificate, fileBuffer, detach);
  };

  public signHashCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
  ) => {
    return signHash(certificate, fileBuffer);
  };

  public signXmlCms = async (
    certificate: Certificate,
    fileBuffer: ArrayBuffer,
    xmlSignatureType: CADESCOM_XML_SIGNATURE_TYPE,
  ) => {
    return signXml(certificate, fileBuffer, xmlSignatureType);
  };

  public decryptCms = async (fileBuffer: ArrayBuffer) => {
    return decrypt(fileBuffer);
  };
}
