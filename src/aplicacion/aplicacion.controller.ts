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
import { AplicacionService } from './aplicacion.service';
import { CreateAplicacioneDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacioneDto } from './dto/update-aplicacion.dto';
import { SistemaOperativo } from 'src/enum/sistemaoperativo';
import { Aplicacion } from 'src/entities/aplicacion.entity';

@Controller('aplicaciones')
export class AplicacionController {
  constructor(private readonly aplicacionService: AplicacionService) {}

  @Post()
  createApp(@Body() createAplicacioneDto: CreateAplicacioneDto) {
    return this.aplicacionService.createApp(createAplicacioneDto);
  }

  @Get()
  findAllApps(
    @Query('nombre') nombre?: string,
    @Query('so') so?: SistemaOperativo,
  ): Aplicacion[] | undefined {
    if (nombre && so) {
      return this.aplicacionService.findAllApps(nombre, so);
    }
    return this.aplicacionService.findAllApps();
  }

  @Get(':id')
  findOneAppById(@Param('id') id: string) {
    return this.aplicacionService.findOneAppById(Number(id));
  }

  @Patch(':id')
  updateApp(
    @Param('id') id: string,
    @Body() updateAplicacioneDto: UpdateAplicacioneDto,
  ) {
    return this.aplicacionService.updateApp(Number(id), updateAplicacioneDto);
  }

  @Delete(':id')
  removeApp(@Param('id') id: string) {
    return this.aplicacionService.removeApp(Number(id));
  }
}
