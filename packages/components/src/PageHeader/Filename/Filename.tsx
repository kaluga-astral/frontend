import { OverflowTypography } from '../../OverflowTypography';

import { Wrapper } from './styles';
import { useLogic } from './useLogic';

export type FileProps = {
  /**
   * Название файла
   */
  title: string;
};

export const Filename = ({ title }: FileProps) => {
  const { getFileExtension } = useLogic();

  return (
    <Wrapper>
      <OverflowTypography variant="inherit">{title}</OverflowTypography>
      <span>{getFileExtension(title)}</span>
    </Wrapper>
  );
};
