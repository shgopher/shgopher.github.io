export const searchIndex = [
  {
    "title": "链接",
    "headers": [],
    "path": "/links/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Links"
  },
  {
    "title": "必备知识",
    "subtitle": "耗子叔推荐的",
    "headers": [],
    "path": "/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Post"
  },
  {
    "title": "程序员必备知识大全",
    "subtitle": "程序员需要掌握的基本知识",
    "headers": [
      {
        "level": 2,
        "title": "GO",
        "slug": "go",
        "children": []
      },
      {
        "level": 2,
        "title": "408",
        "slug": "_408",
        "children": []
      },
      {
        "level": 2,
        "title": "架构设计",
        "slug": "架构设计",
        "children": []
      },
      {
        "level": 2,
        "title": "技术方向",
        "slug": "技术方向",
        "children": []
      },
      {
        "level": 2,
        "title": "其它",
        "slug": "其它",
        "children": []
      }
    ],
    "path": "/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Post"
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "404"
  },
  {
    "title": "Tags",
    "headers": [],
    "path": "/tags/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  },
  {
    "title": "doc | Tags",
    "headers": [],
    "path": "/tags/doc/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/page/1/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
