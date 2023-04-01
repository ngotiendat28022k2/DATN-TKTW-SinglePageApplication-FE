import Chart from "./../../../components/AdminComponent/chart/Chart";
import FeaturedInfo from "../../../components/AdminComponent/featuredInfo/FeaturedInfo";
import styles from "./home.module.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/AdminComponent/widgetSm/WidgetSm";
import WidgetLg from "../../../components/AdminComponent/widgetLg/WidgetLg";
import helper from "../../../utiliti/helper/helper";

export default function AdminPage() {
  const hihi = () => {
    helper.toast("success", "error");
  };
  return (
    <div className={styles.home}>
      <button onClick={hihi}>hihi</button>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className={styles.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
