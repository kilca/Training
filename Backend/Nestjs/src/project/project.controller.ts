import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { GetProjectDto } from './dto/get-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  
  @Get()
  findAll() : Promise<GetProjectDto[]> {
    return this.projectService.findAll();
  }
}
