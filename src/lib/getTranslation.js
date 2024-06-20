import fs from 'fs';
import path from 'path';

export const getTranslation = (locale) => {
  const filePath = path.resolve('../public/locales', locale, 'common.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};
