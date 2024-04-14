// * 用户模块
import http from '..'

// 用户登录
export const setJumpPoint = params => http.post('/auth/local', params)
