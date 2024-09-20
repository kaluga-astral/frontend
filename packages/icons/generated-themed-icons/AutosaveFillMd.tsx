import { SvgIcon, type SvgIconProps } from '@mui/material';

const AutosaveFillMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 20h11v-.022a5.5 5.5 0 0 0 .864-10.808A6.502 6.502 0 0 0 6.489 8.021 6 6 0 0 0 7 20zm4.345-3.46 5.176-5-1.042-1.08-4.638 4.48-2.302-2.378-1.078 1.043 2.824 2.917a.75.75 0 0 0 1.06.017z"
    />
  </SvgIcon>
);

export default AutosaveFillMd;
