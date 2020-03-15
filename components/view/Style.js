import React from "react";
import { Button, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const StyleView = () => {
  return (
    <>
      <h1>Css Testboard!</h1>
        <hr />
        <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
        </Button>
        <Avatar size={64} icon={<UserOutlined/>}/>
        <h1 className={"p-4 bg-purple-300"}>I'm from tailwind</h1>
    </>
  );
};

export default StyleView;
