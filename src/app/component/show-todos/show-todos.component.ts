import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from '../../service/data.service';
import {ToDo} from '../../model/to-do';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-todos',
  standalone: true,
  imports: [],
  templateUrl: './show-todos.component.html',
  styleUrl: './show-todos.component.css'
})
export class ShowTodosComponent implements OnInit {
  todos?: ToDo[];
  todo?: ToDo;
  todosCompletedFalse: ToDo[] =[];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void{
    this.dataService.getTodos().subscribe((data: ToDo[]) =>{
      this.todos = data;
    });
    this.dataService.getTodo(5).subscribe((data: ToDo) =>{
      this.todo = data;
    });
    this.dataService.getTodosByCompleted().subscribe((data: ToDo[]) =>{
      this.todosCompletedFalse = data;
    });
  }
}
