<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/note/new">New</router-link> |
    <router-link to="/note/list">List</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
@import 'styles/app';

nav {
  text-align: left;
  padding: 1rem;
}
</style>
