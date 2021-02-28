<template>
  <div class="first-note" v-if="firstNote">
    <note-view :note="firstNote" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFirstNote } from '@/modules/note/hooks/useFirstNote.hook'
import NoteView from '@/modules/note/components/NoteView.vue'

export default defineComponent({
  name: 'FirstNote',
  components: {
    NoteView
  },
  setup() {
    const { firstNote } = useFirstNote()

    return {
      firstNote
    }
  }
})
</script>

<style lang="scss" scoped>
.first-note {
}
</style>
