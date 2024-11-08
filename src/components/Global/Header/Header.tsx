import { LinkedinFilled, MenuOutlined, WhatsAppOutlined } from "@ant-design/icons";
import useAuth from "@api/customHooks/useAuth";
import themeColor from "@configs/theme/themeColor";
import useWindowSize from "@utils/helpers/ReactHelper";
import { PushNavigateTo } from "@utils/helpers/Route";
import { Button, Col, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import { Sessions } from "types/Session";

type HeaderProps = {
  session: Sessions;
  toggleDrawer: () => void;
};

const { Text } = Typography;

function HeaderOur({ session, toggleDrawer }: HeaderProps) {
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
            height: !isMobile ? "84px" : undefined,
            alignItems: "center",
            color: themeColor?.white,
          }}
          align="middle"
          justify="space-between"
        >
          {/* Logo Section */}
          <Col>
            {/* belum punya logo */}
            {/* <Image
              src="/Images/logo_white.png"
              alt="Company Logo"
              // preview={false}
              width={"100%"}
              height={60}
            /> */}
            <h3 style={{ margin: 0 }}>Logo</h3>
          </Col>

          {!isMobile ? (
            <>
              <Col>
                <nav style={{ display: "flex", gap: "30px" }}>
                  <a href="/" style={{ color: themeColor?.white, fontWeight: "bold" }}>Home</a>
                  <a href="/about" style={{ color: themeColor?.white }}>About Us</a>
                  <a href="/services" style={{ color: themeColor?.white }}>Product & Services</a>
                  <a href="/contact" style={{ color: themeColor?.white }}>Contacts</a>
                </nav>
              </Col>
              <Col style={{ display: "flex", gap: "15px" }}>
                <LinkedinFilled rev={""} style={{ fontSize: "25px" }} onClick={() => { PushNavigateTo("https://www.linkedin.com") }} />
                <WhatsAppOutlined rev={""} style={{ fontSize: "25px" }} onClick={() => { }} />
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
