import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsBoardComponent } from './jobs-board.component';

describe('JobsBoardComponent', () => {
  let component: JobsBoardComponent;
  let fixture: ComponentFixture<JobsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
