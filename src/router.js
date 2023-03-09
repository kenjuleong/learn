import HomePage from '@/views/HomePage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/projects',
        component: ProjectsPage
    }
]
