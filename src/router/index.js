import Vue from 'vue'
import Router from 'vue-router'
import BlogManage from '@/components/admin/BlogManage'
import AdminHome from '@/components/admin/Home'
import BlogEditor from '@/components/admin/BlogEditor'
//main site
import MainSite from '@/components/mainsite/MainSite'
import BlogList from '@/components/mainsite/BlogList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/mainSite",
    }, {
      path: "/mainSite",
      name: "mainSite",
      component: MainSite,
      redirect: "/blogList",
      children: [
        {path:"/blogList", component: BlogList, name:"blogList"}
      ]
    },{
      path: "/admin",
      name: "/admin",
      component: AdminHome,
      redirect: "/blogManage",
      children: [
        {path: "/blogManage", component: BlogManage, name: "blogManage"},
        {path: "/blogEditor", component: BlogEditor, name: "blogEditor"},
      ]
    }
  ]
})
