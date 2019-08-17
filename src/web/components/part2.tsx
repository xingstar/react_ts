import * as React from 'react';
const PeopleList = (props:{news: string}) => { // 如果使用ts-loader处理的话，这里需要加类型
    return (
        <ul>
            <li>{props.news}</li>
        </ul>
    )
}
class PeoplePart extends React.Component{
    render(){
        return (
            <>
        <PeopleList news="这是人物模块"></PeopleList>
    </>
        )
    }
}
export default PeoplePart;