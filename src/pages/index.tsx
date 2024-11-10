import { Sessions } from "types/Session";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useState } from "react";
import Header from "@components/Global/Header/Header";
import { Button, Col, Input, Row } from "antd";
import { PushpinOutlined } from "@ant-design/icons";
import useWindowSize from "@utils/helpers/ReactHelper";
import { AdminRoutes } from "@configs/route/SidebarRoute";
import MobileSidebar from "@components/Global/MobileSidebar";
import themeColor from "@configs/theme/themeColor";
import HomeScreen from "@components/home";

function Home(session: Sessions) {
  useNavbar(["home"], [{ name: "Home", url: "/" }]);
  const { isMobile } = useWindowSize();
  
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+6281388886776', '_blank');
  };

  const openEmail = () => {
    window.open('https://mail.google.com/mail/');
  };

  return (
    <>
      <HeadPage title="Home Page" />
      {isMobile && (
        <MobileSidebar
          routes={AdminRoutes}
          toggleDrawer={toggleDrawer}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
        />
      )}

      <Header session={session} toggleDrawer={toggleDrawer} />

      <HomeScreen isMobile={!!isMobile}/>

      <div
        className="flex flex-col"
        style={{ background: themeColor?.blue500, padding: 50 }}
      >
        <Row
          gutter={[16, 24]}
        >
          <Col xs={24} sm={24} md={8} lg={8}>
            <h2>Logo</h2>
            {/* <Image src="/assets/icons/logo_r_kultur.png" alt="logo" className="py-2 logo" height={50} width={210} /> */}
            <h1 style={{ color: themeColor?.gray300 }}>Head Office</h1>
            <p style={{ color: themeColor?.gray300 }}>
              JL.Rukan La Riviera Garden Blok A No.22, Kel. <br /> Lemo, Kec. Teluknaga, Kab. Tangerang, <br />
              Banten, Indonesia, 15510
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <h1 style={{ color: themeColor?.gray300 }}>Contact Us</h1>
            <ul style={{ paddingLeft: 15 }}>
              <li style={{ padding: 10, color: themeColor?.gray300 }}>LinkedIn</li>
              <li style={{ padding: 10, color: themeColor?.gray300 }}>Customer Support</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <h2 style={{ color: themeColor?.gray300 }}>Quick Contack</h2>
            <Input style={{ marginBottom: 10, background: "transparent" }} placeholder="Your Name" />
            <Input style={{ marginBottom: 10, background: "transparent" }} placeholder="Email" />
            <Input style={{ marginBottom: 10, background: "transparent" }} placeholder="Leave Message" />
            <Row justify={"end"}>
              <Button type="primary" style={{ background: themeColor?.gray300, color: themeColor?.blue600 }}>Submit</Button>
            </Row>
          </Col>
        </Row>
        <Row>
          <PushpinOutlined rev={""} style={{ fontSize: '22px', color: themeColor?.gray300 }} />
          <p style={{ color: themeColor?.gray300, marginLeft: 10 }}> 06°10′13″S 106°38′25″E﻿</p>
        </Row>
      </div>
    </>
  );
}

export default Home;
