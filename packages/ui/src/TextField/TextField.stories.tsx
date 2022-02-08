import React from 'react';
import { Story } from '@storybook/react';
import { IconButton, InputAdornment, Stack } from '@mui/material';

import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
};

export const Default: Story = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2} direction="row">
        <TextField label="With label" />
        <TextField label="With placeholder" placeholder="Placeholder value" />
        <TextField focused label="Focused" defaultValue="Default value" />
        <TextField
          error
          label="Invalid without helperText"
          defaultValue="Default value"
        />
        <TextField
          error
          label="Invalid"
          defaultValue="Default value"
          helperText="Ошибка, проверка не пройдена"
        />
        <TextField
          error
          focused
          label="Focused invalid"
          defaultValue="Default value"
          helperText="Ошибка, проверка не пройдена"
        />
        <TextField
          success
          label="Validated"
          defaultValue="Default value"
          helperText="Проверка успешно пройдена"
        />
        <TextField disabled label="Disabled" defaultValue="Default value" />
        <TextField
          label="Read only"
          defaultValue="Default value"
          InputProps={{
            readOnly: true,
          }}
          helperText="Iam readOnly"
        />
      </Stack>
      <Stack gap={2} direction="row">
        <TextField
          label="Цена"
          InputProps={{
            startAdornment: <InputAdornment position="start">₽</InputAdornment>,
          }}
        />
        <TextField
          label="Вес"
          InputProps={{
            endAdornment: <InputAdornment position="end">кг</InputAdornment>,
          }}
        />
        <TextField
          label="Пароль"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C7.464 18 4.001 13.74 4.001 12C4.001 9.999 7.46 6 12.001 6C16.377 6 19.999 9.973 19.999 12C19.999 13.74 16.537 18 12.001 18H12ZM12.001 4C6.48 4 2 8.841 2 12C2 15.086 6.576 20 12 20C17.423 20 22 15.086 22 12C22 8.841 17.52 4 12 4"
                      fill="#072D57"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.977 13.984C10.874 13.984 9.977 13.087 9.977 11.984C9.977 10.881 10.874 9.984 11.977 9.984C13.081 9.984 13.977 10.881 13.977 11.984C13.977 13.087 13.081 13.984 11.977 13.984ZM11.977 7.984C9.771 7.984 7.977 9.778 7.977 11.984C7.977 14.19 9.771 15.984 11.977 15.984C14.184 15.984 15.977 14.19 15.977 11.984C15.977 9.778 14.184 7.984 11.977 7.984Z"
                      fill="#072D57"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Планета"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.1 19.137C9.36032 18.92 7.75986 18.0748 6.59966 16.7605C5.43945 15.4461 4.79944 13.7532 4.8 12C4.8 11.442 4.872 10.911 4.989 10.389L9.3 14.7V15.6C9.3 16.59 10.11 17.4 11.1 17.4V19.137ZM17.31 16.851C17.1958 16.4873 16.9682 16.1696 16.6605 15.9445C16.3529 15.7195 15.9812 15.5987 15.6 15.6H14.7V12.9C14.7 12.405 14.295 12 13.8 12H8.4V10.2H10.2C10.695 10.2 11.1 9.795 11.1 9.3V7.5H12.9C13.89 7.5 14.7 6.69 14.7 5.7V5.331C17.337 6.402 19.2 8.985 19.2 12C19.2 13.872 18.48 15.573 17.31 16.851Z"
                      fill="#1D3F66"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack gap={2} direction="row">
        <TextField
          size="small"
          label="With placeholder"
          placeholder="Placeholder value"
        />
        <TextField
          size="small"
          label="Вес"
          InputProps={{
            endAdornment: <InputAdornment position="end">кг</InputAdornment>,
          }}
        />
        <TextField
          size="small"
          label="Пароль"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C7.464 18 4.001 13.74 4.001 12C4.001 9.999 7.46 6 12.001 6C16.377 6 19.999 9.973 19.999 12C19.999 13.74 16.537 18 12.001 18H12ZM12.001 4C6.48 4 2 8.841 2 12C2 15.086 6.576 20 12 20C17.423 20 22 15.086 22 12C22 8.841 17.52 4 12 4"
                      fill="#072D57"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.977 13.984C10.874 13.984 9.977 13.087 9.977 11.984C9.977 10.881 10.874 9.984 11.977 9.984C13.081 9.984 13.977 10.881 13.977 11.984C13.977 13.087 13.081 13.984 11.977 13.984ZM11.977 7.984C9.771 7.984 7.977 9.778 7.977 11.984C7.977 14.19 9.771 15.984 11.977 15.984C14.184 15.984 15.977 14.19 15.977 11.984C15.977 9.778 14.184 7.984 11.977 7.984Z"
                      fill="#072D57"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

Default.parameters = { options: { showPanel: false } };
