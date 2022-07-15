import { StackContext, Api, Queue } from "@serverless-stack/resources";

export function MyQueue({ stack }: StackContext) {
    const queue = new Queue(stack, "Queue", {
        consumer: "functions/consumer.handler",
    });

    const api = new Api(stack, "QueueApi", {
        defaults: {
            function: {
                environment: {
                    queueUrl: queue.queueUrl,
                },
            },
        },
        routes: {
            "GET /queue/{id}": "functions/producer.handler",
        },
    });

    api.attachPermissions([queue])

    stack.addOutputs({
        QueueApiEndpoint: api.url
    })
}
