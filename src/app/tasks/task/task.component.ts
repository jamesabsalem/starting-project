import { Component, inject, Input } from '@angular/core';
import { Task } from './Task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    return this.tasksService.removeTask(this.task.id);
  }
}
