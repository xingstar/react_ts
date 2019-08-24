import * as React from 'react';
import { Link } from 'react-router-dom';
const banner = () => {
    const logout = () => {
        localStorage.removeItem('rrname');
        localStorage.removeItem('rrpwd');
    }
    return(
        <>
            <ul className="nav-wrap">
                <li> <Link to="/index">首页s</Link></li>
                <li> <Link to="/login">登录s</Link></li>
                <li onClick={logout}>退出</li>
            </ul>

        </>
    )
}
export default banner;