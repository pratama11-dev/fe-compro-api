import { LinkedinFilled, MenuOutlined, WhatsAppOutlined } from "@ant-design/icons";
import useAuth from "@api/customHooks/useAuth";
import themeColor from "@configs/theme/themeColor";
import { openLinkedIn, openWhatsApp } from "@pages/index";
import useWindowSize from "@utils/helpers/ReactHelper";
import { PushNavigateTo } from "@utils/helpers/Route";
import { Button, Col, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import { Sessions } from "types/Session";
import { Link } from "react-scroll";
import Image from "next/image";

type HeaderProps = {
  toggleDrawer: () => void;
};

const { Text } = Typography;

function HeaderOur({ toggleDrawer }: HeaderProps) {
  const router = useRouter();
  const { handleLogout } = useAuth();
  const { isMobile } = useWindowSize();

  const menuDesktop = (
    <Menu onClick={handleLogout}>
      <Menu.Item>Signout</Menu.Item>
    </Menu>
  );
  const logoTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: themeColor.fontPrimary,
    marginTop: "4px",
  };
  const loginTextStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: themeColor.fontPrimary,
    cursor: "pointer",
  };
  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          background: themeColor?.blue500,
          height: !isMobile ? "132px" : undefined,
          padding: 0,
          alignItems: "center"
        }}
      >
        {/* Top Row with Company Info and Contact Email */}
        {!isMobile && (
          <Row
            style={{
              height: "48px",
              padding: "0 50px",
              lineHeight: 0,
              background: themeColor?.white,
            }}
            align={"middle"}
          >
            <Col span={14}>
              <p style={{ padding: 0 }}>
                PT. AYES PRO INOVASI <span style={{ margin: "0 15px" }}> | </span> Specialist Corrosion Solution
              </p>
            </Col>
            <Col span={10}>
              <Text underline style={{ float: "right" }}>info@ptayesproinovasi.com</Text>
            </Col>
          </Row>
        )}

        <Row
          style={{
            padding: "0 50px",
            height: !isMobile ? "84px" : "64px",
            alignItems: "center",
            color: themeColor?.white,
          }}
          align="middle"
          justify="space-between"
        >
          {/* Logo Section */}
          <Image
            style={{ paddingTop: 10 }}
            src="/white_logo.png"
            alt="Company Logo"
            width={"70%"}
            height={50}
          />

          {!isMobile ? (
            <>
              <Col>
                <nav style={{ display: "flex", gap: "30px" }}>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ color: themeColor?.white, cursor: "pointer" }}
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ color: themeColor?.white, cursor: "pointer" }}
                  >
                    About Us
                  </Link>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ color: themeColor?.white, cursor: "pointer" }}
                  >
                    Product & Services
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ color: themeColor?.white, cursor: "pointer" }}
                  >
                    Contacts
                  </Link>
                </nav>
              </Col>
              <Col style={{ display: "flex", gap: "15px" }}>
                <LinkedinFilled rev={""} style={{ fontSize: "25px" }} onClick={openLinkedIn} />
                {/* <WhatsAppOutlined rev={""} style={{ fontSize: "25px" }} onClick={openWhatsApp} /> */}
              </Col>
            </>
          ) : (
            <>
              <Button
                type="link"
                icon={<MenuOutlined rev={""} />}
                style={{ margin: 10, color: "#fff" }}
                onClick={toggleDrawer}
              />
            </>
          )}

        </Row>
      </Header>
    </>
  );
}

export default HeaderOur;
