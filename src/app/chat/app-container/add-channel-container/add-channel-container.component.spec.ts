import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelContainerComponent } from './add-channel-container.component';

describe('AddChannelContainerComponent', () => {
  let component: AddChannelContainerComponent;
  let fixture: ComponentFixture<AddChannelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChannelContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChannelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
