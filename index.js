const { knuthShuffle } = require('knuth-shuffle')
const languages = require('./data/languages.json')

function languageSort (a, b) {
  if (a.text < b.text) {
    return -1
  }
  if (a.text > b.text) {
    return 1
  }
  return 0
}

languages.sort(languageSort)

module.exports.getItems = (lang = 'en', shuffle = false) => {
  let choices, questions
  try {
    questions = require(`./data/${lang}/questions.json`)
    choices = require(`./data/${lang}/choices`)
  } catch (error) {
    throw new Error('Inventory not found. Try another language input.')
  }

  const inventory = shuffle === true ? knuthShuffle(questions) : questions
  return inventory.map((question, i) => Object.assign(question, { num: ++i, choices: choices[question.keyed] }))
}

module.exports.getInfo = () => (
  {
    name: 'Big Five 50 question ipip-neo-pi-r',
    id: 'b5-50-ipip-neo-pi-r',
    shortId: 'b5-50',
    time: 5,
    questions: 50,
    languages
  }
)
