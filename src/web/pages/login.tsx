import * as React from "react";
import { Redirect } from 'react-router-dom';
const {useState, useEffect} = React;
interface IUser {
    lablename: string
}
const UserLabel = (props: IUser) => {
    const { lablename } = props;
    return (
        <>
            <label>{lablename}</label>
        </>
    );
}
const InputDemo = () => {
    let inputValue: HTMLInputElement;
    let pwdValue: HTMLInputElement;
    const handlePost = (e:React.FormEvent) => {
        if (e) e.preventDefault();
        const valueTemp = inputValue.value;
        const pwdTemp = pwdValue.value;
        console.log('用户名',valueTemp, '密码：', pwdTemp);
        if(valueTemp && pwdTemp){
            localStorage.setItem('rrname',valueTemp);
            localStorage.setItem('rrpwd',pwdTemp);
            // history.push('./index')
        }
        console.log(localStorage.getItem('rrname'))
        //在此做提交操作，比如发dispatch等
    };
    let alias:React.RefObject<HTMLInputElement> = React.createRef();
    // 以下这样也是可以的
    const changeAlias = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('🍊昵称',(e.target).value)
        console.log('jj', alias.current.value);
    }
    return (
        <div>
            <form onSubmit={handlePost}>
                <UserLabel lablename="用户名："></UserLabel>
                <input
                    ref={input => (inputValue = input)}
                />
                <UserLabel lablename="密码："></UserLabel>
                <input ref={ele => (pwdValue = ele)} type="password"/>

                <input type="text" placeholder="昵称" ref={alias} onChange={changeAlias}/>
                <button onClick={handlePost}>提交</button>
            </form>
        </div>
    )
};

const Greeting = () => {
    useEffect(() => {
        document.title = "login";
    })
    const testFn1 = () => {
        console.log('testFn');
    }
    return (
        <div>
            <h4>欢迎欢迎!!!!sssss!</h4>
            <p>login</p>
            <div>
                <InputDemo></InputDemo>
            </div>

        </div>
    );
}

export default Greeting;