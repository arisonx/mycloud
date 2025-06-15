import { HttpException } from "@nestjs/common";

export class HttpExceptionError extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
