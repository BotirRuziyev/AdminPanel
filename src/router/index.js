import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addabout',
    name: 'addabout',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/aboutsee',
    name: 'aboutsee',
    component: () => import('../views/AboutSee.vue')
  },
  {
    path: '/addproject',
    name: 'addproject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/projectedit/:id',
    name: 'projectedit',
    component: () => import('../views/ProjectEdit.vue')
  },
  {
    path: '/projectimgedit/:id',
    name: 'projectedit',
    component: () => import('../views/ProjectImgEdit.vue')
  },
  {
    path: '/addservice',
    name: 'addservice',
    component: () => import('../views/AddService.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/addteam',
    name: 'addteam',
    component: () => import('../views/AddTeam.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/addbestproject',
    name: 'addbestproject',
    component: () => import('../views/AddBestProject.vue')
  },
  {
    path: '/bestproject',
    name: 'bestproject',
    component: () => import('../views/BestProject.vue')
  },
  {
    path: '/seemessage',
    name: 'seemessage',
    component: () => import('../views/SeeMessage.vue')
  },
  {
    path: '/aboutedit/:id',
    name: 'aboutedit',
    component: () => import('../views/AboutEdit.vue')
  },
  {
    path: '/3dmodulsedit/:id',
    name: '3dmodulsedit',
    component: () => import('../views/3DmodulsEdit.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
