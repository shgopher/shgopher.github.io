export const data = {
  "key": "v-f0388862",
  "path": "/links/",
  "title": "链接",
  "lang": "zh_CN",
  "frontmatter": {
    "layout": "Links",
    "title": "链接",
    "links": [
      {
        "title": "教程",
        "items": [
          {
            "sitename": "GOFamily",
            "url": "https://shgopher.github.io/GOFamily/",
            "img": "/images/link/gofamily1.jpeg",
            "desc": "go 后端程序员宝典，包含了：基础语法，并发，运行时，和工程方面的一系列围绕着go相关的解决方案"
          },
          {
            "sitename": "git",
            "url": "https://shgopher.github.io/git/",
            "img": "/images/link/git.png",
            "desc": "讲解git的基础操作，以及进阶操作，彻底掌握git"
          }
        ]
      },
      {
        "title": "基础技术",
        "items": [
          {
            "sitename": "hui",
            "url": "https://github.com/shgopher/hui",
            "img": "/images/link/hui1.jpeg",
            "desc": "一款简洁好用的web框架"
          }
        ]
      },
      {
        "title": "业务",
        "items": [
          {
            "sitename": "key",
            "url": "https://github.com/shgopher/key",
            "img": "/images/link/iam.jpeg",
            "desc": "微服务架构下的鉴权授权系统"
          },
          {
            "sitename": "go-short",
            "url": "https://github.com/shgopher/go-short",
            "img": "/images/link/go-short.png",
            "desc": "微服务化的短链接服务"
          },
          {
            "sitename": "short",
            "url": "https://github.com/shgopher/short",
            "img": "/images/link/short.jpeg",
            "desc": "简单的短链接服务"
          }
        ]
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null
  },
  "filePathRelative": "links/README.md"
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
