import { EnvironmentConfigService } from '@/infrastructure/config/environment/env.service';
import { Injectable } from '@nestjs/common';
import { address } from 'ip';

@Injectable()
export class UploadService {
  constructor(private readonly environmentConfigService: EnvironmentConfigService) {}
  async uploadImage(imageName: string): Promise<string> {
    const port = this.environmentConfigService.get('PORT');
    return `http://${address()}:${port}/${imageName}`;
  }
}
