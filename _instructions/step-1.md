# Step 1: Basic Components

## What is a SFC?

A single file component is a Vue component, combined into a single file. It combines the component template, styles as well as scripts. It uses a .vue extension.

## Moving part of the application to a Vue SFC

1. Create new Vue file
2. Import file into `App.vue`
3. Add component to `App.vue` components array inside of `script`


## How to scaffold a Vue SFC

With Vetur installed, type `scaffold` and hit tab

Or copy the following

```vue
<template>

</template>

<script>
export default {

}
</script>

<style>

</style>

```

## Create Title.vue

1. Create `Title.vue` inside of the components directory in src
2. Scaffold component as per above
3. Add `<h1>{{text}}</h1>` to template
4. Add `name: 'Title', props: ['text']` to default export
5. Import `Title.vue` in `App.vue` with `import Title from './components/Title/Title'`
6. Add `Title` to the components array in `App.vue` components object
7. Replace `<h1>todos</h1>` with `<Title text="todos" />`
8. What are slots, and would they work too?

## Create TodoCount

1. What are filters?

## Homework!

1. Create an Info component to replace the `<footer class="info">`
2. Bonus! Create a Link component and import that into the Info component