import { API } from '@/api/API'
// import { useUserAuth } from '@/composables/UserAuth'

import dayjs from 'dayjs'
import { readonly, ref } from 'vue'

export type BlogPost = {
  author: string
  content: string
  created: number
  id: string
  likes: number
  tags: string[]
  title: string
  updated?: number
}

export enum EditorMode {
  NEW_POST,
  UPDATE_POST,
}

export function useBlogPosts() {
  const posts = ref(Array<BlogPost>())
  // const cursor = ref()

  // API
  const createPost = async (post: BlogPost) => {
    await API.CREATE_POST(post)
  }

  const fetchPosts = async () => {
    posts.value = posts.value.concat(await API.FETCH_POSTS())
    console.log('Posts:', posts.value)
  }

  const loadPost = async (id: string): Promise<BlogPost | undefined> => {
    return API.LOAD_POST(id)
  }

  const updatePost = async (post: BlogPost) => {
    console.log('[To Do/API] Updating post:', post)
  }

  const deletePost = async (post: BlogPost) => {
    console.log('[To Do/API] Deleting post:', post)
  }

  // Utility
  const formatPostCreated = (post: BlogPost): string => {
    return dayjs.unix(post.created).format('MMM DD, YYYY')
  }

  return {
    createPost,
    deletePost,
    fetchPosts,
    formatPostCreated,
    loadPost,
    posts: readonly(posts),
    updatePost,
  }
}
