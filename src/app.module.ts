import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error('MONGO_URI is not defined');
}

@Module({
  imports: [MongooseModule.forRoot(mongoUri)],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
