import { FastifyInstance, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { EReplyTypes } from '../../utils/enums/ReplyTypes.enum';
import { getIndexPage } from '../../utils/helpers/getIndexPage';

interface IParams {
  Params: {};
  QueryString: {};
  Body: {};
}

async function registerRoutes(fastify: FastifyInstance, opts: any, next: any) {
  fastify.get<IParams>('/', {
    handler: async (request: FastifyRequest, reply) => {
      const data = await getIndexPage();
      reply.type(EReplyTypes.HTML).send(data);
    },
  });

  fastify.get<IParams>('/second', {
    handler: async (request: FastifyRequest, reply) => {
      const data = await getIndexPage();
      reply.type(EReplyTypes.HTML).send(data);
    },
  });

  next();
}

export default fastifyPlugin(registerRoutes, { name: 'appRoutes' });
