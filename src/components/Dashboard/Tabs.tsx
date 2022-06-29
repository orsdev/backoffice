import { useEffect } from "react";
import { _getMetrics } from "../../redux/slices/metrics";
import { setTab, TabEnum } from "../../redux/slices/tab";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "../common/Button";

const Tabs = () => {
  const dispatch = useAppDispatch();
  const { tab } = useAppSelector((state) => state.tab);

  useEffect(() => {
    if (tab) {
      dispatch(_getMetrics());
    }
  }, [tab, dispatch]);

  return (
    <header className="tabs">
      <Button
        title="Last hour"
        active_tab={tab === "Last Hour"}
        handleClick={() =>
          dispatch(setTab({ error: TabEnum.LASTHOUR, tab: "Last Hour" }))
        }
      />
      <Button
        title="Today"
        active_tab={tab === "Today"}
        handleClick={() =>
          dispatch(setTab({ error: TabEnum.TODAY, tab: "Today" }))
        }
      />
      <Button
        title="Yesterday"
        active_tab={tab === "Yesterday"}
        handleClick={() =>
          dispatch(setTab({ error: TabEnum.YESTERDAY, tab: "Yesterday" }))
        }
      />
      <Button
        title="Last 3 days"
        active_tab={tab === "Last 3 Days"}
        handleClick={() =>
          dispatch(setTab({ error: TabEnum.LAST3DAYS, tab: "Last 3 Days" }))
        }
      />
    </header>
  );
};

export default Tabs;
