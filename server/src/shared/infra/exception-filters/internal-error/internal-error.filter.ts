import { InternalServerErrorException } from "@nestjs/common";
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { FastifyReply } from "fastify";

@Catch(InternalServerErrorException)
export class InternalErrorFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    response.status(500).send({
      statusCode: 500,
      error: "Internal Server Error",
      message: exception.message,
    });
  }
}
