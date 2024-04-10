const fs = require('node:fs');

class FileService {
  static writeFile(filePath, content) {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        console.error('Ошибка при записи файла:', error);
      } else {
        console.log(`Файл успешно создан: ${filePath}`);
      }
    });
  }
}

module.exports = { FileService };
