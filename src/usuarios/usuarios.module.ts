import { Module } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { UsuarioController } from './usuarios.controller';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, AplicacionService],
})
export class UsuariosModule {}
