import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMnyUsersComponent } from './how-mny-users.component';

describe('HowMnyUsersComponent', () => {
  let component: HowMnyUsersComponent;
  let fixture: ComponentFixture<HowMnyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowMnyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMnyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
