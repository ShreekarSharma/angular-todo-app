import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{this.todos = todos});
  }
  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }
  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
