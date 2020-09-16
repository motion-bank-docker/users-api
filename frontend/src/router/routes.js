
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/index.vue') },
      { name: 'admin', path: 'admin', component: () => import('pages/admin.vue') },
      { name: 'callback', path: 'callback', component: () => import('pages/callback.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
