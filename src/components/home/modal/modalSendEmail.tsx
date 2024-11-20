import { ArrowRightOutlined } from "@ant-design/icons";
import themeColor from "@configs/theme/themeColor";
import { Button, Form, Input, Modal, Radio, Row, theme } from "antd";
import { Dispatch, SetStateAction } from "react";

const ModalSendEmail = ({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) => {

    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            const { fullName, phoneNumber, company, email, sendTDSFor, natureOfRequest } = values;

            const subject = `Technical Data Sheet Request from ${fullName}`;
            const body = `
                Full Name: ${fullName}
                Phone Number: ${phoneNumber}
                Company: ${company}
                E-Mail: ${email}
                Send TDS For: ${sendTDSFor}
                Nature of Request: ${natureOfRequest === "purchased" ? "I have already purchased this product" : "This is a presale request"}
            `;

            const recipientEmail = "info@ptayesproinovasi.com";

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(gmailLink, "_blank");

            setVisible(false);
            form.resetFields();
        }).catch(info => {
            console.error("Validate Failed:", info);
        });
    };

    return (
        <>
            <Modal
                className="modal-custom"
                open={visible}
                width={"800px"}
                onCancel={() => {
                    setVisible(false);
                    form.resetFields();
                }}
                footer={[
                    <Row style={{ padding: 20 }} justify={"end"}>
                        <Button key="cancel" onClick={() => setVisible(false)} style={{ marginRight: 10 }}>
                            Cancel
                        </Button>
                        <Button key="ok" type="primary" onClick={handleOk}>
                            OK <ArrowRightOutlined rev={""} />
                        </Button>
                    </Row>
                ]}
                // bodyStyle={{ padding: 0 }}
                title={null}
            >
                <div
                    style={{
                        backgroundColor: themeColor?.blue500,
                        color: "#ffffff", // White text
                        padding: "16px",
                        fontSize: "18px",
                        fontWeight: "bold",
                    }}
                >
                    Request a Technical Data Sheet
                </div>
                <div style={{ padding: "24px" }}>
                    <Form form={form} layout="vertical">
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter your full name' }]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please enter your phone number' }]}
                        >
                            <Input placeholder="+6200-0000-0000" />
                        </Form.Item>

                        <Form.Item
                            label="Company"
                            name="company"
                            rules={[{ required: true, message: 'Please enter your company name' }]}
                        >
                            <Input placeholder="Google, Facebook, etc..." />
                        </Form.Item>

                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                        >
                            <Input placeholder="somebody@mail.com" />
                        </Form.Item>

                        <Form.Item
                            label="Send TDS For"
                            name="sendTDSFor"
                            rules={[{ required: true, message: 'Please enter your request details' }]}
                        >
                            <Input.TextArea placeholder="I want to request technical data sheet for ..." />
                        </Form.Item>

                        <Form.Item label="Nature of Request" name="natureOfRequest" rules={[{ required: true, message: 'Please select the nature of your request' }]}>
                            <Radio.Group>
                                <Radio value="purchased">I have already purchased this product</Radio>
                                <Radio value="presale">This is a presale request</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default ModalSendEmail;
