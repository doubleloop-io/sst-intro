import { MyApi } from "./MyApi";
import { App } from "@serverless-stack/resources";
import {MyQueue} from "./MyQueue";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });

  app
      .stack(MyApi)
      .stack(MyQueue);
}
