import { Children, type ReactNode } from 'react';

import { StyleOverflowTypography, Wrapper } from './styles';
import { getFileExtension } from './utils';

export type FileNameProps = {
  /**
   * Название файла
   */
  children: ReactNode;
};

export const Filename = ({ children }: FileNameProps) => {
  const fileName = Children.toArray(children).join('');
  const fileExtension = getFileExtension(fileName);
  const fileNameWithoutExtension = fileName.slice(
    0,
    fileName.length - fileExtension.length,
  );

  return (
    <Wrapper>
      <StyleOverflowTypography variant="inherit">
        {fileNameWithoutExtension}
      </StyleOverflowTypography>
      <span>{fileExtension}</span>
    </Wrapper>
  );
};
