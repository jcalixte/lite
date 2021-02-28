import { computed, ref } from 'vue'

import { DataType } from '@/data/DataType.enum'
import { Note } from '@/data/models/Note'
import { data } from '@/data/data'
import shortid from 'shortid'
import slug from 'slug'

export const useNoteForm = (note?: Note) => {
  const noteTitle = ref(note?.title ?? '')
  const noteContent = ref(note?.content ?? '')

  const sluggedTitle = computed(() => slug(noteTitle.value))

  const submit = () => {
    if (!noteTitle.value || !noteContent.value) {
      return
    }

    const newNote: Note = {
      _id: `${DataType.Note}-${shortid()}`,
      date: new Date().toISOString(),
      $type: DataType.Note,
      ...(note ?? {}),
      slug: sluggedTitle.value,
      title: noteTitle.value,
      content: noteContent.value
    }

    data.add(newNote)
  }

  return {
    noteTitle,
    noteContent,
    submit
  }
}
