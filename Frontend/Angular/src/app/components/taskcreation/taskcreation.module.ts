import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { BrowserModule } from '@angular/platform-browser';
import { TaskcreationComponent } from './taskcreation.component';


@NgModule({
    declarations: [
        TaskcreationComponent
    ],
  imports: [
    BrowserModule,FormsModule
  ],
  exports: [TaskcreationComponent],
  providers: [AppService]
})
export class TaskcreationModule { }
