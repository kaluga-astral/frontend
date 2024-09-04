import { SvgIcon, type SvgIconProps } from '@mui/material';

const AutosaveLoaderFillMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M7 20h11v-.022a5.5 5.5 0 0 0 .864-10.808A6.502 6.502 0 0 0 6.489 8.021 6 6 0 0 0 7 20zm5.693-9.4a2.5 2.5 0 0 0-3.052 1.567l-.166.471-.943-.333.167-.472a3.5 3.5 0 0 1 5.769-1.312l.699.657v-.845a.5.5 0 1 1 1 0v2.5h-2.5a.5.5 0 1 1 0-1h.737l-.626-.588-.006-.006-.006-.005a2.5 2.5 0 0 0-1.073-.635zm-4.86 2.566v2.501a.5.5 0 0 0 1 0v-.844l.7.656a3.501 3.501 0 0 0 5.768-1.312l.167-.471-.943-.334-.166.471a2.5 2.5 0 0 1-4.125.934l-.006-.006-.006-.005-.627-.59h.738a.5.5 0 1 0 0-1h-2.5z"
    />
  </SvgIcon>
);

export default AutosaveLoaderFillMd;
