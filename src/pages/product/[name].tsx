import { FileTextOutlined } from "@ant-design/icons";
import { products } from "../../components/Util/data/product";
import HeadPage from "@components/Global/Header/HeadPage";
import ModalSendEmail from "@components/home/modal/modalSendEmail";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import { Button, Card, Col, FloatButton, List, Row, Typography } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

const { Title, Paragraph } = Typography;

const DetailPr = () => {
    const router = useRouter();
    const { name } = router.query;

    // @ts-ignore
    const productData = products[name] || {};

    const { title, description, type, advantages, uses, images, properties } = productData;
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

    return (
        <>
            <HeadPage withDefaultCss title="Purchase Request" />
            <DashboardLayout>
                <Card
                    cover={
                        <img
                            alt="Product Image"
                            src="../background/s2s/S2S_Logo.png"
                            style={{ width: "20%", objectFit: "cover" }}
                        />
                    }
                    bodyStyle={{ padding: 0 }}
                />
                <Row gutter={16} style={{ marginBottom: 24 }}>
                    <Col span={24}>
                        <Title level={3}>{title}</Title>
                        <Paragraph>{description}</Paragraph>
                    </Col>
                </Row>

                <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 0" }}>
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
                            bordered={false}
                            cover={
                                <img
                                    alt={`Image ${index + 1}`}
                                    src={src}
                                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                                />
                            }
                        />
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
                            <Button type="primary" onClick={() => handleSubmit()}>Contact Us</Button>
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
