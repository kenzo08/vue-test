import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../pages/PostPage.vue'),
  },
  {
    path: '/new-post',
    name: 'NewPostPage',
    component: () => import('../pages/NewPostPage.vue'),
  },
  {
    path: '/post',
    name: 'CurrentPost',
    component: ()=> import('../components/Post.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: ({ hash }, _, savedPosition) =>
      savedPosition || hash
          ? { selector: hash, behavior: 'smooth' }
          : { left: 0, top: 0, behavior: 'smooth' },
});

export default router