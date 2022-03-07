import TopNav from "../components/TopNav/TopNav";
import LeftNav from "../components/LeftNav/LeftNav";
import Charts from "./Charts";

import "./Dashboard.css";

function Dashboard({ match }) {
  return (
    <div>
      <TopNav />
      <div className="containerDashboard">
        <LeftNav />
        <Charts match={match} />
      </div>
    </div>
  );
}

export default Dashboard;
