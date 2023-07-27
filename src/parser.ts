import { DictionaryEntry } from './models';

const KEYS_TO_ENTRY_KEYS = new Map();
KEYS_TO_ENTRY_KEYS.set('a', 'headword');
KEYS_TO_ENTRY_KEYS.set('b', 'partOfSpeech');
KEYS_TO_ENTRY_KEYS.set('c', 'grammaticalAspect');
KEYS_TO_ENTRY_KEYS.set('d', 'information');
KEYS_TO_ENTRY_KEYS.set('e', 'definitions');
KEYS_TO_ENTRY_KEYS.set('f', 'alternativeForms');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseEntry(this: any, key: string, value: unknown): unknown {
  const parsedKey = KEYS_TO_ENTRY_KEYS.get(key);
  if (parsedKey) {
    this[parsedKey] = value;
    return;
  }
  // eslint-disable-next-line consistent-return
  return value;
}

export const parse = (content: Buffer) : DictionaryEntry[] => {
  const words = JSON.parse(
    content.toString(),
    parseEntry,
  );

  return words;
};

export default {
  parse,
};
