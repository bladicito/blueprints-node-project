import { config, serverInstance, logger } from './server';

process.stdout.write('\x1B]0;YourProject\x07');

(async () => {
  try {
    await serverInstance.listen({
      port: config.fastify.port,
      host: config.fastify.host,
    });
    logger.info('Server started.');
  } catch (error: any) {
    logger.error(error);
    process.exit(1);
  }
})();
