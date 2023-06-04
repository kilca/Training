import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { BrowserModule } from '@angular/platform-browser';
import { TaskcreationComponent } from '../../components/taskcreation/taskcreation.component';
import { TaskpageComponent } from './taskpage.component';
import { TaskComponent } from '../../components/task/task.component';
import { TaskModule } from '../../components/task/task.module';
import {RouterModule} from '@angular/router';
import { TaskcreationModule } from '../../components/taskcreation/taskcreation.module';

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
