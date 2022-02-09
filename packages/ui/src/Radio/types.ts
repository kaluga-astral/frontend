import { RadioProps as MuiRadioProps } from '@mui/material';

export type RadioProps = Omit<MuiRadioProps, 'size' | 'color'>;
