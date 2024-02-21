import {
  DateCalendarNextButton,
  DateCalendarPrevButton,
} from '../DateCalendarChevronButton';

import { HeadButton, HeadText } from './styles';

export type CommonDateCalendarHeadProps = {
  /**
   * @description что делать по клику по заголовку? если ничего не задано, то заголовок будет текстовый
   */
  onHeadBtnClick?: () => void;
  /**
   * @description что вывести в тултипе кнопки заголовка
   */
  headBtnTitle?: string;
};

type DateCalendarHeadProps = {
  /**
   * @description что делать по клику по стрелке "назад"? если ничего не задано, то кнопка будет disabled
   */
  onPrevClick?: () => void | false;
  /**
   * @description что делать по клику по стрелке "вперед"? если ничего не задано, то кнопка будет disabled
   */
  onNextClick?: () => void | false;
  /**
   * @description что выводить в заголовке
   */
  headBtnText: string | number;
  /**
   * @description что добавить к надписи стрелок
   * @example "год" => "Предыдущий год"
   */
  arrowPostfixTitle: string;
  /**
   * @description Нужно ли рендерить текст стрелок в множественном числе
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
      <HeadButton onClick={onHeadBtnClick} title={headBtnTitle}>
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
