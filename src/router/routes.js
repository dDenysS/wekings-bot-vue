export default [
    {
        path: '/',
        component: () => import('../views/Layout'),
        children: [
            {
                path: 'bot',
                name: 'bot',
                component: () => import('../views/User/Bot')
            }
            /* { //TODO зробиш сторінку 404
                path: '404',
                component: () => import('../components/404')
            } */
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
