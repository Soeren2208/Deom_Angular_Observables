import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDo} from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private todoURL = 'https://jsonplaceholder.typicode.com/todos';


  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.todoURL);
  }

  getTodo(id: number): Observable<ToDo>{
    return this.http.get<ToDo>(`${this.todoURL}/${id}`);
  }

  getTodosByCompleted(): Observable<any>{
    const params = new HttpParams({
      fromObject:{
        completed: false
      }
    });
    return this.http.get(this.todoURL, {params});
  }
}
