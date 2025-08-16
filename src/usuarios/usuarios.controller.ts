import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
//import { Aplicacion } from 'src/aplicacion/entities/aplicacion.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  createUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createUsuario(createUsuarioDto);
  }

  @Get()
  findAllUsuarios(@Query('email') email?: string): Usuario[] {
    return this.usuarioService.findAllUsuarios(email);
  }

  @Get(':id')
  findOneUsuarioById(@Param('id') id: string) {
    return this.usuarioService.findOneUsuarioById(Number(id));
  }

  @Patch(':id')
  updateUsuario(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.updateUsuario(Number(id), updateUsuarioDto);
  }

  @Delete(':id')
  removeUsuario(@Param('id') id: string) {
    return this.usuarioService.removeUsuario(Number(id));
  }
  @Patch('aplicaciones/:idApp')
  downLoadApp(
    @Param('idApp') idApp: string,

    @Body() usuario: Usuario,
  ): Usuario {
    return this.usuarioService.downLoadApp(Number(idApp), usuario);
  }
}
