const { knuthShuffle } = require('knuth-shuffle')
const languages = require('./data/languages.json')

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
    name: `b5-50 questeion IPIP NEO-PI-R`,
    id: 'b5-50-ipip-neo-pi-r',
    shortId: 'b5-50',
    time: 5,
    questions: 120,
    languages
  }
)
