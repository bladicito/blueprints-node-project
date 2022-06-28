import fastify, { FastifyInstance } from 'fastify';
import configDefault from '../config';
import { EReplyTypes } from '../utils/enums/ReplyTypes.enum';
import serverUtils from '../plugins/api-replies';

export const config = configDefault;
const server: FastifyInstance = fastify({ logger: { level: config.logs.level } });
export const logger = server.log;

declare module 'fastify' {
  interface FastifyReply {
    uncached: (options: { type: EReplyTypes; content: any }) => void;
  }
}

server.register(serverUtils);

// Health route
server.get('/ping', (request, reply) => {
  reply.uncached({ type: EReplyTypes.TEXT, content: 'pong' });
});

export default server;
