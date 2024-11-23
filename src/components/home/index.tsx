
import React, { useRef } from 'react'
import { Button, Card, Col, Row, Spin, Tooltip } from 'antd';
import { accountabilityStyle, centerCircleStyle, centerCircleStyle2, centerCircleStyle3, chartContainerStyle, empowermentStyle, labelStyle, letterStyle, rowStyle, safetyStyle, yieldStyle } from './styles';
// import CarouselComponent from './mini-carousel/carouselComponent';
import { PushNavigateTo } from '@utils/helpers/Route';
import { motion, useInView } from 'framer-motion';
import { containerVariants, createFloatingVariants, itemVariants, plusFloatingVariants, popVariants, slideLeftInVariants, slideRightInVariants } from './framer-motion/motionVariants';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MainCarousel = dynamic(() => import('./carousel'), {
    ssr: false, // Enables SSR for this dynamic import
    loading: () => <Spin />,
});

const TimeLine = dynamic(() => import('./timeline'), {
    ssr: false, // Enables SSR for this dynamic import
    loading: () => <Spin />,
});

const CarouselComponent = dynamic(() => import('./mini-carousel/carouselComponent'), {
    ssr: false, // Enables SSR for this dynamic import
    loading: () => <Spin />,
});


const HomeScreen = ({ isMobile }: { isMobile: boolean }) => {
    // References for sections
    const carouselRef = useRef(null);
    const aboutRef = useRef(null);
    const mottoRef = useRef(null)
    const visionRef = useRef(null);
    const videoRef = useRef(null);
    const timelineRef = useRef(null);

    const isCarouselInView = useInView(carouselRef, { once: true });
    const isAboutInView = useInView(aboutRef, { once: true });
    const isMottoInView = useInView(mottoRef, { once: true });
    const isVisionInView = useInView(visionRef, { once: true });
    const isVideoInView = useInView(videoRef, { once: true });
    const isTimelineInView = useInView(timelineRef, { once: true });


    return (
        <div style={{ overflow: "hidden" }}>
            {/* Carousel with Background Image */}
            <motion.div
                ref={carouselRef}
                initial="hidden"
                animate={isCarouselInView ? "visible" : "hidden"}
                variants={containerVariants}
                style={{ height: "790px", position: "relative" }}
            >
                <MainCarousel
                    isMobile={isMobile}
                />
            </motion.div>

            {/* About Section with Fade-in and Slide-in */}
            <motion.div
                ref={aboutRef}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                variants={containerVariants}
                style={{ marginTop: 50 }}
            >
                <Row justify="center" id="about">
                    <motion.h1
                        className="title-font"
                        style={{ fontSize: "48px" }}
                        variants={itemVariants}
                    >
                        Who We Are?
                    </motion.h1>
                </Row>
                <Row style={{ paddingRight: 50, paddingLeft: 50 }} align={"middle"}>
                    <Col xs={24} md={24} lg={12} xl={12}>
                        <img
                            src="../background/support/garis2.png"
                            style={{
                                position: 'absolute',
                                top: '-40%',
                                left: '-10%',
                                width: '240px',
                                zIndex: -1
                            }}
                        />
                        <motion.div variants={itemVariants}>
                            <Row justify={"center"} align={"middle"}>
                                <Image
                                    src={"/logo_primary.png"}
                                    width={!isMobile ? 450 : 350}
                                    height={300}
                                    objectPosition="center"
                                />
                            </Row>
                        </motion.div>
                    </Col>
                    <Col xs={24} md={24} lg={10} xl={10}>
                        <motion.p style={{ fontSize: "20px", paddingRight: 30 }} variants={itemVariants}>
                            <strong>PT. Ayes Pro Inovasi</strong> is a private company that run the business activities since Our primary line of business is the supply of goods and services linked to "Corrosion Maintenance" on Pressurized Facilities and Civil Structures. Implementing goods and solutions to improve Preventive and Corrective Maintenance action is our key to excellence.
                        </motion.p>
                        <motion.p style={{ fontSize: "20px", paddingRight: 30 }} variants={itemVariants}>
                            In order to offer added value than the conventional methods, we constantly develop and enhance our repair methods. Our company is expanding and taking the lead in Indonesia’s Marine Industry, Terminal Industry, Mining Industry, Petrochemicals Industry, Energy Sector, and Oil & Gas Industry as time goes on because to our strong commitment to integrity and honesty and our dedication to provide our customers the finest service possible.
                        </motion.p>
                    </Col>
                </Row>
            </motion.div>

            {isMobile && (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '20px', fontSize: '42px' }}>A.Y.E.S</h1>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={6} key={1}>
                            <Card
                                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>Accountability</span>}
                                bordered={false}
                                style={{ textAlign: 'center' }}
                                headStyle={{ backgroundColor: '#3d4a73', color: '#fff' }}
                            >
                                <p>We are accountable
                                    for our actions,
                                    decisions, and
                                    outcomes, ensuring
                                    the trust of our
                                    clients and
                                    stakeholders. We
                                    take responsibility for
                                    our commitments to
                                    achieve customer
                                    satisfaction
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={6} key={1}>
                            <Card
                                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>Yield</span>}
                                bordered={false}
                                style={{ textAlign: 'center' }}
                                headStyle={{ backgroundColor: '#3d4a73', color: '#fff' }}
                            >
                                <p>Our aim is to deliver the best
                                    outcomes for clients through
                                    efficiency, effectiveness, and added
                                    value. We strive for sustainable
                                    growth and high satisfaction levels</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={6} key={1}>
                            <Card
                                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>Empowerment</span>}
                                bordered={false}
                                style={{ textAlign: 'center' }}
                                headStyle={{ backgroundColor: '#3d4a73', color: '#fff' }}
                            >
                                <p>We empower our
                                    employees with
                                    resources and
                                    support to provide
                                    top-notch service to
                                    clients. Our culture
                                    of empowerment
                                    fosters innovation
                                    and dedication to
                                    customer
                                    satisfaction</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={6} key={1}>
                            <Card
                                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>Safety</span>}
                                bordered={false}
                                style={{ textAlign: 'center' }}
                                headStyle={{ backgroundColor: '#3d4a73', color: '#fff' }}
                            >
                                <p>Customer safety is our top priority
                                    across all operations. We uphold
                                    strict safety standards to ensure
                                    customer security and satisfaction.</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )}

            {isMobile == false ? (
                <motion.div
                    ref={mottoRef}
                    initial="hidden"
                    animate={isMottoInView ? "visible" : "hidden"}
                    variants={popVariants}
                    style={chartContainerStyle}
                >
                    <motion.img
                        src="../background/support/big_plus.png"
                        alt="Plus Top Right"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '15%',
                            width: '5%',
                        }}
                        variants={createFloatingVariants()}  // Apply floating animation
                        animate="visible"
                    />
                    <motion.img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom Left"
                        style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '5%',
                            width: '5%',
                        }}
                        variants={plusFloatingVariants}  // Apply floating animation
                        animate="visible"
                    />
                    <motion.img
                        src="../background/support/big_plus.png"
                        alt="Plus Top Left"
                        style={{
                            position: 'absolute',
                            top: '8%',
                            right: '12%',
                            width: '2%',
                        }}
                        variants={createFloatingVariants()}  // Apply floating animation
                        animate="visible"
                    />
                    <motion.img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom Right"
                        style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '10%',
                            width: '1.5%',
                        }}
                        variants={plusFloatingVariants}  // Apply floating animation
                        animate="visible"
                    />
                    <motion.img
                        src="../background/support/big_plus.png"
                        alt="Plus Bottom left"
                        style={{
                            position: 'absolute',
                            bottom: '22%',
                            left: '11%',
                            width: '2%',
                        }}
                        variants={createFloatingVariants()}  // Apply floating animation
                        animate="visible"
                    />

                    <motion.div
                        style={centerCircleStyle2}
                        variants={slideLeftInVariants}
                    >
                        <div style={centerCircleStyle3}>
                            <div style={centerCircleStyle}>
                                <p>A.Y.E.S</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        style={accountabilityStyle}
                        variants={slideLeftInVariants}
                    >
                        <Tooltip
                            fresh
                            title="We are accountable
                            for our actions,
                            decisions, and
                            outcomes, ensuring
                            the trust of our
                            clients and
                            stakeholders. We
                            take responsibility for
                            our commitments to
                            achieve customer
                            satisfaction
                        "
                            color={"grey"}
                            placement="right"
                        >
                            <div style={rowStyle}>
                                <div style={letterStyle}>A</div>
                                <div style={labelStyle}>Accountability</div>
                            </div>
                        </Tooltip>
                    </motion.div >

                    <motion.div
                        style={yieldStyle}
                    // variants={slideRightInVariants}
                    >
                        <Tooltip
                            fresh
                            title="Our aim is to deliver the best
                            outcomes for clients through
                            efficiency, effectiveness, and added
                            value. We strive for sustainable
                            growth and high satisfaction levels
                        "
                            color={"grey"}
                            placement="bottom"
                        >
                            <div style={rowStyle}>
                                <div style={letterStyle}>Y</div>
                                <div style={labelStyle}>Yield</div>
                            </div>
                        </Tooltip>

                    </motion.div >

                    <div style={empowermentStyle}>
                        <Tooltip
                            fresh
                            title="We empower our
                            employees with
                            resources and
                            support to provide
                            top-notch service to
                            clients. Our culture
                            of empowerment
                            fosters innovation
                            and dedication to
                            customer
                            satisfaction
                        "
                            color={"grey"}
                            placement="left"
                        >
                            <div style={rowStyle}>
                                <div style={letterStyle}>E</div>
                                <div style={labelStyle}>Empowerment</div>
                            </div>
                        </Tooltip>
                    </div>

                    <div style={safetyStyle}>
                        <Tooltip
                            fresh
                            title="Customer safety is our top priority
                            across all operations. We uphold
                            strict safety standards to ensure
                            customer security and satisfaction.
                        "
                            color={"grey"}
                            placement="top"
                        >
                            <div style={rowStyle}>
                                <div style={letterStyle}>S</div>
                                <div style={labelStyle}>Safety</div>
                            </div>
                        </Tooltip>
                    </div>
                </motion.div>
            ) : undefined}
            {/* WIP on Mobile */}

            <motion.div
                ref={visionRef}
                initial="hidden"
                animate={isVisionInView ? "visible" : "hidden"}
                variants={slideLeftInVariants}
                style={{ marginTop: 50 }}
            >
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
            </motion.div>

            <motion.div
                ref={visionRef}
                initial="hidden"
                animate={isVisionInView ? "visible" : "hidden"}
                variants={slideRightInVariants}
                style={{ marginTop: 50 }}
            >
                <Row style={{ paddingRight: 50, paddingLeft: 50 }}>
                    <Col
                        xs={24}
                        md={24}
                        lg={14}
                        xl={14}
                    >
                        <motion.img
                            src="../background/support/star.jpg"
                            style={!isMobile ? {
                                position: 'absolute',
                                width: '35%',
                                left: "3%",
                                top: "5%",
                                zIndex: -4
                            } : {
                                position: 'absolute',
                                width: '35%',
                                left: "3%",
                                top: "-45vh",
                                zIndex: -4
                            }}
                            variants={createFloatingVariants()}  // Apply floating animation
                            animate="visible"
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
                            style={!isMobile ? {
                                position: 'absolute',
                                width: '30%',
                                zIndex: -4
                            } : {
                                position: 'absolute',
                                width: '60%',
                                bottom: "-10vh",
                                zIndex: -4
                            }}
                        />
                        <h1 className="title-font" style={{ fontSize: "39px" }}>Our Mission</h1>
                        <p style={{ fontSize: "25px" }}>To provide the best customer satisfaction. Trust is our priority to continuously
                            strengthen relationships with our customers. We ensure clients get the best
                            quality products and services with our company.</p>
                    </Col>
                </Row>
            </motion.div>

            <Row style={{ paddingRight: 50, paddingLeft: 50, margin: "90px 0 20px 0" }}>
                <h1 className="title-font" style={{ fontSize: "39px" }}>Promotional & Gallery</h1>
            </Row>

            <Row gutter={[70, 30]} style={{ paddingRight: 50, paddingLeft: 50 }}>
                {/* Left Side - Video Section */}
                <Col xs={24} md={12} lg={12} xl={12}>
                    <div style={{ position: 'relative' }}>
                        <iframe
                            loading="lazy"
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/oZUW8viDUV0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '8px' }}
                        ></iframe>
                    </div>
                </Col>

                {/* Right Side - Gallery Section */}
                <Col xs={24} md={12} lg={12} xl={12}>
                    <CarouselComponent />
                </Col>
            </Row>

            <Row style={{ paddingRight: 50, paddingLeft: 50, margin: "70px 0 20px 0", alignItems: "center" }}>
                <Col xs={20} md={20} lg={7} xl={7}>
                    <h1 className="title-font" style={{ fontSize: "39px" }}>Our Wonderful Timeline</h1>
                </Col>
                <Col xs={4} md={4} lg={16} xl={16}>
                    <img
                        src="../Icon/pin.png"
                        alt="Plus Top Right"
                        style={{
                            height: "50px",
                        }}
                    />
                </Col>
            </Row>

            <TimeLine />

            <Row style={{ paddingRight: 50, paddingLeft: 50, marginTop: 70 }} justify={"center"} id="services">
                <h1 className="title-font" style={{ fontSize: "39px", textAlign: "center" }}>Product & Services</h1>
            </Row>

            <div style={{ padding: '20px 50px', textAlign: 'center' }}>
                <Row gutter={[16, 16]} style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => PushNavigateTo(`/product/S2S_PLID_Wrap`)}>
                    {/* Preventive Solution Section */}
                    <Col xs={24} md={18} lg={18} xl={18}>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            {/* <img
                                src="../background/c.jpg"
                                alt="Preventive Solution"
                                style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                            /> */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '200px', // Set your desired height
                                    borderRadius: '8px',
                                    overflow: 'hidden', // Ensures the image respects the borderRadius
                                }}
                            >
                                <Image
                                    src="/background/bg5.jpg"
                                    alt="Corrective Solution"
                                    layout="fill"
                                    objectFit="cover"
                                    loading="lazy"
                                />
                            </div>
                            {isMobile && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent overlay
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    borderRadius: '8px'
                                }}>
                                    Preventive Solution
                                </div>
                            )}
                            <Button
                                type="primary"
                                style={{ position: 'absolute', bottom: '10px', left: '10px' }}
                                onClick={() => PushNavigateTo(`/product/S2S_PLID_Wrap`)}
                            >
                                Details &raquo;
                            </Button>
                        </div>
                    </Col>
                    {!isMobile && (
                        <Col xs={6} md={6} lg={6} xl={6}>
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
                                    src="../Icon/shield.png"
                                    alt="Preventive Solution"
                                    style={{ width: '20%', borderRadius: '8px' }}
                                />
                                <h3 style={{ fontWeight: 'bold' }}>Preventive Solution</h3>
                            </div>
                        </Col>
                    )}
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => PushNavigateTo(`/product/CarbonSeal`)}>
                    {/* Corrective Solution Section */}
                    {!isMobile && (
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
                                <Image
                                    src="/Icon/brushes.png"
                                    alt="Corrective Solution"
                                    width={"100%"}
                                    height={"100px"}
                                    loading="lazy"
                                />
                                <h3 style={{ fontWeight: 'bold' }}>Corrective Solution</h3>
                            </div>
                        </Col>
                    )}
                    <Col xs={24} md={18} lg={18} xl={18}>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            {/* <img
                                src="../background/bg6.jpg"
                                alt="Corrective Solution"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    borderRadius: '8px',
                                    objectFit: 'cover'
                                }}
                            /> */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '200px', // Set your desired height
                                    borderRadius: '8px',
                                    overflow: 'hidden', // Ensures the image respects the borderRadius
                                }}
                            >
                                <Image
                                    src="/background/bg6.jpg"
                                    alt="Corrective Solution"
                                    layout="fill"
                                    objectFit="cover"
                                    loading="lazy"
                                />
                            </div>

                            {isMobile && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    borderRadius: '8px'
                                }}>
                                    Corrective Solution
                                </div>
                            )}
                            <Button
                                type="primary"
                                style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                                onClick={() => PushNavigateTo(`/product/CarbonSeal`)}
                            >
                                Details &raquo;
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default HomeScreen