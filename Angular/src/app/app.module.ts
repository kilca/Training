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
@NgModule({
  declarations: [
    AppComponent,
    ProjectpageComponent,
    TaskcreationComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:ProjectpageComponent},
      {path: 'project/:id', component: TaskpageComponent},
    ]),
    HttpClientModule,
    RouterTestingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
