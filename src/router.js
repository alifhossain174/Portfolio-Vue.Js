import {createWebHistory, createRouter} from 'vue-router';
import ServiceSection from './components/ServiceSection.vue';
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import ContactForm from './components/ContactForm.vue';
import BlogDetails from './components/BlogDetails.vue';

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
    },
    { 
        name: 'BlogDetails',
        path: '/blog/:id',
        component: BlogDetails, 
        props: true 
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;