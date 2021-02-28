<template>
  <div class="note-view">
    <h1 class="title is-1">{{ note.title }}</h1>
    <p v-html="content" class="note-content"></p>
  </div>
</template>

<script lang="ts">
import { Note } from '@/data/models/Note'
import { computed, defineComponent, PropType } from 'vue'
import marked from 'marked'

export default defineComponent({
  name: 'NoteView',
  props: {
    note: { type: Object as PropType<Note>, required: true }
  },
  setup(props) {
    const content = computed(() => marked(props.note.content))

    return {
      content
    }
  }
})
</script>

<style lang="scss" scoped>
.note-view {
  text-align: left;
  padding: 0 1rem;

  h1 {
    font-size: 4rem;
  }

  p {
    h1 {
      font-size: 3rem;
    }
  }
}
</style>
