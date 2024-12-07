import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUsuarioComponent } from './task-usuario.component';

describe('TaskUsuarioComponent', () => {
  let component: TaskUsuarioComponent;
  let fixture: ComponentFixture<TaskUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
