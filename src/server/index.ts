import fastify, { FastifyInstance } from 'fastify';
import configDefault from '../config';

export const config = configDefault;
export const serverInstance: FastifyInstance = fastify();
export const logger = serverInstance.log;
