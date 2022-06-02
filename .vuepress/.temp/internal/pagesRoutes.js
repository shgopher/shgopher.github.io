import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-f0388862","/links/",{"title":"链接"},["/links/index.html","/links/README.md"]],
  ["v-bc72f446","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.html",{"title":"必备知识","subtitle":"耗子叔推荐的","date":"2022-5-24","tags":["basic"],"headerImage":"/images/post/2022/5/2.png","excerpt":""},["/posts/2022/5/必备知识.html","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86","/posts/2022/5/必备知识.md","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.md"]],
  ["v-b4827506","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97.html",{"title":"程序员必备知识大全","subtitle":"程序员需要掌握的基本知识","date":"2022-5-24","tags":["basic"],"headerImage":"/images/post/2022/5/1.png","excerpt":""},["/posts/2022/5/必备知识罗列.html","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97","/posts/2022/5/必备知识罗列.md","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97.md"]],
  ["v-fc334714","/posts/2022/6/%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0%E7%9A%84go%E7%89%88%E6%9C%AC.html",{"title":"如何下载最新的go版本","subtitle":"讲解使用go install 下载&编译go版本","date":"2022-6-2","tags":["go"],"headerImage":"/images/post/2022/6/1.jpeg","excerpt":""},["/posts/2022/6/下载最新的go版本.html","/posts/2022/6/%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0%E7%9A%84go%E7%89%88%E6%9C%AC","/posts/2022/6/下载最新的go版本.md","/posts/2022/6/%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0%E7%9A%84go%E7%89%88%E6%9C%AC.md"]],
  ["v-7450243c","/posts/2022/6/%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%8B%B1%E8%AF%AD%E8%AF%BB%E6%B3%95.html",{"title":"常见的go专业命令的英文标准发音","subtitle":"纠正错误的专业英文发音","date":"2022-6-2","tags":["coder"],"headerImage":"/images/post/2022/6/2.png","excerpt":""},["/posts/2022/6/正确的英语读法.html","/posts/2022/6/%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%8B%B1%E8%AF%AD%E8%AF%BB%E6%B3%95","/posts/2022/6/正确的英语读法.md","/posts/2022/6/%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%8B%B1%E8%AF%AD%E8%AF%BB%E6%B3%95.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-22363044","/tags/basic/",{"title":"basic | Tags"},["/tags/basic/index.html"]],
  ["v-abc7516c","/tags/go/",{"title":"go | Tags"},["/tags/go/index.html"]],
  ["v-1d4faa72","/tags/coder/",{"title":"coder | Tags"},["/tags/coder/index.html"]],
  ["v-3a1f8885","/page/1/",{"title":"Home"},["/page/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
