import { Component } from '@angular/core';

interface Task { title: string; done: boolean; }

@Component({
  selector: 'app-task-list',
  standalone: true,
  template: `
    <h1>Minhas tarefas</h1>
    <ul>
      <li *ngFor="let task of tasks">
        <label><input type="checkbox" [(ngModel)]="task.done"> {{ task.title }}</label>
      </li>
    </ul>
  `,
})
export class TaskListComponent {
  tasks: Task[] = [{ title: 'Estudar Angular', done: false }];
}
