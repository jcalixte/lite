<template>
  <div class="note-display" v-if="note">
    <note-view :note="note" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NoteView from '@/modules/note/components/NoteView.vue'
import { useNote } from '@/modules/note/hooks/useNote.hook'

export default defineComponent({
  name: 'NoteDisplay',
  components: {
    NoteView
  },
  props: {
    id: { type: String, required: true }
  },
  setup(props) {
    const { note } = useNote(props.id)

    return { note }
  }
})
</script>

<style lang="scss" scoped>
.note-display {
}
</style>
