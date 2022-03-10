import TopNav from "../components/TopNav/TopNav";
import LeftNav from "../components/LeftNav/LeftNav";
import Charts from "../components/Charts/Charts";
import PropTypes from "prop-types";

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

Dashboard.protTypes = {
  match: PropTypes.string.isRequired,
};

export default Dashboard;
