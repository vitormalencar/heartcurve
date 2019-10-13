// Heart Curve
// Vitor Alencar
// I <3 you

import React, { useState } from "react";
import Sketch from "react-p5";

import "./App.css";

const drawRoutine = (p5, a, heart, setA, setHeart) => {
  p5.background(255)
    .translate(400 / 2, 400 / 2)
    .noFill()
    .stroke(233, 30, 99)
    .strokeWeight(5)
    .beginShape();

  for (let v of heart) {
    p5.vertex(v.x, v.y);
  }

  p5.endShape();

  const { sin, pow, cos, PI } = Math;

  // Heart curve formula translated
  // http://mathworld.wolfram.com/HeartCurve.html

  let r = 400 / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));

  setHeart([...heart, p5.createVector(x, y)]);

  if (a > PI * 2) {
    p5.noLoop();
  }
  setA((a += 0.1));
};

function App() {
  const [heart, setHeart] = useState([]);
  const [a, setA] = useState(0);

  const setup = (p5, parent) => p5.createCanvas(400, 400).parent(parent);

  const draw = p5 => drawRoutine(p5, a, heart, setA, setHeart);

  return (
    <div className="App">
      <h1>Heat Curve</h1>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default App;
