import {createWebHistory, createRouter} from 'vue-router';
import ServiceSection from './components/ServiceSection.vue';
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import ContactForm from './components/ContactForm.vue';

const routes=[
    {
        name: 'HomePage',
        path: '/',
        component: HomePage,
    },
    {
        name: 'AboutUs',
        path: '/about',
        component: AboutUs,
    },
    {
        name: 'ServiceSection',
        path: '/service',
        component: ServiceSection,
    },
    {
        name: 'ContactForm',
        path: '/contact',
        component: ContactForm,
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;