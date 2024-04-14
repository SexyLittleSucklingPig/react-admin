import { loginApi } from '@/api/modules/user'
import { setAuthRouter } from '@/store/modules/auth'
import { setToken, setUserinfo } from '@/store/modules/global'
import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, App } from 'antd'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LoginForm = memo(() => {
	const { t } = useTranslation()
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const initialValues = { identifier: '123', password: '123123' }
	const { message } = App.useApp()

	const navigate = useNavigate()
	const dispatch = useDispatch()
	// 提交【验证成功】
	const onFinish = async loginForm => {
		try {
			setLoading(true)
			const res = await loginApi(loginForm)
			const user = res.user
			dispatch(setToken(JSON.stringify(user)))
			dispatch(setUserinfo(user))
			// dispatch(setAuthRouter(user.role.rights)) 
			message.success('登录成功！')
			navigate('/home')
		}catch{
			onFinishFailed('失败')
		} 
		finally {
			setLoading(false)
		}
	}

	// 提交【验证失败】
	const onFinishFailed = errorInfo => {
		console.log('Failed', errorInfo)
		message.warning('登录失败')
		
	}

	return (
		<Form
			form={form}
			name='basic'
			labelCol={{ span: 5 }}
			initialValues={initialValues}
			size='large'
			autoComplete='off'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item name='identifier' rules={[{ required: true, message: '请输入用户名' }]}>
				<Input autoComplete='new-identifier' placeholder='用户名' prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete='new-password' placeholder='密码' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className='login-btn'>
				<Button icon={<CloseCircleOutlined />} onClick={() => form.resetFields()}>
					{t('login.reset')}
				</Button>
				<Button type='primary' htmlType='submit' loading={loading} icon={<UserOutlined />}>
					{t('login.confirm')}
				</Button>
			</Form.Item>
		</Form>
	)
})

export default LoginForm
