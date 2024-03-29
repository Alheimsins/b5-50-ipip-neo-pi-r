[![Coverage Status](https://coveralls.io/repos/Alheimsins/b5-50-ipip-neo-pi-r/badge.svg?branch=master&service=github)](https://coveralls.io/github/Alheimsins/b5-50-ipip-neo-pi-r?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# b5-50-ipip-neo-pi-r

Module for returning Big Five [50 IPIP-NEO-PI-R](https://ipip.ori.org/newNEODomainsKey.htm) items

## Installation

```
$ npm i @alheimsins/b5-50-ipip-neo-pi-r
```

## Usage

```JavaScript
const { getItems, getInfo, getChoices, getQuestions } = require('@alheimsins/b5-50-ipip-neo-pi-r')

console.log(getChoices()) // returns choices in English

console.log(getQuestions()) // returns questions in English

console.log(getItems()) // returns English

console.log(getItems('en', true)) // returns English shuffeled

console.log(getInfo()) // returns test info
```

returns an [array with questions and choices](examples/items-en.json)

```JavaScript
[
   {
       "id": "43c98ce8-a07a-4dc2-80f6-c1b2a2485f06",
       "text": "Worry about things",
       "keyed": "plus",
       "domain": "N",
       "facet": 1,
       "num": 1,
       "choices": [
         {
           "text": "Very Inaccurate",
           "score": 1,
           "color": 1
         },
         {
           "text": "Moderately Inaccurate",
           "score": 2,
           "color": 2
         },
         {
           "text": "Neither Accurate Nor Inaccurate",
           "score": 3,
           "color": 3
         },
         {
           "text": "Moderately Accurate",
           "score": 4,
           "color": 4
         },
         {
           "text": "Very Accurate",
           "score": 5,
           "color": 5
         }
       ]
    }
]
```

## Supported languages

| Code | Name					| Translator	|
| ---- | ---------------------  | -------------	|
| en   | English				|				|
| pt-br| Portugues Brasileiro	| Matheus Muriel| (Required semantic review)

## Help wanted

If you want to help by translating the items to other languages this is how you do it.

- clone the repo
- find a language you know in [data](data)
- duplicate the folder and rename it to the language you will translate
- use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code as folder name.
- translate the "text"-property for choices.js and questions.json
- don't change filenames, ids or any other properties
- add your language code to the [data/languages.json file](data/languages.json)
- submit pull request
- happiness :-)

## Related

- [bigfive-web](https://github.com/rubynor/bigfive-web) Web frontend for bigfive tests
- [bigfive-calculate-score](https://github.com/Alheimsins/bigfive-calculate-score) Module for calculating score
- [b5-result-text](https://github.com/Alheimsins/b5-result-text) Create a text resume based on the score

## License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
