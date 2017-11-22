import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';

const TASKS: Array<Task> = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
  { id: 5, title: "Task 5" },
  { id: 6, title: "Task 6" },
  { id: 7, title: "Task 7" },
  { id: 8, title: "Task 8" }
];

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  public tasks;

  ngOnInit() {
    this.tasks = TASKS;
  }
}
