import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TaskDetailComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Learn Angular', description: 'Study the basics of Angular' },
    { id: 2, title: 'Build an App', description: 'Create a task manager app' },
    { id: 3, title: 'Build an Project', description: 'Create a project manger app' },
  ];

  selectedTask: any;

  selectTask(task: any) {
    this.selectedTask = task;
  }
}
