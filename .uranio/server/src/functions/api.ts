import * as lambda_12113241 from "../uranio/trx/api/lambda";
const uranio_lambda = lambda_12113241.create();
const handler = async (
	event: lambda_12113241.LambdaEvent,
	context: lambda_12113241.LambdaContext
): Promise<lambda_12113241.HandlerResponse> => {
	return await uranio_lambda.handle(event, context);
};
export { handler };

// uranio autoupdate
// 1