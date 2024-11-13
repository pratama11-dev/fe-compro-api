import useFetcher from "@api/customHooks/useFetcher";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import {
    Button,
    Card,
    Col,
    Form,
    List,
    Row,
    Typography,
} from "antd";
import { useRouter } from "next/router";
import React, { } from "react";
import { Sessions } from "types/Session";

const { Title, Paragraph } = Typography;

const DetailPr = () => {
    const router = useRouter();

    const { name } = router?.query;
    const [form] = Form.useForm();

    useNavbar(
        [`/product/${name}`],
        [
            { name: "Product", url: `/product/${name}` },
            { name: `${name}`, url: `/product/${name}` },
        ]
    );

    const advantages = [
        "1000+ Hours without corrosion in ASTM B117-18 Salt Spray Testing",
        "Works on dissimilar metals",
        "Ultra Low VOC and Zinc-Free",
        "Can be applied to damp surfaces",
        "Wide range of operating temperatures",
        "Safe on batteries, electrical and electronics",
        "Dielectric strength 3200 volts",
        "Environmentally Friendly"
    ];

    const uses = [
        "Equipment", "Parts", "Wellheads", "Tank deck piping & valves",
        "Fittings & Flanges", "Offshore rigs", "Machined surfaces", "Sculptures",
        "Cranes", "Motors", "Bottom of ballast tank plating"
    ];


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
                        <Title level={3}>HD Corrosion Shield</Title>
                        <Paragraph>
                            S2S HD Corrosion Shield works by displacing water and oxygen. It creates an even, lubricating clear thick film that creeps into hard-to-reach areas with anti-seize capabilities. Application of S2S HD Corrosion Shield requires no surface preparation. It is easily applied by air or battery-operated paint sprayer, brush, or roller.
                        </Paragraph>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Advantages" bordered={false} style={{ height: "100%" }}>
                            <List
                                dataSource={advantages}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Paragraph>{item}</Paragraph>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Recommended Uses" bordered={false} style={{ height: "100%" }}>
                            <List
                                dataSource={uses}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Paragraph>{item}</Paragraph>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{ marginTop: 24 }}>
                    <Col span={24}>
                        <Card bordered={false} style={{ textAlign: "center" }}>
                            <Paragraph>
                                Interested in our product? Contact us and place your order now for the best service!
                            </Paragraph>
                            <Button type="primary">Contact Us</Button>
                        </Card>
                    </Col>
                </Row>
            </DashboardLayout>
        </>
    );
};

export default DetailPr;
