import { MouseEvent, forwardRef, useState } from 'react';
import { EyeOutlineMd, VisibilityOffOutlineMd } from '@astral/icons';
import { InputAdornment } from '@mui/material';

import { IconButton } from '../IconButton';
import { TextField, TextFieldProps } from '../TextField';

type PasswordFieldInputProps = TextFieldProps & {
  /**
   * @description если true, показываются символы пароля
   */
  showSymbols?: boolean;
};

export const PasswordField = forwardRef<
  HTMLInputElement,
  PasswordFieldInputProps
>(({ label, disabled = false, showSymbols = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(showSymbols);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      label={label}
      type={showPassword ? 'text' : 'password'}
      disabled={disabled}
      InputProps={{
        endAdornment: disabled ? null : (
          <InputAdornment position="end">
            <IconButton
              variant="text"
              aria-label="Переключить видимость пароля"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOffOutlineMd /> : <EyeOutlineMd />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
});
