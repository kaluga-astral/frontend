const { buildTs, rmDist, copy } = require('@astral/commander');

rmDist();

copy({
  sourcesDirPath: './src',
  targetPath: '.',
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
});
