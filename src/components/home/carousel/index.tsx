import React from 'react';
import { Row, Carousel, Button } from 'antd';
import { backgroundImageStyle1, buttonStyle, carouselContainerStyle, subtitleStyle, titleStyle } from './styles';
import { itemVariants, plusFloatingVariants } from '../framer-motion/motionVariants';
import { motion } from 'framer-motion';
import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { Link } from 'react-scroll';

const MainCarousel = ({ isMobile }: { isMobile: boolean }) => {
    const arrImage = [
        "/background/bg_1.png",
        "/background/bg_2.png",
        "/background/bg_4.png",
    ]

    const titleResponsiveStyle = {
        ...titleStyle,
        fontSize: isMobile ? '36px' : '61px',
        padding: isMobile ? '50px 50px' : '80px 300px',
        lineHeight: isMobile ? "38px" : '76px',
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
        <Carousel autoplay autoplaySpeed={2000} effect="fade" lazyLoad="progressive">
            {arrImage.map((x, index) => (
                <motion.div key={index} variants={itemVariants} style={carouselContainerStyle}>
                    <motion.div
                        style={backgroundImageStyle1}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        key={index}
                    >
                        <div style={{ width: '100%', height: '800px', backgroundSize: 'cover', }}>
                            <Image
                                src={x}
                                alt="Background Image"
                                layout='fill'
                                quality={75}
                                style={{ backgroundSize: "cover" }}
                                objectFit="cover" // Ensures the image covers the container
                                objectPosition="center"
                                priority={index === 0}
                            />
                        </div>
                    </motion.div>
                    <motion.h1
                        style={titleResponsiveStyle}
                        className='intro'
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        “Your Trusted Partner in <br /> Corrosion Maintenance and <br /> Industry Solutions”
                    </motion.h1>
                    <motion.p
                        style={subtitleResponsiveStyle}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        Our strong commitment to integrity and honesty and our dedication <br />
                        to provide our customers the finest service possible.
                    </motion.p>
                    <Row justify={"center"}>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                style={{ cursor: "pointer" }}
                            >
                                <Button style={buttonResponsiveStyle} type="primary">Get Started</Button>
                            </Link>
                        </motion.div>
                    </Row>

                    <motion.div
                        variants={plusFloatingVariants}
                        animate="visible"
                    >
                        <Row justify={"center"}>
                            <DownOutlined
                                rev={''}
                                style={{ marginTop: '20px', fontSize: '24px', color: '#fff', zIndex: 1 }} />
                        </Row>
                    </motion.div>
                </motion.div>
            ))}
        </Carousel>
    )
}

export default MainCarousel;
