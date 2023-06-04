import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { TaskpageComponent } from './pages/taskpage/taskpage.component';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { TaskcreationComponent } from './components/taskcreation/taskcreation.component';
import { TaskComponent } from './components/task/task.component';
import { TaskModule } from './components/task/task.module';
import { TaskpageModule } from './pages/taskpage/taskpage.module';
import { TaskcreationModule } from './components/taskcreation/taskcreation.module';
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
