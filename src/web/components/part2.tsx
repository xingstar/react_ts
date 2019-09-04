import * as React from 'react';
import { Input } from 'antd';
const { useState, useEffect } = React;

// const PeopleList = (props:{news: string}) => { // 如果使用ts-loader处理的话，这里需要加类型
const PeopleList = () => {    
    const [nameState, setState]  = useState('Hello');
    // console.log('nameState=',nameState, 'setState:',setState);
    const CheckName = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log((e.target).value);
        setState((e.target).value);
    }
    useEffect(() => {
        document.title = "part2"
    })
    return (
        <>
            <ul>
                <li>高级领袖</li>
                <li><Input type="text" onChange={CheckName} value={nameState} ></Input></li>
            </ul>
        </>
    )
}
// class PeoplePart extends React.Component{
//     render(){
//         return (
//             <>
//         <PeopleList news="这是人物模块"></PeopleList>
//     </>
//         )
//     }
// }
export default PeopleList;