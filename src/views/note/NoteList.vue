<template>
  <div class="note-list">
    <ul>
      <li v-for="note in notes" :key="note._id">
        {{ note._id }} :
        <router-link :to="{ name: 'NoteDisplay', params: { id: note._id } }">{{
          note.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNoteList } from '@/modules/note/hooks/useNoteList.hook'

export default defineComponent({
  name: 'NoteList',
  setup() {
    const { notes } = useNoteList()

    return {
      notes
    }
  }
})
</script>

<style lang="scss" scoped>
.note-list {
}
</style>
