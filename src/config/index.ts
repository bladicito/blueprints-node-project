import { IConfig } from '../utils/interfaces/Config.interface';

const appConfig: IConfig = {
  projectName: 'Delivery App',
  fastify: {
    port: 8080,
    host: '0.0.0.0',
  },
  logs: {
    enabled: true,
    level: 'info',
  },
};

export default appConfig;
