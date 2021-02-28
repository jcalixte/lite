<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand is-active">
      <router-link class="navbar-item" to="/">Home</router-link>
      <div class="navbar-burger" data-target="navbar-menu" @click="toggleMenu">
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="navbar-menu"
      ref="target"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/note/new">New</router-link>
        <router-link class="navbar-item" to="/note/list">List</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const isActive = ref(false)
    const target = ref(null)

    const toggleMenu = () => {
      isActive.value = !isActive.value
    }

    onClickOutside(target, () => {
      isActive.value = false
    })

    return {
      isActive,
      toggleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  text-align: left;
}
</style>
