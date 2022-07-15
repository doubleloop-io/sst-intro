import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const x = parseInt(event.queryStringParameters?.["x"] || "0")
  const y = parseInt(event.queryStringParameters?.["y"] || "0")

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Result, ${x + y}!`,
  };
};
