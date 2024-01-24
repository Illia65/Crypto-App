import { Layout } from "antd";
import React from "react";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const AppSlider = () => {
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      Sider
    </Layout.Sider>
  );
};

export default AppSlider;
