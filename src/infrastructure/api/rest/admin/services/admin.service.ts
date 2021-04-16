import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { Admin } from '@/domain/entity/Admin';
import { CreateAdminUseCase } from '@/domain/usecase/admin/CreateAdminUseCase';
import { GetAdminListUseCase } from '@/domain/usecase/admin/GetAdminListUseCase';
import { GetAdminUseCase } from '@/domain/usecase/admin/GetAdminUseCase';
import { RegisterAdminUseCase } from '@/domain/usecase/admin/RegsiterAdminUseCase';
import { RemoveAdminUseCase } from '@/domain/usecase/admin/RemoveAdminUseCase';
import { UpdateAdminUseCase } from '@/domain/usecase/admin/UpdateAdminUseCase';
import { AdminProvides } from '@/infrastructure/di/providers/provides/admin.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateAdminDTO } from '../models/dto/create-admin.dto';
import { RemoveAdminDTO } from '../models/dto/remove-admin.dto';
import { UpdateAdminDTO } from '../models/dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @Inject(AdminProvides.GET_ADMIN_PROXY_SERVICE)
    private readonly getAdminProxyService: UseCaseProxy<GetAdminUseCase>,
    @Inject(AdminProvides.GET_ADMIN_LIST_PROXY_SERVICE)
    private readonly getAdminListProxyService: UseCaseProxy<GetAdminListUseCase>,
    @Inject(AdminProvides.CREATE_ADMIN_PROXY_SERVICE)
    private readonly createAdminProxyService: UseCaseProxy<CreateAdminUseCase>,
    @Inject(AdminProvides.UPDATE_ADMIN_PROXY_SERVICE)
    private readonly updateAdminProxyService: UseCaseProxy<UpdateAdminUseCase>,
    @Inject(AdminProvides.REMOVE_ADMIN_PROXY_SERVICE)
    private readonly removeAdminProxyService: UseCaseProxy<RemoveAdminUseCase>,
    @Inject(AdminProvides.REGISTER_ADMIN_PROXY_SERVICE)
    private readonly registerAdminProxyService: UseCaseProxy<RegisterAdminUseCase>,
  ) {}

  async createAdmin(studentId: number, createAdminDto: CreateAdminDTO) {
    await this.createAdminProxyService.getInstance().execute({
      studentId,
      ...createAdminDto,
    });
  }

  async getAdmins(role: number): Promise<Admin[]> {
    return await this.getAdminListProxyService.getInstance().execute({
      role,
    });
  }

  async getAdminById(id: number): Promise<Admin> {
    return await this.getAdminProxyService.getInstance().execute({ id });
  }

  async updateAdmin(id: number, updateAdminDto: UpdateAdminDTO): Promise<void> {
    await this.updateAdminProxyService.getInstance().execute({
      id,
      ...updateAdminDto,
    });
  }

  async registerAdminById(id: number) {
    await this.registerAdminProxyService.getInstance().execute({ id });
  }

  async removeAdminById(id: number, removeAdminDto: RemoveAdminDTO) {
    // todo: 비밀번호로 인증 받자
    await this.removeAdminProxyService.getInstance().execute({ id });
    // throw new Error();
  }
}
