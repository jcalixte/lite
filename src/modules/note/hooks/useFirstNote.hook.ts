import { computed } from 'vue'
import { useNoteList } from '@/modules/note/hooks/useNoteList.hook'

export const useFirstNote = () => {
  const { notes } = useNoteList()
  const firstNote = computed(() => [...notes.value].shift() ?? null)

  return {
    firstNote
  }
}
