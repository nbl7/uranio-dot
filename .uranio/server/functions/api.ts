import uranio from '../../lib/';
const uranio_lambda = uranio.api.lambda.create();
const handler = async (event:uranio.api.lambda.LambdaEvent, context:uranio.api.lambda.LambdaContext)
		:Promise<uranio.api.lambda.HandlerResponse> => {
	return await uranio_lambda.handle(event, context);
};
export { handler };
