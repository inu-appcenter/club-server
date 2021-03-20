import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { v4 } from 'uuid';
import { join } from 'path';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      fileFilter: (req: any, file: any, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) cb(null, true);
        else cb(new Error(`Unsupported file type ${extname(file.originalname)}`), false);
      },
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = './uploads';
          const indexPage = 'index.html';
          if (!existsSync(uploadPath)) mkdirSync(uploadPath);
          if (!existsSync(join(uploadPath, indexPage))) writeFileSync(join(uploadPath, indexPage), '<html />');
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          const extension = file.mimetype.split('/')[1];
          cb(null, `${v4()}.${extension}`);
        },
      }),
      limits: {
        fileSize: 20971520, // 20MB
      },
    };
  }
}
