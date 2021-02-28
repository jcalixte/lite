import { onMounted, ref } from 'vue'

import { Note } from '@/data/models/Note'
import { data } from '@/data/data'

export const useNote = (id: string) => {
  const note = ref<Note | null>(null)
  onMounted(async () => {
    note.value = await data.get(id)
  })

  return {
    note
  }
}
