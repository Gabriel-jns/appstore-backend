import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionModule } from './aplicacion/aplicacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [AplicacionModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
