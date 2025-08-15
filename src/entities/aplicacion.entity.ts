import { SistemaOperativo } from '../enum/sistemaoperativo';

export class Aplicacion {
  id: number;
  nombre: string;
  precio: number;
  sistemaOperativo: SistemaOperativo;
  calificacion: number = 0;
  tamaño: number;
  version: string;
  descargas: number;

  constructor(
    id: number,
    nombre: string,
    precio: number,
    sistemaOperativo: SistemaOperativo,
    //calificacion: number,
    tamaño: number,
    version: string,
    //descargas: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.sistemaOperativo = sistemaOperativo;
    this.tamaño = tamaño;
    this.version = version;
    this.descargas = 0;
  }
}
