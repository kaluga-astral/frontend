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
      d="M7 20H17.5H18V19.9776C20.8032 19.725 23 17.369 23 14.5C23 11.9332 21.2417 9.77712 18.8639 9.17043C18.2503 6.21826 15.6342 4 12.5 4C9.78783 4 7.46364 5.6611 6.48927 8.02143C3.41461 8.28061 1 10.8583 1 14C1 17.3137 3.68629 20 7 20ZM11.3446 16.5394L16.5211 11.5394L15.4789 10.4606L10.8413 14.9401L8.53886 12.5617L7.46114 13.605L10.2847 16.5217C10.5725 16.819 11.0469 16.827 11.3446 16.5394Z"
    />
  </SvgIcon>
);

export default AutosaveFillMd;
