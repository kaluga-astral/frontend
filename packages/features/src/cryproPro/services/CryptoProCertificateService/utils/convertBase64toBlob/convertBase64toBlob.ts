export const convertBase64toBlob = (
  base64: string,
  type: string = 'application/octet-stream',
) => {
  return fetch(`data:${type};base64,${base64}`).then((res: Response) =>
    res.blob(),
  );
};
