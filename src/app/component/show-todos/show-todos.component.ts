import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {DataService} from '../../service/data.service';
import {ToDo} from '../../model/to-do';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-show-todos',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './show-todos.component.html',
  styleUrl: './show-todos.component.css'
})
export class ShowTodosComponent implements OnInit, OnDestroy {
  todos?: ToDo[];
  todo$!: Observable<ToDo>;
  todosCompletedFalse$?: Observable<ToDo[]>;
  private sub: Subscription = new Subscription();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void{
    this.sub = this.dataService.getTodos().subscribe((data: ToDo[]) =>{
      this.todos = data;
    });
    this.todo$ = this.dataService.getTodo(5);
    this.todosCompletedFalse$= this.dataService.getTodosByCompleted();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
