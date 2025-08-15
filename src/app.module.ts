import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionModule } from './aplicacion/aplicacion.module';

@Module({
  imports: [AplicacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
