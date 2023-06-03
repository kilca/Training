import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { BrowserModule } from '@angular/platform-browser';
import { TaskcreationComponent } from '../taskcreation/taskcreation.component';
import { TaskpageComponent } from './taskpage.component';
import { TaskComponent } from '../task/task.component';
import { TaskModule } from '../task/task.module';
import {RouterModule} from '@angular/router';
import { TaskcreationModule } from '../taskcreation/taskcreation.module';

@NgModule({
    declarations: [
    TaskpageComponent
],
  imports: [
    BrowserModule,FormsModule,RouterModule,TaskModule,TaskcreationModule
  ],
  providers: [AppService],
  bootstrap: [TaskComponent]
})
export class TaskpageModule { }
