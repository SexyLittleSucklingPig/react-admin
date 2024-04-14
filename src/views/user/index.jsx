import React, { memo, useEffect, useMemo, useState } from 'react'
import { ListWrapper } from './style'
import { App, Button, Switch, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import produce from 'immer'

const UserList = memo(() => {
	const { message } = App.useApp()
	const [data, setData] = useState([])


	useEffect(() => {
	}, [])


	return (
		<ListWrapper className='card'>
			
		</ListWrapper>
	)
})

UserList.displayName = 'UserList'

export default UserList
