import { Component } from '@angular/core';

interface Todos {
  title: string;
}
@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todos';

  todos: Todos[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ];

  addTodo() {
    this.todos.push({
      title: `Todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
