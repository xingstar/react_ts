import * as React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './banner.css';
const { SubMenu } = Menu;
const banner = () => {
    const logout = () => {
        console.log(localStorage.getItem('rrname'));
        localStorage.removeItem('rrname');
        localStorage.removeItem('rrpwd');
        console.log(localStorage.getItem('rrname'));
    }
    console.log('渲染Banner');

    return(
        <>
            <ul className="nav-wrap">
                <li> <Link to="/index">首页s</Link></li>
                <li onClick={logout}>退出</li>
            </ul>

        </>
    )
}
export default banner;
