import { Injectable } from '@nestjs/common';
import { GetProjectDto } from './dto/get-project.dto';
/* This is the service that will be used by the controller.
Normally should use a repository, but for the example we will use fetch.
*/
@Injectable()
export class ProjectService {

  async findAll() : Promise<GetProjectDto[]>{
    const value = await fetch(
      'http://127.0.0.1:8090/api/collections/project/records?page=1&perPage=30',
    ).then(response => response.json()).then(data => data?.items);
    
    return value.map((item) => {
      return {
        id: item.id,
        name: item.name
      }
    });
  }


}
