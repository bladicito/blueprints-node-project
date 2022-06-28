export interface IConfig {
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
