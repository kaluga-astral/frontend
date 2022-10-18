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

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, onNativeChange, mask, ...props }, ref) => {
  const [normalizedMask, maskBlocks] = useMemo(() => {
    // маска maskField соглашается работать только с разделителями имеющими символ "`" (косая кавычка) перед заменяемым элементом
    const nMask = mask?.replace('.', '.`');

    const blocks: MaskBlocks = {};

    mask.split('.').forEach((key) => {
      const to = Number(String.prototype.padStart(key.length, '9'));

      blocks[key] = {
        mask: IMask.MaskedRange,
        from: 0,
        to,
        maxLength: key.length,
      };
    });

    return [nMask, blocks];
  }, [mask]);

  return (
    <DatePickerInputWrapper
      {...props}
      ref={ref}
      onClick={onClick}
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
      }}
    />
  );
});
