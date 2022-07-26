import { Logger } from './logger';

export class HTTP {
  logger: any;
  apiConfig: any;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    this.logger = new Logger();
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
