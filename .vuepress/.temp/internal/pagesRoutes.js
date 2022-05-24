import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-f0388862","/links/",{"title":"链接"},["/links/index.html","/links/README.md"]],
  ["v-bc72f446","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.html",{"title":"必备知识","subtitle":"耗子叔推荐的","date":"2022-5-24","tags":["doc"],"headerImage":"/images/post/2022-5-24/2.png","excerpt":""},["/posts/2022/5/必备知识.html","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86","/posts/2022/5/必备知识.md","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.md"]],
  ["v-b4827506","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97.html",{"title":"程序员必备知识大全","subtitle":"程序员需要掌握的基本知识","date":"2022-5-24","tags":["doc"],"headerImage":"/images/post/2022-5-24/1.png","excerpt":""},["/posts/2022/5/必备知识罗列.html","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97","/posts/2022/5/必备知识罗列.md","/posts/2022/5/%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86%E7%BD%97%E5%88%97.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-cd258958","/tags/doc/",{"title":"doc | Tags"},["/tags/doc/index.html"]],
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
