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
    './server': {
      // Специально для vitest добавляется отдельный exports потому, что он быстро работает только с cjs, когда есть barrel files
      // Порядок имеет значение
      vitest: './node/server/index.js',
      module: './server/index.js',
      require: './node/server/index.js',
    },
    // TODO Раскомментировать после релиза @astral/components/next
    // './next': {
    //   // Секция для компонентов, для которых необходим react >= 18 версии
    //   vitest: './node/next.js',
    //   module: './next.js',
    //   require: './node/next.js',
    // },
    './fonts/*': './fonts/*',
    './illustrations/*': './illustrations/*',
  },
});
