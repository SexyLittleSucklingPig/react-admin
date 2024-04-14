import React, { memo } from 'react'
import { Layout } from 'antd'
import { LayoutWrapper } from './style'
import LayoutMenu from './components/LayoutMenu'
import LayoutHeader from './components/LayoutHeader'
import { Outlet } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
const LayoutIndex = memo(() => {
	const { Sider, Content } = Layout
	const { isCollapse } = useSelector(({ menu }) => ({ isCollapse: menu.isCollapse }), shallowEqual)

	return (
		<LayoutWrapper className='container'>
			<Layout hasSider>
				<Layout>
					<Sider collapsed={isCollapse}>
						<LayoutMenu></LayoutMenu>
					</Sider>
					<Content>
						<LayoutHeader></LayoutHeader>
						<Suspense fallback={<Loading />}>
							<Outlet></Outlet>
						</Suspense>
					</Content>
				</Layout>
			</Layout>
		</LayoutWrapper>
	)
})

LayoutIndex.displayName = 'Layout'

export default LayoutIndex
