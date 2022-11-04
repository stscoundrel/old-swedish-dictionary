import path from 'path';
import { DictionaryEntry } from './models';
import { read } from './reader';
import { parse } from './parser';

const DICTIONARY_PATH = path.join(`${__dirname}/../resources/old-swedish-dictionary.json`);

export function getDictionary() : DictionaryEntry[] {
  const content = read(DICTIONARY_PATH);
  const words = parse(content);

  return words;
}

export { DictionaryEntry } from './models';
