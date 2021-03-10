import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) cb(null, true);
        else cb(new Error(`Unsupported file type ${extname(file.originalname)}`), false);
      },
      storage: diskStorage({
        destination: (req: any, file: Express.Multer.File, cb: any) => {
          const uploadPath = './uploads';
          if (!existsSync(uploadPath)) mkdirSync(uploadPath);
          cb(null, uploadPath);
        },
        filename: (req: any, file: Express.Multer.File, cb: any) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    };
  }
}
