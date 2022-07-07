import path from 'path';
import { promises } from 'fs';

export const getIndexPage = async (): Promise<string> => {
  const pathToIndexFile = path.resolve('build', 'frontend', 'index.html');
  return await promises.readFile(pathToIndexFile, { encoding: 'utf8' });
};
