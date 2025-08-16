import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAplicacioneDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacioneDto } from './dto/update-aplicacion.dto';
import { Aplicacion } from 'src/entities/aplicacion.entity';
import { SistemaOperativo } from 'src/enum/sistemaoperativo';

@Injectable()
export class AplicacionService {
  aplicaciones: Aplicacion[] = [
    new Aplicacion(1, 'Uber', 3, SistemaOperativo.ANDROID, 10, '2.0'),
  ];

  createApp(nuevaAplicacion: CreateAplicacioneDto) {
    const aplicacionCreada: Aplicacion = new Aplicacion(
      this.aplicaciones.length + 1,
      nuevaAplicacion.nombre,
      nuevaAplicacion.precio,
      nuevaAplicacion.sistemaOperativo,
      nuevaAplicacion.tamaño,
      nuevaAplicacion.version,
    );
    this.aplicaciones.push(aplicacionCreada);
    return aplicacionCreada;
  }

  findAllApps(
    nombre?: string,
    so?: SistemaOperativo,
  ): Aplicacion[] | undefined {
    if (!nombre && !so) {
      return this.aplicaciones;
    } else if (nombre) {
      return this.aplicaciones.filter((app: Aplicacion) =>
        app.nombre.includes(nombre),
      );
    } else if (so) {
      return this.aplicaciones.filter(
        (app: Aplicacion) => app.sistemaOperativo === so,
      );
    }
  }

  findOneAppById(id: number): Aplicacion | undefined {
    const resultado = this.buscarApp(
      (elemento: Aplicacion) => elemento.id === id,
    );
    if (resultado) {
      return resultado;
    }
    throw new NotFoundException('Esta aplicacion no existe');
  }

  updateApp(
    id: number,
    aplicacionActualizada: UpdateAplicacioneDto,
  ): Aplicacion {
    const aplicacion = this.aplicaciones.find(
      (app: Aplicacion) => app.id === id,
    );
    if (!aplicacion) {
      throw new NotFoundException('Aplicacion no encontrada');
    }
    if (aplicacionActualizada.version) {
      aplicacion.version = aplicacionActualizada.version;
    }
    if (aplicacionActualizada.precio) {
      aplicacion.precio = aplicacionActualizada.precio;
    }
    if (aplicacionActualizada.tamaño) {
      aplicacion.tamaño = aplicacionActualizada.tamaño;
    }
    return aplicacion;
  }

  removeApp(id: number): Aplicacion[] {
    const aplicacion = this.aplicaciones.find(
      (app: Aplicacion) => app.id === id,
    );
    if (!aplicacion) {
      throw new NotFoundException('Aplicacion no encontrada');
    }

    return this.aplicaciones.filter((app: Aplicacion) => app.id !== id);
  }

  buscarApp(buscar: (elemento: Aplicacion) => boolean): Aplicacion | undefined {
    for (let i: number = 0; i < this.aplicaciones.length; i++) {
      const elementoEnBusqueda: Aplicacion = this.aplicaciones[i];
      const elementoEncontrado: boolean = buscar(elementoEnBusqueda);
      if (elementoEncontrado) {
        return elementoEnBusqueda;
      }
    }
    return undefined;
  }
}
