import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-eab86474","/posts/2022-5-23.html",{"title":"程序员必备知识大全","subtitle":"程序员需要掌握的基本知识","date":"2021-5-24","tags":["doc"],"headerImage":"/images/post/2022-5-24/1.png","excerpt":""},["/posts/2022-5-23","/posts/2022-5-23.md"]],
  ["v-f0388862","/links/",{"title":"链接"},["/links/index.html","/links/README.md"]],
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
