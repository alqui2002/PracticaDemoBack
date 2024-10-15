import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ProtegidaService } from './protegida.service';
import { ProtegidaController } from './protegida.controller';
import { JwtAuthMiddleware } from 'src/middlewares/jwt-auth.middleware';

@Module({
  controllers: [ProtegidaController],
  providers: [ProtegidaService],
})
export class ProtegidaModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtAuthMiddleware) // Aplica el middleware de autenticación JWT
      .forRoutes(ProtegidaController); // Protege todas las rutas de este controlador
  }
}
