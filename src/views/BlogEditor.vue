<template lang="pug">
.editor-header.flex.justify-center.py-4
  .text-primary.text-5xl Post Editor
form.editor-options.flex.flex-col
  label.input-label(for='post-title') Title
  input#post-title.post-option.text-input(
    type='text'
    placeholder='Title'
    :modelValue='post.title')
  label.input-label(for='post-tags') Tags
  input#post-tags.post-option.text-input(
    type='text'
    placeholder='Dev, Tech, Life...'
    :modelValue='post.title')
  .text-primary.text-xl Content
  .editor(ref='editor' :modelValue='post.content')
  .editor-submit.mt-2.btn.text-center.text-xl(@click='updatePost') Publish
</template>

<script lang="ts">
import { EditorMode } from '@/scripts/BlogPost'

import '@toast-ui/editor/dist/toastui-editor.css'
import 'codemirror/lib/codemirror.css'
// import 'highlight.js/styles/github.css'

import Editor from '@toast-ui/editor'
import { defineComponent, onMounted, reactive, ref } from 'vue'

export default defineComponent({
  name: 'BlogEditor',
  props: {
    editorMode: {
      type: String,
      default: EditorMode.NEW_POST,
      validator: (v: string) => v in EditorMode,
    },
  },
  setup(props) {
    const editor = ref()
    const post = reactive({
      title: '',
      created: new Date(),
      author: '',
      content: '',
    })
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

    const updatePost = () => {
      switch (props.editorMode) {
        case EditorMode.NEW_POST:
          console.log('[To Do] Creating new post:', post.content)
          break
        case EditorMode.UPDATE_POST:
          console.log('[To Do] Updating post:', post.content)
          break
      }
    }
    return {
      editor,
      post,
      updatePost,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '../styles/ui.sass'

.editor-options
  margin: 0 auto
  max-width: 80vw

  .editor
    margin-top: 1rem

  .editor-submit
    width: 120px

  .post-option
    width: 30%
</style>
