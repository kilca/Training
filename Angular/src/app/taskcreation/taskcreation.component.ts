import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-creation',
  templateUrl: './taskcreation.component.html',
  styleUrls: ['./taskcreation.component.css']
})
export class TaskcreationComponent {

  @Output() refreshTask = new EventEmitter<void>();
  projectId: string | null = null;
  name: string = '';

  constructor(private service: AppService) {}

  createTask() {
    if (this.projectId) {
      this.service.createTask(this.projectId,this.name).subscribe(() => {
        this.refreshTask.emit();
      });
    }
  }
}
