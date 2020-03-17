import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const layout = {
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FlexChild = styled.div`
    border: 1px solid #000;
    width: 300px;
    height: 200px;
    
    &:nth-of-type(1){
    width: 350px;
        background-color: gold;
    }
    &:nth-of-type(2){
        width: 200px;
        height: 100px;
    }
`

const inputStyle = {
    border: '1px solid #000',
    width: '200px'
}



const StyleView = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = e => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        setUsername('');
        setPassword('');
    }

    const onFinish = values => {
        console.log('Success:', values);


        const error = () => {
            message.error('회원가입이 완료되었습니다.', 1);
        };
        error();

    };

    const onFinishFailed = errorInfo => {
        // console.log('Failed:', errorInfo);
    };


  return (
    <>
      <h1>Css Testboard!</h1>
        <hr />

        <form onSubmit={onSubmit}>
            <input
                type={"text"}
                onChange={handleInputChange}
                style={inputStyle}
                name={"username"}
                placeholder={"username"}
                value={username}
            />
            <input
                type={"text"}
                style={inputStyle}
                name={"password"}
                placeholder={"password"}
                onChange={handlePasswordChange}
                value={password}
            />
            <button type={"submit"} onSubmit={onSubmit}>submit</button>
        </form>

        <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
        </Button>
        <Avatar size={64} icon={<UserOutlined/>}/>

        <Form
            style={{maxWidth: 300}}
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    {
                        type: 'email',
                        message: 'e-mail 형식으로 작성해주세요.'
                    }
                ]}
            >
                <Input placeholder={"username"}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder={"password"}/>
            </Form.Item>
            <Form.Item
                name="passwordComfirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password placeholder={"password again"}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>


        <div className={"flex justify-between bg-yellow-200 pd-10"}>
            <span>left</span>
            <span>right</span>
        </div>

        {/*<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">*/}
        {/*    <path fill="#9A9FBF" fill-rule="evenodd" d="M2 0H0v2h2V0zm2 0v2h14V0H4zm2 6H0v2h6V6zm2 0v2h2V6H8zm4 2h6V6h-6v2zM0 14h14v-1.999H0V14zm16 0h2v-1.999h-2V14z" clip-rule="evenodd"/>*/}
        {/*</svg>*/}

        <div className={"flex"}>
            <FlexChild className={"flex-none"}/>
            <FlexChild className={"flex-initial"}/>
            <FlexChild className={"bg-gray-300 flex-initial"}/>

        </div>




    </>
  );
};

export default StyleView;
