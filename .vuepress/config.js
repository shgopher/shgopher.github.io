
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

    navbar: [
      {
        text:"home",
        link:"/",
        icon:"hi-solid-home"
    },
      {
        text:"标签",
        link:"/tags/",
        icon:"bi-tags-fill"
      },
      {
        text:"作品合集",
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