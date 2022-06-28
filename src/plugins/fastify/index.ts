import { FastifyError, FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { EReplyTypes } from '../../utils/enums/ReplyTypes.enum';

const pluginCallback: FastifyPluginCallback = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (error?: FastifyError) => void
): void => {
  fastify.decorateReply('uncached', function ({ type, content }: { type: EReplyTypes; content: any }) {
    // arrow function breaks binding this to fastify instance
    // @ts-ignore
    return this.type(type)
      .header('Cache-Control', 'no-cache, no-store, must-revalidate')
      .header('Pragma', 'no-cache')
      .header('Expires', '0')
      .send(content);
  });

  fastify.get('/routes', (request, reply) => {
    reply.type(EReplyTypes.TEXT).send(fastify.printRoutes());
  });

  done();
};
export default fastifyPlugin(pluginCallback);
