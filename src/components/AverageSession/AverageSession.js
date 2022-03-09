import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
} from "recharts";
import PropTypes from "prop-types";
import "./AverageSession.css";

import { getAverageSession } from "../../service/Api";

function AverageSessionsChart({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await getAverageSession(id);

      // Formater les données
      const formatedData = request.data.sessions.map((session) => {
        switch (session.day) {
          case 1:
            return { ...session, day: "L" };
          case 2:
            return { ...session, day: "M" };
          case 3:
            return { ...session, day: "M" };
          case 4:
            return { ...session, day: "J" };
          case 5:
            return { ...session, day: "V" };
          case 6:
            return { ...session, day: "S" };
          case 7:
            return { ...session, day: "D" };

          default:
            return { ...session };
        }
      });
      setData(formatedData);
    };
    getData();
  }, [id]);

  // Données pour le domain
  const lengthArray = data.map((el) => el.sessionLength);
  const minY = Math.min(...lengthArray) / 1.6;
  const maxY = Math.max(...lengthArray) * 1.6;

  return (
    <div className="containerAverageSession">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            tick={{ fontSize: 12 }}
            minTickGap={3}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide={true} domain={[minY, maxY]} />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.5)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<AverageSessionsTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 50,
              height: "1000px",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AverageSessionsChart;

const AverageSessionsTooltip = ({ active, payload }) => {
  if (active) {
    return <div className="averageSessionTooltip">{payload[0].value} min</div>;
  }
  return null;
};

AverageSessionsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
