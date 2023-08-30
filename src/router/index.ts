import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../views/index.vue';

const routes = [
    {
        path: '/',
        name: 'Layout',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: 'Dashboard',
                    icon:''
                },
                component: () => import('../views/dashboard/index.vue'),
            },
            {
                path: '/servers',
                name: 'servers',
                meta: {
                    title: 'Servers',
                    icon:''
                },
                component: () => import('../views/servers/index.vue'),
            },
            {
                path: '/configure',
                name: 'configure',
                meta: {
                    title: 'Configure',
                    icon:''
                },
                redirect: '/configure/profiles',
                component: () => import('../views/configure/index.vue'),
                children: [
                    {
                        path: '/configure/profiles',
                        name: 'profiles',
                        meta: {
                            title: 'Profiles',
                            icon:''
                        },
                        component: () => import('../views/configure/profiles/index.vue'),
                    },
                    {
                        path: '/configure/pipelines',
                        name: 'pipelines',
                        meta: {
                            title: 'Pipelines',
                            icon:''
                        },
                        component: () => import('../views/configure/pipelines/index.vue'),
                    },
                    {
                        path: '/configure/deployments',
                        name: 'deployments',
                        meta: {
                            title: 'Deployments',
                            icon:''
                        },
                        component: () => import('../views/configure/deployments/index.vue'),
                    }
                    
                ]
            },
            {
                path: '/plans',
                name: 'plans',
                meta: {
                    title: 'Plans',
                    icon:''
                },
                component: () => import('../views/plans/index.vue'),
            },
            {
                path: '/server_lifecycle',
                name: 'server_lifecycle',
                meta: {
                    title: 'Server Lifecycle',
                    icon:''
                },
                component: () => import('../views/server_lifecycle/index.vue'),
            },
            {
                path: '/operation',
                name: 'operation',
                meta: {
                    title: 'Operation',
                    icon:''
                },
                component: () => import('../views/operation/index.vue'),
            },
            {
                path: '/web_cli',
                name: 'web_cli',
                meta: {
                    title: 'Web CLI',
                    icon:''
                },
                component: () => import('../views/web_cli/index.vue'),
            },
        ],
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
