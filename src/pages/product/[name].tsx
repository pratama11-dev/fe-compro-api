import { FileTextOutlined } from "@ant-design/icons";
import { products } from "../../components/Util/data/product";
import HeadPage from "@components/Global/Header/HeadPage";
import ModalSendEmail from "@components/home/modal/modalSendEmail";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import { Button, Card, Col, FloatButton, List, Row, Typography } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import { buttonStyle } from "@components/home/carousel/styles";
import useWindowSize from "@utils/helpers/ReactHelper";
import { PushNavigateTo } from "@utils/helpers/Route";

const { Title, Paragraph } = Typography;

const DetailPr = () => {
    const router = useRouter();
    const { isMobile } = useWindowSize()
    const { name } = router.query;

    // @ts-ignore
    const productData = products[name] || {};

    const { title, description, type, advantages, uses, img_type, images, properties, logo, video } = productData;
    const [modal, setModal] = useState<boolean>(false);

    useNavbar(
        [`/product/${name}`],
        [
            { name: "Product & Services", url: `/` },
            { name: type === "corretive" ? "Corrective Solutions" : "Preventive Solution", url: `/product/${name}` },
            { name: `${title}`, url: `/product/${name}` },
        ]
    );

    const handleSubmit = async () => {
        try {
            const subject = `Contact from ${name}`;
            // const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            const body = ``;

            // Open Gmail with pre-filled details
            window.open(`mailto:info@ptayesproinovasi.com?subject=${subject}&body=${body}`, "_blank");
        } catch (error) {
            console.error("Validation failed:", error); // Handle validation errors if needed
        }
    };

    const buttonResponsiveStyle = {
        ...buttonStyle,
        fontSize: isMobile ? '12px' : '16px',
        padding: isMobile ? '10px 20px' : '20px 30px',
    };

    return (
        <>
            <HeadPage withDefaultCss title="Product" />
            <DashboardLayout>
                <Row
                    justify={"start"}
                    style={{ height: 60, marginBottom: 25 }}
                >
                    {![
                        "Weicon_Ceramic_HC220",
                        "Weicon_GL",
                        "Weicon_HB_300",
                        "Weicon_HP",
                        "CarbonSeal",
                        "StrongHold",
                        "TankWrap",
                        "GlassSeal",
                        "ChemSeal",
                        "Corrwrap",
                        "EonCoat_Corrosion_Protection_(CP)",
                        "EonCoat_CUI"
                    ].includes(name as string) && (
                            <img
                                alt="Product Image"
                                src="../background/s2s/S2S_Logo.png"
                                style={{ width: isMobile ? "50%" : "15%", objectFit: "cover", marginRight: 30 }}
                            />
                        )
                    }

                    {[
                        "CarbonSeal",
                        "StrongHold",
                        "TankWrap",
                        "GlassSeal",
                        "ChemSeal"
                    ].includes(name as string) && (
                            <img
                                alt="Product Image"
                                src="../Logo HJ3.png"
                                style={{ width: isMobile ? "60%" : "20%", objectFit: "cover", marginRight: 30 }}
                            />
                        )
                    }

                    {[
                        "Corrwrap",
                    ].includes(name as string) && (
                            <img
                                alt="Product Image"
                                src="../Product_Corwrap/Logo Corwrap.png"
                                style={{ width: isMobile ? "40%" : "15%", objectFit: "cover", marginRight: 30 }}
                            />
                        )
                    }

                    {[
                        "EonCoat_Corrosion_Protection_(CP)",
                        'EonCoat_CUI'
                    ].includes(name as string) && (
                            <img
                                alt="Product Image"
                                src="../LogowithTM.png"
                                style={{ width: isMobile ? "40%" : "15%", height: "120%", objectFit: "cover", marginRight: 30 }}
                            />
                        )
                    }

                    {logo?.map((src: string, index: number) => (
                        <Card
                            key={index}
                            hoverable
                            style={{
                                display: "inline-block",
                                width: 400,
                                marginRight: 16,
                                boxShadow: "none",
                            }}
                            bodyStyle={{ width: 0, padding: 0 }}
                            bordered={false}
                            cover={
                                <Image
                                    loading="lazy"
                                    alt={`Image ${index + 1}`}
                                    src={src}
                                    layout="fill"
                                />
                            }
                        />
                    ))}
                </Row>
                <Row gutter={16} style={{ marginBottom: 24 }}>
                    <Col span={24} style={{ marginTop: 20 }}>
                        <Title level={3}>{title}</Title>
                        <Paragraph>{description}</Paragraph>
                    </Col>
                </Row>

                <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: images?.length > 0 ? "10px 0" : 0 }}>
                    {images?.map((src: string, index: number) => (
                        <Card
                            key={index}
                            hoverable
                            style={{
                                display: "inline-block",
                                width: 500,
                                marginRight: 16,
                                boxShadow: "none",
                            }}
                            bodyStyle={{ width: 0, padding: 0 }}
                            bordered={false}
                            cover={
                                <Image
                                    alt={`Image ${index + 1}`}
                                    src={src}
                                    loading="lazy"
                                    objectFit="cover"
                                    objectPosition="center"
                                    width={500}
                                    height={300}
                                />
                            }
                        />
                    ))}
                </div>

                <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: images?.length > 0 ? "10px 0" : 0 }}>
                    {video?.map((src: string, index: number) => (
                        <iframe
                            loading="lazy"
                            key={index}
                            width="50%"
                            height="400"
                            src={src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '8px', marginRight: 40 }}
                        ></iframe>
                    ))}
                </div>

                <Row gutter={16} style={{ marginTop: 20 }}>
                    {advantages?.length > 0 && (
                        <Col xs={24} md={24} lg={12} xl={12}>
                            <Card title="Advantages" bordered={false} style={{ height: "100%" }}>
                                <List
                                    dataSource={advantages}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <ul>
                                                <li>
                                                    <Paragraph style={{ margin: 0 }}>{item}</Paragraph>
                                                </li>
                                            </ul>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    )}
                    {uses?.length > 0 && (
                        <Col xs={24} md={24} lg={12} xl={12}>
                            <Card title="Recommended Uses" bordered={false} style={{ height: "100%" }}>
                                <List
                                    dataSource={uses}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <ul>
                                                <li>
                                                    <Paragraph style={{ margin: 0 }}>{item}</Paragraph>
                                                </li>
                                            </ul>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    )}
                </Row>

                <Row gutter={16} style={{ marginTop: 20 }}>
                    {properties?.length > 0 && (
                        <Col xs={24} md={24} lg={12} xl={12}>
                            <Card title="Properties" bordered={false} style={{ height: "100%" }}>
                                <List
                                    dataSource={properties}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <ul>
                                                <li>
                                                    <Paragraph style={{ margin: 0 }}>{item}</Paragraph>
                                                </li>
                                            </ul>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    )}
                </Row>

                <Row gutter={16} style={{ marginTop: 24 }}>
                    <Col span={24}>
                        <Card bordered={false} style={{ textAlign: "center" }}>
                            <Paragraph>
                                Interested in our product? Contact us and place your order now for the best service!
                            </Paragraph>
                            <Button
                                type="primary"
                                onClick={() =>
                                    PushNavigateTo('/contact-us')
                                    // handleSubmit()
                                }
                                style={buttonResponsiveStyle}
                            >
                                Contact Us
                            </Button>
                        </Card>
                    </Col>
                </Row>

                <div className="floating-button" onClick={() => setModal(true)}>
                    <span className="button-text">Request TDS</span>
                    <FileTextOutlined rev={""} className="button-icon" />
                </div>

                <ModalSendEmail
                    setVisible={setModal}
                    visible={modal}
                />
            </DashboardLayout>
        </>
    );
};

export default DetailPr;
