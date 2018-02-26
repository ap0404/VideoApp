import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitdetailComponent } from './gitdetail.component';

describe('GitdetailComponent', () => {
  let component: GitdetailComponent;
  let fixture: ComponentFixture<GitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
