import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('API Appstore')
    .setDescription(
      'Esta app gestiona aplicaciones y permite a un usuario descargar aplicaciones',
    )
    .setVersion('3.0')
    .addTag('app-store-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
