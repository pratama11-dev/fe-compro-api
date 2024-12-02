import { useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";
import Head from "next/head";
import useWindowSize from "@utils/helpers/ReactHelper";
import Header from "@components/Global/Header/Header";
import Image from "next/image";
import { PushNavigateTo } from "@utils/helpers/Route";

const { Title, Text } = Typography;

const ContactPage = () => {
    const [loading, setLoading] = useState(false);

    const { isMobile } = useWindowSize();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const onFinish = (values: any) => {
        console.log("Form Values:", values);
        setLoading(true);

        // Simulate sending data
        setTimeout(() => {
            setLoading(false);
            alert("Message sent successfully!");
        }, 2000);
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            {/* <Header toggleDrawer={toggleDrawer} /> */}

            <div style={{ padding: isMobile ? "20px" : "30px", maxWidth: "1600px", margin: "0 auto" }}>
                <Row justify={"space-around"} align={"middle"}>
                    <Col span={20}>
                        <Title
                            level={2}
                            className="title-font"
                            style={{ fontSize: "48px" }}
                        >
                            Contact Us
                        </Title>
                        <Text type="secondary">
                            Be free to get in touch and we’d love to help
                        </Text>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} >
                        <Image
                            src="/logo_primary.png"
                            alt="Company Logo"
                            width={130}
                            height={90}
                            onClick={() => {
                                PushNavigateTo("/")
                            }}
                        />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "30px", height: "990px" }}>

                    <Col xs={24} md={14}>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{ remember: true }}
                        >
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Full Name"
                                        name="fullName"
                                        rules={[{ required: true, message: "Please input your full name!" }]}
                                    >
                                        <Input placeholder="John Doe" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Company"
                                        name="company"
                                        rules={[{ required: true, message: "Please input your company name!" }]}
                                    >
                                        <Input placeholder="Google, Facebook, etc..." />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phone"
                                        rules={[{ required: true, message: "Please input your phone number!" }]}
                                    >
                                        <Input placeholder="+6200-0000-0000" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="E-Mail"
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please input your email!" },
                                            { type: "email", message: "Please input a valid email!" }
                                        ]}
                                    >
                                        <Input placeholder="somebody@mail.com" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="Leave a message"
                                name="message"
                                rules={[{ required: true, message: "Please input your message!" }]}
                            >
                                <Input.TextArea
                                    placeholder="We are interested in your product..."
                                    rows={4}
                                />
                            </Form.Item>

                            <Form.Item name="agreement" valuePropName="checked">
                                <Checkbox>
                                    You agree with our <a href="/privacy-policy">Privacy Policy</a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    block
                                >
                                    Send the message
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>

                    <Col xs={0} md={10}>
                        <Row justify={"end"}>
                            <Image
                                src="/Rectangle_8.png"
                                alt="Contact Us"
                                layout="fill"
                                width={"100%"}
                                style={{ maxWidth: "100%"}}
                            />
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ContactPage;
