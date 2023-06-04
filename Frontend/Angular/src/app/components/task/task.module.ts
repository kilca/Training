import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { TaskComponent } from './task.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TaskComponent
],
  imports: [
    BrowserModule,FormsModule
  ],
  exports: [TaskComponent],
  providers: [AppService]
})
export class TaskModule { }
