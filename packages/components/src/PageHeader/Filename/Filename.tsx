import { OverflowTypography } from '../../OverflowTypography';

import { Wrapper } from './styles';
import { getFileExtension } from './utils';

export type FileNameProps = {
  /**
   * Название файла
   */
  name: string;
};

export const Filename = ({ name }: FileNameProps) => {
  return (
    <Wrapper>
      <OverflowTypography variant="inherit">{name}</OverflowTypography>
      <span>{getFileExtension(name)}</span>
    </Wrapper>
  );
};
