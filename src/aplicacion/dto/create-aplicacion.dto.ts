import { SistemaOperativo } from 'src/enum/sistemaoperativo';

export class CreateAplicacioneDto {
  nombre: string;
  precio: number;
  tamaño: number;
  sistemaOperativo: SistemaOperativo;
  version: string;

  constructor(
    nombre: string,
    precio: number,
    tamaño: number,
    sistemaOperativo: SistemaOperativo,
    version: string,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.tamaño = tamaño;
    this.sistemaOperativo = sistemaOperativo;
    this.version = version;
  }
}
