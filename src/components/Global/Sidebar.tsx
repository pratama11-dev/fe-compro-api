import { Image, Layout, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import React from "react";
import { routesType } from "types/Sidebar";
import { RootState } from "@redux/reducer";
import { changeCollapsible } from "@redux/layout/action";
import { PushNavigateTo } from "@utils/helpers/Route";
import configureReduxStore from "@redux/store";
import { Sessions } from "types/Session";

type SidebarProps = {
  routes: routesType;
};

function Sidebar({ routes }: SidebarProps) {
  const { store } = configureReduxStore();

  const sidebarKey = useSelector((state: RootState) => state.layout.sideBarKey);
  const collapsible = useSelector((state: RootState) => state.layout.collapsed);

  return (
    <Layout.Sider
      style={{
        position: "sticky",
        overflow: "auto",
        minHeight: "100vh",
        width: "255px"
      }}
      width={310}
      collapsible
      collapsed={collapsible}
      onCollapse={() => {
        store.dispatch(changeCollapsible(!collapsible));
      }}
    >
      {/* <div className="logo-dashboard" /> */}
      <Row justify={"center"} style={{ marginTop: 10 }}>
        <Image
          src="../white_logo.png"
          alt="Company Logo"
          preview={false}
          height={60}
          style={{ padding: 10 }}
        />
      </Row>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={sidebarKey}
        onSelect={(item) => {
          if (item.key === "home") {
            PushNavigateTo(`/`);
          } else {
            PushNavigateTo(`/${item.key}`);
          }
        }}
      >
        {routes.map((item) => {
          if ((item.children?.length ?? 0) > 0) {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>{child.name}</Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}
export default Sidebar;
