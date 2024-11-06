import { Sessions } from "types/Session";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useState } from "react";
import useDebounce from "@utils/helpers/customHooks/useDebounce";
import Header from "@components/Global/Header/Header";
import { Button, Carousel, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Home(session: Sessions) {
  useNavbar(["home"], [{ name: "Home", url: "/" }]);

  const [user, setUser] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce<string>(search, 500);

  const toggleDrawer = () => { };

  const carouselContainerStyle: React.CSSProperties = {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: "400",
    position: 'relative',
    overflow: 'hidden',
    lineHeight: '755px'
  };

  const backgroundImageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('/background/bg_1.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '61px',
    fontWeight: '400',
    color: '#fff',
    padding: '0 300px',
    marginBottom: '20px',
    textAlign: "center",
    lineHeight: '76px',
    zIndex: 1,
    fontFamily: "DM Serif Display"
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '25px',
    fontWeight: '600',
    marginBottom: '30px',
    padding: '0 300px',
    color: '#fff',
    textAlign: "center",
    lineHeight: '32px',
    zIndex: 1,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#364d79',
    color: '#fff',
    fontSize: '16px',
    textAlign: "center",
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    // zIndex: 1,
  };

  return (
    <>
      <HeadPage title="Home Page" />
      <Header
        session={session}
        toggleDrawer={toggleDrawer}
      />

      {/* Carousel with Background Image */}
      <div style={{ height: "755px !important" }} className="asd">
        <Carousel autoplay effect="fade">
          <div style={carouselContainerStyle}>
            <div style={backgroundImageStyle}></div> {/* Background image div */}
            <h1 style={titleStyle}>
              “Your Trusted Partner in Corrosion Maintenance and Industry Solutions”
            </h1>
            <p style={subtitleStyle}>
              Our strong commitment to integrity and honesty and our dedication
              to provide our customers the finest service possible.
            </p>
            <Row justify={"center"}>
              <Button style={buttonStyle} type="primary">Get Started</Button>
            </Row>
            <Row justify={"center"}>
              <DownOutlined rev={''} style={{ marginTop: '20px', fontSize: '24px', color: '#fff', zIndex: 1 }} />
            </Row>
          </div>
          {/* Add more slides if needed */}
        </Carousel>
      </div>
    </>
  );
}

export default Home;
