import useFetcher from "@api/customHooks/useFetcher";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import {
    Form,
} from "antd";
import { useRouter } from "next/router";
import React, { } from "react";
import { Sessions } from "types/Session";

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


    return (
        <>
            <HeadPage withDefaultCss title="Purchase Request" />
            <DashboardLayout>
                <>
                    ...
                </>
            </DashboardLayout>
        </>
    );
};

export default DetailPr;
