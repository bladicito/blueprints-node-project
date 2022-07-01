import server, { config, logger } from './server';

const terminalTitle = `\x1B]0;${config.projectName}\x07`;
process.stdout.write(terminalTitle);

(async () => {
  try {
    await server.listen({
      port: config.fastify.port,
      host: config.fastify.host,
    });
    logger.info('Server started.');
  } catch (error: any) {
    logger.error(error);
    process.exit(1);
  }
})();
