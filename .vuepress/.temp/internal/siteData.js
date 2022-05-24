export const siteData = {
  "base": "/",
  "lang": "zh_CN",
  "title": "科科人神",
  "description": "科科人神，后端软件工程师，喜欢云原生",
  "head": [
    [
      "link",
      {
        "rel": "shortcut icon",
        "type": "image/x-icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
