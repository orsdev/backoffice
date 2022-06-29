import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const MainLayout = ({ title, children }: Props) => {
  return (
    <div className="main__layout">
      <h1 className="main__layout__heading">{title}</h1>
      {children}
    </div>
  );
};

export default MainLayout;
