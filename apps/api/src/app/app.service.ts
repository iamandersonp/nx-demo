import { Injectable } from '@nestjs/common';
import { Todo } from '@my-org/data';

@Injectable()
export class AppService {
  todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
    { title: 'Todo 3' },
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New Todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
