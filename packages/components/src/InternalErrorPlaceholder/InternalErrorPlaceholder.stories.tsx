import { type Meta } from '@storybook/react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import { ConfigProvider } from '../ConfigProvider';

import { InternalErrorPlaceholder } from './InternalErrorPlaceholder';

/**
 * ```InternalErrorPlaceholder``` - это внутренний компонент, позволяющий отображать ошибки во время исполнения кода
 *
 */
const meta: Meta<typeof InternalErrorPlaceholder> = {
  title: 'Components/Data Display/Placeholders/InternalErrorPlaceholder',
  component: InternalErrorPlaceholder,
};

export default meta;

export const Example = () => {
  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: errorIllustration,
        outdatedReleaseErrorImgSrc: errorIllustration,
      }}
      techSup={{ email: 'test@example.com', phone: '79999999999' }}
    >
      <InternalErrorPlaceholder />
    </ConfigProvider>
  );
};
