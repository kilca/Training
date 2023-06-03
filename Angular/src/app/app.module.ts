import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { TaskpageComponent } from './taskpage/taskpage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { TaskcreationComponent } from './taskcreation/taskcreation.component';
import { TaskComponent } from './task/task.component';
import { TaskModule } from './task/task.module';
import { TaskpageModule } from './taskpage/taskpage.module';
import { TaskcreationModule } from './taskcreation/taskcreation.module';
@NgModule({
  declarations: [
    AppComponent,
    ProjectpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:ProjectpageComponent},
      {path: 'project/:id', component: TaskpageComponent},
    ]),
    HttpClientModule,
    RouterTestingModule,
    TaskModule,
    TaskpageModule,
    TaskcreationModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
