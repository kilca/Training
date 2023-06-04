import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.css']
})
export class TaskpageComponent {

  tasks: any[] = [];
  update: boolean = true;
  projectId: string | null = null;

  constructor(private route: ActivatedRoute, private service: AppService){

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
      this.updateTasks();
    });
  }

  updateTasks() {
    if (this.projectId) {
      this.service.getTasks(this.projectId).subscribe((response : any) => {
        this.tasks = response?.items;
      });
    }
  }

}
