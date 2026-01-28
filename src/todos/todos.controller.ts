import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
// import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@ApiTags('Todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto); // ✅ pass DTO, not string
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<CreateTodoDto>) {
    return this.todoService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
