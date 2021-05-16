import Router from 'vue-router';
import AppHome from '@/components/AppHome';
import WorkshopsList from '@/components/WorkshopsList';
import PageNotFound from '@/components/PageNotFound';

const router = new Router({
    mode: 'history', // enables clean URLS (works on all modern browsers)
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops-list',
            path: '/workshops',
            component: WorkshopsList
        },
        {
            name: 'page-not-found',
            path: '*',
            component: PageNotFound
        }
    ]
});

export default router;