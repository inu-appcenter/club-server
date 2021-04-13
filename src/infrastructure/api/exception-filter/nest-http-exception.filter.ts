import { Exception } from '@/common/exception/Exception';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (exception instanceof Exception) {
      const errors = exception.data.errors;
      if (errors) {
        // todo
      }
      response.status(400).json({
        timestamp: new Date().toISOString(),
      });
    } else {
      const status = exception.getStatus();

      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
