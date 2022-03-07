import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ActivityChart.css";

import { getActivity } from "../../service/Api";

import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from "recharts";

function ActivityChart({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await getActivity(id);

      // Formater la date sur XAxis
      for (let i = 0, length = request.data.sessions.length; i < length; i++) {
        request.data.sessions[i] = {
          ...request.data.sessions[i],
          day: i + 1,
        };
      }
      setData(request.data.sessions);
    };
    getData();
  }, [id]);

  // Data pour le domain
  const kgArray = data.map((el) => el.kilogram);
  const minYKg = Math.min(...kgArray) - 1;
  const maxYKg = Math.max(...kgArray) + 1;

  const calArray = data.map((el) => el.calories);
  const minYCal = Math.min(...calArray) - 20;
  const maxYCal = Math.max(...calArray) + 20;

  return (
    <div className="containerActivity">
      <div className="headerActivity">
        <h2>Activité quotidienne</h2>
        <div className="legendActivity">
          <div className="units">
            <div className="dot1"></div>
            <p>Poids (kg)</p>
          </div>
          <div className="units">
            <div className="dot2"></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            top: 50,
          }}
          data={data}
          barGap={8}
          barCategoryGap={1}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <Tooltip />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="kg"
            datakey="kilogram"
            orientation="right"
            domain={[minYKg, maxYKg]}
            tickCount={4}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            datakey="calories"
            hide={true}
            domain={[minYCal, maxYCal]}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActivityChart;
