export const getCertificateExpiresDate = (date: Date | null) => {
  if (!date) {
    return 'неизвестно';
  }

  return new Date(date).toLocaleDateString();
};
