import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
// Import firebase-admin
import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set the config options
  const serviceAccount : ServiceAccount = require(__dirname+"/perdidocs-aca5b-firebase-adminsdk-vvb7n-0a76249d37.json");
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://perdidocs-aca5b.firebaseio.com",
  });
  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({skipMissingProperties : true, whitelist : true}));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
