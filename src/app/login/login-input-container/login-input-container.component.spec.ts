import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInputContainerComponent } from './login-input-container.component';

describe('LoginInputContainerComponent', () => {
  let component: LoginInputContainerComponent;
  let fixture: ComponentFixture<LoginInputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInputContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
