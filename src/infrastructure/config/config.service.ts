import * as Joi from '@hapi/joi';
import { ValidationResult } from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { EnvironmentConfigError } from './config.error';

export interface EnvironmentConfig {
  [key: string]: string;
}

@Injectable()
export class EnvironmentConfigService {
  private readonly environmentConfig: EnvironmentConfig;

  constructor() {
    this.environmentConfig = EnvironmentConfigService.validateInput({ ...process.env });
  }
  private static validateInput(environmentConfig: EnvironmentConfig): EnvironmentConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PORT: Joi.number().default(3000),
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_NAME: Joi.string().required(),
    }).unknown(true);

    const { error, value: validatedEnvironmentConfig }: ValidationResult = envVarsSchema.validate(environmentConfig);
    if (error) throw new EnvironmentConfigError(`Config validation error: ${error.message}`);
    return validatedEnvironmentConfig;
  }

  get(key: string): string {
    return this.environmentConfig[key];
  }
}
