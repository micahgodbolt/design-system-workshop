const glob = require('glob')
const path = require('path')

const viewports = [
  {
    'name': 'medium',
    'width': 768,
    'height': 1024
  }
]

// Hide any selectors you don't need
const defaultHideSelectors = []
// Take out any selectors
const defaultRemoveSelectors = []
// Just get look at these selectors
const defaultSelectors = ['#root']
let scenariosArray = []
const vueFiles = glob.sync('src/components/**/*.backstop.js')

// Loop through all *.html pages and push to scenariosArray
vueFiles.forEach(function(file) {
  let tests = require('./' + file)
  let fileName = path.basename(file, '.backstop.js')

  tests.scenarios.forEach(function(scenario, i) {
    let {
      selectors = defaultSelectors,
      hideSelectors = defaultHideSelectors,
      removeSelectors = defaultRemoveSelectors,
      label = fileName + '_' + i,
      kind = '',
      story = '',
      url = `http://localhost:6006/iframe.html?selectedKind=${kind}&selectedStory=${story}&dataId=0`,
      readyEvent,
      readySelector = '#root',
      delay = 500,
      hoverSelector,
      clickSelector,
      postInteractionWait,
      selectorExpansion = true,
      misMatchThreshold = 0.1,
      requireSameDimensions = true
    } = scenario

    scenariosArray.push({
      label,
      url,
      hideSelectors,
      removeSelectors,
      selectors,
      readyEvent,
      readySelector,
      delay,
      hoverSelector,
      clickSelector,
      postInteractionWait,
      selectorExpansion,
      misMatchThreshold,
      requireSameDimensions
    })
  })
})

console.log(scenariosArray)

module.exports = {
  'id': 'vrt',
  'viewports': viewports,
  'scenarios': scenariosArray,
  'onBeforeScript': 'chromy/onBefore.js',
  'onReadyScript': 'chromy/onReady.js',
  'paths': {
    'bitmaps_reference': 'backstop_data/bitmaps_reference',
    'bitmaps_test': 'backstop_data/bitmaps_test',
    'engine_scripts': 'backstop_data/engine_scripts',
    'html_report': 'backstop_data/html_report',
    'ci_report': 'backstop_data/ci_report'
  },
  'engine': 'chrome',
  'report': ['browser'],
  'debug': false,
  'debugWindow': true
}
