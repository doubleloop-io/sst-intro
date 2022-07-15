import { StackContext, Api } from "@serverless-stack/resources";

export function MyApi({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/hello.handler",
      "GET /sum": "functions/sum.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
