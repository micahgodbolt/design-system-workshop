const glob = require('glob')
const path = require('path')

const viewports = [
  {
    'name': 'medium',
    'width': 768,
    'height': 1024
  }
]

// Just get look at these selectors
const defaultSelectors = ['#root']

let scenariosArray = []
let runAllTests = true
const testFiles = glob.sync('src/components/**/*.backstop.js')

// Loop through all *.backstop.js pages and push to scenariosArray
testFiles.forEach(function(file) {
  const tests = require('./' + file)
  const fileName = path.basename(file, '.backstop.js')

  tests.scenarios.forEach(function(scenario, i) {
    const url = [
      'http://localhost:6006/iframe.html?selectedKind=',
      encodeURI(tests.kind || fileName),
      '&selectedStory=',
      encodeURI(scenario.story),
      '&dataId=0'
    ].join('')

    let defaultProps = {
      selectors: defaultSelectors,
      label: fileName + '_' + i,
      url: url,
      readySelector: '#root',
      delay: 500
    }

    if (tests.only || scenario.only) {
      // if this is first 'only', flip flag and wipe scenariosArray
      if (runAllTests === true) {
        runAllTests = false
        scenariosArray = []
      }
      scenariosArray.push(Object.assign(defaultProps, scenario))
    } else if (runAllTests === true) {
      scenariosArray.push(Object.assign(defaultProps, scenario))
    }
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
  'debugWindow': false
}
