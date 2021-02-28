<template>
  <form class="note-form" @submit.prevent="submit">
    <div class="field">
      <div class="control">
        <input
          class="input is-info is-large"
          type="text"
          placeholder="Title"
          v-model="noteTitle"
          required
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea
          name="note"
          id="note"
          class="textarea is-info is-large has-fixed-size note-content"
          v-model="noteContent"
          required
        ></textarea>
      </div>
    </div>

    <button type="submit" class="button is-primary">create</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNoteForm } from './useNoteForm.hook'

export default defineComponent({
  name: 'NoteForm',
  setup() {
    const { noteTitle, noteContent, submit } = useNoteForm()

    return { noteTitle, noteContent, submit }
  }
})
</script>

<style lang="scss" scoped>
.note-form {
  .control {
    max-width: 750px;
    margin: auto;
  }

  textarea {
    height: 50vh;
    margin-bottom: 2rem;
  }
}
</style>
