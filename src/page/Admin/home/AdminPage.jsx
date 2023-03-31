import Chart from "./../../../components/AdminComponent/chart/Chart";
import FeaturedInfo from "../../../components/AdminComponent/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/AdminComponent/widgetSm/WidgetSm";
import WidgetLg from "../../../components/AdminComponent/widgetLg/WidgetLg";
import helper from "../../../utiliti/helper/helper";

export default function AdminPage() {
  const hihi = () => {
    helper.toast("success", "error")
  }
  return (
    <div className="home">
      <button onClick={hihi}>hihi</button>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
