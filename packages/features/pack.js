const { buildTs, rmDist, copy } = require('@astral/commander');

rmDist();

copy({
  sourcesDirPath: './src',
  files: ['declarations.d.ts'],
  targetPath: '.',
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
});
