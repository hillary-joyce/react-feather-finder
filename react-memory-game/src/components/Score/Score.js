import React from "react";
import "./Score.css"

const Score = props => <div className="score">Current Score: {props.score} High Score: {props.highScore}</div>;

export default Score;
