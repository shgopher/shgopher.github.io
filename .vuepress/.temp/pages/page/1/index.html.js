export const data = {
  "key": "v-3a1f8885",
  "path": "/page/1/",
  "title": "Home",
  "lang": "zh_CN",
  "frontmatter": {
    "title": "Home",
    "layout": "HomePage"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
