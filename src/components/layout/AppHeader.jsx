import Layout from "antd/es/layout/layout";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 60,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

import React from "react";

const AppHeader = () => {
  return (

      <Layout.Header style={headerStyle}>Header</Layout.Header>

  );
};

export default AppHeader;
