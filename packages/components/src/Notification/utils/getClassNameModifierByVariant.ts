import { type Variant } from '../types';
import { NOTIFY_CLASSNAME } from '../constants';

/**
 * метод создания имени класса прогресс бара для последующей стилизации
 */
export const getClassNameModifierByVariant = (
  variant: Variant,
  isProgressBarHidden?: boolean,
): string =>
  !isProgressBarHidden
    ? `${NOTIFY_CLASSNAME} ${NOTIFY_CLASSNAME}--${variant}`
    : '';
