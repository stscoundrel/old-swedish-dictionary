# Old Swedish Dictionary 

Old Swedish Dictionary for Node.js. The dictionary consists of 40 000+ Old Swedish words with Swedish translations.

Based on K.F. Söderwall's Medieval Swedish Dictionary

Related projects:
- [Old Swedish Dictionary Abbreviations](https://github.com/stscoundrel/old-swedish-dictionary-abbreviations)
- [Old Swedish Dictionary Website](https://github.com/stscoundrel/old-swedish-dictionary-next)

### Install

`yarn add old-swedish-dictionary`


### Usage

The project provides a getter for the whole dataset. You can use it in your script to populate your own database or otherwise use the data.

Should you want to use the data without this Node.js library, you might want to check [Old Swedish Dictionary Builder](https://github.com/stscoundrel/old-swedish-dictionary-builder)

```javascript
import { getDictionary } from 'old-swedish-dictionary'

/**
 * Whole dictionary as array
 * contains over 40 000 entries.
 */
const dictionary = getDictionary()


// Filter words starting with letter T
const tWords = dictionary.filter((entry) => entry.word.charAt(0) === 't')

console.log(tWords)

```

Individual words are returned in format of:

```javascript
{
    headword: string,
    partOfSpeech: string[],
    grammaticalAspect: string,
    information: string,
    definitions: string[],
    alternativeForms: string[]
}
```

### About "Dictionary of Old Swedish"

_"Ordbok Öfver svenska medeltids-språket"_ dictionary was published in late 1884—1918 by K.F. Söderwall. Additional supplement to it was published in 1953—1973.

Old Swedish developed from Old East Norse, the eastern dialect of Old Norse, at the end of the Viking Age. Early Old Swedish was spoken from about 1225 until about 1375, and Late Old Swedish was spoken from about 1375 until about 1526.

The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/), made available by University of Gothenburg. The source code for this library is under MIT licence.

- https://spraakbanken.gu.se/en/resources/soederwall
- https://spraakbanken.gu.se/en/resources/soederwall-supp
