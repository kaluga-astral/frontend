import { DataListItemRoot } from './styles';

export type DataListItemProps = {
  children: React.ReactNode;

  /**
   * Обработчик нажатия на карточку списка
   */
  onClick?: () => void;
};

export const DataListItem = ({ onClick, children }: DataListItemProps) => (
  <DataListItemRoot onClick={onClick}>{children}</DataListItemRoot>
);
