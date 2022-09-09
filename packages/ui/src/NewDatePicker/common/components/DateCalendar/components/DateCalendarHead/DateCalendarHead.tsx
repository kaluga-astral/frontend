import {
  DateCalendarNextBtn,
  DateCalendarPrevBtn,
} from '../DateCalendarChevronBtn';

import { DateCalendarHeadBtn, DateCalendarHeadText } from './styles';

export type CommonDateCalendarHeadProps = {
  onHeadBtnClick?: () => void;
  headBtnTitle?: string;
};

type DateCalendarHeadProps = {
  arrowPostfixTitle: string;
  onPrevClick?: () => void | false;
  onNextClick?: () => void | false;
  headBtnText: string | number;
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
    <DateCalendarPrevBtn
      postfixTitle={arrowPostfixTitle}
      onClick={onPrevClick}
      isPlural={isPlural}
    />
    {onHeadBtnClick ? (
      <DateCalendarHeadBtn onClick={onHeadBtnClick} title={headBtnTitle}>
        {headBtnText}
      </DateCalendarHeadBtn>
    ) : (
      <DateCalendarHeadText role="head">{headBtnText}</DateCalendarHeadText>
    )}
    <DateCalendarNextBtn
      postfixTitle={arrowPostfixTitle}
      onClick={onNextClick}
      isPlural={isPlural}
    />
  </>
);
