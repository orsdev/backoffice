import CardOne from "./common/CardOne";
import CardTwo from "./common/CardTwo";
import SearchesImage from "../../assets/images/searches.png";
import ClicksImage from "../../assets/images/clicks.png";
import SalesImage from "../../assets/images/sales.png";
import { useAppSelector } from "../../redux/store";

const metricFormatter = (duration: string, type: string) => {
  switch (duration.toLowerCase()) {
    case "yesterday":
      return type + "_current_yesterday";
    case "today":
      return type + "_current_last_hour";
    case "last hour":
      return type + "_current_last_hour";
    case "last 3 days":
      return type + "_current_last_3days";
    default:
      return "";
  }
};

const Main = () => {
  const { tab } = useAppSelector((state) => state.tab);
  const { data } = useAppSelector((state) => state.metrics);

  return (
    <main className="main">
      {/* Searches */}
      <div className="main__content">
        <div className="main__content__image">
          <img src={SearchesImage} alt="Searches" />
        </div>

        <div className="main__content__body">
          <div className="main__col__two">
            <div>
              <CardOne
                title="Searches"
                percent={5}
                day={tab}
                dayValue={
                  data?.[metricFormatter(tab as string, "searches")] || 0
                }
                previousDay="Last friday"
                previousDayValue={27000}
              />
            </div>
            <div>
              <CardTwo
                title={`Mobile traffic: ${Math.ceil(data?.mobile_pessimizer)}%`}
                subTitle={`Web traffic: ${data?.web_pessimizer}%`}
                info="You get 100% traffic on mobile and desktop devices."
                help={["Searches", "Pessimisation"]}
              />
            </div>
          </div>
          <hr className="main__content__divider" />
        </div>
      </div>

      {/* Clicks */}
      <div className="main__content">
        <div className="main__content__image">
          <img src={ClicksImage} alt="Clicks" />
        </div>

        <div className="main__content__body">
          <div className="main__col__two">
            <div>
              <CardOne
                title="Clicks"
                percent={5}
                day="Yesterday"
                dayValue={data?.[metricFormatter(tab as string, "clicks")] || 0}
                previousDay="Last friday"
                previousDayValue={280}
                className="card__one__title__danger"
              />
            </div>
            <div>
              <CardTwo
                title="CTR: 0,04%"
                info="Conversion from clicks to clicks on all devices."
                help={["CTR", "Clicks"]}
                className="card__two__title__danger"
              />
            </div>
          </div>
          <hr className="main__content__divider" />
        </div>
      </div>

      {/* Sales */}
      <div className="main__content">
        <div className="main__content__image">
          <img src={SalesImage} alt="Sales" />
        </div>

        <div className="main__content__body">
          <div className="main__col__two">
            <div>
              <CardOne
                title="Sales"
                day="Yesterday"
                dayValue={data?.[metricFormatter(tab as string, "sales")] || 0}
                previousDay="Last friday"
                previousDayValue={24}
              />
            </div>
            <div>
              <CardTwo
                title="STR: 6.2%"
                subTitle="Avg. Check: 8903"
                info="Conversion from sales to bookings on all devices."
                help={["STR", "Bookings", "Avg. Check"]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
