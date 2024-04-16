import fs from 'node:fs';

export class FileService {
  static writeFile(filePath, content) {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        throw Error(`Ошибка при записи файла: ${error}`);
      } else {
        console.log(`Файл успешно создан: ${filePath}`);
      }
    });
  }
}
