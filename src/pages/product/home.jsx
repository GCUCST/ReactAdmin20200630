import React, { Component } from 'react'
import {Card,Select,Input,Button,Icon} from 'antd'

const Option = Select.Option


export default class ProductHome extends Component {
    
    render() {
        const title = (
            <span>
                <Select>
                    <Option value='1'>按名称搜索</Option>
                    <Option value='2'>按描述搜索</Option>
                </Select>

            </span>
        )   
        const extra = (
            <Button></Button>
        )

        return (
            <Card title={title} extra={extra}>

            </Card>
        )
    }
}
