import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPostComponent } from './approved-post.component';

describe('ApprovedPostComponent', () => {
  let component: ApprovedPostComponent;
  let fixture: ComponentFixture<ApprovedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
