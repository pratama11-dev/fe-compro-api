import { Sessions } from "types/Session";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useState } from "react";
import Header from "@components/Global/Header/Header";
import { Button, Col, Divider, Form, Image, Input, Row, Typography } from "antd";
import { PushpinOutlined } from "@ant-design/icons";
import useWindowSize from "@utils/helpers/ReactHelper";
import { AdminRoutes } from "@configs/route/SidebarRoute";
import MobileSidebar from "@components/Global/MobileSidebar";
import themeColor from "@configs/theme/themeColor";
import HomeScreen from "@components/home";

const { Text } = Typography;

export const openWhatsApp = () => {
  window.open('https://wa.me/+622139711788', '_blank');
};

export const openEmail = () => {
  window.open('https://mail.google.com/mail/');
};

export const openLinkedIn = () => {
  window.open('https://www.linkedin.com/company/pt-ayes-pro-inovasi/');
};

function Home(session: Sessions) {
  useNavbar(["home"], [{ name: "Home", url: "/" }]);
  const { isMobile } = useWindowSize();

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields(); // Get form values after validation
      const { name, email, message } = values;

      const subject = `Contact from ${name}`;
      // const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      const body = `${message}`;

      // Open Gmail with pre-filled details
      window.open(`mailto:info@ptayesproinovasi.com?subject=${subject}&body=${body}`, "_blank");
    } catch (error) {
      console.error("Validation failed:", error); // Handle validation errors if needed
    }
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

      <Header toggleDrawer={toggleDrawer} />

      <HomeScreen isMobile={!!isMobile} />

      <div
        className="flex flex-col"
        style={{ background: themeColor?.blue500, padding: 50, marginTop: "80px" }}
        id="contact"
      >
        <Row
          gutter={[16, 24]}
        >
          <Col xs={24} sm={24} md={8} lg={8}>
            {/* <h2>Logo</h2> */}
            <Image
              src="../white_logo.png"
              alt="Company Logo"
              preview={false}
              width={"37%"}
              height={"120px"}
            />
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
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  className="custom-input"
                  style={{ background: "transparent", color: "white" }}
                  placeholder="Your Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  className="custom-input"
                  style={{ background: "transparent", color: "white" }}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Please leave a message" }]}
              >
                <Input
                  className="custom-input"
                  style={{ background: "transparent", color: "white" }}
                  placeholder="Leave Message"
                />
              </Form.Item>
              <Row justify={"end"}>
                <Button
                  type="primary"
                  style={{ background: themeColor?.gray300, color: themeColor?.blue600 }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <PushpinOutlined rev={""} style={{ fontSize: '22px', color: themeColor?.gray300 }} />
          <p style={{ color: themeColor?.gray300, marginLeft: 10 }}> 06°10′13″S 106°38′25″E﻿</p>
        </Row>
        <Row>
          <Divider style={{ borderColor: "white" }} />
        </Row>
        <Row
          style={{
            height: "48px",
            lineHeight: 0,
            color: "white"
          }}
          align={"middle"}
        >
          <Col span={14}>
            <p style={{ padding: 0 }}>
              PT. AYES PRO INOVASI
            </p>
          </Col>
          <Col span={10}>
            <Text style={{ float: "right", color: "white" }}>Copyright@2024. All Rights Reserved</Text>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
