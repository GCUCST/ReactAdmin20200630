import React, { Component } from 'react'
// import './App.less'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import {Button} from 'antd'
export default class App extends Component {



    render() {
        return (
            <BrowserRouter>
            <Button type="primary"> 点击</Button>
                <Switch>
                    <Route path="/login" component={Login}>login</Route>
                    <Route path="/" component={Admin}>admin</Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
