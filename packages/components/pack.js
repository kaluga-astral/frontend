const { buildTs, copy, rmDist } = require('@astral/commander');

rmDist();

copy({
  sourcesDirPath: './src/declaration',
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
  packageExports: {
    './server': {
      import: './esm/server/index.js',
      require: './server/index.js',
    },
  },
});
