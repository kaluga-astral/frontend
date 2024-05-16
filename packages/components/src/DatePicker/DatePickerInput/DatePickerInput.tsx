import { IMask } from 'react-imask';
import { forwardRef, useMemo } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { type MaskBlocks, type MaskFieldProps } from '../../MaskField';
import { type TextFieldProps } from '../../TextField';

import { StyledMaskField } from './styles';

type DatePickerInputProps = Omit<MaskFieldProps, 'mask' | 'autofix'> & {
  mask: string;
  /**
   * пропсы для кастомизации корневого input элемента
   */
  inputProps?: Omit<TextFieldProps['inputProps'], 'onClick' | 'ref'>;
};

/**
 * @description регулярка, указывающая на любые буквы и цифры длинной от 1 до 4 символов включительно
 */
const KEYS_IN_MASK = /\w{1,4}/g;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, mask, size = 'medium', onFocus, disabled, ...props }, ref) => {
  const [normalizedMask, maskBlocks] = useMemo(() => {
    // маска maskField соглашается работать только с разделителями имеющими символ "`" (косая кавычка) перед заменяемым элементом
    const nMask = mask?.replace('.', '.`');
    const blocks: MaskBlocks = {};

    // создаем массив элементов, попадающих под регулярку
    mask.match(KEYS_IN_MASK)?.forEach((maskPart) => {
      // Число, с колличество цифр "9" равному колличеству букв части маски.
      // Например, для части ключа 'ГГГГ' результат будет 9999
      const to = Number(String.prototype.padStart(maskPart.length, '9'));

      // для каждой части маски, создаем свой MaskBlock
      blocks[maskPart] = {
        mask: IMask.MaskedRange,
        from: 0,
        to,
        maxLength: maskPart.length,
      };
    });

    return [nMask, blocks];
  }, [mask]);

  //Определяем активный обработчик focus для обертки если состояние не disabled
  const handleFocusWrapper = useMemo(
    () => (!disabled ? onFocus : undefined),
    [disabled, onFocus],
  );

  return (
    <div onFocus={handleFocusWrapper} tabIndex={-1} aria-disabled={disabled}>
      <StyledMaskField
        {...props}
        ref={ref}
        size={size}
        disabled={disabled}
        mask={normalizedMask}
        unmask={false}
        blocks={maskBlocks}
        autofix={false}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" title="calendarEndAdornment">
              <CalendarOutlineMd />
            </InputAdornment>
          ),
        }}
        inputProps={{
          ...props.inputProps,
          ref,
        }}
        // Обрабатываем клик на контейнере, а не в инпуте, это связано с неактивной областью с иконкой (endAdornment)
        onClick={onClick}
      />
    </div>
  );
});
