import { BlogPost } from '@/scripts/BlogPost'

import dayjs from 'dayjs'
import { readonly, ref } from 'vue'

export function useBlogPosts() {
  const posts = ref(Array<BlogPost>())

  // Replace with API call to get latest data
  posts.value = [
    {
      author: 'adam',
      created: dayjs(),
      likes: 0,
      tags: new Set(),
      title: 'My First Blog Post',
      postId: '1234',
    },
    {
      author: 'not me',
      created: dayjs(12345),
      likes: 0,
      tags: new Set('Life'),
      title: 'An old post!',
      postId: '4231',
    },
    {
      author: '0123456789012345',
      created: dayjs(999),
      likes: 420,
      tags: new Set(['Dev', 'Education']),
      title:
        'breaking the meta: an in depth guide into how to define a long title that overflows',
      postId: '777',
    },
  ]

  const formatPostCreated = (post: BlogPost): string => {
    return dayjs(post.created).format('MMM DD, YYYY')
  }

  const createPost = (post: BlogPost) => {
    console.log('[To Do/API] Creating new post:', post)
  }

  const updatePost = (post: BlogPost) => {
    console.log('[To Do/API] Updating post:', post)
  }

  const deletePost = (post: BlogPost) => {
    console.log('[To Do/API] Deleting post:', post)
  }

  return {
    createPost,
    deletePost,
    formatPostCreated,
    posts: readonly(posts),
    updatePost,
  }
}
