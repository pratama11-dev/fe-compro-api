import { RootState } from "@redux/reducer";
import { isNotDashboard } from "@utils/helpers/Route";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function BreadcrumbOur() {
  const bread = useSelector((state: RootState) => state.layout.breadcrumb);
  const router = useRouter();
  return (
    <div>
      <img
        src="../background/support/garis-garis.jpg"
        style={{
          position: 'absolute',
          width: '12%',
          right: 10,
          zIndex: 99
        }}
      />
      {(bread?.length > 0 || false) && !isNotDashboard(router) ? (
        <Breadcrumb style={{ margin: "16px 0" }} separator=">">
          {bread.map((item: any) => (
            <Breadcrumb.Item key={item?.url}>
              <Link href={item?.url ?? ""}>{item?.name ?? ""}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      ) : (
        <div style={{ height: "32px" }} />
      )}
    </div>
  );
}
export default BreadcrumbOur;
