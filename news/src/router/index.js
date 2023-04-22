import Vue from 'vue'
import VueRouter from 'vue-router'
import New from '../pages/news'
import NewDetail from '../pages/news-detail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/news',
      component: New,
      // component: () => import(/* webpackChunkName: "news" */"../pages/news.vue"),
    },
    {
      path: '/news/detail',
      component: NewDetail,
      // component: () => import(/* webpackChunkName: "news-detail" */"../pages/news-detail.vue"),
    }
  ]
})

export default router