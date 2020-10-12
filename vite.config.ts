const pathAliasMap = {
  '@/': '/src/',
  '@components/': '/src/components/',
  '@views/': '/src/views/',
}

export default {
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res)
          }
        }
      },
    },
  ],
}
