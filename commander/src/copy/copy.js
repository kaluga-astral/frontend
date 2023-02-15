const path = require('path');

const recursiveCopy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

/**
 * @description Команда для копирования файлов в lib директорию
 * */
const copy = ({
  /**
   * @description Путь до директории с исходными файлами
   * @example copy({ sourcesDirPath: './src', files: ['declaration.d.ts'] })
   * */
  sourcesDirPath,
  /**
   * @description Список файлов, которые необходимо скопировать. По дефолту копирует всю директории
   * @example copy({ sourcesDirPath: './src', files: ['declaration.d.ts', '**\/*.ttf'] })
   * */
  files,
  /**
   * @description Путь до директории, вложенной в lib, d которую скопируются файлы. По дефолту создает ту же директорию, из которой копируются файлы
   * @example copy({ sourcesDirPath: './src', targetPath: '.' })
   * */
  targetPath,
}) => {
  console.log(`Starting copy files ${JSON.stringify(files)}...`);

  const resultTargetPath = targetPath || path.basename(sourcesDirPath);

  recursiveCopy(sourcesDirPath, `./${DIST_DIR_NAME}/${resultTargetPath}`, {
    filter: files,
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });

  console.log('Finish copy files');
};

module.exports = { copy };
