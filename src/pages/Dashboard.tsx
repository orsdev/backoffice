import Main from "../components/Dashboard/Main";
import MainLayout from "../components/MainLayout";
import Metrics from "../components/Dashboard/Metrics";
import Tabs from "../components/Dashboard/Tabs";

const Dashboard = () => {
  return (
    <MainLayout title="Main metrics">
      <Tabs />
      <Metrics />
      <Main />
    </MainLayout>
  );
};

export default Dashboard;
