import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedJobsBoardComponent } from './interested-jobs-board.component';

describe('InterestedJobsBoardComponent', () => {
  let component: InterestedJobsBoardComponent;
  let fixture: ComponentFixture<InterestedJobsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterestedJobsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestedJobsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
