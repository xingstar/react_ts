import * as React from 'react';
import { observer, useObservable, useObserver } from "mobx-react-lite"
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
const TodoList = () => {
    const todos = useObservable(new Map<string, boolean>())
    const todoRef = React.useRef(null); // 这里需要传值的！！！！！
    const addTodo = React.useCallback(() => {
        console.log('🍎',todoRef);
        todos.set(todoRef.current.value, false)
        todoRef.current.value = ""
    }, [])
    const toggleTodo = React.useCallback((todo: string) => {
        todos.set(todo, !todos.get(todo))
    }, [])
 
    return useObserver(() => (
        <div>
            {Array.from(todos).map(([todo, done]) => (
                <div onClick={() => toggleTodo(todo)} key={todo}>
                    {todo}
                    {done ? " ✔" : " ⏲"}
                </div>
            ))}
            <input ref={todoRef} />
            <button onClick={addTodo}>Add todo</button>
        </div>
    ))
}

export default TodoList;