import AWS from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const sqs = new AWS.SQS();

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const id = event.pathParameters?.["id"]

    await sqs.sendMessage({
        QueueUrl: process.env.queueUrl || "",
        MessageBody: JSON.stringify({id, status: "TODO"})
    }).promise()

    console.log("Produce message", id, process.env.queueUrl)

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Success ${id}`,
    };
};
