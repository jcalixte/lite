import { DataType } from '@/data/DataType.enum'
import { Model } from '@/data/models/Model'

export interface Note extends Model<DataType.Note> {
  date: string
  title: string
  slug: string
  content: string
}
