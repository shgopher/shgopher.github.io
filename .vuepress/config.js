
const { gungnirTheme } = require("vuepress-theme-gungnir");
module.exports = {
  title: '科科人神',
  base: "/",
  lang:"zh_CN",
  description: '科科人神，后端软件工程师，喜欢云原生',
  head: [
    ['link', {rel: 'shortcut icon', type: "image/x-icon", href: '/favicon.ico'}],
  ],
  host: 'localhost',
  port: 8081,
  dest: '.vuepress/dist',

  theme: gungnirTheme({
    
    themePlugins: {
      ba: "664c7b8c233246eb060442d116b7b15d",
      giscus: {
        repo: "shgopher/shgopher.github.io",  // 必须，string，格式：user_name/repo_name
        repoId: "MDEwOlJlcG9zaXRvcnkyNTUwNjI1OTI=",  // 必须，string，在 Giscus 官网上生成
        category: "Announcements",  // 必须，string
        categoryId: "DIC_kwDODzPyQM4CPQiK",  // 必须，string，在 Giscus 官网上生成
        mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
        reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
        lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
        lazyLoad: true,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
        crossorigin: "[crossorigin]",  // 可选，string，default="anonymous"
        theme: "[light 模式主题]",  // 可选，string，default="light"
        darkTheme: "[dark 模式主题]"  // 可选，string，default="dark_dimmed"
      },
      },
    
    navbar: [
      {
        text:"home",
        link:"/",
        icon:"hi-solid-home"
      },
      {
        text:"分类",
        link:"/tags/",
        icon:"bi-tags-fill"
      },
      {
        text:"推荐",
        link:"/links/",
        icon:"fa-staylinked"
      },
    ], 
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "科科人神",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "https://avatars.githubusercontent.com/u/42873232?s=400&u=2d8f48decb196d461d2a3eb8dc4fd508db3ec4ce&v=4",

      // 必须：个人简介，将在首页显示
      description: "后端软件工程师，喜欢云原生",
      
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: {
          icon:"bi-github",
          link:"https://github.com/shgopher",
        },  // Github
        // linkedin: "xiaohan-zou-55bba0160",  // 领英
        // facebook: "renovamen.zou",  // Facebook
        // twitter: "renovamen_zxh",  // 推特
        douyin:{
          icon:"co-tiktok",
          link:"https://www.douyin.com/user/MS4wLjABAAAAyxdyyQ0IvK2kIao_DnCHSMl2HWEvIGEKaaxrrtWnIgI",
        },
        zhihu: "shgopher",  // 知乎
        weibo: "shgopher",  // 新浪微博
        email: "shgopher@qq.com",  // 邮箱
        // rss: "/rss.xml",  // RSS 文件的链接
        // 添加其他的社交平台
      
        bilibili: {  // 随便什么名字
          icon: "ri-bilibili-line",  // 社交平台的图标
          link: "https://space.bilibili.com/478621088"  // 主页链接
        },
        wechat:{
          icon:"co-wechat",
          link:"https://shgopher.github.io/GOFamily/#wechat.png",
        }
        
        // ...
      }
    },
    // 首页图
    homeHeaderImages: [
      // 图 1
      
      {
        "path": "/images/bg/bg1.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      
      {
        "path": "/images/bg/bg2.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg3.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg4.png",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg5.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg6.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg7.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg8.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg9.png",
        "mask": "rgba(0, 0, 0, .2)"
      },
      {
        "path": "/images/bg/bg10.jpeg",
        "mask": "rgba(0, 0, 0, .2)"
      },
    ],
    blogNumPerPage: 10 , // 可选：每页的博客数量，默认：10
    pages: {
      
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '标签页面墙',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/images/tag/1.jpeg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },
      // 链接页配置
     links: {
      // 可选：链接页副标题
      subtitle: '我的作品合集',

      // 可选：链接页封面图路径和蒙版
      bgImage: {
        path: '/images/link/1.jpeg',
        mask: 'rgba(64, 118, 190, 0.5)'
      }
    },
    },
     

    footer: `
  `,

  searchText: "搜索",
  })
}