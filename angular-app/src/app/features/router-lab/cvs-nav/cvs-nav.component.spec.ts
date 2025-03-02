import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsNavComponent } from './cvs-nav.component';

describe('CvsNavComponent', () => {
  let component: CvsNavComponent;
  let fixture: ComponentFixture<CvsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvsNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
