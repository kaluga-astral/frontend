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

const KEYS_IN_MASK = /\w{1,4}/g;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, onNativeChange, mask, ...props }, ref) => {
  const maskBlocks = useMemo(() => {
    const blocks: MaskBlocks = {};

    mask.match(KEYS_IN_MASK)?.forEach((key) => {
      const to = Number(String.prototype.padStart(key.length, '9'));

      blocks[key.replace(/`/, '')] = {
        mask: IMask.MaskedRange,
        from: 0,
        to,
        maxLength: key.length,
      };
    });

    return blocks;
  }, [mask]);

  return (
    <DatePickerInputWrapper
      {...props}
      ref={ref}
      onClick={onClick}
      mask={mask}
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
