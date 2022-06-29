import { MouseEvent } from "react";

type Props = {
  title: string;
  active_tab: boolean;
  handleClick(event: MouseEvent<HTMLButtonElement>): void;
};
const Button = ({ title, active_tab, handleClick }: Props) => {
  return (
    <button className="button" onClick={handleClick} data-active={active_tab}>
      {title}
    </button>
  );
};

export default Button;
