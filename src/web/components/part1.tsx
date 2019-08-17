import * as React from 'react';
interface NewsTs {
    news: string
}
const NewsList = ({news}:NewsTs) => {
    return (
        <ul>
            <li>{news}</li>
        </ul>
    )
}
class NewsPart extends React.Component{
    render(){
        return (
            <>
        <NewsList news="这是新闻列表模块"></NewsList>
    </>
        )
    }
}
export default NewsPart;