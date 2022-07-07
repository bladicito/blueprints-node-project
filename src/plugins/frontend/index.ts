import { FastifyError, FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

const pluginCallbackFrontend: FastifyPluginCallback = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (error?: FastifyError) => void
): void => {
  done();
};
export default fastifyPlugin(pluginCallbackFrontend);
