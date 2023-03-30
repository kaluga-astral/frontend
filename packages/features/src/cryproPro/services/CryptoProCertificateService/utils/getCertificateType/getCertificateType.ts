const IP_INN_LENGTH = 12;

export const getCertificateType = (inn: string | null, ogrn: string | null) => {
  if (inn?.length === IP_INN_LENGTH) {
    if (ogrn) {
      return 'ИП';
    }

    return 'ФЛ';
  }

  return 'ЮЛ';
};
