export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/ProjectsPage.vue')
    },
    {
        path: '/projects/:id',
        component: () => import('@/views/ProjectDynamic.vue')
    }
]
