import { useState } from "react";
import Button from "./common/Button";

enum TabEnum {
  LASTHOUR = "last hour",
  TODAY = "today",
  YESTERDAY = "yesterday",
  LAST3DAYS = "last 2 days",
}

const Tabs = () => {
  const [tab, setTab] = useState<TabEnum>(TabEnum.LASTHOUR);

  return (
    <header className="tabs">
      <Button
        title="Last hour"
        active_tab={tab === TabEnum.LASTHOUR}
        handleClick={() => setTab(TabEnum.LASTHOUR)}
      />
      <Button
        title="Today"
        active_tab={tab === TabEnum.TODAY}
        handleClick={() => setTab(TabEnum.TODAY)}
      />
      <Button
        title="Yesterday"
        active_tab={tab === TabEnum.YESTERDAY}
        handleClick={() => setTab(TabEnum.YESTERDAY)}
      />
      <Button
        title="Last 3 days"
        active_tab={tab === TabEnum.LAST3DAYS}
        handleClick={() => setTab(TabEnum.LAST3DAYS)}
      />
    </header>
  );
};

export default Tabs;
