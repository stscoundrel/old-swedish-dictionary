import { getDictionary } from '../src';

describe('Old Swedish Dictionary tests', () => {
  test('Dictionary contains correct amount of entries', () => {
    const result = getDictionary();

    expect(result.length).toBe(41744);
  });

  test('Dictionary entries are returned in correct object format', () => {
    const result = getDictionary();

    result.forEach((entry) => {
      // Only expected keys.
      expect(Object.keys(entry)).toEqual(['headword', 'partOfSpeech', 'grammaticalAspect', 'information', 'definitions', 'alternativeForms']);

      // Headwords are non-empty
      expect(entry.headword.length > 0).toBeTruthy();
    });
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    const aganger = result.filter((entry) => entry.headword === 'aganger')[0];
    const aterbidhia = result.filter((entry) => entry.headword === 'aterbidhia')[0];
    const thval = result.filter((entry) => entry.headword === 'thval')[0];

    expect(aganger.headword).toBe('aganger');
    expect(aganger.definitions[0]).toBe('åverkan, intrång, ingrepp.  " hadhe giort them ågangh vppå then siöen " SD  NS 2: 245 (1410, nyare afskr.). om aagongh pa theris gambla änger  FH 5: 109 (  1847) .  " ranzaca hwilken tere haffuer giort ogongh wppo then annars änger ok wtmark " BtFH 1: 134 ( 1506) .  ib 137 ( 1506) , 138 (1506, 153 (1506), 166 (1508, 174 (1506), 176 (1507), 178 (1507, 198 (1509), 201 (1509, 212 (1507).');
    expect(aganger.partOfSpeech).toEqual(['nn']);
    expect(aganger.grammaticalAspect).toBe('');
    expect(aganger.information).toBe('');
    expect(aganger.alternativeForms[0]).toBe('aagongher.');

    expect(aterbidhia.headword).toBe('aterbidhia');
    expect(aterbidhia.definitions[0]).toBe('- part. pret. aterbidhin (-bedin), återkräfd; som skall återkräfvas, repetende aterbedne päninga  GU C 20 s. 523.');
    expect(aterbidhia.partOfSpeech).toEqual(['vb']);
    expect(aterbidhia.grammaticalAspect).toBe('v.');
    expect(aterbidhia.information).toBe('');
    expect(aterbidhia.alternativeForms).toEqual([]);

    expect(thval.headword).toBe('thval');
    expect(thval.definitions[0]).toBe('tvål, såpa.  " hon . . . sände möiana badha fran sik äptir olio oc twaal " ST 437 .  " göra saponem twaal " PM XLVI . ib XLIII. tyzdt twal  LB 7: 79.');
    expect(thval.partOfSpeech).toEqual(['nn']);
    expect(thval.grammaticalAspect).toBe('');
    expect(thval.information).toBe('');
    expect(thval.alternativeForms).toEqual(['twaal )']);
  });
});
