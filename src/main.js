// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

let todoVisibility = ''

// handle routing
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  var possibleFilters = ['all', 'active', 'completed']
  if (possibleFilters.indexOf(visibility) >= 0) {
    todoVisibility = visibility
  } else {
    window.location.hash = ''
    todoVisibility = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      visibility: todoVisibility
    }
  }
})
