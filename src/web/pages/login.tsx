import * as React from "react";
import { Redirect,RouteComponentProps } from 'react-router-dom';
const {useState, useEffect} = React;
import { Form, Input, Button, Checkbox } from 'antd';
import LoginForm from '@components/form';
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

const antdForm = () => {
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    const formTailLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8, offset: 4 },
    };
}


const Greeting = (routerProps:RouteComponentProps) => {
    useEffect(() => {
        document.title = "login";
    })
    const testFn1 = () => {
        console.log('testFn');
    }
    console.log('login渲染');
    
    console.log('location',location)
    return (
        <>
            {/* <h4>欢迎欢迎!!!!sssss!</h4>
            <p>login</p>
            <div>
                <InputDemo></InputDemo>
            </div> */}
            <LoginForm></LoginForm>
        </>
    );
}

export default Greeting;

