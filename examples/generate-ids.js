const questions = require('./questions')
const uuid = require('uuid/v1')
const fs = require('fs')

const questionsWithId = questions.map(question => Object.assign({}, { id: uuid() }, question))
fs.writeFileSync('./questions-with-id.json', JSON.stringify(questionsWithId, null, 2))
