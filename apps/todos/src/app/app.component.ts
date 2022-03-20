import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  todos: Todos[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Todos[]>('/api/todos')
      .subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/todos', {}).subscribe(() => {
      this.fetch();
    });
  }
}
