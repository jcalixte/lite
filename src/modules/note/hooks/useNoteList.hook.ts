import { onMounted, ref } from 'vue'

import { DataType } from '@/data/DataType.enum'
import { Note } from '@/data/models/Note'
import { data } from '@/data/data'

export const useNoteList = () => {
  const notes = ref<Note[]>([])

  onMounted(async () => {
    notes.value = await data.getAll<DataType.Note, Note>({
      prefix: DataType.Note
    })
  })

  return {
    notes
  }
}
