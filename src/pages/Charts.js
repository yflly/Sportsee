import React, { useState, useEffect } from "react";
import { getUser } from "../service/Api";
import { Redirect } from "react-router-dom";
import "./Charts.css";

import ActivityChart from "../components/ActivityChart/ActivityChart";
import AverageSession from "../components/AverageSession/AverageSession";
import PerformanceChart from "../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import CardInfo from "../components/CardInfo/CardInfo";

import caloriesIcon from "../assets/caloriesIcon.png";
import proteinsIcon from "../assets/proteinsIcon.png";
import carbsIcon from "../assets/carbsIcon.png";
import lipidsIcon from "../assets/lipidsIcon.png";

function Charts({ match }) {
  const [data, setData] = useState([]);
  const [score, setScore] = useState([]);
  const { userInfos, keyData } = data;
  const id = match.params.id;

  useEffect(() => {
    const getData = async () => {
      const request = await getUser(id);
      if (!request) return <Redirect to="/404" />;

      setData(request.data);
      setScore([
        { score: request.data.todayScore || request.data.score },
        {
          score: 1 - request.data.todayScore || 1 - request.data.score,
        },
      ]);
    };

    getData();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <main className="containerCharts">
      <div className="welcome">
        <h1>
          Bonjour <span>{userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="containerChartsActivity">
        <div className="containerChartsActivityDiv">
          <ActivityChart id={id} />
          <div className="containerChartsActivityBottom">
            <AverageSession id={id} />
            <PerformanceChart id={id} />
            <ScoreChart id={id} score={score} />
          </div>
        </div>
        <aside>
          <CardInfo
            data={keyData.calorieCount}
            unit="kCal"
            image={caloriesIcon}
            text="Calories"
          />
          <CardInfo
            data={keyData.proteinCount}
            unit="g"
            image={proteinsIcon}
            text="Proteines"
          />
          <CardInfo
            data={keyData.carbohydrateCount}
            unit="g"
            image={carbsIcon}
            text="Glucides"
          />
          <CardInfo
            data={keyData.lipidCount}
            unit="g"
            image={lipidsIcon}
            text="Lipides"
          />
        </aside>
      </div>
    </main>
  );
}

export default Charts;
