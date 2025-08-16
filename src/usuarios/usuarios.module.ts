import { Module } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuarioService, AplicacionService],
})
export class UsuariosModule {}
