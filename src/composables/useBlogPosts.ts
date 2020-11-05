import { BlogPost } from '@/scripts/BlogPost'

import dayjs from 'dayjs'
import { readonly, ref } from 'vue'

export function useBlogPosts() {
  const posts = ref(Array<BlogPost>())

  // Replace with API call to get latest data
  posts.value = [
    {
      author: 'adam',
      created: new Date(),
      likes: 0,
      tags: [],
      title: 'My First Blog Post',
      postId: '1234',
    },
    {
      author: 'not me',
      created: new Date(12345),
      likes: 0,
      tags: ['Life'],
      title: 'An old post!',
      postId: '4231',
    },
    {
      author: '0123456789012345',
      created: new Date(999),
      likes: 420,
      tags: ['Dev', 'Education'],
      title:
        'breaking the meta: an in depth guide into how to define a long title that overflows',
      postId: '777',
    },
  ]

  const formatPostCreated = (post: BlogPost): string => {
    return dayjs(post.created).format('MMM DD, YYYY')
  }

  return {
    formatPostCreated,
    posts: readonly(posts),
  }
}
