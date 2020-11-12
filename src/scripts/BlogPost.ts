import { Dayjs as Timestamp } from 'dayjs'

export type BlogPost = {
  author: string
  content?: string
  created: Timestamp
  postId: string
  likes?: number
  tags: Set<string>
  title: string
}

export enum EditorMode {
  NEW_POST = 'NEW_POST',
  UPDATE_POST = 'UPDATE_POST',
}
