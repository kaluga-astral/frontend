export const getCertificateExpiresDate = (date: Date | null) => {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleDateString();
};
