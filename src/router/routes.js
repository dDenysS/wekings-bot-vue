export default [
    {
        path: '/',
        component: () => import('../views/Layout'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home/index')
            },
            {
                path: 'bot',
                name: 'bot',
                component: () => import('../views/User/Bot')
            },
            {
                path: 'bot/settings',
                name: 'botSettings',
                component: () => import('../views/User/Bot')
            },
            {
                // TODO зробиш сторінку 404
                path: '/404',
                name: '404',
                component: () => import('../views/Home/components/404')
            }
        ]
    },
    {
        path: '/auth',
        redirect: '/auth/login',
        component: () => import('../views/AuthLayout'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/Auth/Login')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../views/Auth/Register')
            }
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
]
