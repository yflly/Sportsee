import React, { Component } from "react";
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

/*function Dashboard(props) {
  const { id } = useParams();
  return (
    <div>
      <TopNav />
      <main>
        <LeftNav />
       *<Name id={id} />
      </main>
    </div>
  );
}

export default Dashboard;*/
