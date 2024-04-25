import {useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import './account.scss'

function Account() {
    //创建路由钩子
    const navigate =useNavigate()
    
    return (
        <div className="P-account">
            <h1>Account Page</h1>
            <div className="ipt-con">
                <Button type="primary">返回登录</Button>
            </div>
        </div>
    )
}

export default Account