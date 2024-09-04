import {
  DateCalendarNextButton,
  DateCalendarPrevButton,
} from '../DateCalendarChevronButton';

import { HeadButton, HeadText } from './styles';

export type CommonDateCalendarHeadProps = {
  /**
   * что делать по клику по заголовку? если ничего не задано, то заголовок будет текстовый
   */
  onHeadBtnClick?: () => void;
  /**
   * что вывести в тултипе кнопки заголовка
   */
  headBtnTitle?: string;
};

type DateCalendarHeadProps = {
  /**
   * что делать по клику по стрелке "назад"? если ничего не задано, то кнопка будет disabled
   */
  onPrevClick?: () => void | false;
  /**
   * что делать по клику по стрелке "вперед"? если ничего не задано, то кнопка будет disabled
   */
  onNextClick?: () => void | false;
  /**
   * что выводить в заголовке
   */
  headBtnText: string | number;
  /**
   * что добавить к надписи стрелок
   * @example "год" => "Предыдущий год"
   */
  arrowPostfixTitle: string;
  /**
   * Нужно ли рендерить текст стрелок в множественном числе
   * @default false
   * @example true => "Предыдущие" | "Следующие"
   */
  isPlural?: boolean;
} & CommonDateCalendarHeadProps;

export const DateCalendarHead = ({
  arrowPostfixTitle,
  onHeadBtnClick,
  onPrevClick,
  onNextClick,
  headBtnTitle,
  headBtnText,
  isPlural,
}: DateCalendarHeadProps) => (
  <>
    <DateCalendarPrevButton
      postfixTitle={arrowPostfixTitle}
      onClick={onPrevClick}
      isPlural={isPlural}
    />
    {onHeadBtnClick ? (
      <HeadButton onClick={onHeadBtnClick} tooltipTitle={headBtnTitle}>
        {headBtnText}
      </HeadButton>
    ) : (
      <HeadText role="head">{headBtnText}</HeadText>
    )}
    <DateCalendarNextButton
      postfixTitle={arrowPostfixTitle}
      onClick={onNextClick}
      isPlural={isPlural}
    />
  </>
);
