import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import Home from '@/views/home'
import NotFound from '@/views/error-page/404'
import Layout from '@/layout/AuthLayout'
import { lazy } from 'react'

export const baseRoutes = [
	{ path: '/', element: <Navigate to='/login' /> },
	{ path: '/login', element: <Login />, meta: { title: '登录页' } },
	{
		element: <Layout />,
		children: [{ path: '/home', Component: lazy(() => import('@/views/home')), meta: { title: '首页', requiresAuth: true } }]
	},
	{
		element: <Layout />,
		children: [{ path: '/jumpPointSetting', Component: lazy(() => import('@/views/jumpPointSetting')), meta: { title: '跳变点设置', requiresAuth: true } }]
	},
	// 主页
	{
		element: <Layout />,
		children: [{ path: '/user', Component: lazy(() => import('@/views/user')), meta: { title: '设备管理', requiresAuth: true } }]
	},
	{ path: '/404', element: <NotFound />, meta: { title: '404页面' } },
	{ path: '/403', element: <NotFound />, meta: { title: '403页面' } },
	{ path: '/500', element: <NotFound />, meta: { title: '500页面' } }
]


const Router = routes => {
	const router = createBrowserRouter(routes, { basename: process.env.PUBLIC_URL })
	return router
}

export default Router
