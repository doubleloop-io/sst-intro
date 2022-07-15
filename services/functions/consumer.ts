import {SQSHandler} from "aws-lambda";

export const handler: SQSHandler = async (event) => {
    event.Records.forEach(r => {
        console.log("Consume message", JSON.parse(r.body))
    })

    console.log("Consume all")
};
