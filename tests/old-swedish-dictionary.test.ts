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
      expect(Object.keys(entry)).toEqual(['headword', 'partOfSpeech', 'grammaticalAspect', 'definitions', 'alternativeForms']);

      // Headwords are non-empty
      expect(entry.headword.length > 0).toBeTruthy();
    });
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    expect(result[500].headword).toBe('aganger');
    expect(result[500].definitions[0]).toBe('åverkan, intrång, ingrepp.  &quot; hadhe giort them ågangh vppå then siöen &quot; SD  NS 2: 245 (1410, nyare afskr.). om aagongh pa theris gambla änger  FH 5: 109 (  1847) .  &quot; ranzaca hwilken tere haffuer giort ogongh wppo then annars änger ok wtmark &quot; BtFH 1: 134 ( 1506) .  ib 137 ( 1506) , 138 (1506, 153 (1506), 166 (1508, 174 (1506), 176 (1507), 178 (1507, 198 (1509), 201 (1509, 212 (1507).');
    expect(result[500].partOfSpeech).toBe('nn');
    expect(result[500].grammaticalAspect).toBe('');
    expect(result[500].alternativeForms[0]).toBe('aagongher . ');

    expect(result[1375].headword).toBe('aterbidhia');
    expect(result[1375].definitions[0]).toBe(' - part. pret. aterbidhin (-bedin), återkräfd; som skall återkräfvas, repetende aterbedne päninga  GU C 20 s. 523 .');
    expect(result[1375].partOfSpeech).toBe('vb');
    expect(result[1375].grammaticalAspect).toBe('v.');
    expect(result[1375].alternativeForms).toEqual([]);

    expect(result[35000].headword).toBe('thval');
    expect(result[35000].definitions[0]).toBe('tvål, såpa.  &quot; hon . . . sände möiana badha fran sik äptir olio oc twaal &quot; ST 437 .  &quot; göra saponem twaal &quot; PM XLVI . ib XLIII. tyzdt twal  LB 7: 79 .');
    expect(result[35000].partOfSpeech).toBe('nn');
    expect(result[35000].grammaticalAspect).toBe('');
    expect(result[35000].alternativeForms).toEqual(['twaal )']);
  });
});
