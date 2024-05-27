import fs from 'node:fs';

export class FileService {
  static writeFile(filePath: string, content: string) {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        throw Error(`Ошибка при записи файла: ${error}`);
      } else {
        console.log(`Файл успешно создан: ${filePath}`);
      }
    });
  }

  static readFile(filePath: string): string {
    if (!fs.existsSync(filePath)) {
      throw Error(`Файл не найден: ${filePath}`);
    }

    try {
      const content = fs.readFileSync(filePath);

      return content.toString();
    } catch (error) {
      throw Error(`Ошибка при чтении файла: ${error}`);
    }
  }
}
