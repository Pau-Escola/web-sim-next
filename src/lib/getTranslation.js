import fs from 'fs';
import path from 'path';

export const getTranslation = (locale) => {
  const filePath = path.resolve(process.cwd(), 'public', 'locales', locale, 'common.json');
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Translation file not found for locale '${locale}'`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};
