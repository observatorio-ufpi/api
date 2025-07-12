import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Observatório do Projeto - API de Educação')
    .setDescription(
      'API para consulta de dados educacionais e indicadores financeiros da educação no Piauí. ' +
        'Esta API fornece dados sobre matrículas, escolas, professores, indicadores financeiros e muito mais.',
    )
    .setVersion('1.0.0')
    .addTag(
      'Educação Básica',
      'Endpoints relacionados aos dados da educação básica',
    )
    .addTag(
      'Indicadores',
      'Endpoints para indicadores educacionais e financeiros',
    )
    .addTag('Pesquisas', 'Endpoints para consulta de pesquisas educacionais')
    .addServer('http://localhost:3003', 'Servidor de Desenvolvimento')
    .addServer('https://api.observatorio.ufpi.br', 'Servidor de Produção')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Observatório - API Docs',
    customfavIcon: '/favicon.ico',
    customCss: `
      .swagger-ui .topbar { display: none }
      .swagger-ui .info .title { color: #2c3e50; }
      .swagger-ui .info { margin: 50px 0; }
      .swagger-ui .scheme-container { background: #f8f9fa; padding: 15px; border-radius: 5px; }
    `,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      tryItOutEnabled: true,
    },
  });

  await app.listen(3003);
}
bootstrap();
