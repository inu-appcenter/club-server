import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { OrmApplicationInfo } from '../entities/application-info.entity';

export async function toApplicationInfo(ormApplicationInfo: OrmApplicationInfo): Promise<ApplicationInfo> {
  if (!ormApplicationInfo) return null;
  const applicationInfo = await ApplicationInfo.new({ ...ormApplicationInfo });
  return applicationInfo;
}
