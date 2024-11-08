import { Sessions } from "types/Session";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useState } from "react";
import Header from "@components/Global/Header/Header";
import { Button, Carousel, Col, Image, Input, Row } from "antd";
import { DownOutlined, PushpinOutlined, YoutubeOutlined } from "@ant-design/icons";

// Import styles from styles.ts
import {
  carouselContainerStyle,
  backgroundImageStyle1,
  backgroundImageStyle2,
  titleStyle,
  subtitleStyle,
  buttonStyle,
  backgroundImageStyle3,
  backgroundImageStyle4
} from "../components/home/carousel/styles";
import useWindowSize from "@utils/helpers/ReactHelper";
import { AdminRoutes } from "@configs/route/SidebarRoute";
import MobileSidebar from "@components/Global/MobileSidebar";
import { accountabilityStyle, centerCircleStyle, chartContainerStyle, empowermentStyle, labelStyle, letterStyle, rowStyle, safetyStyle, yieldStyle } from "@components/home/styles";
import themeColor from "@configs/theme/themeColor";
import { MdPin, MdPointOfSale } from "react-icons/md";

function Home(session: Sessions) {
  useNavbar(["home"], [{ name: "Home", url: "/" }]);
  const { isMobile } = useWindowSize();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const titleResponsiveStyle = {
    ...titleStyle,
    fontSize: isMobile ? '36px' : '61px',
    padding: isMobile ? '0 50px' : '0 300px',
  };

  const subtitleResponsiveStyle = {
    ...subtitleStyle,
    fontSize: isMobile ? '18px' : '25px',
    padding: isMobile ? '0 50px' : '0 300px',
  };

  const buttonResponsiveStyle = {
    ...buttonStyle,
    fontSize: isMobile ? '12px' : '16px',
    padding: isMobile ? '10px 20px' : '20px 30px',
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

      {/* Carousel with Background Image */}
      <div style={{ height: "755px", position: "relative" }}>
        <Carousel autoplay effect="fade">
          {[backgroundImageStyle1, backgroundImageStyle2, backgroundImageStyle3, backgroundImageStyle4].map((bgStyle, index) => (
            <div key={index} style={carouselContainerStyle}>
              <div style={bgStyle}></div>
              <h1 style={titleResponsiveStyle}>
                “Your Trusted Partner in <br /> Corrosion Maintenance and <br /> Industry Solutions”
              </h1>
              <p style={subtitleResponsiveStyle}>
                Our strong commitment to integrity and honesty and our dedication <br />
                to provide our customers the finest service possible.
              </p>
              <Row justify={"center"}>
                <Button style={buttonResponsiveStyle} type="primary">Get Started</Button>
              </Row>
              <Row justify={"center"}>
                <DownOutlined rev={''} style={{ marginTop: '20px', fontSize: '24px', color: '#fff', zIndex: 1 }} />
              </Row>
            </div>
          ))}
        </Carousel>
      </div>

      <Row justify={"center"}>
        <h1 className="title-font" style={{ fontSize: "48px" }}>
          Who We Are?
        </h1>
      </Row>

      <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
        <Col
          xs={24}
          md={24}
          lg={12}
          xl={12}
          style={{ textAlign: "center" }}
        >
          <Image
            src={"../logo_primary.png"}
            width={400}
            style={{ borderStyle: "solid", padding: "50px", borderColor: themeColor?.gray500, background: themeColor?.gray100 }}
          />
        </Col>
        <Col xs={24} md={24} lg={12} xl={12}>
          <p style={{ fontSize: "20px" }}><strong>PT. Ayes Pro Inovasi</strong> is a private company that run the business activities since Our primary line of business is the supply of goods and services linked to "Corrosion Maintenance" on Pressurized Facilities and Civil Structures. Implementing goods and solutions to improve Preventive and Corrective Maintenance action is our key to excellence.</p>
          <p style={{ fontSize: "20px" }}>In order to offer added value than the conventional methods, we constantly develop and enhance our repair methods. Our company is expanding and taking the lead in Indonesia’s Marine Industry, Terminal Industry, Mining Industry, Petrochemicals Industry, Energy Sector, and Oil & Gas Industry as time goes on because to our strong commitment to integrity and honesty and our dedication to provide our customers the finest service possible.</p>
        </Col>
      </Row>

      <div style={chartContainerStyle}>
        <div style={centerCircleStyle}>
          <p>A.Y.E.S</p>
        </div>

        <div style={accountabilityStyle}>
          <div style={rowStyle}>
            <div style={letterStyle}>A</div>
            <div style={labelStyle}>Accountability</div>
          </div>
        </div>

        <div style={yieldStyle}>
          <div style={rowStyle}>
            <div style={letterStyle}>Y</div>
            <div style={labelStyle}>Yield</div>
          </div>
        </div>

        <div style={empowermentStyle}>
          <div style={rowStyle}>
            <div style={letterStyle}>E</div>
            <div style={labelStyle}>Empowerment</div>
          </div>
        </div>

        <div style={safetyStyle}>
          <div style={rowStyle}>
            <div style={letterStyle}>S</div>
            <div style={labelStyle}>Safety</div>
          </div>
        </div>
      </div>

      <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
        <Col
          xs={24}
          md={24}
          lg={10}
          xl={10}
        >
          <h1 className="title-font" style={{ fontSize: "39px" }}>Our Vision</h1>
          <p style={{ fontSize: "25px" }}>What our determination and passion is that Ayes Pro Inovasi will be able to
            provide services in various ways, especially in all industry area, following our
            motto / spirit “New Methods and Process"</p>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={14}
          xl={14}
        >
        </Col>
      </Row>
      <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
        <Col
          xs={24}
          md={24}
          lg={14}
          xl={14}
        >
        </Col>
        <Col
          xs={24}
          md={24}
          lg={10}
          xl={10}
        >
          <h1 className="title-font" style={{ fontSize: "39px" }}>Our Mission</h1>
          <p style={{ fontSize: "25px" }}>To provide the best customer satisfaction. Trust is our priority to continuously
            strengthen relationships with our customers. We ensure clients get the best
            quality products and services with our company.</p>
        </Col>
      </Row>

      <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
        <h1 className="title-font" style={{ fontSize: "39px" }}>Promotional & Gallery</h1>
      </Row>

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
              <Button type="primary" style={{ background: themeColor?.gray300, color: themeColor?.blue600}}>Submit</Button>
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
