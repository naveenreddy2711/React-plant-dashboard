import { Card, Flex, Typography, Image } from "antd";
import React from "react";
import  plant  from "../assets/plant01.png";
const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today <br />5 Orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br />
            250 Orders
          </Typography.Title>
        </Flex>
        <Image src={plant} alt='plant' style={{position: 'absolute', bottom: -25, left: 120, height: '230px', width: 'auto'}} />
      </Card>
    </div>
  );
};

export default ContentSidebar;
