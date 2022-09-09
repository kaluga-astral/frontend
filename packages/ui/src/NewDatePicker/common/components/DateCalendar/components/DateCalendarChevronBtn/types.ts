import { ButtonProps } from '../../../../../../Button';

export type DateCalendarChevronBtnProps = Omit<ButtonProps, 'title'> & {
  postfixTitle: string;
  isPlural?: boolean;
};
