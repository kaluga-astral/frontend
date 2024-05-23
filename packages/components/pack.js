const { buildTs, copy, rmDist } = require('@astral/commander');

rmDist();

copy({
  sourcesDirPath: './src/declaration',
});

buildTs({
  releaseTag: process.env.RELEASE_TAG,
  packageExports: {
    './server': {
      // Специально для vitest добавляется отдельный exports потому, что он быстро работает только с cjs, когда есть barrel files
      // Порядок имеет значение
      vitest: './node/server/index.js',
      module: './server/index.js',
      require: './node/server/index.js',
    },
    './next': {
      // Секция для компонентов, для которых необходим react >= 18 версии
      vitest: './node/next.js',
      module: './next.js',
      require: './node/next.js',
    },
  },
});
