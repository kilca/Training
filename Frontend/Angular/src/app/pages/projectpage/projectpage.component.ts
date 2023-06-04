import { Component } from '@angular/core';
import { Project } from '../../../model/project.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent {
  projects: Project[] = [];

  constructor(private service: AppService) {}

  async ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.service.getProjects().subscribe((response : any) => {
      this.projects = response?.items as Project[];
    });
  }

  public trackItem (index: number, item: Project) {
    return item.id;
  }
}
