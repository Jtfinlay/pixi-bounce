import React from "react";
import * as PIXI from "pixi.js";
import { PixiComponent, useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Rectangle } from "@pixi/math";
import { Bounce } from "./bounce";
import { Wheel } from "./wheel";

export interface ViewportProps {
  width: number;
  height: number;
  children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: props.width, // 400
      screenHeight: props.height, // 400
      worldWidth: 200,
      worldHeight: 200,
      interaction: props.app.renderer.plugins.interaction
    });
    viewport.drag().pinch().wheel();
    // .clampZoom({})

    // viewport.plugins.add("wheel", new Wheel(viewport));

    viewport.plugins.add(
      "bounce",
      new Bounce(viewport, {
        // 100, 100, 200, 200 should ~focus on
        // bunny at <200, 200>
        bounceBox: new Rectangle(100, 100, 200, 200)
      })
    );

    return viewport;
  }
});

const Viewport = (props: ViewportProps) => {
  const app = useApp();
  return <PixiComponentViewport app={app} {...props} />;
};

export default Viewport;
