export const themeData = {
  "navbar": [
    {
      "text": "home",
      "link": "/",
      "icon": "hi-solid-home"
    },
    {
      "text": "标签",
      "link": "/tags/",
      "icon": "bi-tags-fill"
    },
    {
      "text": "作品合集",
      "link": "/links/",
      "icon": "fa-staylinked"
    }
  ],
  "personalInfo": {
    "name": "科科人神",
    "avatar": "https://avatars.githubusercontent.com/u/42873232?s=400&u=2d8f48decb196d461d2a3eb8dc4fd508db3ec4ce&v=4",
    "description": "后端软件工程师，喜欢云原生",
    "sns": {
      "github": {
        "icon": "bi-github",
        "link": "https://github.com/shgopher"
      },
      "douyin": {
        "icon": "co-tiktok",
        "link": "https://www.douyin.com/user/MS4wLjABAAAAyxdyyQ0IvK2kIao_DnCHSMl2HWEvIGEKaaxrrtWnIgI"
      },
      "zhihu": "shgopher",
      "weibo": "shgopher",
      "email": "shgopher@qq.com",
      "bilibili": {
        "icon": "ri-bilibili-line",
        "link": "https://space.bilibili.com/478621088"
      },
      "wechat": {
        "icon": "co-wechat",
        "link": "https://shgopher.github.io/GOFamily/#wechat.png"
      }
    }
  },
  "homeHeaderImages": [
    {
      "path": "/images/bg/3.jpeg",
      "mask": "rgba(0, 0, 0, .2)"
    },
    {
      "path": "/images/bg/8.jpeg",
      "mask": "rgba(0, 0, 0, .2)"
    },
    {
      "path": "/images/bg/11.jpeg",
      "mask": "rgba(0, 0, 0, .2)"
    },
    {
      "path": "/images/bg/14.jpeg",
      "mask": "rgba(0, 0, 0, .2)"
    }
  ],
  "blogNumPerPage": 10,
  "pages": {
    "tags": {
      "subtitle": "标签页面墙",
      "bgImage": {
        "path": "/images/tag/1.jpeg",
        "mask": "rgba(211, 136, 37, .5)"
      }
    },
    "links": {
      "subtitle": "我的作品合集",
      "bgImage": {
        "path": "/images/link/1.jpeg",
        "mask": "rgba(64, 118, 190, 0.5)"
      }
    }
  },
  "footer": "\n  ",
  "searchText": "搜索",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "hitokoto": false,
  "catalog": true,
  "searchIcon": "ri-search-2-line",
  "langIcon": "hi-translate",
  "repo": null,
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": false,
  "navbarTitle": "$ cd /home/",
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page on GitHub",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "info": "INFO",
  "tip": "TIP",
  "warning": "WARNING",
  "danger": "DANGER",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "$ cd /home/",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar",
  "pageText": {
    "tags": "Tags",
    "links": "Links"
  },
  "showAllTagsText": "Show All",
  "postNext": "Next",
  "postPrev": "Previous",
  "homeNext": "← Newer Posts",
  "homePrev": "Older Posts →",
  "pwaPopupMessage": "New content is available.",
  "pwaPopupButtonText": "Refresh",
  "headerImageCredit": "Image by",
  "search": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
