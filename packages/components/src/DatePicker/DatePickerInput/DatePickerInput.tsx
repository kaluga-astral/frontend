import { IMask } from 'react-imask';
import { ChangeEvent, forwardRef, useMemo } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskBlocks, MaskFieldProps } from '../../MaskField';

import { DatePickerInputWrapper } from './styles';

type DatePickerInputProps = Omit<MaskFieldProps, 'mask' | 'autofix'> & {
  onNativeChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mask: string;
};

/**
 * @description регулярка, указывающая на любые буквы и цифры длинной от 1 до 4 символов включительно
 */
const KEYS_IN_MASK = /\w{1,4}/g;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, onNativeChange, mask, ...props }, ref) => {
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

  return (
    <DatePickerInputWrapper
      {...props}
      ref={ref}
      mask={normalizedMask}
      blocks={maskBlocks}
      autofix={false}
      fullWidth
      InputProps={{
        onChange: onNativeChange,
        endAdornment: (
          <InputAdornment position="end" disablePointerEvents>
            <CalendarOutlineMd />
          </InputAdornment>
        ),
      }}
      inputProps={{
        ref,
        onClick,
      }}
    />
  );
});
