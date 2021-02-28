<template>
  <div class="note-new">
    <note-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NoteForm from '@/modules/note/NoteForm.vue'

export default defineComponent({
  name: 'NoteNew',
  components: {
    NoteForm
  }
})
</script>

<style lang="scss" scoped>
.note-new {
  padding: 1rem;
}
</style>
