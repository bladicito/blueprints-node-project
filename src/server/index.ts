import fastify, { FastifyInstance } from 'fastify';
import configDefault from '../config';
import { EReplyTypes } from '../utils/enums/ReplyTypes.enum';
import fastifyUtils from '../plugins/fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import appRoutes from '../endpoints/routes';
import os from 'os';

export const config = configDefault;
const server: FastifyInstance = fastify({ logger: { level: config.logs.level } });
export const logger = server.log;

declare module 'fastify' {
  interface FastifyReply {
    uncached: (options: { type: EReplyTypes; content: any }) => void;
  }
}

const hostname = os.hostname();
server.addHook('onRequest', (req, rep, next) => {
  rep.header('X-Served-By', hostname);
  next();
});

server.register(appRoutes);

server.register((instance, opts, next) => {
  instance.register(fastifyStatic, {
    root: path.join(__dirname, '../', 'frontend', 'build'),
  });

  // fastify-static add the method sendFile
  instance.get('/manifest.json', (req, rep) => rep.sendFile('manifest.json'));
  instance.get('/favicon.ico', (req, rep) => rep.sendFile('favicon.ico'));
  instance.get('/favicon.svg', (req, rep) => rep.sendFile('favicon.svg'));
  instance.get('/logo192.png', (req, rep) => rep.sendFile('logo192.png'));
  instance.get('/logo512.png', (req, rep) => rep.sendFile('logo512.png'));
  next();
});

server.register(fastifyUtils);

// Health route
server.get('/ping', (request, reply) => {
  reply.uncached({ type: EReplyTypes.TEXT, content: 'pong' });
});

export default server;
