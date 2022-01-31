import React from "react";
import ReactDOM from "react-dom";
import { Graphics, Stage, Sprite } from "@inlet/react-pixi";
import Viewport from "./Viewport";
import bunnyImg from "./bunny.png";

const App = () => {
  const width = 400;
  const height = 400;

  const draw = React.useCallback((g) => {
    g.clear();
    g.moveTo(0, 0);
    g.beginFill(0xff3300);
    g.drawRoundedRect(100, 100, 200, 200, 15);
    g.endFill();
  }, []);

  return (
    <div>
      <Stage
        width={width}
        height={height}
        options={{ backgroundColor: 0x1099bb }}
      >
        <Viewport width={width} height={height}>
          <Graphics draw={draw} />
          <Sprite image={bunnyImg} x={0} y={0} anchor={0.5} />
          <Sprite image={bunnyImg} x={100} y={100} anchor={0.5} />
          <Sprite image={bunnyImg} x={200} y={200} anchor={0.5} />
        </Viewport>
      </Stage>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
