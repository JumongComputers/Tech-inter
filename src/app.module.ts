import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
// import { TodosResolver } from './todos/todos.resolver';
import { TodosModule } from './todos/todos.module';

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error('MONGO_URI is not defined');
}

@Module({
  imports: [MongooseModule.forRoot(mongoUri), TodosModule],

  controllers: [AppController],
  // providers: [TodosResolver],
})
export class AppModule {}
