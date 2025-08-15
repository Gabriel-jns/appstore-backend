import { Aplicacion } from '../entities/aplicacion.entity';

export class Usuario {
  id: number;
  nombreUsuario: string;
  email: string;
  password: string;
  aplicacionesDescargadas: Aplicacion[];

  constructor(
    id: number,
    nombreUsuario: string,
    email: string,
    password: string,
    aplicacionesDescargadas: Aplicacion[],
  ) {
    this.id = id;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.password = password;
    this.aplicacionesDescargadas = aplicacionesDescargadas;
  }
}
