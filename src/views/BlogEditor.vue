<template lang="pug">
.editor-header.flex.justify-center.py-2
  .text-primary.text-5xl Post Editor
form.editor-options.flex.flex-col
  label.input-label(for='post-title') Title
  input#post-title.post-option.text-input(
    type='text'
    placeholder='Title'
    :modelValue='post.title')
  label.input-label(for='post-tags') Tags
  #post-tags.flex.items-center
    input.post-tag-input.post-option.text-input(
      v-model='tag'
      type='text'
      placeholder='Dev, Tech, Life...'
      @keydown.enter='addTag')
    .post-tags.flex.ml-1
      .post-tag.flex.items-center.ml-1.cursor-pointer(v-for='tagName in post.tags' @click='removeTag(tagName)')
        .tag-name.text-primary {{ tagName }}
        i.material-icons close
  .text-primary.text-xl Content
  .editor(ref='editor' :modelValue='post.content')
  .editor-btn.mt-2.btn.text-center.text-xl(v-if='isNewPost' @click='createPost(post)') Publish
  .editor-btn.mt-2.btn.text-center.text-xl(v-else @click='updatePost(post)') Update
  .editor-btn.mt-2.btn-error.text-center.text-xl(v-if='!isNewPost' @click='deletePost(post)') Delete
</template>

<script lang="ts">
import { BlogPost, EditorMode, useBlogPosts } from '@/composables/BlogPosts'

import '@toast-ui/editor/dist/toastui-editor.css'
import 'codemirror/lib/codemirror.css'
// import 'highlight.js/styles/github.css'

import dayjs from 'dayjs'
import Editor from '@toast-ui/editor'
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'

export default defineComponent({
  name: 'BlogEditor',
  props: {
    editorMode: {
      type: Number,
      default: EditorMode.NEW_POST,
      validator: (v: string) => v in EditorMode,
    },
    // post: {
    //   type: Object as () => BlogPost,
    // }
  },
  setup(props) {
    const editor = ref()
    const tag = ref('')
    const post = reactive({
      author: '',
      content: '',
      created: dayjs(),
      postId: '',
      tags: new Set(),
      title: '',
    } as BlogPost)

    onMounted(() => {
      const e = new Editor({
        el: editor.value,
        initialEditType: 'wysiwyg',
        hideModeSwitch: true,
        previewStyle: 'vertical',
        // plugins: [[codeSyntaxHighlight, { hljs }]],
        events: {
          change: () => {
            post.content = e.getMarkdown()
          },
        },
      })
    })

    const addTag = () => {
      post.tags.add(tag.value)
      tag.value = ''
    }

    const removeTag = (tagName: string) => {
      post.tags.delete(tagName)
    }

    const isNewPost = computed(() => props.editorMode === EditorMode.NEW_POST)

    return {
      ...useBlogPosts(),
      addTag,
      editor,
      isNewPost,
      post,
      removeTag,
      tag,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '../styles/ui.sass'

.editor-options
  height: 100%
  margin: auto
  max-width: 50vw
  padding-bottom: 2rem

  .editor
    margin-top: 1rem

  .editor-btn
    width: 120px

  .post-option
    width: 50%

  .post-tags
    color: gray

    .post-tag
      border: 1px solid $primary-light
      border-radius: 10px
      font-size: 1rem
      padding: 0.2rem 0.3rem
      @extend .transition-fast
      &:hover
        background: lighten($primary, 10%)

  .post-tag-input
    width: 30%
</style>
