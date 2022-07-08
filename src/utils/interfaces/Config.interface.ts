import { version } from '../../../package.json';

export interface IConfig {
  version: string;
  projectName: string;
  fastify: {
    port: number;
    host: string;
  };
  logs: {
    enabled: boolean;
    level: string;
  };
}
