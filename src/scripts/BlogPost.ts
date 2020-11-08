export type BlogPost = {
  author: string
  created: Date
  postId: string
  likes: number
  tags: string[]
  title: string
}

export enum EditorMode {
  NEW_POST = 'NEW_POST',
  UPDATE_POST = 'UPDATE_POST',
}
