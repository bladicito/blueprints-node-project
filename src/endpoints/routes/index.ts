import { FastifyInstance, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { EReplyTypes } from '../../utils/enums/ReplyTypes.enum';

async function registerRoutes(fastify: FastifyInstance, opts: any, next: any) {
  // await dbcall();
  fastify.get<{ Params: {}; QueryString: {}; Body: {} }>('/', async (request: FastifyRequest, reply) => {
    reply.type(EReplyTypes.HTML).send(`<h1>Hello world</h1>`);
  });
  next();
}

export default fastifyPlugin(registerRoutes, { name: 'appRoutes' });
