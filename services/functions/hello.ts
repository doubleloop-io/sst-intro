import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const name = event.queryStringParameters?.["name"] || "unknown"

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, ${name}! Your request was received at ${event.requestContext.time}.`,
  };
};
