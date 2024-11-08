import { Button, Card, Col, Collapse, Divider, Drawer, Menu, Row } from "antd";
import React from "react";
import { routesType } from "types/Sidebar";
import { PushNavigateTo } from "@utils/helpers/Route";
import configureReduxStore from "@redux/store";
import { Sessions } from "types/Session";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducer";
import themeColor from "@configs/theme/themeColor";
import { FaArrowRight } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";

type SidebarProps = {
  routes: routesType;
  toggleDrawer: () => void;
  drawerVisible: boolean
  setDrawerVisible: any
};

function MobileSidebar({ routes, toggleDrawer,drawerVisible, setDrawerVisible }: SidebarProps) {
  const { store } = configureReduxStore();

  const activeStyle = { background: themeColor.signatureColor, color: "#fff" };
  const sidebarKey = useSelector((state: RootState) => state.layout.sideBarKey)?.[0];

  return (
    <Drawer
      placement="right"
      style={{ background: themeColor?.blue900 }}
      title={
        <Row justify={"space-between"} align={"middle"}>
          <h3 style={{ margin: 0, color: themeColor?.white }}>Menu</h3>
          <Button type="link" onClick={toggleDrawer} icon={<CloseOutlined rev={""} style={{ color: "white" }} />} />
        </Row>
      }
      closable={true}
      onClose={toggleDrawer}
      visible={drawerVisible}
    >
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
    </Drawer>
  );
}
export default MobileSidebar;
