import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsContainerComponent } from './channels-container.component';

describe('ChannelsContainerComponent', () => {
  let component: ChannelsContainerComponent;
  let fixture: ComponentFixture<ChannelsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
