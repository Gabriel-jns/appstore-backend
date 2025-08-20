import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Aplicacion } from 'src/entities/aplicacion.entity';
import { AplicacionService } from 'src/aplicacion/aplicacion.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly aplicacionService: AplicacionService) {}

  usuarios: Usuario[] = [
    new Usuario(
      1,
      'UsuarioPrueba',
      'usuarioprueba@mail.com',
      'usuario2025',
      [],
    ),
  ];

  createUsuario(createUsuarioDto: CreateUsuarioDto): Usuario {
    const nuevoUsuario: Usuario = new Usuario(
      this.usuarios.length + 1,
      createUsuarioDto.nombreUsuario,
      createUsuarioDto.email,
      createUsuarioDto.password,
      [],
    );
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  findAllUsuarios(email?: string): Usuario[] {
    const usuariosRegistrados = this.usuarios.filter(
      (usuario: Usuario) => usuario.email === email,
    );
    if (email) {
      return usuariosRegistrados;
    }
    return this.usuarios;
  }

  findOneUsuarioById(id: number) {
    const usuarioEncontrado = this.usuarios.find(
      (usuario: Usuario) => usuario.id === id,
    );
    if (!usuarioEncontrado) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuarioEncontrado;
  }

  updateUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto): Usuario {
    const usuarioExistente = this.usuarios.find(
      (usuario: Usuario) => usuario.id === id,
    );
    if (!usuarioExistente) {
      throw new NotFoundException('Usuario no encontrado');
    }
    if (updateUsuarioDto.email) {
      usuarioExistente.email = updateUsuarioDto.email;
    }
    if (updateUsuarioDto.password) {
      usuarioExistente.password = updateUsuarioDto.password;
    }
    return usuarioExistente;
  }

  removeUsuario(id: number): Usuario[] {
    const usuarioExiste = this.usuarios.find(
      (usuario: Usuario) => usuario.id === id,
    );
    if (!usuarioExiste) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return this.usuarios.filter((usuario: Usuario) => usuario.id !== id);
  }
  downLoadApp(
    idApp: number,

    usuarioId: number,
  ): Usuario {
    const usuarioExist = this.usuarios.find(
      (user: Usuario) => user.id === usuarioId,
    );
    if (!usuarioExist) {
      throw new NotFoundException('Usuario no encontrado');
    }
    const aplicacionExistente = this.aplicacionService.aplicaciones.find(
      (app: Aplicacion) => app.id === idApp,
    );
    if (!aplicacionExistente) {
      throw new NotFoundException('Aplicacion no existe');
    }
    const aplicacionDescargada = usuarioExist.aplicacionesDescargadas.find(
      (app: Aplicacion) => app.id === idApp,
    );
    if (aplicacionDescargada) {
      throw new BadRequestException('Aplicacion ya descargada');
    }
    if (aplicacionExistente && usuarioExist && !aplicacionDescargada) {
      usuarioExist.aplicacionesDescargadas.push(aplicacionExistente);
      aplicacionExistente.descargas = aplicacionExistente.descargas + 1;
    }

    return usuarioExist;
  }
}
