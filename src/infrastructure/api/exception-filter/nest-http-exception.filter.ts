import { Exception } from '@/common/exception/Exception';
import { IErrorResponse } from '@/common/exception/IErrorResponse';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * 모든 예외를 캐치
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errorRes: IErrorResponse = {
      errors: [],
      path: '',
      timestamp: new Date().toISOString(),
    };
    let status: number;
    // Common Exception 타입의 에러일 때
    if (exception instanceof Exception) {
      const data = exception.data;
      if (data.errors) errorRes.errors = data.errors.map((e) => e.message).flat();
      else errorRes.errors = [exception.message];
      if (exception.code >= 600) status = 400;
      else status = exception.code;
    }
    // Nest HttpException 타입의 에러일 때
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      errorRes.errors = [exception.message];
    }
    // Error 타입의 에러일 때
    else {
      status = 500;
      errorRes.errors = [exception.message];
    }
    // 최종 에러 응답 객체
    errorRes.path = request.path;
    response.status(status).json(errorRes);
    Logger.error(`[${errorRes.timestamp}][${request.ip}] ${errorRes.errors}`);
  }
}
