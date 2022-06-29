import { FC } from "react";

type HeaderProps = {
  title: string;
  titleMetric: string | number;
  average: string;
};

type MetricsLabelsProps = {
  title: string;
  errorCode: number | null;
  numOfErrors: number;
};

const MetricsHeader: FC<HeaderProps> = ({ title, titleMetric, average }) => {
  return (
    <header>
      <h3 className="metrics__header__title">
        <span className="metrics__header__badge" />
        {title}: {titleMetric}
      </h3>
      <h4 className="metrics__header__sub">Average: {average}</h4>
    </header>
  );
};

const MetricsLineGraph = () => {
  return (
    <div className="metrics__graph__container">
      <div className="metrics__graph">
        <div className="metrics__graph__error__500" />
        <div className="metrics__graph__error__501" />
        <div className="metrics__graph__error__502" />
        <div className="metrics__graph__error__others" />
      </div>
    </div>
  );
};

const MetricsLabels: FC<MetricsLabelsProps> = ({
  title,
  errorCode,
  numOfErrors,
}) => {
  return (
    <div className="metrics__labels">
      <div className="metrics__labels__error">
        <span
          className={`metrics__labels__shape metrics__labels__${
            errorCode ? errorCode : "other"
          }`}
        />
        <h6 className="metrics__labels__title">
          {title} {errorCode}: {numOfErrors}
        </h6>
      </div>
    </div>
  );
};

const Metrics = () => {
  return (
    <div className="metrics">
      <div className="metrics__header">
        <MetricsHeader title="Errors" titleMetric="0.12%" average="0,11%" />
        <MetricsHeader title="Zeroes" titleMetric="0.12%" average="0,11%" />
        <MetricsHeader title="Timeouts" titleMetric="0.12%" average="0,11%" />
      </div>
      <MetricsLineGraph />
      <div className="metrics__labels__container">
        <MetricsLabels title="Error" errorCode={500} numOfErrors={300} />
        <MetricsLabels title="Error" errorCode={501} numOfErrors={300} />
        <MetricsLabels title="Error" errorCode={502} numOfErrors={300} />
        <MetricsLabels title="Error" errorCode={null} numOfErrors={300} />
      </div>
    </div>
  );
};

export default Metrics;
