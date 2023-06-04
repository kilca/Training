import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TaskModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
