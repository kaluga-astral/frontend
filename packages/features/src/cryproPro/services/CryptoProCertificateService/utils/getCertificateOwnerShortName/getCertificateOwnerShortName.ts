export const getCertificateOwnerShortName = (
  surname: string | null,
  name: string | null,
) => {
  if (!surname || !name) {
    return null;
  }

  const [firstname, patronymic] = name.split(' ');
  const [shortFirstname, shortPatronymic] = [
    firstname ? `${firstname?.at(0)}.` : '',
    patronymic ? `${patronymic?.at(0)}.` : '',
  ];

  return [surname, shortFirstname, shortPatronymic].join(' ');
};
