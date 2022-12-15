const { build } = require('@astral/commander/tasks/build');

build({ releaseTag: process.env.RELEASE_TAG, packageExports: {} });
