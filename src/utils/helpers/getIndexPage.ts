import path from 'path';
import { promises } from 'fs';

export const getIndexPage = async (): Promise<string> => {
  const pathToIndexFile = path.resolve('frontend', 'build', 'index.html');
  return await promises.readFile(pathToIndexFile, { encoding: 'utf8' });
};
