import { Exception } from '@/common/exception/Exception';
import { IErrorResponse } from '@/common/exception/IErrorResponse';
import { formatDate } from '@/common/utils/format/formatDate';
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

    console.error(exception);

    const errorRes: IErrorResponse = {
      errors: [],
      path: '',
      timestamp: formatDate(new Date()),
    };
    let status: number;
    // Common Exception 타입의 에러일 때
    if (exception instanceof Exception) {
      const data = exception.data;
      if (data !== undefined && data.errors !== undefined) errorRes.errors = data.errors.map((e) => e.message).flat();
      else errorRes.errors = [exception.message];
      if (exception.code >= 600) status = 400;
      else status = exception.code;
    }
    // Nest HttpException 타입의 에러일 때
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const response = exception.getResponse();
      if (typeof response === 'object')
        errorRes.errors = Array.isArray(response['message']) ? [...response['message']] : [response['message']];
      else errorRes.errors = [exception.message];
    }
    // Error 타입의 에러일 때
    else {
      status = 500;
      errorRes.errors = [exception.message];
    }
    // 최종 에러 응답 객체
    errorRes.path = request.path;
    response.status(status).json(errorRes);
    Logger.error(`[${errorRes.timestamp}][${request.ip}][${errorRes.path}] ${errorRes.errors}`);
  }
}
