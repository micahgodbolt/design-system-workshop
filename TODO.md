## Step 0

Planning/Component ID'ing

Vue CLI
Vue TODO MVC

## Step 1 Basic Components

Vue Basics
SFC
export default
  name, props, components, filters

template
  {{}} syntax
  <slot>
  :bind="bind" syntax


h1 -> Title
todo-count -> TodoCount
info -> Info (them)
link -> Link (bonus)

## Step 2 Complex Components (emiting)

filter button -> Button
  talk about emits
  class is auto passed through
input (new-todo only) Textfield -> Textfield
  v-model vs v-bind(:) + @change
  show $log for $event.target
label (them)
input checkbox -> Checkbox (bonus)
  give hint
    :checked="value"
    @change="$emit(`change`, $event.target.checked)"


## Step 3 Iterators
Build List
Review TODO Item
  Most complex component yet
  Combines 4 components


## Step 4 Moving Styles


Using BEACSS naming convention
  move away from class based types to prop based types fed to data attributes
Nav

## Step 5 Documentation

Storybook
Sassdoc

## Step 6

Tests