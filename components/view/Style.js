import React from "react";
import { Button, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const StyleView = () => {
  return (
    <>
      <h1>Css Testboard!</h1>
        <h2>commit test</h2>
        <hr />
        <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
        </Button>
        <Avatar size={64} icon={<UserOutlined/>}/>
    </>
  );
};

export default StyleView;
