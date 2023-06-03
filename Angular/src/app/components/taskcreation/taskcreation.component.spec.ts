import { ComponentFixture, TestBed } from '@angular/core/testing';
//[(ngModel)]="name"
import { TaskcreationComponent } from './taskcreation.component';

describe('TaskcreationComponent', () => {
  let component: TaskcreationComponent;
  let fixture: ComponentFixture<TaskcreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskcreationComponent]
    });
    fixture = TestBed.createComponent(TaskcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
