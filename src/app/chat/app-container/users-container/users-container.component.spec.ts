import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersContainerComponent } from './users-container.component';

describe('UsersContainerComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
