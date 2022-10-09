import path from 'path';
import { DictionaryEntry } from './models';
import { read } from './reader';

const DICTIONARY_PATH = path.join(`${__dirname}/../resources/old-swedish-dictionary.json`);

export function getDictionary() : DictionaryEntry[] {
  const words = read(DICTIONARY_PATH);

  return words;
}

export { DictionaryEntry } from './models';
