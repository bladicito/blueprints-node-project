import { IConfig } from '../utils/interfaces/Config.interface';
import { version } from './version.json';

const appConfig: IConfig = {
  version,
  projectName: 'Delivery App',
  fastify: {
    port: 8081,
    host: '0.0.0.0',
  },
  logs: {
    enabled: true,
    level: 'info',
  },
};

export default appConfig;
