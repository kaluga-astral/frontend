import { OverflowTypography } from '../OverflowTypography';

import { Wrapper } from './styles';
import { getFileExtension } from './utils';

export type FileNameProps = {
  /**
   * Название файла
   */
  children: string;
};

export const Filename = ({ children }: FileNameProps) => {
  const fileExtension = getFileExtension(children);
  const fileNameWithoutExtension = children.slice(
    0,
    children.length - fileExtension.length,
  );

  return (
    <Wrapper>
      <OverflowTypography variant="inherit">
        {fileNameWithoutExtension}
      </OverflowTypography>
      <span>{fileExtension}</span>
    </Wrapper>
  );
};
