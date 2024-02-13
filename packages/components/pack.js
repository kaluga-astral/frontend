const { buildTs, copy, rmDist } = require('@astral/commander');

rmDist();

copy({
  sourcesDirPath: './src/declaration',
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
  packageExports: {
    './server': {
      module: './server/index.js',
      require: './node/server/index.js',
    },
  },
});
