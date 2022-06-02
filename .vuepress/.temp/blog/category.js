export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"basic":{"path":"/tags/basic/","keys":["v-bc72f446","v-b4827506"]},"go":{"path":"/tags/go/","keys":["v-fc334714"]},"coder":{"path":"/tags/coder/","keys":["v-7450243c"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
