import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer, useObservable, useObserver } from "mobx-react-lite";
import { Input, Button } from 'antd';
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
const NewsPart =() =>{
    return (
        <>
            <NewsList news="这是新闻列表模块"></NewsList>
        </>
    )
}
const TodoList = (routerProps:RouteComponentProps) => {
    console.log(routerProps,'---------');
    const todos = useObservable(new Map<string, boolean>())
    const todoRef = React.useRef(null); // 这里需要传值的！！！！！
    const addTodo = React.useCallback(() => {
        console.log('🍎',todoRef);
        // todos.set(todoRef.current.value, false)
        // todoRef.current.value = ""
        todos.set(todoRef.current.state.value, false)
        todoRef.current.state.value = ""
    }, []);
    console.log('🍊todos',todos);
    const toggleTodo = React.useCallback((todo: string) => {
        todos.set(todo, !todos.get(todo))
    }, [])
    return (useObserver(() => (
        <div>
            {Array.from(todos).map(([todo, done]) => (
                <div onClick={() => toggleTodo(todo)} key={todo}>
                    {todo}
                    {done ? " ✔" : " ⏲"}
                </div>
            ))}
            {/* <input ref={todoRef} /> */}
            <Input ref={todoRef}></Input>
            <Button onClick={addTodo} type="primary">Add todo</Button>
        </div>
    ))
    )
}

export default TodoList;