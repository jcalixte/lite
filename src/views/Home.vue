<template>
  <div class="home">
    <first-note />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirstNote from '@/modules/note/FirstNote.vue'

export default defineComponent({
  name: 'Home',
  components: {
    FirstNote
  }
})
</script>
