import { type IframeHTMLAttributes } from 'react';

export const DEFAULT_SANDBOX_POLICY: IframeHTMLAttributes<HTMLIFrameElement>['sandbox'] =
  'allow-forms allow-modals allow-scripts allow-same-origin';
