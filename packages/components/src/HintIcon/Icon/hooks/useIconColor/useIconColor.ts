import { useTheme } from '../../../../theme';
import { IconColor } from '../../../enums';

type UseIconColorParams = {
  color?: IconColor;
};

export const useIconColor = ({ color }: UseIconColorParams) => {
  const theme = useTheme();

  const colorMap = {
    [IconColor.warning]: theme.palette.yellow[800],
    [IconColor.grey]: theme.palette.grey[800],
    [IconColor.lightGrey]: theme.palette.grey[400],
  };

  const colorName = color && IconColor[color];

  if (colorName) {
    return colorMap[colorName];
  }

  return theme.palette.grey[400];
};
