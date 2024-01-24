import { Layout } from "antd";
import { calc } from "antd/es/theme/internal";
import AppHeader from "./components/layout/AppHeader";
import AppSlider from "./components/AppSlider";

import AppContent from "./components/AppContent";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSlider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
