import * as React from 'react';
import { Link } from 'react-router-dom';
const HomeBanner =() =>{
    return(
        <>
             <div>home</div>
                <ul>
                    <li> <Link to="/index/part1">home1111</Link></li>
                    <li> <Link to="/index/part2">home2222</Link></li>
                </ul>
        </>
    );
}
export default HomeBanner;