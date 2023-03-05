import Chart from "./../../../components/AdminComponent/chart/Chart";
import FeaturedInfo from "../../../components/AdminComponent/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/AdminComponent/widgetSm/WidgetSm";
import WidgetLg from "../../../components/AdminComponent/widgetLg/WidgetLg";

export default function AdminPage() {
  return (
    <div className="home">
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
