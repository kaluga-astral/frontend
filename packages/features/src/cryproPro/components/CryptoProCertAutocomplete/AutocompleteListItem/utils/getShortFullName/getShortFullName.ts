export const getShortFullName = (fullname: string | null) => {
  const arr = fullname?.split(' ') || [];

  const innerName = arr[1]?.split('').at(0) || '';
  const innerMiddlename = arr[2]?.split('').at(0) || '';
  const innerLastname = arr.at(0) || '';

  return `${innerLastname + ' '}${innerName ? innerName + '.' : ''}${
    innerMiddlename ? innerMiddlename + '.' : ''
  }`;
};
