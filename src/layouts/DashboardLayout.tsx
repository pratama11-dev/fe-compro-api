import Sidebar from "@components/Global/Sidebar";
import { AdminRoutes } from "@configs/route/SidebarRoute";
import useWindowSize from "@utils/helpers/ReactHelper";
import { Layout, Drawer, Row, Col } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "@components/Global/Header/Header";
import MobileSidebar from "@components/Global/MobileSidebar";
import useAuth from "@api/customHooks/useAuth";
import BreadcrumbOur from "@components/Global/Breadcrumb";
import FadeIn from "react-fade-in";
import themeColor from "@configs/theme/themeColor";


const { Content, Footer } = Layout;

type DashboardLayoutProps = {
  children: React.ReactNode;
  background?: string;
};

function DashboardLayout({
  children,
  background = "",
}: DashboardLayoutProps) {
  const router = useRouter();
  const { handleLogout } = useAuth();

  const { isMobile } = useWindowSize();
  
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout>
      <>
        {isMobile ? (
          <>
            <Drawer
              placement="right"
              // title={"Menu"}
              title={
                <Row justify={"space-between"}>
                  <Col span={8} style={{ alignSelf: "center" }}>
                    <h3 style={{ margin: 0 }}>Menu</h3>
                  </Col>
                  <Col span={16}>
                  </Col>
                </Row>
              }
              closable={true}
              // width={200}
              onClose={toggleDrawer}
              visible={drawerVisible}
            >
              <MobileSidebar
                routes={AdminRoutes}
                toggleDrawer={toggleDrawer}
                drawerVisible={drawerVisible}
                setDrawerVisible={setDrawerVisible} />
            </Drawer>
          </>
        ) : (
          <>
            <Sidebar routes={AdminRoutes} />
          </>
        )}
      </>
      <Layout
        className="site-layout"
        style={{
          backgroundColor: "white",
        }}
      >
        {isMobile && (
          <Header toggleDrawer={toggleDrawer} />
        )}

        <FadeIn>
          <div
            style={{
              margin: isMobile ? "0 8px" : "0 16px",
            }}
          >
            <BreadcrumbOur />

            <Content
              className="site-layout-background"
              style={{
                background,
                overflowX: isMobile ? "hidden" : "scroll",
                padding: isMobile || background ? 10 : 24,
                // minHeight: 360,
                borderRadius: 8,
              }}
            >
              {children}
            </Content>
          </div>

        </FadeIn>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
