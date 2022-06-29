import { FC } from "react";

type CardOneProps = {
  title: string;
  percent?: number;
  className?: string;
  day: string;
  dayValue: number;
  previousDay: string;
  previousDayValue: number;
};

const CardOne: FC<CardOneProps> = ({
  title,
  percent,
  day,
  dayValue,
  previousDay,
  previousDayValue,
  className = "",
}) => {
  return (
    <div className="card__one">
      <div className="card__one__body">
        <h3 className={"card__one__title " + className}>
          {" "}
          {title}
          {percent && (
            <span className="card__one__title__percent"> {percent}% </span>
          )}
        </h3>
        <div>
          <div className="card__one__content card__one__content--dark">
            <h2 className="card__one__value">{dayValue}</h2>
            <p>{day}</p>
          </div>
          <div className="card__one__content card__one__content--light">
            <h2 className="card__one__value">{previousDayValue}</h2>
            <p>{previousDay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
