import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";
import "./ScoreChart.css";

function ScoreChart({ score }) {
  if (score.length === 0) {
    return null;
  }

  return (
    <div className="containerScore">
      <h2>Score</h2>
      <div className="innerCircle" />
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="score"
            innerRadius={73}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) => {
              if (index === 0) {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill="#FF0000"
                    cornerRadius={10}
                  />
                );
              }
              return (
                <Cell
                  key={`cell-${index}`}
                  stroke="transparent"
                  fill="transparent"
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="pObjectif">
        <span>{score[0].score * 100}%</span> <br /> de votre <br />
        objectif
      </p>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.array.isRequired,
};

export default ScoreChart;
