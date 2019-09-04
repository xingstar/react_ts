import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer } = Layout;

// const HomeBanner =() =>{
//     return(
//         <>
//              <div>home</div>
//                 <ul>
//                     <li> <Link to="/index/part1">home1111</Link></li>
//                     <li> <Link to="/index/part2">home2222</Link></li>
//                 </ul>
//         </>
//     );
// }
const HomeBanner = () => {
    const handleMenu = () => {
        console.log('点击事件');
    }
    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                onClick={handleMenu}
            >
                <Menu.Item key="1">
                    {/* <Icon type="appstore" /> */}
                    {/* 这个Icon的问题还没有解决，报错 */}
                    <Link to="/index/part1">home1111</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/index/part2">home2222</Link>
                </Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            
        </>
    )
}
export default HomeBanner;