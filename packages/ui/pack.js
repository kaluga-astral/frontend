const { buildTs, copy, rmDist } = require('@astral/commander');

rmDist();
copy({ sourcesDirPath: './fonts' });
copy({ sourcesDirPath: './illustrations' });

copy({
  sourcesDirPath: './src',
  targetPath: '.',
  files: ['declarations.d.ts'],
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
  packageExports: {
    './fonts/*': './fonts/*',
    './illustrations/*': './illustrations/*',
  },
});
