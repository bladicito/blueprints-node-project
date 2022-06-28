import { FastifyError, FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import path from 'path';
import fastifyStatic from '@fastify/static';

const pluginCallbackFrontend: FastifyPluginCallback = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (error?: FastifyError) => void
): void => {
  done();
};
export default fastifyPlugin(pluginCallbackFrontend);
