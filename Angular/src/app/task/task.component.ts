import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;
  @Output() refreshTask = new EventEmitter<void>();

  isEditing: boolean = false;
  inputName: string = '';
  inputDone: boolean = false;

  constructor(private service: AppService) {}

  ngOnInit() {
    const { name, done } = this.task;
    this.inputName = name ?? '';
    this.inputDone = done ?? false;
  }

  handleSpanClick() {
    this.isEditing = true;
  }

  handleCheckboxChange() {
    this.updateTask({ id: this.task.id, name: this.inputName, done: !this.inputDone });
    this.inputDone = !this.inputDone;
  }

  handleInputBlur() {
    this.isEditing = false;
    this.updateTask({ id: this.task.id, name: this.inputName, done: this.inputDone });
  }

  deleteTask(task : Task) {
    this.service.deleteTask(this.task.id).subscribe(() => {
      this.refreshTask.emit();
    });
  }

  updateTask(task: Task) {
    this.service.updateTask(this.task).subscribe(() => {
      this.refreshTask.emit();
    });
  }

}
