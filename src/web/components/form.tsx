import * as React from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';
const { useState, useEffect } = React;
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { observer } from "mobx-react-lite";

interface UserFormProps extends FormComponentProps {
}
interface ItemFieldProps{ //定义返回字段的值的类型
    username: string;
    password: string;
}

function hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const NormalLoginForm = observer((props: UserFormProps & RouteComponentProps) => { // 继承多个使用&
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.form.validateFields((err: boolean, values: ItemFieldProps) => {
            if (!err) {
                console.log('Received values of formaaa: ', values);
                if(values.username == 'qq' && values.password == '123'){
                    console.log('跳转地址', RedirectUrl);
                    debugger;
                    localStorage.setItem('rrname',values.username);
                    history.push(RedirectUrl);
                    console.log('登录成功');
                }
            }
        });

    };
    const { location, history } = props;
    console.log('🍌history',history);
    const RedirectUrl = location.state ? location.state.from.pathname : "/index";
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Log in
          </Button>
            </Form.Item>
        </Form>
    );
})

export default Form.create<UserFormProps>({})(NormalLoginForm);