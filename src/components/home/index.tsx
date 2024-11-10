
import React from 'react'
import { backgroundImageStyle1, backgroundImageStyle2, backgroundImageStyle4, buttonStyle, carouselContainerStyle, subtitleStyle, titleStyle } from './carousel/styles';
import { Button, Carousel, Col, Image, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { accountabilityStyle, centerCircleStyle, centerCircleStyle2, centerCircleStyle3, chartContainerStyle, empowermentStyle, labelStyle, letterStyle, rowStyle, safetyStyle, yieldStyle } from './styles';
import CarouselComponent from './mini-carousel/carouselComponent';
import themeColor from '@configs/theme/themeColor';

const HomeScreen = ({ isMobile }: { isMobile: boolean }) => {    
    const videoSrc = "../background/Video_Ayes.mp4"; // Video source for the left side

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

    return (
        <>
            {/* Carousel with Background Image */}
            <div style={{ height: "755px", position: "relative" }}>
                <Carousel autoplay effect="fade">
                    {[backgroundImageStyle1, backgroundImageStyle2, backgroundImageStyle4, backgroundImageStyle4].map((bgStyle, index) => (
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
                        width={!isMobile ? 400 : undefined}
                        style={{ borderStyle: "solid", padding: "50px", borderColor: themeColor?.gray500, background: themeColor?.gray100 }}
                    />
                </Col>
                <Col xs={24} md={24} lg={12} xl={12}>
                    <p style={{ fontSize: "20px" }}><strong>PT. Ayes Pro Inovasi</strong> is a private company that run the business activities since Our primary line of business is the supply of goods and services linked to "Corrosion Maintenance" on Pressurized Facilities and Civil Structures. Implementing goods and solutions to improve Preventive and Corrective Maintenance action is our key to excellence.</p>
                    <p style={{ fontSize: "20px" }}>In order to offer added value than the conventional methods, we constantly develop and enhance our repair methods. Our company is expanding and taking the lead in Indonesia’s Marine Industry, Terminal Industry, Mining Industry, Petrochemicals Industry, Energy Sector, and Oil & Gas Industry as time goes on because to our strong commitment to integrity and honesty and our dedication to provide our customers the finest service possible.</p>
                </Col>
            </Row>

            {isMobile == false ? (
                <div style={chartContainerStyle}>
                    <img
                        src="../background/support/big_plus.png"
                        alt="Plus Top Right"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '15%',
                            width: '5%', // Adjust the size as needed
                        }}
                    />
                    <img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom Left"
                        style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '5%',
                            width: '5%',
                        }}
                    />
                    <img
                        src="../background/support/big_plus.png"
                        alt="Plus Top Left"
                        style={{
                            position: 'absolute',
                            top: '8%',
                            right: '12%',
                            width: '2%',
                        }}
                    />
                    <img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom Right"
                        style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '10%',
                            width: '1.5%',
                        }}
                    />
                    <img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom left"
                        style={{
                            position: 'absolute',
                            bottom: '22%',
                            left: '11%',
                            width: '2%',
                        }}
                    />

                    <div style={centerCircleStyle2}>
                        <div style={centerCircleStyle3}>
                            <div style={centerCircleStyle}>
                                <p>A.Y.E.S</p>
                            </div>
                        </div>
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
            ) : undefined}
            {/* WIP on Mobile */}

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
                    <img
                        src="../background/support/box_1.png"
                        style={{
                            position: 'absolute',
                            top: '-70%',
                            right: '-10%',
                            width: '300px',
                        }}
                    />
                    
                </Col>
            </Row>
            <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
                <Col
                    xs={24}
                    md={24}
                    lg={14}
                    xl={14}
                >
                    <img
                        src="../background/support/star.jpg"
                        style={{
                            position: 'absolute',
                            width: '35%',
                            left: "3%",
                            top: "5%",
                            zIndex: -4
                        }}
                    />
                </Col>
                <Col
                    xs={24}
                    md={24}
                    lg={10}
                    xl={10}
                >
                    <img
                        src="../background/support/garis-garis.jpg"
                        style={{
                            position: 'absolute',
                            width: '30%',
                            zIndex: -4
                        }}
                    />
                    <h1 className="title-font" style={{ fontSize: "39px" }}>Our Mission</h1>
                    <p style={{ fontSize: "25px" }}>To provide the best customer satisfaction. Trust is our priority to continuously
                        strengthen relationships with our customers. We ensure clients get the best
                        quality products and services with our company.</p>
                </Col>
            </Row>

            <Row style={{ paddingRight: 50, paddingLeft: 50, margin: "90px 0 20px 0" }}>
                <h1 className="title-font" style={{ fontSize: "39px" }}>Promotional & Gallery</h1>
            </Row>

            <Row gutter={[70, 30]} style={{ paddingRight: 50, paddingLeft: 50 }}>
                {/* Left Side - Video Section */}
                <Col xs={24} md={12} lg={12} xl={12}>
                    <div style={{ position: 'relative' }}>
                        <video
                            controls
                            src={videoSrc}
                            style={{ width: '100%', borderRadius: '8px' }}
                            poster="path-to-video-poster.jpg" // Optional: Poster image before play
                        />
                    </div>
                </Col>

                {/* Right Side - Gallery Section */}
                <Col xs={24} md={12} lg={12} xl={12}>
                    <CarouselComponent />
                </Col>
            </Row>

            <Row style={{ paddingRight: 50, paddingLeft: 50, margin: "70px 0 20px 0" }}>
                <h1 className="title-font" style={{ fontSize: "39px" }}>Our Wonderful Timeline</h1>
            </Row>

            <Row style={{ color: "white", background: themeColor?.blue500, margin: '20px 50px' }}>
                <Col xs={24} md={12} lg={12} xl={12} style={{ paddingLeft: 40 }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>
                            <h3>2016</h3>
                            <p>Founded in Cilegon, Banten Province, Indonesia</p>
                        </li>
                        <li>
                            <h3>2017</h3>
                            <p>Representing s2s corrosion preventive solution for Indonesia market</p>
                        </li>
                        <li>
                            <h3>2018</h3>
                            <p>Representing Emergency Leak Stopper Made by Composite MCU System Cor Wrap</p>
                        </li>
                        <li>
                            <h3>2019</h3>
                            <p>Representing Engineered Composite System for Pressurized facilities and Structural Repair & Reinforcement</p>
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={12} lg={12} xl={12}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>
                            <h3>2020</h3>
                            <p>Focusing Our Business to Supply Goods and Services Related to Corrosion Maintenance Solution (Preventive and Corrective Method)</p>
                        </li>
                        <li>
                            <h3>2022</h3>
                            <p>Representing EONCOAT High Temp. External Corrosion Protection with Coating System for Steam and Corrosion Under Insulation (CUI)</p>
                        </li>
                        <li>
                            <h3>2023</h3>
                            <p>Representing Wencon Epoxy Ceramic Coating For Indonesian Market</p>
                        </li>
                        <li>
                            <h3>2024</h3>
                            <p>Continuing our wonderful journey!</p>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row style={{ paddingRight: 50, paddingLeft: 50 }} justify={"center"}>
                <h1 className="title-font" style={{ fontSize: "39px", textAlign: "center" }}>Our Wonderful Timeline</h1>
            </Row>

            <div style={{ padding: '20px 50px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Product & Services</h2>

                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    {/* Preventive Solution Section */}
                    <Col xs={24} md={18} lg={18} xl={18}>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            <img
                                src="../background/bg5.jpg"
                                alt="Preventive Solution"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            <Button
                                type="primary"
                                style={{ position: 'absolute', bottom: '10px', left: '10px' }}
                            >
                                Details &raquo;
                            </Button>
                        </div>
                    </Col>
                    <Col xs={24} md={6} lg={6} xl={6}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            border: '1px solid #E0E0E0',
                            borderRadius: '8px',
                            padding: '20px'
                        }}>
                            <img
                                src="../icon/shield.png"
                                alt="Preventive Solution"
                                style={{ width: '30%', borderRadius: '8px' }}
                            />
                            {/* <ShieldOutlined style={{ fontSize: '48px', color: '#263E9A' }} /> */}
                            <h1 style={{ fontWeight: 'bold' }}>Preventive Solution</h1>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    {/* Corrective Solution Section */}
                    <Col xs={24} md={6} lg={6} xl={6}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            border: '1px solid #E0E0E0',
                            borderRadius: '8px',
                            padding: '20px'
                        }}>
                            <img
                                src="../icon/brushes.png"
                                alt="Preventive Solution"
                                style={{ width: '30%', borderRadius: '8px' }}
                            />
                            <h3 style={{ fontWeight: 'bold' }}>Corrective Solution</h3>
                        </div>
                    </Col>
                    <Col xs={24} md={18} lg={18} xl={18}>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            <img
                                src="../background/bg6.jpg"
                                alt="Corrective Solution"
                                style={{
                                    width: '100%',
                                    height: '200px', // Adjust height as needed
                                    borderRadius: '8px',
                                    objectFit: 'cover' // Ensures image fills container without stretching
                                }}
                            />
                            <Button
                                type="primary"
                                style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                            >
                                Details &raquo;
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HomeScreen