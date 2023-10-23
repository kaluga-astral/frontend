import { Meta } from '@storybook/react';

import outdatedReleaseIllustration from '../../../ui/illustrations/outdated_release.svg';
import { ConfigProvider } from '../ConfigProvider';

import { OutdatedReleasePlaceholder } from './OutdatedReleasePlaceholder';

/**
 * ```OutdatedReleasePlaceholder``` - это внутренний компонент, позволяющий отображать ошибки, связанные с устаревшей версией билда
 */
const meta: Meta<typeof OutdatedReleasePlaceholder> = {
  title: 'Components/OutdatedReleasePlaceholder',
  component: OutdatedReleasePlaceholder,
};

export default meta;

export const Example = () => {
  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: outdatedReleaseIllustration,
        noDataImgSrc: outdatedReleaseIllustration,
        outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
      }}
    >
      <OutdatedReleasePlaceholder />
    </ConfigProvider>
  );
};
