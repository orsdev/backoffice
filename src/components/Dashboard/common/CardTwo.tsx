import { FC } from "react";

type CardTwoProps = {
  help: string[];
  title: string;
  className?: string;
  subTitle?: string;
  info: string;
};

const CardTwo: FC<CardTwoProps> = ({
  info,
  title,
  subTitle,
  className = "",
  help = [],
}) => {
  return (
    <div className="card__two">
      <h3 className={"card__two__title " + className}>{title}</h3>
      {subTitle && <h3 className="card__two__title">{subTitle}</h3>}
      <p className="card__two__info">{info}</p>
      <div className="card__two__help">
        Help: &nbsp;
        {help.map((item, index) => {
          let comma = ", ";

          if (index === help.length - 1) {
            comma = "";
          }
          return (
            <div key={item}>
              <span> {item}</span> {comma}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTwo;
