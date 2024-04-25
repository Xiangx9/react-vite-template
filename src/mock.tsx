// mock数据文件
import Mock from 'mockjs'

const domain = '/api/'

// // 模拟login接口
Mock.mock(domain + 'login', function () {
    let result = {
        code: 200,
        message: 'OK',
        data: {
            loginUid: 10000,
            nickname: 'xx',
            token: '123456',
        },
    }
    return result
})
