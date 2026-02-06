import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new this.todoModel(createTodoDto);
    return todo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById(id).lean().exec();

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoModel
      .findByIdAndUpdate(id, updateTodoDto, { new: true })
      .lean()
      .exec();

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  async remove(id: string): Promise<{ message: string }> {
    const todo = await this.todoModel.findByIdAndDelete(id).exec();

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return { message: 'Todo deleted successfully' };
  }
}
