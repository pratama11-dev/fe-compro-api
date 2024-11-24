import React from 'react';
import { Row, Col } from 'antd';
import themeColor from '@configs/theme/themeColor';
import Image from 'next/image';

// Define the type for a timeline item
interface TimelineItem {
    year: string;
    description: string;
}

// Define the props for the TimelineSection component
interface TimelineSectionProps {
    items: TimelineItem[];
    listStyleImage: string;
}

// TimelineSection Component
const TimelineSection: React.FC<TimelineSectionProps> = ({ items, listStyleImage }) => (
    <ul style={{ listStyle: 'none',  position: 'relative' }}>
        {items.map((item, index) => (
            <li key={index} style={{ paddingBottom: 15, paddingTop: 15, position: 'relative' }}>
                <span
                    style={{
                        position: 'absolute',
                        left: -25,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 15,
                        height: 15,
                        backgroundImage: `url(${listStyleImage})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></span>
                <h2>{item.year}</h2>
                <p style={{ marginTop: 20, marginBottom: 20 }}>{item.description}</p>
            </li>
        ))}
    </ul>
);

// Define the props for the Timeline component
interface TimelineProps {
    themeColor?: {
        blue500: string;
    };
    isMobile?: boolean;
}

// Timeline Component
const Timeline: React.FC<TimelineProps> = () => {
    const leftItems: TimelineItem[] = [
        { year: '2016', description: 'Founded in Cilegon, Banten Province, Indonesia' },
        { year: '2017', description: 'Representing s2s corrosion preventive solution for Indonesia market' },
        { year: '2018', description: 'Representing Emergency Leak Stopper Made by Composite MCU System Cor Wrap' },
        { year: '2019', description: 'Representing Engineered Composite System for Pressurized facilities and Structural Repair & Reinforcement' },
    ];

    const rightItems: TimelineItem[] = [
        { year: '2020', description: 'Focusing Our Business to Supply Goods and Services Related to Corrosion Maintenance Solution (Preventive and Corrective Method)' },
        { year: '2022', description: 'Representing EONCOAT High Temp. External Corrosion Protection with Coating System for Steam and Corrosion Under Insulation (CUI)' },
        { year: '2023', description: 'Representing Wencon Epoxy Ceramic Coating For Indonesian Market' },
    ];

    return (
        <Row style={{ color: 'white', background: themeColor?.blue500, margin: '10px 50px', padding: 50 }} gutter={[ 20, 10 ]}>
            <Col xs={24} md={12}>
                <TimelineSection items={leftItems} listStyleImage="../Icon/dot.png" />
            </Col>
            <Col xs={24} md={12}>
                <TimelineSection items={rightItems} listStyleImage="../Icon/dot.png" />
                <ul style={{ listStyle: 'none', paddingLeft: 0, position: 'relative' }}>
                    <Row align="middle">
                        <Col style={{ marginLeft: 14, marginRight: 2 }}>
                            <Image
                                src={"/Icon/dot_li.png"}
                                alt="Company Logo"
                                width={13}
                                height={15}
                            />
                        </Col>
                        <Col style={{ marginLeft: 10 }}>
                            <h2>2024</h2>
                            <p style={{ marginTop: 20, marginBottom: 20 }}>Continuing our wonderful journey!</p>
                        </Col>
                        <Col>
                            <Image
                                src="/Icon/star.png"
                                alt="Company Logo"
                                // layout="fill"
                                width={"30%"}
                                height={"30px"}
                            />
                        </Col>
                    </Row>
                </ul>
            </Col>
        </Row>
    );
};

export default Timeline;