import fastify, { FastifyInstance } from 'fastify';
import configDefault from '../config';
import { EReplyTypes } from '../utils/enums/ReplyTypes.enum';

export const config = configDefault;
const server: FastifyInstance = fastify({ logger: { level: config.logs.level } });
export const logger = server.log;

// Health route
server.get('/ping', (request, reply) => {
  reply.type(EReplyTypes.TEXT).send('pong');
});

export default server;
