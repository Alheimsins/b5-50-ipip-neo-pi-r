const test = require('ava')
const pkg = require('../package.json')
const dependencies = pkg.dependencies || false
const devDependencies = pkg.devDependencies || false
const { getInfo, getItems } = require('../')

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (dependencies) {
  Object.keys(dependencies).forEach(dependency =>
    test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
  )
}

if (devDependencies) {
  Object.keys(devDependencies)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}

test('basic inventory tests', t => {
  t.truthy(getInfo(), 'info ok')
  t.truthy(getItems(), 'items ok')
  t.truthy(getItems('en'), 'items with lang ok')
})

test('it throws error for lang xx', t => {
  const expectedErrorMessage = 'Inventory not found. Try another language input.'
  try {
    getItems('xx')
  } catch (e) {
    t.is(e.message, expectedErrorMessage)
  }
})

test('validation of question ids across languages', t => {
  const { languages } = getInfo()
  if (languages.length <= 1) t.pass()
  const questions = languages.map(language => language.id).map(getItems)
  const ids = questions.map(qs => qs.map(q => q.id))
  ids.reduce((previous, current) => {
    if (previous !== false) {
      t.deepEqual(previous, current, 'ids match')
    }
    return current
  }, false)
})

test('it returns sorted inventory items', t =>
  t.truthy(getItems('en', false), 'sorted items ok')
)

test('it returns random inventory items', t =>
  t.truthy(getItems('en', true), 'random items ok')
)

test('random inventory items', t => {
  const sortedItems = getItems('en', false)
  const randomItems = getItems('en', true)

  t.notDeepEqual(sortedItems[0], randomItems[0], 'shuffled ok')

  t.is(sortedItems.length, randomItems.length, 'array sizes ok')

  randomItems.map(randomItem =>
    t.deepEqual(sortedItems.find(sortedItem => randomItem.id === sortedItem.id), randomItem)
  )
})

test('test all languages', t => {
  const { languages } = getInfo()
  languages.map(language => t.truthy(getItems(language.id, false), `${language} items ok`))
})
